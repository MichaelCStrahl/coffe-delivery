import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import successImage from "../../assets/success-image.png";
import { Container } from "../../components/Container";
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
							<SuccessIcon>
								<MapPin weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<div>
									<h2>Entrega em </h2>
									<p>Rua João Daniel Martinelli, 102</p>
								</div>
								<div>Farrapos - Porto Alegre, RS</div>
							</SuccessDescription>
						</SuccessItem>
						<SuccessItem>
							<SuccessIcon>
								<Clock weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<h2>Previsão de entrega</h2>
								<p>20 min - 30 min</p>
							</SuccessDescription>
						</SuccessItem>
						<SuccessItem>
							<SuccessIcon>
								<CurrencyDollar weight="fill" size={16} color="#fff" />
							</SuccessIcon>
							<SuccessDescription>
								<h2>Pagamento na entrega</h2>
								<p>Cartão de crédito</p>
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
