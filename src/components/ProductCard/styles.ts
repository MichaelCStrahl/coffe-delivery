import styled from "styled-components";

export const BaseCardLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 19.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background: ${(props) => props.theme["gray-200"]};
`;

export const CardProductLayout = styled(BaseCardLayout)`
  justify-content: flex-end;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem 1.5rem;

  img#coffee-image {
    position: absolute;
    content: '';
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CardCheckoutLayout = styled(BaseCardLayout)`
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  align-items: flex-start;
  margin-top: 0.75rem;
  min-height: auto;

  .goToHome {
    background-color: transparent;
    width: 100%;
    border-radius: 6px;
    margin-top: 1rem;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["purple-400"]};

    font-size: 0.875rem;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    color: ${(props) => props.theme["purple-400"]};
    text-transform: uppercase;
    padding: 0.75rem 0;
    transition: all 0.2s;

    :hover {
      background-color: ${(props) => props.theme["purple-400"]};
      color: ${(props) => props.theme.white};
    }
  }
`;

export const CartItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-height: 16.25rem;
  overflow: hidden;
  overflow-y: auto;
  padding-right: 0.625rem;
`;

export const CardCheckoutListItemsLayout = styled(BaseCardLayout)`
  padding: 2.5rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  min-height: auto;
`;

export const BadgeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const Badge = styled.span`
  font-size: 0.625rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  font-weight: 700;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-700"]};
`;

export const CardTitle = styled.h1`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  margin-top: 1rem;
  color: ${(props) => props.theme["gray-800"]};
`;

export const DescriptionCard = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme["gray-600"]};
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

export const ActionsBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Currency = styled.span`
  font-size: 0.875rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  padding-left: 0.2rem;
  line-height: 0.7;
`;

export const ActionsContent = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  overflow: hidden;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-400"]};

  button {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    height: 2.4rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    svg {
      color: ${(props) => props.theme["purple-400"]};
    }

    :hover {
      background-color: ${(props) => props.theme["gray-500"]};
      svg {
        color: ${(props) => props.theme["purple-700"]};
      }
    }

    :focus {
      box-shadow: none;
    }
  }

  span {
    padding: 0 0.4rem;
  }
`;

export const CartButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-700"]};
  transition: all 0.2s;

  :hover {
    background: ${(props) => props.theme["purple-400"]};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`;

export const AddedItemToCardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-700"]};
`;
