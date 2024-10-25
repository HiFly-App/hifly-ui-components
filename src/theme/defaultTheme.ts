import {getColors} from './colors';

export type ThemeMode = 'light' | 'dark';

export const getDefaultTheme = (mode: ThemeMode) => {
  return {
    borderRadius: '8px',
    colors: getColors(mode),
  };
};

export type Theme = ReturnType<typeof getDefaultTheme>;
