import { CSSProperties } from "react";
import CrimsonTextBold from './assets/fonts/Crimson_Text/CrimsonText-Bold.ttf';
import CrimsonTextBoldItalic from './assets/fonts/Crimson_Text/CrimsonText-BoldItalic.ttf';
import CrimsonTextItalic from './assets/fonts/Crimson_Text/CrimsonText-Italic.ttf';
import CrimsonTextRegular from './assets/fonts/Crimson_Text/CrimsonText-Regular.ttf';
import CrimsonTextSemiBold from './assets/fonts/Crimson_Text/CrimsonText-SemiBold.ttf';
import CrimsonTextSemiBoldItalic from './assets/fonts/Crimson_Text/CrimsonText-SemiBoldItalic.ttf';

interface FontStyles extends CSSProperties {
  src: string;
}

interface AppStyles {
  menuContainer: CSSProperties;
  orangeContainer: CSSProperties;
  titleContainer: CSSProperties;
  blueContainer: CSSProperties;
  // title: TitleFontStyle;
  // titleImage: CSSProperties;
}

// interface TitleFontStyle extends CSSProperties {
//   src: string;
// }

const fontStyles: FontStyles = {
  fontFamily: 'Crimson Text',
  fontStyle: 'normal',
  src: `
    url(${CrimsonTextBold}) format('truetype'),
    url(${CrimsonTextBoldItalic}) format('truetype'),
    url(${CrimsonTextItalic}) format('truetype'),
    url(${CrimsonTextRegular}) format('truetype'),
    url(${CrimsonTextSemiBold}) format('truetype'),
    url(${CrimsonTextSemiBoldItalic}) format('truetype')
  `,
};

const bodyStyles: CSSProperties = {
  backgroundColor: 'hsl(0, 0%, 100%)',
  maxWidth: '1200px',
  // width: '100%',
  margin: 'auto'
}

const bodyElement = document.body
Object.assign(bodyElement.style, bodyStyles)

const rootElement = document.documentElement;
Object.assign(rootElement.style, fontStyles)

export const appStyles: AppStyles = {
  // title: {
  //   src: `
  //   url(${CrimsonTextBold}) format('truetype'),
  //   `
  // },
  menuContainer: {
    height: '50px',
    padding: '15px',
    textAlign: 'right'
  },
  orangeContainer: {
    backgroundColor: 'hsl(18.11, 87.4%, 50.2%)',
    height: '500px'
  },
  titleContainer: {
    border: 'black 1px solid',
    height: '150px',
    backgroundImage: 'url(/src/assets/images/JeremyDiazTitle_Portfolio.png)'
  },
  blueContainer: {
    border: 'blue 1px solid',
    backgroundColor: 'hsl(213.18, 100%, 64.9%)',
    height: '60%'
  }
}


/* 
  Blue pallet: hsl(213.33, 100%, 30%),hsl(213.33, 100%, 37.06%), hsl(213.21, 100%, 43.92%), 
  White: hsl(0, 0%, 100%)
*/