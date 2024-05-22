import type { NavigateFunction } from "react-router-dom";
import type { CartItems, Order } from "../../context/CartContext";
import type { FormInputType } from "../../pages/Checkout";

export enum ActionTypes {
	ADD_ITEM = "ADD_ITEM",
	REMOVE_ITEM = "REMOVE_ITEM",
	INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
	DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
	CLEAR_CART = "CLEAR_CART",
}

export type Actions =
	| {
			type: ActionTypes.ADD_ITEM;
			payload: {
				product: CartItems;
			};
	  }
	| {
			type: ActionTypes.REMOVE_ITEM;
			payload: {
				productId: string;
			};
	  }
	| {
			type:
				| ActionTypes.DECREMENT_ITEM_QUANTITY
				| ActionTypes.INCREMENT_ITEM_QUANTITY;
			payload: {
				productId: string;
				quantity: number;
			};
	  }
	| {
			type: ActionTypes.CLEAR_CART;
			payload: {
				shippingDetails: FormInputType;
				callback: NavigateFunction;
			};
	  };

export function addItemToCartAction(product: CartItems) {
	return {
		type: ActionTypes.ADD_ITEM,
		payload: {
			product,
		},
	} satisfies Actions;
}

export function removeItemFromCartAction(productId: string) {
	return {
		type: ActionTypes.REMOVE_ITEM,
		payload: {
			productId,
		},
	} satisfies Actions;
}

export function addProductQuantityAction(productId: string, quantity: number) {
	return {
		type: ActionTypes.INCREMENT_ITEM_QUANTITY,
		payload: { productId, quantity },
	} satisfies Actions;
}

export function removeProductQuantityAction(
	productId: string,
	quantity: number,
) {
	return {
		type: ActionTypes.DECREMENT_ITEM_QUANTITY,
		payload: { productId, quantity },
	} satisfies Actions;
}

export function checkoutAction(
	shippingDetails: FormInputType,
	callback: NavigateFunction,
) {
	return {
		type: ActionTypes.CLEAR_CART,
		payload: {
			shippingDetails,
			callback,
		},
	} satisfies Actions;
}
