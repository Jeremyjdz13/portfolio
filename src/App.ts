import { CSSProperties } from "react";
import CrimsonTextBold from './assets/fonts/Crimson_Text/CrimsonText-Bold.ttf';
import CrimsonTextBoldItalic from './assets/fonts/Crimson_Text/CrimsonText-BoldItalic.ttf';
import CrimsonTextItalic from './assets/fonts/Crimson_Text/CrimsonText-Italic.ttf';
import CrimsonTextRegular from './assets/fonts/Crimson_Text/CrimsonText-Regular.ttf';
import CrimsonTextSemiBold from './assets/fonts/Crimson_Text/CrimsonText-SemiBold.ttf';
import CrimsonTextSemiBoldItalic from './assets/fonts/Crimson_Text/CrimsonText-SemiBoldItalic.ttf';
import styled from 'styled-components'


interface FontStyles extends CSSProperties {
  src: string;
}


const rootStyles: FontStyles = {
  fontFamily: 'Crimson',
  fontStyle: 'normal',
  src: `
    url(${CrimsonTextBold}) format('truetype'),
    url(${CrimsonTextBoldItalic}) format('truetype'),
    url(${CrimsonTextItalic}) format('truetype'),
    url(${CrimsonTextRegular}) format('truetype'),
    url(${CrimsonTextSemiBold}) format('truetype'),
    url(${CrimsonTextSemiBoldItalic}) format('truetype')
  `,
  backgroundColor: 'hsla(0, 100%, 0%)',
  border: '0',
  scrollSnapType: 'y mandatory',
  overflowY: 'scroll',
  // scrollPaddingTop: '50px',
  margin: '0 auto',
  height: '100vh',
  width: 'clamp(320px, 100%, 1200px)'
};

const rootElement = document.documentElement;

Object.assign(rootElement.style, rootStyles)

export const AppContainer = styled.div`
  color: hsl(72,2%,85%);
  height: 100%;
  padding: 0;
  // width: clamp(320px, 100%, 1200px);
`

export const Section = styled.div`
  height: 100vh;
  background-image: none;
  background-size: cover;
  background-repeat: no-repeat;
  scroll-snap-align: start;
  padding-block: 50px;
`

/* 
  Blue pallet: hsl(213.33, 100%, 30%),hsl(213.33, 100%, 37.06%), hsl(213.21, 100%, 43.92%), 
  White: hsl(0, 0%, 100%)
*/