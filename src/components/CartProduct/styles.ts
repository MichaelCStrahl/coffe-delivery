import styled from "styled-components";

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
