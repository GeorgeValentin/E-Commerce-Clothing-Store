import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 20px 40px;
        font-family: 'Saira Semi Condensed', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        
        @media screen and (max-width: 400px) {
            padding: 20px 30px;
        }
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
    text-decoration: none;
    color: black;
    }

    // * = apply the styles to everything
    * {
    box-sizing: border-box;
    }
`;
