import styled from '@emotion/native';
import React from 'react';
import {BadgeProps} from './types';
import {BadgeSizeDefinition, GetBadgeColorDefinition} from './BadgeDefinition';
import {useTheme} from '@emotion/react';

export const Badge = ({label, size = 'md', type = 'success'}: BadgeProps) => {
  const {colors} = useTheme();
  const {height, fontSize, padding} = BadgeSizeDefinition[size];
  const {background, text, border} = GetBadgeColorDefinition(colors)[type];

  return (
    <StyledBadge height={height} padding={padding} background={background} border={border}>
      <BadgeText fontSize={fontSize} text={text}>
        {label}
      </BadgeText>
    </StyledBadge>
  );
};

const StyledBadge = styled.View<{
  height: string;
  padding: string;
  background: string;
  border?: string;
}>`
  align-self: flex-start;
  padding: ${({padding}) => padding};
  height: ${({height}) => height};
  justify-content: center;
  border-radius: 8px;
  background-color: ${({background}) => background};
  border: ${({border}) => border};
`;

const BadgeText = styled.Text<{fontSize: string; text: string}>`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 500;
  color: ${({text}) => text};
  font-family: 'Inter';
`;
