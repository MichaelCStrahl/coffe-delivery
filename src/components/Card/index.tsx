import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import coffee from "../../assets/coffee-options/espresso.png";
import {
	ActionsBlock,
	ActionsContent,
	AmountContent,
	Badge,
	CardProductLayout,
	CardTitle,
	CartButton,
	Currency,
	DescriptionCard,
	Price,
	PriceContent,
} from "./styles";

export function ProductCard() {
	return (
		<CardProductLayout>
			<img id="coffee-image" src={coffee} alt="Café Expresso Tradicional" />
			<Badge>Tradicional</Badge>
			<CardTitle>Expresso Simples</CardTitle>
			<DescriptionCard>
				O tradicional café feito com água quente e grãos moídos
			</DescriptionCard>
			<ActionsBlock>
				<PriceContent>
					<Currency>R$</Currency>
					<Price>9,90</Price>
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
