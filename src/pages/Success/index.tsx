import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import successImage from "../../assets/success-image.png";
import { Container } from "../../components/Container";
import { CartContext, type Order } from "../../context/CartContext";
import {
	CardSuccess,
	CardSuccessContent,
	ImageContent,
	SuccessContent,
	SuccessDescription,
	SuccessHeader,
	SuccessIcon,
	SuccessItem,
} from "./styles";

export function Success() {
	const { order } = useContext(CartContext);
	const { orderId } = useParams();
	const navigate = useNavigate();
	const orderData = order.find((item) => item.id === orderId);

	const paymentMethod = {
		credit: "Cartão de crédito",
		debit: "Cartão de débito",
		cash: "Dinheiro",
	};

	if (!orderData) {
		navigate("/");
	}

	const { shipping } = orderData as Order;

	return (
		<Container>
			<SuccessHeader>
				<h1>Uau! Pedido Confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>
			</SuccessHeader>
			<SuccessContent>
				<CardSuccess>
					<CardSuccessContent>
						<SuccessItem>
							<SuccessIcon variant="purple">
								<MapPin weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<div>
									<h2>Entrega em </h2>
									<p>{`${shipping.street}, ${shipping.number}`}</p>
								</div>
								<div>{`${shipping.neighborhood} - ${shipping.city}, ${shipping.stateAbbreviation}`}</div>
							</SuccessDescription>
						</SuccessItem>
						<SuccessItem>
							<SuccessIcon variant="yellow">
								<Clock weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<h2>Previsão de entrega</h2>
								<p>20 min - 30 min</p>
							</SuccessDescription>
						</SuccessItem>
						<SuccessItem>
							<SuccessIcon variant="yellowDark">
								<CurrencyDollar weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<h2>Pagamento na entrega</h2>
								<p>{`${paymentMethod[shipping.paymentMethod]}`}</p>
							</SuccessDescription>
						</SuccessItem>
					</CardSuccessContent>
				</CardSuccess>
				<ImageContent>
					<img src={successImage} alt="" />
				</ImageContent>
			</SuccessContent>
		</Container>
	);
}
