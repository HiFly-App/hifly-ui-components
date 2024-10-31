import styled from '@emotion/native';
import React from 'react';
import {TypographyDefinition, TextWeightDeclartion} from './TypographyDefinition';
import {TypographyProps, TypographyVariant} from './types';

export const Typography = ({
  variant,
  size = 'sm',
  weight = 'regular',
  align = 'left',
  overideColor,
  children,
  ...rest
}: TypographyProps) => {
  const textDefinition = TypographyDefinition[variant][size];
  const textWeight = TextWeightDeclartion[weight];

  return (
    <StyledText
      size={`${textDefinition.fontSize}px`}
      lineHeight={`${textDefinition.lineHeight}px`}
      align={align}
      weight={textWeight}
      variant={variant}
      overideColor={overideColor}
      {...rest}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
  size: string;
  lineHeight: string;
  weight: string;
  align: string;
  variant: TypographyVariant;
  overideColor?: string;
}>(
  ({size, lineHeight, weight, align, variant, overideColor, theme}) => `
  font-size: ${size};
  line-height: ${lineHeight};
  font-weight: ${weight};
  color: ${overideColor ? overideColor : theme.colors.text.primary};
  text-align: ${align};
  font-family: ${variant === 'text' ? 'Inter' : 'IBM Plex Sans'};
`,
);
