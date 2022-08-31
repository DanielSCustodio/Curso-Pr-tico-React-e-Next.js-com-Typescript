import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #010409 ;
    font-family: Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 70%;
    margin: 0 auto;
    padding: 0.5rem 0.25rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
`;
