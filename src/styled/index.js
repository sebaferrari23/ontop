import { createGlobalStyle } from 'styled-components';

import AileronBoldWoff from '../assets/fonts/Aileron-Bold.woff';
import AileronBoldWoff2 from '../assets/fonts/Aileron-Bold.woff2';
import AileronBoldItalicWoff from '../assets/fonts/Aileron-BoldItalic.woff';
import AileronBoldItalicWoff2 from '../assets/fonts/Aileron-BoldItalic.woff2';

import AileronRegularWoff from '../assets/fonts/Aileron-Regular.woff';
import AileronRegularWoff2 from '../assets/fonts/Aileron-Regular.woff2';
import AileronItalicWoff from '../assets/fonts/Aileron-Italic.woff';
import AileronItalicWoff2 from '../assets/fonts/Aileron-Italic.woff2';

import AileronLightWoff from '../assets/fonts/Aileron-Light.woff';
import AileronLightWoff2 from '../assets/fonts/Aileron-Light.woff2';
import AileronLightItalicWoff from '../assets/fonts/Aileron-LightItalic.woff';
import AileronLightItalicWoff2 from '../assets/fonts/Aileron-LightItalic.woff2';

export const GlobalStyle = createGlobalStyle`

  // Reset
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    all: unset;
    cursor: pointer;
  }

  // Variables
  :root {
    --white: #ffffff;
    --black: #000000;
    --bg-primary: #F9F9F9;
    --primary: #FF5A70;
    --grey-dark: #3B3B3B;
    --grey: #898989;
    --grey-light: #BEBEBE;
    --main-font: Aileron, Arial, sans-serif;
    --border-radius: 5px;
  }

  // Fonts
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronLightWoff2}) format('woff2'),
         url(${AileronLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronLightItalicWoff2}) format('woff2'),
         url(${AileronLightItalicWoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronRegularWoff2}) format('woff2'),
         url(${AileronRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronItalicWoff2}) format('woff2'),
         url(${AileronItalicWoff}) format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronBoldWoff2}) format('woff2'),
         url(${AileronBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Aileron';
    src: url(${AileronBoldItalicWoff2}) format('woff2'),
         url(${AileronBoldItalicWoff}) format('woff');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
  body {
    background-color: var(--bg-primary);
    margin: 0;
    font-family: var(--main-font);
    color: var(--grey-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`;

