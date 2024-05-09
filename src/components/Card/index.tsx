import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import coffee from "../../assets/coffee-options/espresso.png";
import {
	ActionsBlock,
	ActionsContent,
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
	const { description, image, price, tags, title } = coffee;
	const currencyPrice = price.toLocaleString("pt-BR", {
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	return (
		<CardProductLayout>
			<img id="coffee-image" src={image} alt="Café Expresso Tradicional" />
			<BadgeContent>
				{tags.map((tag) => (
					<Badge>{tag}</Badge>
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
						<button type="button">
							<Minus size="16" weight="fill" />
						</button>
						<span>1</span>
						<button type="button">
							<Plus size="16" weight="fill" />
						</button>
					</AmountContent>
					<CartButton>
						<NavLink to="/checkout" title="Checkout">
							<ShoppingCart size="22" weight="fill" />
						</NavLink>
					</CartButton>
				</ActionsContent>
			</ActionsBlock>
		</CardProductLayout>
	);
}
