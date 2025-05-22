import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SMain = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0.5rem;

  section {
    background-color: ${colors.secondaryLight};
    border: 0.2rem solid ${colors.secondary};
    border-radius: 0.5rem;

    a {
      text-decoration: none;
      color: ${colors.primary};
      font-weight: bold;
    }
  }
`;
