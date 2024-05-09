import styled, { css } from "styled-components";

interface InputContentLayoutProps {
	gridArea: string;
}

interface InputLayoutProps {
	error: boolean;
}

export const InputContentLayout = styled.div<InputContentLayoutProps>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
`;

export const InputLayout = styled.input<InputLayoutProps>`
  width: 100%;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  background: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-700"]};
  border-radius: 4px;
  height: 2.65rem;
  padding-left: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;

  ${(props) => props.error && css`border-color: ${props.theme.red}`};

  &::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-600"]};
  }

  &:focus {
    border: 1px solid red;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.25rem;
  color: ${(props) => props.theme.red};
`;
