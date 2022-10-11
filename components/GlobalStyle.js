import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --text-primary: #0c2c4d;
        --text-secondary: #2585e6;
        --text-light: #0c2c4d99;
        --white: #ffffff;
        --background-light: #edf0f5;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    
    h1 {
        margin-top: 0;
    }
`;

export default GlobalStyle;
