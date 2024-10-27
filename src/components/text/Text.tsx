import styled from '@emotion/native';
import React from 'react';
import {TextProps, TextVariant} from './types';
import {TextDefinition, TextWeightDeclartion} from './TextDefinition';

export const Text = ({
  variant,
  size = 'sm',
  weight = 'regular',
  color,
  align = 'left',
  children,
  ...rest
}: TextProps) => {
  const textDefinition = TextDefinition[variant][size];
  const textWeight = TextWeightDeclartion[weight];
  return (
    <StyledText
      textSize={`${textDefinition.fontSize}px`}
      lineHeight={`${textDefinition.lineHeight}px`}
      align={align}
      weight={textWeight}
      color={color}
      variant={variant}
      {...rest}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
  textSize: string;
  lineHeight: string;
  weight?: string;
  color?: string;
  align: string;
  variant: TextVariant;
}>`
  font-size: ${({textSize}) => textSize};
  line-height: ${({lineHeight}) => lineHeight};
  font-weight: ${({weight}) => weight};
  color: ${({color, theme}) => color ?? theme.colors.gray900};
  text-align: ${({align}) => align};
  font-family: ${({theme, variant}) => (variant === 'text' ? 'Inter' : 'IBM Plex Sans')};
`;
