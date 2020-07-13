import { createGlobalStyle } from 'styled-components';

import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
        line-height: 1;
        font-size: 13px;
        background: ${colors.grey};
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyle;
