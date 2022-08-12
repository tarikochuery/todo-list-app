import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html, body {
    height: 100%;
    min-width: 375px;
  }

  html, body, input, button {
    font-size: 18px;
    font-family: 'Josefin Sans', sans-serif;
    font-smooth: auto;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    
    /* Primary Colors */
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
    
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
`
  

export default GlobalStyle