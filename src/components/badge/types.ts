import {ViewProps as NativeViewProps} from 'react-native';

export type BadgeSizes = 'sm' | 'md' | 'lg';
export type BadgeType = 'filled' | 'normal';

export type BadgeProps = {
  size?: BadgeSizes;
  label: string;
  type?: BadgeType;
} & NativeViewProps;

export type BadgeDefinitionType = {
  [key in BadgeSizes]: {
    height: string;
    padding: string;
    fontSize: string;
  };
};
