import styled from '@emotion/native';
import React, {useMemo} from 'react';
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
  children,
  ...rest
}: TypographyProps) => {
  const {colors: themecolors} = useTheme();
  const textDefinition = TypographyDefinition[variant][size];
  const textWeight = TypographyWeightDefinition[weight];
  const textColor = overideColor ?? GetTypographyColorDefinition(themecolors)[color];

  const fontFamily = useMemo(() => {
    if (variant === 'text') {
      return 'Inter';
    } else {
      switch (weight) {
        case 'regular':
          return 'IBM Plex Sans';
        case 'medium':
          return 'IBM Plex Sans Medium';
        case 'semibold':
          return 'IBM Plex Sans SemiBold';
        case 'bold':
          return 'IBM Plex Sans Bold';
        default:
          return 'IBM Plex Sans';
      }
    }
  }, [weight, variant]);

  return (
    <StyledText
      size={`${textDefinition.fontSize}px`}
      lineHeight={`${textDefinition.lineHeight}px`}
      align={align}
      weight={textWeight}
      variant={variant}
      textColor={textColor}
      fontFamily={fontFamily}
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
  fontFamily: string;
}>(
  ({size, lineHeight, weight, align, textColor, fontFamily}) => `
  font-size: ${size};
  line-height: ${lineHeight};
  font-weight: ${weight};
  color: ${textColor};
  text-align: ${align};
  font-family: ${fontFamily};

`,
);
