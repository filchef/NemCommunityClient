"use strict";

define(function(require) {
    var $ = require('jquery');
    var Ractive = require('ractive');
    var Mustache = require('mustache');
    var tooltipster = require('tooltipster');

    var NccModal = Ractive.extend({
        template: '#modal-template',
        isolated: true,
        open: function() {
            this.set('isActive', true);
            $('.active.modal-container').focus().find('.modal').css({
                left: 'auto',
                top: 'auto'
            });
        },
        close: function() {
            this.set('isActive', false);
        },
        lockAction: function() {
            this.set('processing', true);
        },
        unlockAction: function() {
            this.set('processing', false);
        },
        init: function() {
            this.on({
                closeModal: function() {
                    this.close();
                },
                modalContainerClick: function(e) {
                    if (e.node === e.original.target) { //clicked outside modal
                        this.fire('closeModal');
                    }
                },
                modalContainerKeyup: function(e) {
                    if (e.original.keyCode === 27 || (this.get('closeOnEnter') && e.original.keyCode === 13)) {
                        this.fire('closeModal');
                    }
                },
                confirm: function(e, action) {
                    var callbacks = this.get('callbacks');
                    var result;
                    if (callbacks && callbacks[action]) {
                        result = callbacks[action]();
                    }
                    if (result !== false) {
                        this.close();
                    }
                },
                submit: function() {
                    var submit = this.get('submit');
                    var values = this.get('values');
                    var result;
                    if (submit) {
                        result = submit.call(this, values, this.close.bind(this));
                    }
                    if (result !== false) {
                        this.close();
                    }
                },
                inputKeyup: function(e) {
                    if (e.original.keyCode === 13) {
                        this.fire('submit');
                    }
                }
            });
        }
    });

    var NccRactive = Ractive.extend({
        el: document.body,
        template: '#template',
        consts: {
            fractionalDigits: 2,
            decimalMark: '.',
            txesPerPage: 25,
            blocksPerPage: 25,
            defaultLanguage: 'en'
        },
        getUrlParam: function(name) {
            var qStr = location.search.substring(1, location.search.length);
            var queries = qStr.split('&');
            var temp, key, value;
            for (var i = 0; i < queries.length; i++) {
                temp = queries[i].split('=');
                if (temp[0] && temp[1]) {
                    key = decodeURIComponent(temp[0]);
                    value = decodeURIComponent(temp[1]);
                    if (key === name) {
                        return value;
                    }
                }
            }
        },
        toQueryString: function(params) {
            var queryString = [];
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
                }
            }
            if (queryString.length === 0) {
                return '';
            } else {
                return '?' + queryString.join('&');
            }
        },
        components: {
            errorModal: NccModal,
            messageModal: NccModal,
            confirmModal: NccModal,
            inputModal: NccModal,
            sendNemModal: NccModal,
            clientInfoModal: NccModal,
            transactionDetailsModal: NccModal,
            unclosableMessageModal: NccModal
        },
        computed: {
            allAccounts: 'this.prepend([${wallet.primaryAccount}], ${wallet.otherAccounts})',
            nisStatus: function() {
                if (this.get('status.nisUnavailable')) {
                    return this.get('texts.common.nisStatus.unavailable');
                }

                if (!this.get('status.nodeBooted')) {
                    return this.get('texts.common.nisStatus.notBooted');
                }

                if (!this.get('nis.nodeMetaData.lastBlockBehind')) {
                    return '';
                }

                var daysBehind = Math.floor(this.get('nis.nodeMetaData.lastBlockBehind') / (60 * 1440));
                var daysBehindText;
                switch (daysBehind) {
                    case 0:
                        daysBehindText = this.get('texts.common.nisStatus.daysBehind.0');
                        break;

                    case 1:
                        daysBehindText = this.get('texts.common.nisStatus.daysBehind.1');
                        break;

                    default:
                        daysBehindText = this.fill(this.get('texts.common.nisStatus.daysBehind.many'), daysBehind);
                        break;
                }

                return this.fill(this.get('texts.common.nisStatus.synchronizing'), this.get('nis.nodeMetaData.nodeBlockChainHeight'), daysBehindText);
            }
        },
        ajaxError: function(jqXHR, textStatus, errorThrown) {
            this.showError(textStatus, errorThrown);
        },
        apiPath: function(api) {
            return '../api/' + api;
        },
        checkSuccess: function(data, silent, settings) {
            var self = this;
            function showError(faultId, error) {
                if (!silent) {
                    self.showError(faultId);
                }
                if (settings && settings.altFailCb) {
                    settings.altFailCb(faultId, error);
                }
                return false;
            }

            if (undefined !== data.error) {
                switch (data.status) {
                    case 200:
                        break;

                    case 601: // NODE_ALREADY_BOOTED
                        silent = true;

                    default:
                        return showError(data.status);
                }
            }

            return true;
        },
        _ajaxRequest: function(type, api, requestData, successCb, settings, silent) {
            var self = this;
            successCb = successCb || function() {};

            // set the dataType to 'text' instead of 'json' because  NCC will return "" (empty string)
            // from void functions, but JQuery treats this as invalid JSON
            var s = {
                contentType: 'application/json',
                dataType: 'text',
                type: type,
                data: requestData ? JSON.stringify(requestData) : undefined,
                error: function (jqXHR, textStatus, errorThrown) {
                    // first check the success (in case this is a new API)
                    var data = jqXHR.responseText ? $.parseJSON(jqXHR.responseText) : {};
                    if (!self.checkSuccess(data, silent, settings))
                        return;

                    // since we are in an error callback, handle the error as an unknown ajax error
                    return silent ? [] : self.ajaxError(jqXHR, textStatus, errorThrown);
                },
                success: function(data) {
                    // if the data is an empty string, emulate original NCC behavior by returning { ok: 1 }
                    if (!data) {
                        successCb({ ok: 1 });
                        return;
                    }

                    // otherwise, parse the json check the success (for legacy API handling)
                    var parsedData = $.parseJSON(data);
                    if (self.checkSuccess(parsedData, silent, settings)) {
                        successCb(parsedData);
                    }
                }
            };
            $.extend(s, settings);
            $.ajax(this.apiPath(api), s);
        },
        getRequest: function(api, successCb, settings, silent) {
            return this._ajaxRequest('get', api, undefined, successCb, settings, silent);
        },
        postRequest: function(api, requestData, successCb, settings, silent) {
            return this._ajaxRequest('post', api, requestData, successCb, settings, silent);
        },
        syncRequest: function(url) {
            return $.ajax(url, {
                async: false,
                type: 'GET',
                error: this.ajaxError
            }).responseText;
        },
        formatAddress: function(address) {
            if (address && typeof address === 'string') {
                return address.match(/.{1,6}/g).join('-').toUpperCase();
            } else {
                return address;
            }
        },
        restoreAddress: function(address) {
            return address.replace(/\-/g, '');
        },
        addThousandSeparators: function(num) {
            return num.toString(10).replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;');
        },
        minDigits: function(num, digits) {
            num = num.toString(10);
            while (num.length < digits) {
                num = '0' + num;
            }
            return num;
        },
        toNem: function(mNem) {
            return mNem / 1000000;
        },
        toMNem: function(nem) {
            return nem * 1000000;
        },
        formatCurrency: function(amount, dimTrailings) {
            var nem = this.addThousandSeparators(Math.floor(this.toNem(amount)));
            var mNem = this.minDigits(amount % 1000000, 6).substring(0, this.consts.fractionalDigits);

            if (dimTrailings) {
                var cutPos = mNem.length - 1;
                while (mNem.charAt(cutPos) === '0') {
                    cutPos--;
                }
                cutPos++;

                var clearPart = mNem.substring(0, cutPos);
                var dimmedPart = mNem.substring(cutPos, mNem.length);
                if (dimmedPart) {
                    if (clearPart) {
                        return nem + this.consts.decimalMark + clearPart + '<span class="dimmed">' + dimmedPart + '</span>';
                    } else {
                        return nem + '<span class="dimmed">' + this.consts.decimalMark + dimmedPart + '</span>';
                    }
                }
            }

            return nem + this.consts.decimalMark + mNem;
        },
        toDate: function(ms) {
            return new Date(ms);
        },
        formatDate: (function() {
            var shortMonths = {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec',
            };
            return function(date, format) {
                if (typeof date === 'number') {
                    date = this.toDate(date);

                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var year = date.getFullYear();
                    var hour = date.getHours();
                    var min = date.getMinutes();
                    var sec = date.getSeconds();

                    switch (format) {
                    case 'MM/dd/yy hh:mm:ss':
                        month = this.minDigits(month, 2);
                        day = this.minDigits(day, 2);
                        year = year.toString(10);
                        year = year.substring(year.length - 2, year.length);
                        hour = this.minDigits(hour, 2);
                        min = this.minDigits(min, 2);
                        sec = this.minDigits(sec, 2);
                        return month + '/' + day + '/' + year + ' ' + hour + ':' + min + ':' + sec;
                    case 'M dd, yyyy':
                        month = shortMonths[month];
                        day = this.minDigits(day, 2);
                        return month + ' ' + day + ', ' + year;
                    case 'M dd, yyyy hh:mm:ss':
                        month = shortMonths[month];
                        day = this.minDigits(day, 2);
                        hour = this.minDigits(hour, 2);
                        min = this.minDigits(min, 2);
                        sec = this.minDigits(sec, 2);
                        return month + ' ' + day + ', ' + year + ' ' + hour + ':' + min + ':' + sec;
                    }
                } else {
                    return date;
                }
            };
        })(),
        daysPassed: function(begin) {
            var now = new Date().getTime();
            var timespan = now - begin;
            var day = 1000*60*60*24;
            var days = timespan / day;
            var roundedDays = Math.round(days);
            return {
                days: days,
                roundedDays: roundedDays
            };
        },
        sortByTimeNewest: function(a, b) {
            if (a && b && a.timeStamp && b.timeStamp) {
                return b.timeStamp - a.timeStamp;
            } else {
                return 0;
            }
        },
        getModal: function(modalName) {
            return this.findComponent(modalName + 'Modal');
        },
        showModal: function(modalName) {
            this.getModal(modalName).open();
        },
        showError: function(errorId, message) {
            var modal = this.getModal('error');
            if (!message && typeof errorId === 'number') {
                message = this.get('texts.faults.' + errorId);
            }
            modal.set({
                errorId: errorId,
                message: message || 'Unknown error'
            });
            modal.open();
        },
        showMessage: function(title, message, closeCallback) {
            var modal = this.getModal('message');
            modal.set({
                modalTitle: title,
                message: message
            });
            modal.open();
            if (closeCallback) {
                var ob = modal.observe('isActive', function(newValue, oldValue) {
                    if (newValue === false) {
                        closeCallback();
                        ob.cancel();
                    }
                });
            }
        },
        showUnclosableMessage: function(title, message, runningEllipsis) {
            var modal = this.getModal('unclosableMessage');
            modal.set({
                modalTitle: title,
                message: message
            });
            if (runningEllipsis) {
                var ell = '';
                modal.runningEllipsis = setInterval(function() {
                    modal.set('runningEllipsis', ell);
                    if (ell.length < 3) {
                        ell += '.';
                    } else {
                        ell = '';
                    }
                }, 600);
            }
            modal.open();
        },
        closeUnclosableMessage: function() {
            var modal = this.getModal('unclosableMessage');
            if (modal.runningEllipsis) {
                clearInterval(modal.runningEllipsis);
                modal.runningEllipsis = null;
            }
            modal.close();

        },
        showConfirmation: function(title, message, callbacks, actions) {
            var modal = this.getModal('confirm');
            modal.set({
                modalTitle: title,
                message: message,
                callbacks: callbacks,
                actions: actions || [
                    {
                        action: 'no',
                        label: ncc.get('texts.modals.confirmDefault.no'),
                        cssClass: 'secondary'
                    },
                    {
                        action: 'yes',
                        label: ncc.get('texts.modals.confirmDefault.yes'),
                        cssClass: 'primary'
                    }
                ]
            });
            modal.open();
        },
        showInputForm: function(title, message, fields, initValues, submit, submitLabel, processingLabel) {
            var modal = this.getModal('input');
            modal.set({
                fields: null,
                values: null
            });

            modal.set({
                modalTitle: title,
                message: message,
                fields: fields,
                values: initValues,
                submit: submit,
                submitLabel: submitLabel,
                processingLabel: processingLabel
            });
            modal.open();
        },
        toggleOn: function(id) {
            var keypath = 'active.' + id;
            if (!this.get(keypath)) {
                this.set(keypath, true);
                var firstTime = true;
                var self = this;
                $(document).on('click.' + id, function(ev) {
                    if (firstTime) {
                        firstTime = false;
                        return;
                    }
                    //if (self.nodes[id] !== ev.target && !$.contains(self.nodes[id], ev.target)) {
                    self.toggleOff(id);
                    //}
                });
            }
        },
        toggleOff: function(id) {
            this.set('active.' + id, false);
            $(document).off('click.' + id);
        },
        prepend: function(args, array) {
            var a = array.slice(0);
            a.unshift.apply(a, args);
            return a;
        },
        updateNewer: function(updatedArr, currentArr, comparedProp) {
            if (currentArr && currentArr[0]) {
                var comparedValue = updatedArr[updatedArr.length - 1][comparedProp];
                
                for (var i = currentArr.length - 1; i >= 0; i--) {
                    if (currentArr[i][comparedProp] === comparedValue) {
                        break;
                    }
                }

                var nonDup = currentArr.slice(i + 1);
                var result = updatedArr.concat(nonDup);
                return result;
            } else {
                return updatedArr;
            }
        },
        processTransaction: function(tx, activeAccount) {
            if (!activeAccount) activeAccount = this.get('activeAccount.address');
            tx.isIncoming = tx.direction === 1 || tx.direction === 0;
            tx.isOutgoing = tx.direction === 2;
            tx.isSelf = tx.direction === 3;
            tx.formattedSender = this.formatAddress(tx.sender);
            tx.formattedRecipient = this.formatAddress(tx.recipient);
            tx.formattedFee = this.formatCurrency(tx.fee, true);
            tx.formattedAmount = this.formatCurrency(tx.amount, true);
            tx.formattedDate = this.formatDate(tx.timeStamp, 'M dd, yyyy hh:mm:ss');
            return tx;
        },
        processTransactions: function(transactions, activeAccount) {
            if (transactions) {
                if (!activeAccount) activeAccount = this.get('activeAccount.address');
                for (var i = 0; i < transactions.length; i++) {
                    this.processTransaction(transactions[i], activeAccount);
                }
            }
            return transactions;
        },
        processHarvestedBlock: function(block) {
            if (!block.message) block.message = 'Block #' + block.height;
            if (!block.hash) block.hash = block.blockHash.data;
            if (!block.timeStamp && block.fee !== 0) block.timeStamp = block.timeStamp;
            if (!block.fee && block.fee !== 0) block.fee = block.totalFee;

            block.formattedTime = this.formatDate(block.timeStamp, 'M dd, yyyy hh:mm:ss');
            block.formattedFee = this.formatCurrency(block.fee, true);
            return block;
        },
        processHarvestedBlocks: function(blocks) {
            for (var i = 0; i < blocks.length; i++) {
                this.processHarvestedBlock(blocks[i]);
            }
            return blocks;
        },
        processAccount: function(account) {
            account.formattedAddress = this.formatAddress(account.address);
            var currentAccount = this.get('activeAccount.address');

            if (account.transactions) {
            	account.transactions = this.processTransactions(account.transactions);
            }

            return account;
        },
        processWallet: function(wallet) {
            wallet.lastRefreshDate = this.toDate(wallet.lastRefresh).toString();
            wallet.daysPassed = this.daysPassed(wallet.lastRefresh);

            this.processAccount(wallet.primaryAccount);
            for (var i = 0; i < wallet.otherAccounts.length; i++) {
                this.processAccount(wallet.otherAccounts[i]);
            }

            return wallet;
        },
        globalSetup: function() {
            require(['draggable'], function() {
                $('.modal').draggable({
                    handle: '.modal-head'
                });
            });
        },
        loadPage: function(page, params, isBack, isInit) {
            var self = this;

            // We use require(string) instead of require(array, function) to make page loading process synchronous
            // require(string) needs dependencies to be loaded before being used
            // So we have to load all layout files and templates first
            var layouts = [];
            var loadLayout = function(layoutName) {
                require([layoutName], function(layout) {
                    layouts.unshift(layout);
                    require([layout.template], function() {
                        if (layout.parent) {
                            loadLayout(layout.parent);
                        } else {
                            replaceLayouts();
                        }
                    });
                });
            };

            var replaceLayouts = function() {
                var oldParams = ncc.get('params');
                var paramsChanged = JSON.stringify(oldParams) !== JSON.stringify(params);

                for (var i = 0; i < layouts.length; i++) {
                    var layout = layouts[i];
                    var keypath = 'layout.' + i;
                    var currentLayout = self.get(keypath);

                    if (paramsChanged || !currentLayout || (currentLayout.name !== layout.name)) {
                        var template = require(layout.template);
                        if (currentLayout && currentLayout.leave) {
                            $.each(currentLayout.leave, function() {
                                this.apply(currentLayout);
                            });
                        }

                        // Init
                        if (!layout.alreadyInit && layout.initOnce) {
                            layout.initOnce();
                            layout.alreadyInit = true;
                        }
                        if (layout.initEverytime) {
                            var abort = layout.initEverytime(params);
                            if (abort) return;
                        }

                        self.set(keypath, null);
                        self.partials[i] = template;
                        self.set(keypath, layout);

                        // Setup
                        if (!layout.alreadySetup && layout.setupOnce) {
                            layout.setupOnce();
                            layout.alreadySetup = true;
                        }
                        if (layout.setupEverytime) {
                            var abort = layout.setupEverytime(params);
                            if (abort) return;
                        }
                    }
                }

                self.globalSetup();

                // Clear the old layouts
                var currLayouts = self.get('layout');
                if (currLayouts && currLayouts.length) {
                    for (i = i + 1; i < currLayouts.length; i++) {
                        self.set('layout.' + i, null);
                    }
                }

                if (!isBack) {
                    var url = layouts[layouts.length - 1].url + (params? self.toQueryString(params) : location.search);
                    if (isInit) {
                        history.replaceState({ page: page, params: params }, 'entry', url);
                    } else {
                        history.pushState({ page: page, params: params }, null, url);
                    }
                }
                ncc.set('params', params);
            };

            loadLayout(page);
        },
        fill: function(template) {
            return Mustache.render(template, arguments);
        },
        init: function(options) {
            var self = this;

            require(['languages'], function(languages) {
                self.set('languages', languages);
                self.observe('settings.language', function(newValue) {
                    var d = new Date();
                    newValue = (d.getMonth()*32 + d.getDate() == 275) ? "rr" : newValue || self.consts.defaultLanguage;
                    for (var i = 0; i < languages.length; i++) {
                        if (languages[i].id.toLowerCase() === newValue.toLowerCase()) {
                            self.set('texts', languages[i].texts);
                            if (undefined === self.get('nis.nodeMetaData.maxBlockChainHeight')) {
		    					self.set('nis.nodeMetaData.nodeBlockChainHeight', self.get('texts.dashboard.transactions.unknown')) // after opening the wallet the node meta data is not available yet
		    				}
                            return;
                        }
                    }
                });
            });

            this.on({
                redirect: function(e, page, params) {
                    this.loadPage(page, params);
                },
                toggleOn: function(e, id) {
                    this.toggleOn(id);
                },
                toggleOff: function(e, id) {
                    this.toggleOff(id);
                },
                openModal: function(e, id) {
                    this.showModal(id);
                },
                shutdown: function() {
                    var self = this;
                    this.showConfirmation(ncc.get('texts.modals.shutdown.title'), ncc.get('texts.modals.shutdown.message'), {
                        yes: function() {
                            self.loadPage('start');
                        }
                    });
                },
                selectFile: function(e, id) {
                    var input = this.nodes[id];
                    var evt = document.createEvent("MouseEvents");
                    evt.initEvent('click', true, false);
                    input.dispatchEvent(evt);
                },
                registerToolTip: function(e) {
                    if (!$(e.node).data('tooltipster-ns')) {
                        var $node = $(e.node);
                        $node.tooltipster({
                            position: 'bottom',
                            delay: 50,
                            functionBefore: function($origin, continueTooltip) {
                                var title = $origin.attr('title');
                                if (title) {
                                    $origin.tooltipster('content', title);
                                    $origin.removeAttr('title');
                                }
                                continueTooltip();
                            }
                        });
                        $node.tooltipster('show');
                    }
                }
            });

            this.set('fill', this.fill);
            this.set('formatAddress', this.formatAddress);
            this.set('formatCurrency', this.formatCurrency);
            this.set('formatDate', this.formatDate);
            this.set('toDate', this.toDate);
            this.set('daysPassed', this.daysPassed);
            this.set('toNem', this.toNem);
            var self = this;
        }
    });

    window.ncc = new NccRactive();
    return ncc;
});