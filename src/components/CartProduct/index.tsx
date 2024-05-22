import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext, type CartItems } from "../../context/CartContext";
import { AmountContent } from "../ProductCard/styles";
import {
	ItemActionsContent,
	ItemCardContent,
	ItemContent,
	RemoveButton,
} from "./styles";

interface CartProductProps {
	cartCoffee: CartItems;
}

export function CartProduct({ cartCoffee }: CartProductProps) {
	const { addProductQuantity, removeProductQuantity, removeItemFromCart } =
		useContext(CartContext);
	const [quantity, setQuantity] = useState(cartCoffee.quantity);
	const { id, title, image, price } = cartCoffee;
	const currencyPrice = price.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	const handleAddProductQuantity = () => {
		const addQuantity = quantity + 1;
		setQuantity(addQuantity);

		addProductQuantity(id, addQuantity);
	};

	const handleRemoveProductQuantity = () => {
		if (quantity > 1) {
			const removeQuantity = quantity - 1;
			setQuantity(removeQuantity);

			removeProductQuantity(id, removeQuantity);
		}
	};

	const handleRemoveItemToCart = () => {
		removeItemFromCart(id);
	};

	return (
		<ItemCardContent>
			<img id="coffee-image" src={image} alt="Café Expresso Tradicional" />
			<ItemContent>
				<h2>{title}</h2>
				<ItemActionsContent>
					<AmountContent>
						<button type="button" onClick={handleRemoveProductQuantity}>
							<Minus size="16" weight="fill" />
						</button>
						<span>{quantity}</span>
						<button type="button" onClick={handleAddProductQuantity}>
							<Plus size="16" weight="fill" />
						</button>
					</AmountContent>
					<RemoveButton onClick={handleRemoveItemToCart}>
						<Trash size="22" weight="regular" color="#8047F8" />
						<span>Remover</span>
					</RemoveButton>
				</ItemActionsContent>
			</ItemContent>
			<p>{currencyPrice}</p>
		</ItemCardContent>
	);
}
