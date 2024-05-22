import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormInputType } from "../pages/Checkout";

export interface CartItems extends Coffee {
	quantity: number;
}

export interface Order {
	id: string;
	shipping: FormInputType;
	items: CartItems[];
}

interface CartContextType {
	cartItems: CartItems[];
	order: Order | null;
	checkout: (shippingDetails: FormInputType) => void;
	addItemToCart: (product: CartItems) => void;
	removeItemFromCart: (productId: string) => void;
	addProductQuantity: (productId: string, quantity: number) => void;
	removeProductQuantity: (productId: string, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);
	const [order, setOrder] = useState<Order | null>(null);

	const navigate = useNavigate();

	const addItemToCart = (product: CartItems) => {
		setCartItems((state) => [...state, product]);
	};

	const removeItemFromCart = (productId: string) => {
		const filteredCartItems = cartItems.filter(
			(cartItem) => cartItem.id !== productId,
		);

		setCartItems(filteredCartItems);
	};

	const addProductQuantity = (productId: string, quantity: number) => {
		const updateProductQuantity = cartItems.map((cartItem) => {
			if (cartItem.id === productId) {
				return {
					...cartItem,
					quantity: quantity,
				};
			}

			return cartItem;
		});

		setCartItems(updateProductQuantity);
	};

	const removeProductQuantity = (productId: string, quantity: number) => {
		const updateProductQuantity = cartItems.map((cartItem) => {
			if (cartItem.id === productId) {
				if (cartItem.quantity > 1) {
					return {
						...cartItem,
						quantity: quantity,
					};
				}
			}

			return cartItem;
		});

		setCartItems(updateProductQuantity);
	};

	const checkout = (shippingDetails: FormInputType) => {
		if (cartItems.length === 0) {
			return alert("É preciso ter pelo menos um item no carrinho");
		}

		const newOrder = {
			id: new Date().getTime().toString(),
			shipping: shippingDetails,
			items: cartItems,
		};

		setOrder(newOrder);
		setCartItems([]);
		navigate(`/order/${newOrder.id}/success`);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
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
