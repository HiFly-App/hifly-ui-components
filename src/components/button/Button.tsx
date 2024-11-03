import styled from '@emotion/native';
import React from 'react';
import {ButtonProps, ButtonVariants} from './types';
import {useTheme} from '@emotion/react';
import {GetButtonColorDefinition, ButtonSizeDefinition} from './ButtonDefinition';

export const Button = ({label, variant, size = 'sm', state = 'default', overideStyles, ...rest}: ButtonProps) => {
  const {colors} = useTheme();
  const {height, fontSize, padding} = ButtonSizeDefinition[size];

  const {backgroundColor, border, color} = GetButtonColorDefinition(colors.button)[variant][state];

  return (
    <StyledButton
      height={height}
      padding={padding}
      backgroundColor={overideStyles?.backgroundColor ?? backgroundColor}
      border={overideStyles?.border ?? border}
      {...rest}>
      <ButtonText fontSize={fontSize} color={overideStyles?.color ?? color}>
        {label}
      </ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.Pressable<{
  height: string;
  padding: string;
  backgroundColor: string;
  border: string;
}>`
  display: flex;
  align-self: flex-start;
  border-radius: 8px;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: ${({padding}) => padding};
  height: ${({height}) => height};
  border: ${({border}) => border};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<{fontSize: string; color: string}>`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 600;
  font-family: 'Inter';
  color: ${({color}) => color};
`;
