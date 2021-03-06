package org.nem.monitor.visitors;

import org.nem.monitor.node.*;

import java.awt.event.*;

/**
 * An NodeStatusVisitor that maps the current status of a node to an appropriate action.
 */
public class NodeStatusToManagementActionAdapter implements NodeStatusVisitor, ActionListener {
	private final NemNodeType nodeType;
	private final NodeManager manager;
	private NemNodeStatus status;
	private boolean isExplicitlyLaunched;

	/**
	 * Creates a new adapter.
	 *
	 * @param nodeType The node type.
	 * @param manager The node manager.
	 */
	public NodeStatusToManagementActionAdapter(final NemNodeType nodeType, final NodeManager manager) {
		this.nodeType = nodeType;
		this.manager = manager;
		this.status = NemNodeStatus.UNKNOWN;
	}

	@Override
	public void notifyStatus(final NemNodeType type, final NemNodeStatus status) {
		if (this.nodeType != type) {
			return;
		}

		this.status = status;
		if (NemNodeStatus.RUNNING == this.status && this.isExplicitlyLaunched) {
			this.isExplicitlyLaunched = false;
			this.manager.launchBrowser();
		}
	}

	@Override
	public void actionPerformed(final ActionEvent e) {
		switch (this.status) {
			case RUNNING:
				this.manager.shutdown();
				break;

			case STOPPED:
				this.isExplicitlyLaunched = true;
				this.manager.launch();
				break;
		}
	}
}
