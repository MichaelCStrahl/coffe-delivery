import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Minus,
	Money,
	Plus,
	Trash,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import coffee from "../../assets/coffee-options/espresso.png";
import {
	AmountContent,
	CardCheckoutLayout,
} from "../../components/Card/styles";
import { Container } from "../../components/Container";
import {
	CheckboxContent,
	CheckboxItem,
	CheckoutActionContent,
	CheckoutContent,
	CheckoutTitle,
	ItemActionsContent,
	ItemCardContent,
	ItemContent,
	MainFormLayout,
	PurchaseSummaryItem,
	PurchaseSummaryItemTotal,
	RemoveButton,
	ShippingHeader,
	ShippingHeaderContent,
} from "./styles";

export function Checkout() {
	return (
		<Container>
			<form>
				<CheckoutContent>
					<div>
						<CheckoutTitle>Complete seu pedido</CheckoutTitle>
						<CardCheckoutLayout>
							<ShippingHeader>
								<MapPinLine size="24" weight="regular" color="#C47F17" />
								<ShippingHeaderContent>
									<h1>Endereço de entrega</h1>
									<p>Informe o endereço onde deseja receber seu pedido</p>
								</ShippingHeaderContent>
							</ShippingHeader>
							<MainFormLayout>
								<input
									placeholder="CEP"
									id="zipCode"
									type="text"
									style={{ gridArea: "zipCode" }}
								/>
								<input
									placeholder="Rua"
									style={{ gridArea: "street" }}
									id="street"
									type="text"
								/>
								<input
									placeholder="Número"
									id="number"
									type="text"
									style={{ gridArea: "number" }}
								/>
								<input
									placeholder="Complemento"
									id="complement"
									type="text"
									style={{ gridArea: "complement" }}
								/>
								<input
									placeholder="Bairro"
									id="neighborhood"
									type="text"
									style={{ gridArea: "neighborhood" }}
								/>
								<input
									placeholder="Cidade"
									id="city"
									type="text"
									style={{ gridArea: "city" }}
								/>
								<input
									placeholder="UF"
									id="stateAbbreviation"
									type="text"
									style={{ gridArea: "stateAbbreviation" }}
								/>
							</MainFormLayout>
						</CardCheckoutLayout>
						<CardCheckoutLayout>
							<ShippingHeader>
								<CurrencyDollar size="24" weight="regular" color="#8047F8" />
								<ShippingHeaderContent>
									<h1>Pagamento</h1>
									<p>
										O pagamento é feito na entrega. Escolha a forma que deseja
										pagar
									</p>
								</ShippingHeaderContent>
							</ShippingHeader>

							<CheckboxContent>
								<CheckboxItem htmlFor="credit" data-state={true}>
									<CreditCard size={16} color="#8047F8" />
									<input type="radio" name="paymentMethod" id="credit" />
									<span>Cartão de crédito</span>
								</CheckboxItem>
								<CheckboxItem htmlFor="credit">
									<Bank size={16} color="#8047F8" />
									<input type="radio" name="paymentMethod" id="debit" />
									<span>Cartão de Débito</span>
								</CheckboxItem>
								<CheckboxItem htmlFor="credit">
									<Money size={16} color="#8047F8" />
									<input type="radio" name="paymentMethod" id="money" />
									<span>Dinheiro</span>
								</CheckboxItem>
							</CheckboxContent>
						</CardCheckoutLayout>
					</div>
					<div>
						<CheckoutTitle>Cafés selecionados</CheckoutTitle>
						<CardCheckoutLayout>
							<ItemCardContent>
								<img
									id="coffee-image"
									src={coffee}
									alt="Café Expresso Tradicional"
								/>
								<ItemContent>
									<h2>Expresso Tradicional</h2>
									<ItemActionsContent>
										<AmountContent>
											<button type="button">
												<Minus size="16" weight="fill" />
											</button>
											<span>1</span>
											<button type="button">
												<Plus size="16" weight="fill" />
											</button>
										</AmountContent>
										<RemoveButton>
											<Trash size="22" weight="regular" color="#8047F8" />
											<span>Remover</span>
										</RemoveButton>
									</ItemActionsContent>
								</ItemContent>
								<p>R$ 9,90</p>
							</ItemCardContent>
							<ItemCardContent>
								<img
									id="coffee-image"
									src={coffee}
									alt="Café Expresso Tradicional"
								/>
								<ItemContent>
									<h2>Expresso Tradicional</h2>
									<ItemActionsContent>
										<AmountContent>
											<button type="button">
												<Minus size="16" weight="fill" />
											</button>
											<span>1</span>
											<button type="button">
												<Plus size="16" weight="fill" />
											</button>
										</AmountContent>
										<RemoveButton>
											<Trash size="22" weight="regular" color="#8047F8" />
											<span>Remover</span>
										</RemoveButton>
									</ItemActionsContent>
								</ItemContent>
								<p>R$ 9,90</p>
							</ItemCardContent>

							<CheckoutActionContent>
								<PurchaseSummaryItem>
									<span>Total items</span>
									<span>R$ 29,70</span>
								</PurchaseSummaryItem>
								<PurchaseSummaryItem>
									<span>Entrega</span>
									<span>R$ 20,00</span>
								</PurchaseSummaryItem>
								<PurchaseSummaryItemTotal>
									<span>Total</span>
									<span>R$ 49,70</span>
								</PurchaseSummaryItemTotal>
								<NavLink to="/success" title="Confirmar Pedido" type="submit">
									Confirmar Pedido
								</NavLink>
							</CheckoutActionContent>
						</CardCheckoutLayout>
					</div>
				</CheckoutContent>
			</form>
		</Container>
	);
}
