import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CartProvider>
					<Router />
				</CartProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
