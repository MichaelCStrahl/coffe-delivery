import { CreditCard } from "phosphor-react";
import { type InputHTMLAttributes, forwardRef } from "react";
import { CheckboxItem } from "./styles";

interface InputCheckbox extends InputHTMLAttributes<HTMLInputElement> {
	hasError: boolean;
	textContent: string;
	paymentSelected: boolean;
}

export const InputCheckbox = forwardRef(function InputCheckbox(
	{ hasError = false, paymentSelected, textContent, ...props }: InputCheckbox,
	ref: React.Ref<HTMLInputElement>,
) {
	return (
		<CheckboxItem hasError={hasError} data-state={paymentSelected}>
			<CreditCard size={16} color="#8047F8" />
			<input type="radio" ref={ref} {...props} />
			<span>{textContent}</span>
		</CheckboxItem>
	);
});
