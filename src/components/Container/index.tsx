import { ContainerLayout } from "./styles";

interface ContainerProps {
	children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
	return <ContainerLayout>{children}</ContainerLayout>;
}
