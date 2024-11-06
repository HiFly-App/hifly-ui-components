import {ThemeMode} from '../types';
import {ColorVariablesType} from './types';

export const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparant: 'rgba(0,0,0,0)',

  text_brand_dark: '#F5F5F6',
  text_tertiary_dark: '#94969C',
  text_secondary_dark: '#CECFD2',
  card_dark_border: '#1F242F',
  devider_dark: '#333741',

  gray25: '#FCFCFD',
  gray50: '#F9FAFB',
  gray100: '#F2F4F7',
  gray200: '#E4E7EC',
  gray300: '#D0D5DD',
  gray400: '#98A2B3',
  gray500: '#667085',
  gray600: '#475467',
  gray700: '#344054',
  gray800: '#182230',
  gray900: '#101828',
  gray950: '#0C111D',

  brand25: '#FCFAFF',
  brand50: '#F9F5FF',
  brand100: '#F4EBFF',
  brand200: '#E9D7FE',
  brand300: '#D6BBFB',
  brand400: '#B692F6',
  brand500: '#9E77ED',
  brand600: '#7F56D9',
  brand700: '#6941C6',
  brand800: '#53389E',
  brand900: '#42307D',
  brand950: '#2C1C5F',

  error25: '#FFFBFA',
  error50: '#FEF3F2',
  error100: '#FEE4E2',
  error200: '#FECDCA',
  error300: '#FDA29B',
  error400: '#F97066',
  error500: '#F04438',
  error600: '#D92D20',
  error700: '#B42318',
  error800: '#912018',
  error900: '#7A271A',
  error950: '#55160C',

  warning25: '#FFFCF5',
  warning50: '#FFFAEB',
  warning100: '#FEF0C7',
  warning200: '#FEDF89',
  warning300: '#FEC84B',
  warning400: '#FDB022',
  warning500: '#F79009',
  warning600: '#DC6803',
  warning700: '#B54708',
  warning800: '#93370D',
  warning900: '#7A2E0E',
  warning950: '#4E1D09',

  success25: '#F6FEF9',
  success50: '#ECFDF3',
  success100: '#DCFAE6',
  success200: '#ABEFC6',
  success300: '#75E0A7',
  success400: '#47CD89',
  success500: '#17B26A',
  success600: '#079455',
  success700: '#067647',
  success800: '#085D3A',
  success900: '#074D31',
  success950: '#053321',
};

const colorsLightMode: ColorVariablesType = {
  background: {
    primary: baseColors.white,
  },
  button: {
    primary_default: baseColors.brand600,
    primary_default_text: baseColors.white,
    primary_default_border: 'rgba(255, 255, 255, 0.12)',
    primary_hover: baseColors.brand700,
    primary_hover_text: baseColors.white,
    primary_hover_border: 'rgba(255, 255, 255, 0.24)',
    primary_disabled: baseColors.gray100,
    primary_disabled_text: baseColors.gray400,
    primary_disabled_border: baseColors.gray200,
    secondary_default: baseColors.white,
    secondary_default_text: baseColors.gray700,
    secondary_default_border: baseColors.gray300,
    secondary_hover: baseColors.gray50,
    secondary_hover_text: baseColors.gray800,
    secondary_hover_border: baseColors.gray300,
    secondary_disabled: baseColors.white,
    secondary_disabled_text: baseColors.gray400,
    secondary_disabled_border: baseColors.gray200,
  },
  badge: {
    filled_background: baseColors.warning400,
    filled_text: baseColors.gray900,
    success_background: baseColors.success50,
    success_text: baseColors.success700,
    success_border: baseColors.success200,
  },
  text: {
    brand: baseColors.brand900,
    tertiary: baseColors.gray600,
    primary: baseColors.gray900,
    secondary: baseColors.gray700,
    success: baseColors.success600,
    quaternary: baseColors.gray500,
    error: baseColors.error600,
    warning: baseColors.warning600,
  },
  pill: {
    success: baseColors.success50,
    success_text: baseColors.success700,
    success_border: baseColors.success200,
    error: baseColors.error50,
    error_text: baseColors.error700,
    error_border: baseColors.error200,
  },
  card: {
    background: baseColors.white,
    border: `1px solid ${baseColors.gray200}`,
  },
  devider: {
    background: baseColors.gray200,
  },
};

const colorsDarkMode: ColorVariablesType = {
  background: {
    primary: baseColors.gray950,
  },
  button: {
    primary_default: baseColors.brand500,
    primary_default_text: baseColors.gray50,
    primary_default_border: 'rgba(255, 255, 255, 0.12)',
    primary_hover: baseColors.brand500,
    primary_hover_text: baseColors.gray50,
    primary_hover_border: 'rgba(255, 255, 255, 0.24)',
    primary_disabled: baseColors.gray800,
    primary_disabled_text: baseColors.gray500,
    primary_disabled_border: baseColors.gray800,
    secondary_default: baseColors.gray950,
    secondary_default_text: baseColors.gray300,
    secondary_default_border: baseColors.gray700,
    secondary_hover: baseColors.gray800,
    secondary_hover_text: baseColors.gray200,
    secondary_hover_border: baseColors.gray700,
    secondary_disabled: baseColors.gray950,
    secondary_disabled_text: baseColors.gray500,
    secondary_disabled_border: baseColors.gray800,
  },
  badge: {
    filled_background: baseColors.warning400,
    filled_text: baseColors.gray900,
    success_background: baseColors.success950,
    success_text: baseColors.success300,
    success_border: baseColors.success800,
  },
  text: {
    brand: baseColors.text_brand_dark,
    tertiary: baseColors.text_tertiary_dark,
    primary: baseColors.text_brand_dark,
    secondary: baseColors.text_secondary_dark,
    success: baseColors.success400,
    quaternary: baseColors.text_tertiary_dark,
    error: baseColors.error400,
    warning: baseColors.warning400,
  },
  pill: {
    success: baseColors.success950,
    success_text: baseColors.success300,
    success_border: baseColors.success800,
    error: baseColors.error950,
    error_text: baseColors.error300,
    error_border: baseColors.error800,
  },
  card: {
    background: baseColors.gray950,
    border: `1px solid ${baseColors.card_dark_border}`,
  },
  devider: {
    background: baseColors.devider_dark,
  },
};

const getThemeColors = (mode: ThemeMode) => {
  return {
    ...(mode === 'light' ? colorsLightMode : colorsDarkMode),
  };
};

export const getDefaultTheme = (mode: ThemeMode) => {
  return {
    borderRadius: '8px',
    colors: getThemeColors(mode),
    spacing: {
      xxs: 2,
      xs: 4,
      sm: 6,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 20,
    },
  };
};

export type Theme = ReturnType<typeof getDefaultTheme>;
