import styled from '@emotion/native';
import {Card} from '../card';
import {LandingCardProps} from './types';
import {Typography} from '../typography';
import {Badge} from '../badge';
import {Spacing} from '../spacing';
import {useTheme} from '@emotion/react';
import {Pill} from '../pill';
import GateIcon from '../icons/GateIcon';

export const LandingCard = ({title, gate, timeText, timePillProps}: LandingCardProps) => {
  const {spacing} = useTheme();
  return (
    <Card>
      <TopWrapper>
        <Typography variant="text" color="tertiary" size="sm" weight="medium">
          {title}
        </Typography>
        <Badge label={gate} type="filled" icon={GateIcon} size="lg" />
      </TopWrapper>
      <Spacing height={spacing.md} />
      <BottomWrapper>
        <TextWrapper>
          <Typography variant="display" size="sm" weight="semibold">
            {timeText}
          </Typography>
        </TextWrapper>
        <PillWrapper>
          <Pill label={timePillProps.label} type={timePillProps.type} size="md" />
        </PillWrapper>
      </BottomWrapper>
    </Card>
  );
};

const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomWrapper = styled.View`
  flex-direction: row;
`;

const TextWrapper = styled.View`
  flex: 1;
`;

const PillWrapper = styled.View`
  justify-content: flex-end;
`;
