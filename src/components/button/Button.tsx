import styled from '@emotion/native';
import React from 'react';
import {ButtonProps, ButtonVariants} from './types';
import {useTheme} from '@emotion/react';
import {GetButtonColorDefinition, ButtonSizeDefinition} from './ButtonDefinition';

export const Button = ({label, variant, size = 'sm', state = 'default', overideStyles, ...rest}: ButtonProps) => {
  const {colors} = useTheme();
  const {height, fontSize, lineHeight, padding} = ButtonSizeDefinition[size];

  const {backgroundColor, border, color} = GetButtonColorDefinition(colors)[variant][state];

  return (
    <StyledButton
      height={height}
      fontSize={fontSize}
      lineHeight={lineHeight}
      padding={padding}
      backgroundColor={overideStyles?.backgroundColor ?? backgroundColor}
      border={overideStyles?.border ?? border}
      color={overideStyles?.color ?? color}
      {...rest}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.Pressable<{
  height: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  backgroundColor: string;
  border: string;
  color: string;
}>`
  align-self: flex-start;
  border-radius: 8px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({color}) => color};
  padding: ${({padding}) => padding};
  height: ${({height}) => height};
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
  font-weight: 600;
  border: ${({border}) => border};
  font-family: 'Inter';
  justify-content: center;
`;
