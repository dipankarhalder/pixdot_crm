import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      primary: string;
    };
    colors: {
      transparent: string;
      white: string;
      black: string;

      green: string;
      greenbg: string;

      red: string;
      redbg: string;

      orange: string;
      orangebg: string;

      blue: string;
      bluebg: string;

      violet: string;
      violetbg: string;

      yellow: string;
      yellowbg: string;

      blueitem: string;
      blueitembg: string;

      border: string;
      text: string;
    };
  }
}
