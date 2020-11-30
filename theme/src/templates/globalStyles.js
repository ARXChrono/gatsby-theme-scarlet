import { createGlobalStyle } from "styled-components"
import theme from "../theme"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${theme.colors.background};
    letter-spacing: 0.3px;
    font-family: ${theme.fonts.body};
  }
`
export default GlobalStyles
