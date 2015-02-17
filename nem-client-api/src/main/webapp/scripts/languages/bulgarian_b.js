define({
	id: "bg",
	name: "Български",
	texts: {
		preferences: {
			thousandSeparator: "\u2009",
			decimalSeparator: "."
		},
		faults: {
			101: "Файлът на портфейла не съществува",
			102: "Портфейлът не е създаден.",
			103: "Файлът на портфела е повреден.Моля възстановете файла от копие което сте запазили при създаването на портфейла.",
			104: "Въведената парола е грешна.",
			105: "Не е предоставена парола за портфейла.",
			106: "Преди да започнете работа с портфейла се убедете че той е отворен. За да получите достъп до портфейла въведете паролата за този портфейл.",
			107: "Портфейла не съдържа този акаунт.",
			108: "Акаунта не може да бъде премахнат. По всяка вероятност това е така защото акаунта има баланс повече от 0 NEM или акаунта ,който се опитвате да премахнете е главен акаунт. ",
			109: "Друг портфейл със същото име вече съществува. Моля  изберете друго име на портфейла.",
			110: "Портфейла вече съдържа този акаунт.",
			111: "Името на портфейла е директория.",
			112: "Типът на файла на портфейла е некоректен.",
			113: "Портфейла не може да бъде изтрит.",
			121: "Адрес бук файла не съществува.",
			122: "Адрес букът не беше създаден.",
			123: "Адрес бук файлът е повреден.Моля възстановете вашият адрес бук от резервното копие.",
			124: "Предоставената парола на адрес бука не е правилна.",
			125: "Не е предоставена парола на адрес бука.",
			127: "Адрес бука не съдържа този адрес.",
			129: "Друг адрес бук със същото име вече съществува.Моля изберете друго име на адрес бука.",
			130: "Адрес бука вече съдържа този адрес.",
			131: "Името на адрес бука е директория.",
			132: "Типът на адрес бук файла е некоректен.",
			133: "Адрес букът не може да бъде изтрит.",
			202: "Криптирано съобщение не може да бъде изпратено понеже получателя до сега не е извършил нито една транзакция и няма публичен ключ.",
			305: "NEM Infrastructure Server е недостъпен",
			306: "Възникна непредвидена грешка.Извиняваме се за това ,опитайте отново може това да помогне.В противен случай се обърнете за помощ към NEM NIS/NCC community.",
			400: "Някой параметри липсват или са некоректни.",
			401: "Тази операция не може да бъде завършена защото може да компрометира частният ви ключ като го изпрати до отдалечения NIS",
			404: "Търсеният ресурс не може да бъде намерен.",
			500: "Възникна грешка, която не е предвидена от разработчиците. Извиняваме се за това, може би повторен опит може да помогне. В противен случай се обърнете за помощ към NEM NIS/NCC community.",
			600: "За получаване и изпращане на транзакции NEM Infrastructure Server (NIS) сървъра трябва да бъде рестартиран.Моля използвайте менюто на NCC за рестартиране на локалния възел.",
			601: "NEM Infrastructure Server (NIS) възела е вече стартиран.",
			699: "Максималния брой на генериращите адреси позволени от сървъра беше превишен.",
			700: "Предоставения акаунт не удовлетворява основните критерии за генерация.Основно това е свързано с количеството NEM в сметката.Генерацията започва поне с 1000 NEM в баланса.",
			701: "Предоставеният срок е в миналото. Срокът трябва да бъде предоставен в рамките на 1-дневен период.",
			702: "Предоставеният срок е твърде далеч в бъдещето. Срокът трябва да бъде в рамките на еднодневен период от време.",
			703: "Вашия акаунт не съдържа достатъчно количество средства за изпращане на исканната сума NEMs.",
			704: "Предоставеното съобщение е прекалено голямо за да бъде изпратено чрез NEM.Моля опитайте да съкратите дължината на съобщението ,което искате да изпратите.",
			705: "Транзакцията вече съществува в базата данни или в листа на непотвърдените транзакции.",
			706: "Подписът на сделката не може да бъде проверен.",
			707: "Времевата отметка на трансакцията е много далеч в миналото.",
			708: "Времевата отметка на транзакцията е много далеч в бъдещето.",
			709: "Неизвестен акаунт. Акаунта трябва да е част от поне една транзакция (входяща или изходяща) за да бъде разпознат от мрежата.",
			710: "Транзакцията беше отхвърлена защото кеша на транзакциите е препълнен.По голямата такса увеличава шансатранзакцията да пъде приета.",
			730: "Важноста на трансферираната транзакция (защитено генериране)е в конфликт с съществуващата транзакция.",
			731: "Акаунта за защитено генериране няма нулев баланс и не може да бъде ползван.",
			732: "Важният трансфер е отхвърлен.Вече съществува чакаща важна трансфер операция.",
			733: "Защитеното генериране е вече активно.",
			734: "Защитеното генериране не е активно.То не може да бъде деактивирано.",
			740: "Транзакцията не е позволена за мултисигнатурен акаунт.",
			741: "Мултисигнатурния подпис на транзакцията е отхвърлен.Този акаунт не е косигнатурен на мултисигнатурния акаунт.",
			742: "Мултисигнатурния подпис на транзакцията е отхвърлен.Асоциираната мултисигнатурна транзакция е неизвестна за NEM мрежата.",
			743: "Модификацията на мултисигнатурния акаунт е отхвърлена.Един от добавените акаунти е вече косигнатурен.",
			901: "Възникна грешка при преминаване в режим офлайн.",
			1000: "Частният ключ и публичният ключ ,който въведохте са разменени.",
			1001: "Публичният ключ и адресът ,който въведохте са разменени.",
			1002: "Адресът не принадлежи към основната мрежа"
		},
		common: {
			success: "Успешно",
			appStatus: {
				nccUnknown: "NCC статуса е неизвестен",
				nccUnavailable: "NCC е недостъпен",
				nccStarting: "NCC стартира...",
				nisUnknown: "NIS статуса е неизвестен",
				nisUnavailable: "NIS е недостъпен",
				nisStarting: "NIS стартира...",
				notBooted: "NIS трябва да бъде презареден. Моля отворете портфейла и презаредете локалния възел чрез изплуващия прозорец или конфигурирайте ауто зареждащите настройки",
				booting: "Зарежда NIS...",
				nisInfoNotAvailable: "NIS инфо не е все още на разположение.Опитвам се да получа отново NIS инфо...",
				synchronizing: "NIS се синхронизира. В блок {{1}}, около {{2}} назад.",
				daysBehind: {
					0: "по малко от 1 ден",
					1: "1 ден",
					many: "{{1}} дни"
				},
				synchronized: "NIS е синхронизиран!",
				noRemoteNisAvailable: "Не е намерен отдалечен NIS в мрежата,изключен от интернет?"
			},
			addressBook: "Адрес бук",
			password: "Парола",
			passwordValidation: "Паролата не трябва да е празна",
			address: "Адрес",
			privateLabel: "Частна маркировка",
			publicLabel: "Публична маркировка",
			noCharge: "Този акаунт <b>Няма</b> да бъде обложен с никакви такси, мултисигнатурният акаунт ги покрива.",
			justUse: "Просто използвайте"
		},
		transactionTypes: [
			"ПРЕХВЪРЛИ ТРАНЗАКЦИЯТА",
			"ВАЖНО ПРЕХВЪРЛЯНЕ",
			"МОДИФИКАЦИЯ НА МУЛТИСИГНАТУРНИЯ АКАУНТ",
			"МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ"
		],
		transactionDirections: {
			pending: "Чакаща транзакция",
			outgoing: "Изходяща транзакция",
			incoming: "Входяща транзакция",
			self: "Собственна транзакция",
			importance: "Важна транзакция",
			modification: "Сумарна Модификация на Мултисигнатурата"
		},
		modals: {
			error: {
				title: "Oops!",
				caption: "Грешка {{1}}"
			},
			confirmDefault: {
				yes: "Да",
				no: "Не"
			},
			settings: {
				title: "Настройки",
				language: {
					label: "Език"
				},
				remoteServer: {
					tabTitle: "Отдалечен сървър",
					protocol: "Протокол",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Хост",
					port: "Порт"
				},
				autoBoot: {
					tabTitle: "Ауто зареждане",
					name: "Име на възела",
					account: "Акаунт",
					primaryAccount: "Главен Акаунт",
					auto: "Авто зареждане когато се отвори портфейла"
				},
				save: "Запази",
				saveSuccess: "Настройките бяха успешно запазени"
			},
			multisig: {
				title: "Преобразувай акаунта в мултисигнатурен",
				multisigAccount: "Мултисигнатурен акаунт",
				cosignatories: "Косигнатурни адреси",
				labelDesc: "Този акаунт е маркиран като {{1}}",
				nullLabelDesc: "Този акаунт няма маркировка",
				addCosignatory: "+ Добави косигнатура",
				cancel: "Отмени",
				convert: "Конвертирай",
				fee: "Такса",
				feeValidation: "Таксата трябва да бъде не по малка от минималната",
				dueBy: "Време до края",
				useMinimumFee: "Ползвай минимална такса",
				hours: "час(а)",
				txConfirm: {
					title: "Потвърди Преобразуването в Мултисигнатурен Акаунт",
					total: "Общо"
				}
			},
			signMultisig: {
				title: "Подпиши мултисигнатурна транзакция",
				original: {
					from: "Мултисигнатурен акаунт",
					to: "Получател",
					amount: "Сума",
					fee: "Вътрешна такса",
					deadline: "Краен срок"
				},
				multisigFees: "Мултисигнатурна такса",
				multisigTotal: "Общо",
				sender: "Косигнатура",
				fee: "Такса",
				feeValidation: "Таксата не трябва да бъдепо малка от минималната",
				dueBy: "Време до края",
				useMinimumFee: "Ползвай минимална такса",
				hours: "час(а)",
				password: "Парола",
				passwordValidation: "Паролата не може да бъде празна",
				send: "Изпрати",
				cancel: "Отмени",
				sending: "Изпращам...",
				successMessage: "Транзакцията беше изпратена успешно!",
				txConfirm: {
					title: "Потвърди Мултисигнатурната Транзакция",
					message: "Съобщение",
					encrypted: "Съобщението е криптирано",
					noMessage: "Няма съобщение"
				}
			},
			sendNem: {
				title: "Изпрати NEM",
				sender: "Изпращач",
				thisAccount: "Този акаунт",
				labelDesc: "Този акаунт е маркиран като {{1}}",
				nullLabelDesc: "Този акаунт не е маркиран",
				amount: "Сума",
				recipient: "Акаунт на Получателя",
				recipientValidation: "Акаунт адреса трябва да е 40 символа дълъг като се изключат тиретата",
				message: "Съобщение",
				encrypt: "Криптирано съобщение",
				fee: "Такса",
				multisigFee: "Мултисигнатурна такса",
				feeValidation: "Таксата не трябва да бъде по малка от минималната такса",
				dueBy: "Време до края",
				useMinimumFee: "Ползвай минималната такса",
				hours: "Час(а)",
				password: "Парола",
				passwordValidation: "Паролата не трябва да е празна",
				send: "Изпрати",
				cancel: "Отказ",
				sending: "Изпращам...",
				successMessage: "Транзакцията беше изпратена успешно!",
				txConfirm: {
					title: "Потвърдете транзакцията",
					amount: "Сума",
					to: "До",
					dueBy: "Време до края",
					hours: "час(а)",
					total: "Общо",
					message: "Съобщение",
					encrypted: "Съобщението е криптирано",
					noMessage: "Без съобщение",
					cancel: "Отмени",
					confirm: "Потвърди",
					sending: "Изпращам..."
				},
				notBootedWarning: {
					title: "Възелът не бе стартиран!",
					message: "Локалният възел трябва да бъде стартиран преди да можете да изпратите NEM"
				},
				bootingWarning: {
					title: "Възелът се стартира",
					message: "Моля почакайте докато възелът се стартира за да изпратите вашата транзакция."
				}
			},
			clientInfo: {
				title: "Клиент инфо",
				ncc: "NEM Community Client - NCC",
				signer: "Притежател на подписа",
				remoteServer: "Отдалечен сървър",
				local: "Локален",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Синхронизиран",
				notSync: "Не синхронизиран",
				notConnected: "Не съединен с NEM облака",
				loading: "Зареждане..."
			},
			transactionDetails: {
				title: "Детайли на транзакцията",
				id: "ID",
				hash: "Hash",
				type: "Тип на транзакцията",
				direction: "Посока на Транзакцията",
				pending: "В очакване",
				outgoing: "Изходящи",
				incoming: "Входящи",
				self: "Собственна",
				sender: "Изпращач",
				multisigAccount: "Мултисигнатурен Акаунт",
				issuer: "Емитент",
				recipient: "Получател",
				remote: "Отдалечен",
				multisigMessage: "Сигнатури на лице",
				message: "Съобщение",
				noMessage: "Няма съобщение",
				encrypted: "Съобщението е криптирано",
				time: "Време на създаване",
				confirmations: "Потвърждения",
				confirmationsUnknown: "Неизвестни",
				amount: "Сума",
				fee: "Такса",
				innerFee: "Вътрешна такса",
				multisigFees: "Мултисигнатурни такси",
				cosignatory: "Косигнатура"
			},
			accountDetails: {
				title: "Детайли на акаунта",
				address: "Адрес",
				label: "Маркировка",
				noLabel: "Без маркировка",
				add: "Прибави в адрес бука",
				remove: "Премахни от адрес бука",
				balance: "Баланс",
				importance: "Важност",
				publicKey: "Публичен ключ",
				noPublicKey: "Няма публичен ключ",
				harvestedBlocks: "Генерирани блокове",
				close: "Затвори"
			},
			bootLocalNode: {
				title: "Стартирайте локалния възел.",
				account: "Акаунт за стартиране на локалния възел.",
				noLabel: "<span class=\"null\">&lt;Не маркиран&gt;</span>",
				wallet: "Портфейл",
				node: "Име на локалния възел",
				boot: "Старт",
				booting: "Стартиране..."
			},
			closeWallet: {
				title: "Затваряне на портфейла",
				message: "Сигурни ли сте че искате да затворите портфейла и да се върнете на главната страница?"
			},
			createAccount: {
				title: "Създайте нов акаунт",
				label: "Частна маркировка",
				wallet: "Портфейл",
				password: "Парола на портфейла",
				successMessage: "Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше създаден!",
				create: "Създай"
			},
			createRealAccountData: {
				title: "Създайте данните на реалния акаунт",
				message: "Долните данни са за вашия реален акаунт след старта на NEM.Запазете адреса,публичния ключ и най-важно частния ключ на сигурно място.Ако загубите частния си ключ вашият акаунт и всички реални NEMs ще бъдат загубени завинаги",
				address: "Адрес",
				publicKey: "Публичен ключ",
				privateKey: "Частен ключ",
				confirm: {
					title: "Запази частния ключ",
					message: "Сигурни ли сте че вашият частен ключ е запазен на сигурно място?"
				},
				recheck: {
					title: "Отново проверете вашия запазен частен ключ",
					message: "Моля въведете повторно вашия частен ключ с който току що се сдобихте за да проверите дали правилно сте го съхранили.Ако вашият частен ключ е вече загубен вие мож да поискате да създадете нов.",
					correct: {
						title: "Отлично!",
						message: "Вие сте съхранили правилния частен ключ.Моля запомнете винаги да го съхранявате на сигурно място!"
					},
					incorrect: {
						title: "Хмм...",
						message: "Частният ключ който току що въведохте не е правилен!Искате ли да въведете отново частния ключ или да се върнете и да видите данните на оригиналния акаунт?",
						tryAgain: "Опитайте да го въведете отново",
						seeOriginal: "Вижте оригиналните данни"
					},
					recheck: "Проверка"
				},
				ok: "ОК"
			},
			verifyRealAccountData: {
				title: "Проверете данните на реалния акаунт",
				message: "Повторно въведете вашият запазен адрес,публичен ключ и частен ключ отдолу за да проверите дали те съвпадат.",
				address: "Адрес",
				publicKey: "Публичен ключ",
				privateKey: "Частен ключ",
				dataMatched: "Всичко изглежда добре вие въведохте адрес,публичен ключ и частен ключ които съвпадат.",
				verify: "Провери"
			},
			addAccount: {
				title: "Добавете съществуващ акаунт",
				privateKey: "Частен ключ на акаунта",
				wallet: "Портфейл",
				password: "Парола на портфейла",
				successMessage: "Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше добавен към портфейла!",
				add: "Добави",
				label: "Маркировка"
			},
			setPrimary: {
				title: "Задаване като главен акаунт",
				account: "Задайте като главен акаунт",
				noLabel: "<span class=\"null\">&lt;Без маркировка&gt;</span>",
				wallet: "Портфейл",
				password: "Парола на портфейла",
				successMessage: "Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше зададен като главен!",
				set: "Задай като главен"
			},
			changeWalletName: {
				title: "Сменете името на портфейла",
				wallet: "Настоящо име на портфейла",
				newName: "Ново име на портфейла",
				password: "Парола на портфейла",
				successMessage: "Името на портфейла е успешно сменено от <em>{{1}}</em> на <em>{{2}}</em>",
				change: "Смени"
			},
			changeWalletPassword: {
				title: "Сменете паролата на портфейла",
				wallet: "Портфейл",
				password: "Текуща парола",
				newPassword: "Нова парола",
				confirmPassword: "Повторете новата парола",
				successMessage: "Паролата на портфейла беше успешно сменена",
				change: "Смени",
				passwordNotMatchTitle: "Oops!",
				passwordNotMatchMessage: "Въведената от вас парола и потвърдената парола не съвпадат.Моля убедете се ,че правилно сте написали новата парола."
			},
			changeAccountLabel: {
				title: "Сменете маркировката на акаунта",
				label: "Маркировка на акаунта",
				wallet: "Портфейл",
				password: "Парола на портфейла",
				successMessage: "Акаунтът {{1}} сега е маркиран като {{2}}",
				change: "Смени"
			},
			removeAccount: {
				title: "Премахнете акаунта",
				wallet: "Портфейл",
				password: "Парола на портфейла",
				warning: "Моля уверете се че нямате NEM монети в акаунта преди да го премахнете иначе те ще бъдат изгубени завинаги.",
				successMessage: "Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше премахнат!",
				remove: "Премахни"
			},
			nisUnavailable: {
				title: "NIS е недостъпен",
				message: "NIS е прекъснат,очакване на включване"
			},
			shutdown: {
				title: "Затворете програмата",
				message: "Сигурни ли сте че искате да затворите NEM Community Client?"
			},
			activateRemote: {
				title: "Активирайте отдалеченото генериране",
				wallet: "Портфейл",
				account: "Акаунт",
				hoursDue: "Време до края (часове)",
				password: "Парола на портфейла",
				activate: "Активирай"
			},
			deactivateRemote: {
				title: "Деактивирайте отдалеченото генериране",
				wallet: "Портфейл",
				account: "Акаунт",
				hoursDue: "Време до края (часове)",
				password: "Парола на портфейла",
				deactivate: "Деактивирай"
			},
			startRemote: {
				title: "Старт на отдалеченото генериране",
				wallet: "Портфейл",
				account: "Акаунт",
				password: "Парола на портфейла",
				start: "Старт"
			},
			stopRemote: {
				title: "Стоп на отдалеченото генериране",
				wallet: "Портфейл",
				account: "Акаунт",
				password: "Парола на портфейла",
				stop: "Стоп"
			},
			logoutWarning: {
				leavePage: "Вие напускате вашия портфейл.Запомнете че напускайки вашия портфейл по този начин ,някой друг може да има достъп до портфейла ви от този компютър."
			},
			addContact: {
				title: "Добави контакт",
				add: "Добави"
			},
			editContact: {
				title: "Редактирай контакта",
				saveChanges: "Запази промените"
			},
			removeContact: {
				title: "Премахни контакта",
				remove: "Премахни"
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Портфейлът беше успешно импортнат!",
			nav: {
				start: "Първи стъпки",
				about: "Относно NEM",
				settings: "Настройки"
			},
			main: {
				leftTitle: "Нов за <em>NEM</em>?",
				leftButton: "Създай нов портфейл",
				walletNamePlh: "Име на вашия портфейл",
				passwordPlh: "Парола",
				confirmPasswordPlh: "Потвърдете паролата",
				create: "Създай",
				creating: "Създаване...",
				rightTitle: "Вече сте <em>NEM</em>ber?",
				rightButton: "Отворете вашия портфейл",
				openButton: "Отвори",
				walletsFound: "Намерени <strong>{{1}}</strong> <em>Портфейл(и)</em>",
				copyright: "Фотография от <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [
					{
						title: "NCC криптира твоя портфейл",
						description: "<em>Сигурността на портфейла </em> е най важната задача за NEM състояща се в защита на вашите NEM монети и активи."
					},
					{
						title: "NCC криптира твоя портфейл",
						description: "<em>Сигурността на портфейла</em> е най важната задача за NEM състояща се в защита на вашите NEM монети и активи."
					}
				]
			},
			about: {
				sections: [
					{
						title: "Как работи NCC?",
						paragraphs: [
							"<strong>NCC</strong> предоставя достъп до вашите активи и NEM монети като обикновен портфейл.Вие можете",
							"<strong>NCC</strong> изисква достъп до <strong>NIS</strong> сървър за да може да работи.Стандартно е да има локален сървър и той трябва да е активен(той се инсталира заедно <strong>NCC</strong>)",
							"Вие също може да конфигурирате достъп до отдалечен <strong>NIS</strong>."
						],
						listItems: [
							"Да имате няколко портфейла",
							"Да дефинирате няколко акаунта да се съдържат в един портфейл."
						]
					},
					{
						title: "Какво е &#42;NIS?",
						paragraphs: [
							"Този компонент отговаря за функционирането на <strong>NEM</strong> облака.",
							"Колкото повече <strong>NIS</strong> толкова по добра е сигурността.",
							"<strong>NIS</strong> това е точката за достъп за <strong>NEM</strong> облака."
						],
						legend: "<strong>&#42;NIS</strong> се разшифрова <strong>NEM Infrastructure Server</strong>"
					}
				]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Около {{1}} дни назад",
			lastAccessJustNow: "Точно сега",
			lastAccessTooltip: "Последният достъп е бил {{1}}",
			primary: "Главен",
			primaryShort: "Г",
			noLabel: "<Без маркировка>",
			copiedToClipboard: "Адресът беше копиран в клипборда!",
			actions: {
				refreshInfo: "Обновяване на информацията",
				bootLocalNode: "Стартиране на локалния възел",
				changeWalletName: "Промяна името на портфейла",
				changeWalletPassword: "Промяна паролата на портфейла",
				mergeWallets: "Обединяване на портфейли",
				exportWallet: "Експорт на портфейла",
				createAccount: "Създаване на нов акаунт",
				createRealAccountData: "Създайте данните на реалния акаунт",
				verifyRealAccountData: "Проверете данните на реалния акаунт",
				addAccount: "Добавяне на съществуващ акаунт",
				changeAccountLabel: "Промяна на маркировката на акаунта",
				setPrimary: "Задай като главен акаунт",
				removeAccount: "Премахни акаунта",
				clientInfo: "Информация за клиента",
				closeWallet: "Затвори портфейла",
				closeProgram: "Затвори програмата",
				copyClipboard: "Копирай адреса в клипборда",
				convertMultisig: "Преобразувай в мултисигнатурен"
			},
			nav: [
				"Панел за управление",
				"Съобщения",
				"Адрес Бук",
				"Транзакции",
				"Генерирани блокове",
				"Обмен на активи",
				"Новини",
				"Приложения",
				"Акаунти",
				"Настройки",
				"Затворете програмата"
			],
			bootNodeWarning: "За пълното функциониране на NCC е нужно локалният възел да се рестартира."
		},
		dashboard: {
			assets: {
				title: "Вашите активи"
			},
			importance: {
				title: "Важен резултат",
				unknown: "Неизвестен статус",
				start: "Старт на локалното генериране",
				harvesting: "Генериране",
				stop: "Стоп на локалното генериране",
				description: "Важност на акаунта за NEM облака",
				remoteHarvest: {
					activate: "Активирай отдалеченото генериране",
					activating: "Активиране на отдалеченото генериране...",
					active: "Отдалеченото генериране е активирано",
					deactivate: "Деактивирай отдалеченото генериране",
					deactivating: "Деактивиране на отдалеченото генериране...",
					startRemoteHarvesting: "Старт на отдалеченото генериране",
					remotelyHarvesting: "Отдалечено генериране",
					stopRemoteHarvesting: "Стоп на отдалеченото генериране"
				}
			},
			transactions: {
				title: "Скорошни транзакции",
				sendNem: "Изпрати NEM",
				signMultisig: "Подпиши",
				balance: "Текущ баланс",
				syncStatus: "( Блок {{1}}{{#2}} : около {{3}} дена на зад {{/2}})",
				unknown: "неизвестно",
				columns: [
					"",
					"Време",
					"Изпращач/Получател",
					"Съобщение",
					"",
					"Детайли",
					"Потвърждения",
					"Такса",
					"Сума"
				],
				noMessage: "Няма съобщение",
				encrypted: "Съобщението е криптирано",
				view: "Преглед",
				confirmationsUnknown: "Неизвестни",
				pending: "В очакване",
				seeAll: "Виж всички транзакции",
				noTransactions: "Не е направена нито една транзакция все още"
			},
			nemValue: {
				title: "NEM статистически стойности"
			},
			messages: {
				titleTooltip: "Съобщения"
			},
			news: {
				titleTooltip: "Новини"
			},
			notAvailable: "Още е недостъпно в бета версията"
		},
		transactions: {
			title: "Транзакции",
			sendNem: "Изпрати NEM",
			balance: "Текущ баланс",
			filters: {
				confirmed: "Потвърдени",
				unconfirmed: "Непотвърдени",
				incoming: "Входящи",
				outgoing: "Изходящи"
			},
			table: {
				columns: [
					"",
					"Време",
					"Изпращач/Получател",
					"Съобщение",
					"",
					"Детайли",
					"Потвърждения",
					"Такса",
					"Сума"
				],
				noMessage: "Няма съобщение",
				encrypted: "Съобщението е криптирано",
				view: "Преглед",
				confirmationsUnknown: "Неизвестни",
				pending: "В очакване",
				noTransactions: "Не е направена нито една транзакция все още",
				loading: "Зареждане на още транзакции..."
			}
		},
		harvestedBlocks: {
			title: "Генерирани блокове",
			feeEarned: "Такси събрани от последните 25 генерирани блока",
			unknown: "Неизвестно",
			table: {
				columns: [
					"Височина",
					"Време",
					"Блок hash",
					"Такса"
				],
				noBlocks: "Няма генерирани блокове все още",
				loading: "Зареждане на още генерирани блокове"
			},
			harvesting: {
				unknown: "Неизвестен статус",
				start: "Старт на локалното генериране ",
				harvesting: "Генериране",
				stop: "Стоп на локалното генериране",
				remoteHarvest: {
					startRemoteHarvesting: "Стартирай отдалеченото генериране",
					stopRemoteHarvesting: "Стоп на отдалеченото генериране"
				}
			}
		},
		addressBook: {
			title: "Адрес бук",
			addContact: "Добави контакт",
			table: {
				columns: [
					"Адрес на акаунта",
					"Частна маркировка",
					"Публична маркировка"
				],
				noContacts: "Няма контакти във Вашия адрес бук"
			},
			noLabel: "Няма маркировка",
			sendNem: "Изпрати NEM",
			edit: "Редактирай",
			remove: "Премахни"
		},
		settings: {
			title: "Настройки",
			settings: [
				{
					name: "Език"
				}
			],
			save: "Запази промените",
			saveSuccess: "Настройките бяха успешно запазени"
		}
	}
});
