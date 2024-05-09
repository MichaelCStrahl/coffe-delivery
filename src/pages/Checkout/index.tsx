import { zodResolver } from "@hookform/resolvers/zod";
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
import { type SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import coffee from "../../assets/coffee-options/espresso.png";
import {
	AmountContent,
	CardCheckoutLayout,
} from "../../components/Card/styles";
import { Container } from "../../components/Container";
import { InputCheckbox } from "../../components/InputCheckbox";
import { CheckboxItem } from "../../components/InputCheckbox/styles";
import { InputText } from "../../components/InputText";
import {
	CheckboxContent,
	CheckoutActionContent,
	CheckoutContent,
	CheckoutTitle,
	ErrorPaymentMethodMessage,
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

const deliveryAddressFormValidationSchema = z.object({
	zipCode: z.string().min(8, "Informe o CEP").max(9),
	street: z.string().min(1, "Informe a Rua"),
	number: z.number({ message: "Informe o Número" }).min(1, "Informe o Número"),
	complement: z.string().optional(),
	neighborhood: z.string().min(1, "Informe o Bairro"),
	city: z.string().min(1, "Informe a Cidade"),
	stateAbbreviation: z
		.string()
		.min(2, "Informe o Estado")
		.max(2, "Informe o Estado abreviado"),
	paymentMethod: z.enum(["credit", "debit", "cash"], {
		invalid_type_error: "Informe um método de pagamento",
	}),
});

export type FormInputType = z.infer<typeof deliveryAddressFormValidationSchema>;

export function Checkout() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormInputType>({
		resolver: zodResolver(deliveryAddressFormValidationSchema),
	});

	const hasPaymentMethodError = !!errors.paymentMethod?.message;

	const selectedPaymentMethod = watch("paymentMethod");

	const handleDeliveryAddress: SubmitHandler<FormInputType> = (data) => {
		console.log(data);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(handleDeliveryAddress)}>
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
								<InputText
									placeholder="CEP"
									id="zipCode"
									type="text"
									errorMessage={errors.zipCode?.message as string}
									{...register("zipCode")}
								/>
								<InputText
									placeholder="Rua"
									id="street"
									type="text"
									errorMessage={errors.street?.message as string}
									{...register("street")}
								/>
								<InputText
									placeholder="Número"
									id="number"
									type="text"
									errorMessage={errors.number?.message as string}
									{...register("number", { valueAsNumber: true })}
								/>
								<InputText
									placeholder="Complemento"
									id="complement"
									type="text"
									errorMessage={errors.complement?.message as string}
									{...register("complement")}
								/>
								<InputText
									placeholder="Bairro"
									id="neighborhood"
									type="text"
									errorMessage={errors.neighborhood?.message as string}
									{...register("neighborhood")}
								/>
								<InputText
									placeholder="Cidade"
									id="city"
									type="text"
									errorMessage={errors.city?.message as string}
									{...register("city")}
								/>
								<InputText
									placeholder="UF"
									id="stateAbbreviation"
									type="text"
									errorMessage={errors.stateAbbreviation?.message as string}
									{...register("stateAbbreviation")}
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
								<InputCheckbox
									value="credit"
									paymentSelected={selectedPaymentMethod === "credit"}
									hasError={hasPaymentMethodError}
									textContent={"Cartão de crédito"}
									{...register("paymentMethod")}
								/>
								<InputCheckbox
									value="debit"
									paymentSelected={selectedPaymentMethod === "debit"}
									hasError={hasPaymentMethodError}
									textContent={"Cartão de Débito"}
									{...register("paymentMethod")}
								/>
								<InputCheckbox
									value="cash"
									paymentSelected={selectedPaymentMethod === "cash"}
									hasError={hasPaymentMethodError}
									textContent={"Dinheiro"}
									{...register("paymentMethod")}
								/>
							</CheckboxContent>
							{hasPaymentMethodError && (
								<ErrorPaymentMethodMessage>
									{errors.paymentMethod?.message as string}
								</ErrorPaymentMethodMessage>
							)}
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
								<button title="Confirmar Pedido" type="submit">
									Confirmar Pedido
								</button>
							</CheckoutActionContent>
						</CardCheckoutLayout>
					</div>
				</CheckoutContent>
			</form>
		</Container>
	);
}
