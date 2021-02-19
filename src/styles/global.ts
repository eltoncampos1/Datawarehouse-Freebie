import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        background: #E5E5E5;
    }

    button {
        border: 0;
    }
`

export default GlobalStyle;