import { MapPin, ShoppingCart } from "phosphor-react";
import {
	CartButton,
	CountCartItems,
	HeaderContainer,
	LocationButton,
} from "./styles";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { CartContext } from "../../context/CartContext";

export function Header() {
	const { cart } = useContext(CartContext);
	const hasCartItems = cart.length !== 0;
	const numberOfCartItems = cart.length;

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
						{hasCartItems && (
							<CountCartItems>{numberOfCartItems}</CountCartItems>
						)}
					</NavLink>
				</CartButton>
			</nav>
		</HeaderContainer>
	);
}
