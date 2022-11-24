import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Tahoma, sans-serif;
    
    }
    body {
        background-color: #12263aff;
    }
    h1 {
        
font-style: normal;
font-weight: 300;
font-size: 67px;
line-height: 82px;
text-transform: capitalize;

color: #FFFFFF;
    }

`

export default GlobalStyle;