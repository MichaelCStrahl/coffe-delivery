import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import bgBanner from "../../assets/bg-banner.png";
import coffeeBanner from "../../assets/coffee-banner.png";
import { Container } from "../../components/Container";
import { ProductCard } from "../../components/ProductCard";
import { coffees } from "../../data/products";

import {
	BannerContent,
	BannerLayout,
	CoffeeList,
	CoffeeListContainer,
	Description,
	IconInfo,
	InfoContainer,
	InfoItem,
	MainContentContainer,
	MainTitle,
	TitleSecondary,
} from "./styles";

export function Home() {
	return (
		<>
			<BannerLayout>
				<Container>
					<BannerContent>
						<MainContentContainer>
							<div>
								<MainTitle>
									Encontre o café perfeito para qualquer hora do dia
								</MainTitle>
								<Description>
									Com o Coffee Delivery você recebe seu café onde estiver, a
									qualquer hora
								</Description>
							</div>

							<InfoContainer>
								<InfoItem>
									<IconInfo infoColor="yellowDark">
										<ShoppingCart size={16} weight="fill" color="#fff" />
									</IconInfo>
									<p>Compra simples e segura</p>
								</InfoItem>
								<InfoItem>
									<IconInfo infoColor="gray">
										<Package size={16} weight="fill" color="#fff" />
									</IconInfo>
									<p>Embalagem mantém o café intacto</p>
								</InfoItem>
								<InfoItem>
									<IconInfo infoColor="yellow">
										<Timer size={16} weight="fill" color="#fff" />
									</IconInfo>
									<p>Entrega rápida e rastreada</p>
								</InfoItem>
								<InfoItem>
									<IconInfo infoColor="purple">
										<Coffee size={16} weight="fill" color="#fff" />
									</IconInfo>
									<p>O café chega fresquinho até você</p>
								</InfoItem>
							</InfoContainer>
						</MainContentContainer>
						<div>
							<img src={coffeeBanner} alt="" />
						</div>
					</BannerContent>
				</Container>
				<img id="bg-banner" src={bgBanner} alt="" />
			</BannerLayout>
			<Container>
				<CoffeeListContainer>
					<TitleSecondary>Nossos Cafés</TitleSecondary>

					<CoffeeList>
						{coffees.map((coffee) => (
							<ProductCard key={coffee.id} coffee={coffee} />
						))}
					</CoffeeList>
				</CoffeeListContainer>
			</Container>
		</>
	);
}
