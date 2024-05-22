import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormInputType } from "../pages/Checkout";
import {
	addItemToCartAction,
	addProductQuantityAction,
	checkoutAction,
	removeItemFromCartAction,
	removeProductQuantityAction,
} from "../reducers/carts/actions";
import { type CartState, cartReducers } from "../reducers/carts/reducers";

export interface CartItems extends Coffee {
	quantity: number;
}

export interface Order {
	id: string;
	shipping: FormInputType;
	items: CartItems[];
}

interface CartContextType {
	cart: CartItems[];
	order: Order[];
	checkout: (shippingDetails: FormInputType) => void;
	addItemToCart: (product: CartItems) => void;
	removeItemFromCart: (productId: string) => void;
	addProductQuantity: (productId: string, quantity: number) => void;
	removeProductQuantity: (productId: string, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const [cartState, dispatch] = useReducer(
		cartReducers,
		{
			cart: [],
			order: [],
		},
		(cartState) => {
			const storedStateAsJSON = localStorage.getItem(
				"@coffee-delivery:cart-state-1.0.0",
			);

			if (storedStateAsJSON) {
				return JSON.parse(storedStateAsJSON);
			}

			return cartState;
		},
	);

	const { cart, order } = cartState as CartState;

	const addItemToCart = (product: CartItems) => {
		dispatch(addItemToCartAction(product));
	};

	const removeItemFromCart = (productId: string) => {
		dispatch(removeItemFromCartAction(productId));
	};

	const addProductQuantity = (productId: string, quantity: number) => {
		dispatch(addProductQuantityAction(productId, quantity));
	};

	const removeProductQuantity = (productId: string, quantity: number) => {
		dispatch(removeProductQuantityAction(productId, quantity));
	};

	const checkout = (shippingDetails: FormInputType) => {
		dispatch(checkoutAction(shippingDetails, navigate));
	};

	useEffect(() => {
		if (cartState) {
			const stateJSON = JSON.stringify(cartState);

			localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
		}
	}, [cartState]);

	return (
		<CartContext.Provider
			value={{
				cart,
				order,
				checkout,
				addItemToCart,
				removeItemFromCart,
				addProductQuantity,
				removeProductQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
