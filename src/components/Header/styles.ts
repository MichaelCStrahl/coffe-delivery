import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const LocationButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;
  min-width: 2.4rem;
  height: 2.4rem;
  gap: 0.25rem;
  
  border-radius: 6px;
  background: ${(props) => props.theme["purple-100"]};

  span {
    color: ${(props) => props.theme["purple-700"]};
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme["purple-400"]}
  }
`;

export const CartButton = styled.div`
  a {
    cursor: pointer;
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme["yellow-100"]};

    svg {
      color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;

export const CountCartItems = styled.span`
  position: absolute;
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  top: -0.5rem;
  right: -0.5rem;

  background: ${(props) => props.theme["yellow-700"]};
  border-radius: 50%;

  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  line-height: 0;
`;
