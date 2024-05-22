import { Check, Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
	ActionsBlock,
	ActionsContent,
	AddedItemToCardButton,
	AmountContent,
	Badge,
	BadgeContent,
	CardProductLayout,
	CardTitle,
	CartButton,
	Currency,
	DescriptionCard,
	Price,
	PriceContent,
} from "./styles";

interface ProductCardProps {
	coffee: Coffee;
}

export function ProductCard({ coffee }: ProductCardProps) {
	const [quantity, setQuantity] = useState(1);
	const [isItemAdded, setIsItemAdded] = useState(false);
	const {
		cartItems,
		addItemToCart,
		addProductQuantity,
		removeProductQuantity,
	} = useContext(CartContext);
	const { id, description, image, price, tags, title } = coffee;
	const hasProductInCart = cartItems.find((item) => item.id === coffee.id);
	const currencyPrice = price.toLocaleString("pt-BR", {
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	function handleAddQuantity() {
		const addQuantity = quantity + 1;
		setQuantity(addQuantity);

		if (!hasProductInCart) return;
		addProductQuantity(id, addQuantity);
	}

	function handleRemoveQuantity() {
		if (quantity > 1) {
			const removeQuantity = quantity - 1;
			setQuantity(removeQuantity);

			if (!hasProductInCart) return;
			removeProductQuantity(id, removeQuantity);
		}
	}

	function handleAddItemToCart() {
		setIsItemAdded(true);
		if (hasProductInCart) return;
		const newItemToCart = { ...coffee, quantity };
		addItemToCart(newItemToCart);
	}

	useEffect(() => {
		let timeout: number;

		if (isItemAdded) {
			timeout = setTimeout(() => {
				setIsItemAdded(false);
			}, 1000);
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [isItemAdded]);

	return (
		<CardProductLayout>
			<img id="coffee-image" src={image} alt="Café Expresso Tradicional" />
			<BadgeContent>
				{tags.map((tag, index) => (
					<Badge key={`${tag}-${String(index)}`}>{tag}</Badge>
				))}
			</BadgeContent>
			<CardTitle>{title}</CardTitle>
			<DescriptionCard>{description}</DescriptionCard>
			<ActionsBlock>
				<PriceContent>
					<Currency>R$</Currency>
					<Price>{currencyPrice}</Price>
				</PriceContent>
				<ActionsContent>
					<AmountContent>
						<button type="button" onClick={handleRemoveQuantity}>
							<Minus size="16" weight="fill" />
						</button>
						<span>{quantity}</span>
						<button type="button" onClick={handleAddQuantity}>
							<Plus size="16" weight="fill" />
						</button>
					</AmountContent>
					{isItemAdded ? (
						<AddedItemToCardButton>
							<Check weight="fill" size={22} />
						</AddedItemToCardButton>
					) : (
						<CartButton onClick={handleAddItemToCart}>
							<ShoppingCart size="22" weight="fill" />
						</CartButton>
					)}
				</ActionsContent>
			</ActionsBlock>
		</CardProductLayout>
	);
}
