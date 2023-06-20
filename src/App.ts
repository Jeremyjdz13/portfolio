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
  width: 'clamp(350px, 100vw, 1200px',
  scrollSnapType: 'y mandatory',
  scrollPaddingTop: '50px',
  margin: 'auto',
};

const bodyStyles: CSSProperties = {
  color: 'hsl(72,2%,85%)',
  height: '100vh',
  margin: '0',
  padding: '0',
}
const rootElement = document.documentElement;
const bodyElement = document.body;

Object.assign(rootElement.style, rootStyles)
Object.assign(bodyElement.style, bodyStyles)

export const BodyContainer = styled.div`
  height: 100vh;
`
export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 55% 45%;
  height: 100vh;
  background-image: url(/src/assets/images/portfolio_art_1500w.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  scroll-snap-align: start;
  
  @media (max-width: 840px) {
    background-image: url(/src/assets/images/portfolio_art_840w.jpg);
  }

  @media (max-width: 500px) {
    background-image: url(/src/assets/images/portfolio_art_450w.jpg);
  }
`

export const AboutContainer = styled.div`
  height: 100vh;
  background-image: url(/src/assets/images/selfportrait_web.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  scroll-snap-align: start;

`
export const ProjectsContainer = styled.div`
  height: 100vh;
  background-image: url(/src/assets/images/floating_woman.jpg);
  background-size: fit;
  background-repeat: no-repeat;
  scroll-snap-align: start;

`
export const ContactContainer = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;

`
export const ResumeContainer = styled.div`
  height: 100vh;
  border: yellow solid 1px;
  background-color: yellow;
  scroll-snap-align: start;

`

/* 
  Blue pallet: hsl(213.33, 100%, 30%),hsl(213.33, 100%, 37.06%), hsl(213.21, 100%, 43.92%), 
  White: hsl(0, 0%, 100%)
*/