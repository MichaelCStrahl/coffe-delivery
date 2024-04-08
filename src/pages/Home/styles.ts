import styled from "styled-components";

export const BannerLayout = styled.section`
  display: flex;
  position: relative;

  img#bg-banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const BannerContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4.875rem;
  padding: 5.9rem 0;
  height: 100%;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainTitle = styled.header`
  font-size: 3rem;
  color: ${(props) => props.theme["gray-900"]};
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme["gray-700"]};
  padding-right: 4rem;
  padding-top: 1rem;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.25rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const INFO_ICON_COLOR = {
	yellowDark: "yellow-700",
	yellow: "yellow-400",
	purple: "purple-400",
	gray: "gray-700",
} as const;

interface InfoIconProps {
	infoColor: keyof typeof INFO_ICON_COLOR;
}

export const IconInfo = styled.span<InfoIconProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => props.theme[INFO_ICON_COLOR[props.infoColor]]};
`;

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;
`;

export const TitleSecondary = styled.header`
  font-size: 2rem;
  color: ${(props) => props.theme["gray-800"]};
`;

export const CoffeeList = styled.div`
  display: grid;
  margin-top: 3.75rem;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  row-gap: 2.5rem;
`;
