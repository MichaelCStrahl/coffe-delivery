import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Container>
				<Header />
			</Container>
			<Outlet />
		</LayoutContainer>
	);
}
