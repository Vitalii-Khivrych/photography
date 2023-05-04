import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    

    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family:   ${p => p.theme.fonts.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.1em;

    background-color: #f2f2f2;;
  }

  #__next {
    min-height: 100vh;
    flex-direction: column;
    display: flex;

    /* background-color: #e7eaf2; */

    
  }

  main {
    flex-grow: 1;   
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
   max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }

  5% {
    transform: scale(1.1);
  }

  39% {
    transform: scale(0.85);
  }

  45% {
    transform: scale(1);
  }

  60% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(0.9);
  }
}
`;
