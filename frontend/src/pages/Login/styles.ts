import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: grid;
    grid-template-columns: 5rem auto;
    gap: 0.5rem;
    input {
      border: 1px solid ${colors.black};
    }
    margin: 0.5rem 0;
  }
  button {
    background-color: ${colors.primary};
    padding: 0.4rem;
    border-radius: 0.3rem;
  }
`;
