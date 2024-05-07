import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Figtree', sans-serif;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

export default Global;