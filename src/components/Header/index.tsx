import { MapPin, ShoppingCart } from "phosphor-react";
import {
	CartButton,
	CountCartItems,
	HeaderContainer,
	LocationButton,
} from "./styles";

import { NavLink } from "react-router-dom";
import logoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logoCoffeeDelivery} alt="" />
			<nav>
				<LocationButton title="Localização">
					<MapPin size="22" weight="fill" />
					<span>Porto Alegre, RS</span>
				</LocationButton>
				<CartButton>
					<NavLink to="/checkout" title="Checkout">
						<ShoppingCart size="22" weight="fill" />
						<CountCartItems>3</CountCartItems>
					</NavLink>
				</CartButton>
			</nav>
		</HeaderContainer>
	);
}
