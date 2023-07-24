import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
:root {
  scroll-behavior: smooth;
}
*, 
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
html, body {
  height: 100%;
}
body {
    margin: 0 auto;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
      font-family: 'Roboto', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #313030;
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
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .beers__section {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .beers__container {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
.beers__btn {
  display: flex;
  gap: 20px;
}

  .btn {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4b4b4b;
    border: none;
    outline: none;
    color: #fff;
    box-shadow: 0 0 3px #fff;
    transition: all 300ms ease;
    &:hover {
      background-color: #fff;
      color: #000;
      box-shadow: 0 0 6px #fff;
    }
    
    &:focus {
      box-shadow: 0 0 6px #fff;
    }
  }
  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
