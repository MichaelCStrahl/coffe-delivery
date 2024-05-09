import { type InputHTMLAttributes, forwardRef } from "react";
import { ErrorMessage, InputContentLayout, InputLayout } from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string;
}

export const InputText = forwardRef(function InputText(
	{ errorMessage, ...props }: InputTextProps,
	ref: React.Ref<HTMLInputElement>,
) {
	const hasError = !!errorMessage;

	return (
		<InputContentLayout gridArea={String(props.id)}>
			<InputLayout error={hasError} ref={ref} {...props} />
			{hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</InputContentLayout>
	);
});
