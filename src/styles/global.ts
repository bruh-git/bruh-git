import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  body {
  background: #F8FDFF;
  font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
    color: unset;
  }
`

export default globalStyle;