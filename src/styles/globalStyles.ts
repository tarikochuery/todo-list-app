import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html, body , #root{
    height: 100%;
    min-width: 375px;

    /* Primary Colors */
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient(135deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%)100%);

    /* Light Theme */
    --very-light-gray: hsl(0, 0%, 98%);
    --very-light-grayish-blue: hsl(236, 33%, 92%);
    --light-grayish-blue: hsl(233, 11%, 84%);
    --dark-grayish-blue: hsl(236, 9%, 61%);
    --very-dark-grayish-blue: hsl(235, 19%, 35%);

    /* Dark Theme */
    --very-dark-blue: hsl(235, 21%, 11%);
    --very-dark-desaturated-blue: hsl(235, 24%, 19%);
    --light-grayish-blue: hsl(234, 39%, 85%);
    --light-grayish-blue-hover: hsl(236, 33%, 92%);
    --dark-grayish-blue: hsl(234, 11%, 52%);
    --very-dark-grayish-blue: hsl(233, 14%, 35%);
    --very-dark-grayish-blue: hsl(237, 14%, 26%);
  }

  html, body, input, button {
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    text-decoration: none;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }
`
  

export default GlobalStyle