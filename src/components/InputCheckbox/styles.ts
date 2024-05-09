import styled from "styled-components";

interface CheckboxItemProps {
	hasError: boolean;
}

export const CheckboxItem = styled.label<CheckboxItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  padding: 1rem;
  
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["gray-400"]};
  
  text-transform: uppercase;
  transition: all 0.2s;

  border-color: ${(props) => props.hasError && `${props.theme.red}`};

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }

  input {
    display: none;
  }

  &[data-state="true"] {
    background-color: ${(props) => props.theme["purple-100"]};
    border-color: ${(props) => props.theme["purple-400"]};
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.6;
  }
`;
