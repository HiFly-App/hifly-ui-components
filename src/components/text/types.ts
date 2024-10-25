import {type TextProps as NativeTextProps} from 'react-native';

export type TextVariant = 'display' | 'text';
export type TextSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextAlignment = 'left' | 'center' | 'right' | 'justify';

export type TextProps = {
  variant: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
  align?: TextAlignment;
} & NativeTextProps;

export type TextDefinitionType = {
  [key in TextVariant]: {
    [key in TextSize]: {
      fontSize: number;
      lineHeight: number;
    };
  };
};

export type TextWeightType = {
  [key in TextWeight]: string;
};
