import styled from '@emotion/native';
import React from 'react';
import {GetTypographyColorDefinition, TypographyDefinition, TypographyWeightDefinition} from './TypographyDefinition';
import {TypographyColorType, TypographyProps, TypographyVariant} from './types';
import {useTheme} from '@emotion/react';

export const Typography = ({
  variant,
  color = 'primary',
  size = 'sm',
  weight = 'regular',
  align = 'left',
  overideColor,
  maxWidth,
  children,
  ...rest
}: TypographyProps) => {
  const {colors: themecolors} = useTheme();
  const textDefinition = TypographyDefinition[variant][size];
  const textWeight = TypographyWeightDefinition[weight];
  const textColor = overideColor ?? GetTypographyColorDefinition(themecolors)[color];

  return (
    <StyledText
      size={`${textDefinition.fontSize}px`}
      lineHeight={`${textDefinition.lineHeight}px`}
      align={align}
      weight={textWeight}
      variant={variant}
      textColor={textColor}
      maxWidth={maxWidth}
      {...rest}
      numberOfLines={1}
      textBreakStrategy="simple">
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
  textColor: string;
  maxWidth?: string;
}>(
  ({size, lineHeight, weight, align, variant, textColor, maxWidth}) => `
  font-size: ${size};
  line-height: ${lineHeight};
  font-weight: ${weight};
  color: ${textColor};
  text-align: ${align};
  font-family: ${variant === 'text' ? 'Inter' : 'IBM Plex Sans'};

`,
);
