import {PressableProps as NativePressableProps} from 'react-native';

export type ButtonVariants = 'primary' | 'secondary';
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonStates = 'default' | 'hover' | 'disabled';

export type ButtonProps = {
  variant: ButtonVariants;
  size?: ButtonSizes;
  label: string;
  state: ButtonStates;
  overideStyles?: {
    backgroundColor?: string;
    color?: string;
    border?: string;
  };
} & NativePressableProps;

export type ButtonSizeDefinitionType = {
  [key in ButtonSizes]: {
    height: string;
    padding: string;
    fontSize: string;
  };
};

export type ButtonColorDefinitionType = {
  [key in ButtonVariants]: {
    [key in ButtonStates]: {
      backgroundColor: string;
      color: string;
      border: string;
    };
  };
};
