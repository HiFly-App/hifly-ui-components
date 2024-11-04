import {memo} from 'react';
import {View, ViewProps} from 'react-native';

export type SpacingProps = {
  height?: number;
} & Omit<ViewProps, 'style'>;

export const Spacing = memo(({height = 8, ...rest}: SpacingProps) => {
  return <View style={{height}} accessibilityElementsHidden={true} importantForAccessibility="no" {...rest} />;
});
