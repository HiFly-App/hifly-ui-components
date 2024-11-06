import styled from '@emotion/native';
import {CardProps} from './types';
import {useTheme} from '@emotion/react';
import {getCardColorDefinition} from './CardDefinition';

export const Card = ({width = '100%', children}: CardProps) => {
  const {colors} = useTheme();
  const {background, border} = getCardColorDefinition(colors.card);
  return (
    <Container width={width} background={background} border={border}>
      {children}
    </Container>
  );
};

const Container = styled.View<{width: string; background: string; border: string}>`
  background-color: white;
  padding: ${({theme}) => `${theme.spacing.xxl}px ${theme.spacing.xl}px`};
  border-radius: ${({theme}) => theme.borderRadius};
  width: ${({width}) => width};
  background-color: ${({background}) => background};
  border: ${({border}) => border};
`;
