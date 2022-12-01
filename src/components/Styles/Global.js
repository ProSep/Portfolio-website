import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 1rem;
    }
    body {
        background-color: #12263aff;
    }
    h1 {
        font-style: normal;
        font-weight: 300;
        color: #FFFFFF;
        z-index: 5;
        font-size: 6em;
         padding-bottom: 0;
        @media only screen and (max-width: 500px) {
            font-size: 2em;
        }
    }
    h2 {
        font-style: normal;
        font-weight: 300;
        font-size: 4.1em;
        line-height: 82px;
        color: #FFFFFF;
        z-index: 5;
        margin-bottom: 0.5em;
    }
    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 31px;
        line-height: 38px;
        color: #FFFFFF;
        z-index: 5;
        padding-bottom: 1em;
    }
    p {
        font-size: 1em;
        font-style: normal;
        color: #FFFFFF;
        z-index: 5;
        padding-bottom: 1em;
    }
    svg {
        filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    }
`

export default GlobalStyle;