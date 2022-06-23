import { css } from "@emotion/react";

const GlobalStyle = css`
  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

export default GlobalStyle;
