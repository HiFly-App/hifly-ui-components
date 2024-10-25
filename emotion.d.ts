import type {Theme as DefaultThemeType} from './src';

declare module '@emotion/react' {
  export interface Theme extends DefaultThemeType {}
}
