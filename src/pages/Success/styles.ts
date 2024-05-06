import styled from "styled-components";

export const SuccessContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const SuccessHeader = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-700"]};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const CardSuccess = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background: ${(props) =>
		`linear-gradient(to bottom right, ${props.theme["yellow-400"]}, ${props.theme["purple-400"]})`};
`;

export const CardSuccessContent = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
`;

export const SuccessItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme["yellow-700"]};
`;

export const SuccessDescription = styled.div`
  div:has(h2 ~ p) {
    display: flex;
    gap: 0.25rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
