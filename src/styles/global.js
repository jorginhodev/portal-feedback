import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --blue: #5429CC;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
