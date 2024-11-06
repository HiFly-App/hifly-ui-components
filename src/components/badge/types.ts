import {ComponentType} from 'react';
import {ViewProps as NativeViewProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type BadgeSizes = 'sm' | 'md' | 'lg';
export type BadgeType = 'filled' | 'success';

export type BadgeProps = {
  size?: BadgeSizes;
  label: string;
  type?: BadgeType;
  icon?: ComponentType<SvgProps>;
} & NativeViewProps;

export type BadgeSizeDefinitionType = {
  [key in BadgeSizes]: {
    height: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
  };
};

export type BadgeColorDefinitionType = {
  [key in BadgeType]: {
    background: string;
    textColor: string;
    border?: string;
  };
};
