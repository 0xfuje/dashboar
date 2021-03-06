import { createGlobalStyle } from "styled-components";
import background from '../public/background.svg';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.light1};
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
      font-size: 13px;
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
      font-size: 12px;
  }
}

h1, h2, h3, h4, h5 {
  font-weight: 500;
  font-size: ${({theme}) => theme.sizes.font.xlarge}
}

a {
  color: inherit;
  text-decoration: none;
}

html {
    background-color: ${props => props.theme.colors.dark2};
    color: ${props => props.theme.colors.light1};
    margin-bottom: 5rem;
}
body {
    max-width: ${props => props.theme.sizes.width.full_width};
    background-color: ${props => props.theme.colors.dark2};
    margin: 0 auto;
}
.css-us6vhb {
  color: #000;
}
`

export default GlobalStyles;