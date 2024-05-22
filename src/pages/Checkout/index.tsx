import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { CartProduct } from "../../components/CartProduct";
import { Container } from "../../components/Container";
import { InputCheckbox } from "../../components/InputCheckbox";
import { InputText } from "../../components/InputText";
import {
	AmountContent,
	CardCheckoutLayout,
	CartItemsContent,
} from "../../components/ProductCard/styles";
import { CartContext } from "../../context/CartContext";
import {
	CheckboxContent,
	CheckoutActionContent,
	CheckoutContent,
	CheckoutTitle,
	ErrorPaymentMethodMessage,
	MainFormLayout,
	PurchaseSummaryItem,
	PurchaseSummaryItemTotal,
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
	const { cart, checkout } = useContext(CartContext);
	const hasItemsInCart = cart.length > 0;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormInputType>({
		resolver: zodResolver(deliveryAddressFormValidationSchema),
	});

	const shippingPrice = 3.5;
	const currencyShippingPrice = shippingPrice.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	const itemsPrice = cart.reduce(
		(acc, { price, quantity }) => acc + price * quantity,
		0,
	);

	const totalItemsPrice = itemsPrice.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	const totalPrice = (shippingPrice + itemsPrice).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		minimumFractionDigits: 2,
	});

	const hasPaymentMethodError = !!errors.paymentMethod?.message;

	const selectedPaymentMethod = watch("paymentMethod");

	const handleDeliveryAddress: SubmitHandler<FormInputType> = (data) => {
		checkout(data);
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
							{hasItemsInCart && (
								<>
									<CartItemsContent>
										{cart.map((coffee) => (
											<CartProduct key={coffee.id} cartCoffee={coffee} />
										))}
									</CartItemsContent>
									<NavLink className="goToHome" to="/" title="Coffee Delivery">
										<p>Escolher mais produtos</p>
									</NavLink>

									<CheckoutActionContent>
										<PurchaseSummaryItem>
											<span>Total items</span>
											<span>{totalItemsPrice}</span>
										</PurchaseSummaryItem>
										<PurchaseSummaryItem>
											<span>Entrega</span>
											<span>{currencyShippingPrice}</span>
										</PurchaseSummaryItem>
										<PurchaseSummaryItemTotal>
											<span>Total</span>
											<span>{totalPrice}</span>
										</PurchaseSummaryItemTotal>
										<button title="Confirmar Pedido" type="submit">
											Confirmar Pedido
										</button>
									</CheckoutActionContent>
								</>
							)}
							{!hasItemsInCart && (
								<CheckoutActionContent>
									<p>Nenhum item selecionado</p>
									<NavLink to="/" title="Coffee Delivery">
										<p>Voltar para Home</p>
									</NavLink>
								</CheckoutActionContent>
							)}
						</CardCheckoutLayout>
					</div>
				</CheckoutContent>
			</form>
		</Container>
	);
}
