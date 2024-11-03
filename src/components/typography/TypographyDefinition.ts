import {ColorVariablesType} from '../../theme';
import {TypographyColorDefinitionType, TypographyDefinitionType, TypographyWeightDefinitionType} from './types';

export const TypographyDefinition: TypographyDefinitionType = {
  display: {
    '2xl': {
      fontSize: 72,
      lineHeight: 90,
    },
    xl: {
      fontSize: 60,
      lineHeight: 72,
    },
    lg: {
      fontSize: 48,
      lineHeight: 60,
    },
    md: {
      fontSize: 36,
      lineHeight: 44,
    },
    sm: {
      fontSize: 30,
      lineHeight: 38,
    },
    xs: {
      fontSize: 24,
      lineHeight: 32,
    },
  },
  text: {
    '2xl': {
      fontSize: 24,
      lineHeight: 36,
    },
    xl: {
      fontSize: 20,
      lineHeight: 30,
    },
    lg: {
      fontSize: 18,
      lineHeight: 28,
    },
    md: {
      fontSize: 16,
      lineHeight: 24,
    },
    sm: {
      fontSize: 14,
      lineHeight: 20,
    },
    xs: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
};

export const TypographyWeightDefinition: TypographyWeightDefinitionType = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const GetTypographyColorDefinition = (colors: ColorVariablesType): TypographyColorDefinitionType => {
  return {
    brand: colors.text.brand,
    tertiary: colors.text.tertiary,
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    success: colors.text.success,
    quaternary: colors.text.quaternary,
    error: colors.text.error,
    warning: colors.text.warning,
  };
};
