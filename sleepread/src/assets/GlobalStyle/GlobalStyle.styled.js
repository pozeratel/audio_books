import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0;
  }
`;
