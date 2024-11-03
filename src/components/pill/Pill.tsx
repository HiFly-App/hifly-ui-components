import styled from '@emotion/native';
import {PillProps} from './types';
import {GetPillColorDefinition, PillSizeDefinition} from './PillDefinition';
import {useTheme} from '@emotion/react';

export const Pill = ({label, size = 'md', type = 'success'}: PillProps) => {
  const {colors} = useTheme();
  const {height, padding, fontSize} = PillSizeDefinition[size];
  const {backgroundColor, borderColor, textColor} = GetPillColorDefinition(colors.pill)[type];

  return (
    <Container height={height} padding={padding} borderColor={borderColor} color={backgroundColor}>
      <Label fontSize={fontSize} color={textColor}>
        {label}
      </Label>
    </Container>
  );
};

const Container = styled.View<{height: string; padding: string; color: string; borderColor: string}>`
  display: flex;
  align-self: flex-start;
  height: ${({height}) => height};
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1.5px solid ${({borderColor}) => borderColor};
  padding: ${({padding}) => padding};
  background-color: ${({color}) => color};
`;

const Label = styled.Text<{fontSize: string; color: string}>`
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
  font-family: 'Inter';
  font-weight: 500;
  text-align: center;
`;
