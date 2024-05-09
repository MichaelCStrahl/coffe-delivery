import styled from "styled-components";

export const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  margin-top: 2.5rem;
  gap: 2rem;
`;

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  color: ${(props) => props.theme["gray-800"]};
  margin-bottom: 0.9375rem;
`;

export const CheckoutCart = styled.div`
  background: ${(props) => props.theme["gray-200"]};
`;

export const ShippingHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ShippingHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const MainFormLayout = styled.div`
  display: grid;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number complement complement'
    'neighborhood city stateAbbreviation';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 1rem 0.75rem;
  margin-top: 2rem;
  width: 100%;
`;

export const CheckboxContent = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const ErrorPaymentMethodMessage = styled.p`
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.25rem;
  color: ${(props) => props.theme.red};
`;

export const ItemCardContent = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  &:first-child {
    padding-top: 0;
  }

  img {
    height: 64px;
    width: 64px;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ItemActionsContent = styled.div`
  display: flex;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["gray-700"]};
  padding: 0 0.5rem;
  cursor: pointer;
  line-height: 0;

  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["gray-400"]};
`;

export const PurchaseSummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  &:first-child {
    margin-top: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PurchaseSummaryItemTotal = styled(PurchaseSummaryItem)`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CheckoutActionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    background-color: ${(props) => props.theme["yellow-400"]};
    width: 100%;
    border-radius: 6px;
    border: 0;
    margin-top: 1rem;
    cursor: pointer;

    font-size: 0.875rem;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    padding: 0.75rem 0;
  }
`;
