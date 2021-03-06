package org.nem.ncc.exceptions;

/**
 * Base class for all NCC exceptions.
 */
public class NccException extends RuntimeException {
	/**
	 * General NIS error codes.
	 */
	public static enum Code implements ValueBasedEnum {
		/**
		 * The specified wallet is not open.
		 */
		WALLET_IS_NOT_OPEN(106),

		/**
		 * The recipient public key is unknown.
		 */
		NO_PUBLIC_KEY(202),

		/**
		 * There was a problem with the account cache.
		 */
		ACCOUNT_CACHE_ERROR(901),

		/**
		 * NCC is disconnected from the network.
		 */
		NIS_NOT_AVAILABLE(305);

		private final int value;

		private Code(final int value) {
			this.value = value;
		}

		@Override
		public int value() {
			return this.value;
		}
	}

	private final ValueBasedEnum code;

	/**
	 * Creates a new NCC exception.
	 *
	 * @param code The error code.
	 */
	public NccException(final Code code) {
		this((ValueBasedEnum)code);
	}

	/**
	 * Creates a new NCC exception.
	 *
	 * @param code The error code.
	 */
	protected NccException(final ValueBasedEnum code) {
		super(code.toString());
		this.code = code;
	}

	/**
	 * Creates a new NCC exception.
	 *
	 * @param code The exception code.
	 * @param cause The exception cause.
	 */
	protected NccException(final ValueBasedEnum code, final Throwable cause) {
		super(code.toString(), cause);
		this.code = code;
	}

	/**
	 * Gets the underlying code.
	 *
	 * @return The underlying code.
	 */
	public ValueBasedEnum getCode() {
		return this.code;
	}
}
