import styled from '@emotion/native';
import React from 'react';
import {BadgeProps} from './types';
import {BadgeSizeDefinition, GetBadgeColorDefinition} from './BadgeDefinition';
import {useTheme} from '@emotion/react';

export const Badge = ({label, size = 'md', type = 'primary', icon: Icon}: BadgeProps) => {
  const {colors} = useTheme();
  const {height, fontSize, padding, lineHeight} = BadgeSizeDefinition[size];
  const {background, textColor, border} = GetBadgeColorDefinition(colors)[type];

  return (
    <StyledBadge height={height} padding={padding} background={background} border={border}>
      {Icon && <Icon height={12} width={12} stroke={textColor} color={textColor} />}
      <BadgeText fontSize={fontSize} textColor={textColor} lineHeight={lineHeight}>
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
  align-items: center;
  border-radius: 8px;
  background-color: ${({background}) => background};
  border: ${({border}) => border};
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
`;

const BadgeText = styled.Text<{fontSize: string; textColor: string; lineHeight: string}>`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 500;
  color: ${({textColor}) => textColor};
  font-family: 'Inter';
`;
