import {ViewProps as NativeViewProps} from 'react-native';

export type BadgeSizes = 'sm' | 'md' | 'lg';
export type BadgeType = 'filled' | 'success';

export type BadgeProps = {
  size?: BadgeSizes;
  label: string;
  type?: BadgeType;
} & NativeViewProps;

export type BadgeSizeDefinitionType = {
  [key in BadgeSizes]: {
    height: string;
    padding: string;
    fontSize: string;
  };
};

export type BadgeColorDefinitionType = {
  [key in BadgeType]: {
    background: string;
    text: string;
    border?: string;
  };
};
