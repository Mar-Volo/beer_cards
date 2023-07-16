import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
body {
    margin: 0 auto;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
      font-family: 'Roboto', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  img {
  display: block;
  max-width: 100%;
  height: auto;
  }
  .beers__section {
    padding: 40px 0;
  }
  .beers__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

