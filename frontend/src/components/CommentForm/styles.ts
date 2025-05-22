import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SForm = styled.form`
  div {
    display: grid;
    grid-template-columns: 5rem auto;
    gap: 0.5rem;
    input {
      border: 1px solid ${colors.black};
    }
  }
`;
