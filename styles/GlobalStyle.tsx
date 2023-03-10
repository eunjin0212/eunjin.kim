import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeInterface } from 'types/ThemeType';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
    color: inherit;
    box-sizing: border-box;
  }

  *, :after, :before, ::before, ::after {
    box-sizing: border-box;
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  html, body, #__next {
    height: 100%;
  }
  #__next {
    padding-top: 45px;
  }

  #__next, .MuiAppBar-root, .MuiTypography-root {
    background-color: ${({ theme }: ThemeInterface) => theme.body};
    color: ${({ theme }: ThemeInterface) => theme.text};
  }

  img, picture, video, svg, canvas {
    display: block;
    max-width: 100%;
  }

  button,
  [role='button'] {
    border: 0;
    border-radius: 0;
    background: none;
    user-select: none;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  input, img, fieldset, iframe {
    border: 0;
  }

  address, em, i {
    font-style: normal;
  }

  :focus {
    outline: none;
  }
`;

export default GlobalStyle;
