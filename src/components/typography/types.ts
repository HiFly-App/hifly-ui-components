import {type TextProps as NativeTextProps} from 'react-native';

export type TypographyVariant = 'display' | 'text';
export type TypographySize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TypographyAlignment = 'left' | 'center' | 'right' | 'justify';

export type TypographyProps = {
  variant: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  align?: TypographyAlignment;
  overideColor?: string;
} & NativeTextProps;

export type TypographyDefinitionType = {
  [key in TypographyVariant]: {
    [key in TypographySize]: {
      fontSize: number;
      lineHeight: number;
    };
  };
};

export type TypographyWeightType = {
  [key in TypographyWeight]: string;
};
