import styled from '@emotion/native';
import React from 'react';
import {BadgeProps, BadgeType} from './types';
import {BadgeDefinition} from './BadgeDefinition';
import {baseColors} from '../../theme';

export const Badge = ({label, size = 'md', type = 'normal'}: BadgeProps) => {
  const {height, fontSize, padding} = BadgeDefinition[size];

  return (
    <StyledBadge height={height} padding={padding} type={type}>
      <BadgeText fontSize={fontSize} type={type}>
        {label}
      </BadgeText>
    </StyledBadge>
  );
};

const StyledBadge = styled.View<{
  height: string;
  padding: string;
  type: BadgeType;
}>`
  align-self: flex-start;
  padding: ${({padding}) => padding};
  height: ${({height}) => height};
  background-color: ${({theme, type}) =>
    type === 'filled' ? theme.colors.forground.error_warning_secondary : theme.colors.background.success_badge};
  justify-content: center;
  border-radius: 8px;
  border: ${({theme, type}) => (type === 'normal' ? `1px solid ${theme.colors.border.success}` : undefined)};
`;

const BadgeText = styled.Text<{fontSize: string; type: BadgeType}>`
  font-size: ${({fontSize}) => fontSize};
  font-weight: 500;
  color: ${({theme}) => theme.colors.text.primary};
  font-family: 'Inter';
  color: ${({theme, type}) => (type === 'filled' ? baseColors.gray900 : theme.colors.text.success_badge)};
`;
