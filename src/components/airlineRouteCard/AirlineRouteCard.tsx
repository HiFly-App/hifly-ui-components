import styled from '@emotion/native';
import {Card} from '../card';
import {AirlineRouteCardProps} from './types';
import {Typography} from '../typography';
import {Spacing} from '../spacing';
import {Pill} from '../pill';
import {useBreakpoints} from '../../hooks/useBreakpoints';
import {Badge} from '../badge';
import {useTheme} from '@emotion/react';
import {View} from 'react-native';
import {Icons} from '../icons';

export const AirlineRouteCard = ({depatureInfo, arrivalInfo, baggageCount}: AirlineRouteCardProps) => {
  const {xs} = useBreakpoints();
  const {spacing} = useTheme();

  return (
    <Card>
      <Container isMobile={xs}>
        <DetailColumn isMobile={xs}>
          <DepatureAirporInfoColumn>
            <Typography variant="display" size={xs ? 'sm' : 'md'} weight="bold">
              {depatureInfo.airportInfo.airportCode}
            </Typography>
            <Typography variant="text" size="md" weight="medium" color="secondary">
              {depatureInfo.airportInfo.city}
            </Typography>
            <Typography variant="text" size={xs ? 'sm' : 'xs'} weight="medium" color="tertiary">
              {depatureInfo.airportInfo.airportName}
            </Typography>
          </DepatureAirporInfoColumn>
          <Spacing height={spacing.lg} />
          <DepatureTimeCoulumn isMobile={xs}>
            <Typography variant="display" size={xs ? 'sm' : 'xs'} weight="bold" color={depatureInfo.timeColor}>
              {depatureInfo.time}
            </Typography>
            <Spacing height={xs ? spacing.md : spacing.xs} />
            <PillWrapper>
              <Pill label={depatureInfo.status.text} type={depatureInfo.status.type} />
            </PillWrapper>
            <Spacing height={xs ? spacing.md : spacing.xs} />
            <Typography variant="text" size="xs" weight="medium" color="quaternary">
              Departs in 1h 30 min
            </Typography>
            <Spacing height={spacing.lg} />
            <BadgeWrapper>
              <Badge label={depatureInfo.gate} type="filled" size="lg" icon={Icons.Gate} />
            </BadgeWrapper>
          </DepatureTimeCoulumn>
        </DetailColumn>
        <DetailColumn isMobile={xs}>
          <ArrivalAirporInfoColumn isMobile={xs}>
            <Typography variant="display" size={xs ? 'sm' : 'md'} weight="bold">
              {arrivalInfo.airportInfo.airportCode}
            </Typography>
            <Typography variant="text" size="md" weight="medium" color="secondary">
              {arrivalInfo.airportInfo.city}
            </Typography>
            <Typography variant="text" size={xs ? 'sm' : 'xs'} weight="medium" color="tertiary">
              {arrivalInfo.airportInfo.airportName}
            </Typography>
          </ArrivalAirporInfoColumn>
          <Spacing height={spacing.lg} />
          <ArrivalTimeCoulumn isMobile={xs}>
            <Typography variant="display" size={xs ? 'sm' : 'xs'} weight="bold" color={arrivalInfo.timeColor}>
              {arrivalInfo.time}
            </Typography>
            <Spacing height={xs ? spacing.md : spacing.xs} />
            <PillWrapper>
              <Pill label={arrivalInfo.status.text} type={arrivalInfo.status.type} />
            </PillWrapper>
            <Spacing height={xs ? spacing.md : spacing.xs} />
            <Typography variant="text" size="xs" weight="medium" color="quaternary">
              Arrive in 1h 30 min
            </Typography>
            <Spacing height={spacing.lg} />
            <BadgeWrapper>
              <Badge label={baggageCount} type="filled" size="lg" icon={Icons.Baggage} />
              <Badge label={arrivalInfo.gate} type="filled" size="lg" icon={Icons.Gate} />
            </BadgeWrapper>
          </ArrivalTimeCoulumn>
        </DetailColumn>
      </Container>
    </Card>
  );
};

const Container = styled.View<{isMobile: boolean}>`
  gap: ${({theme}) => `${theme.spacing.lg}px`};
  flex-direction: ${({isMobile}) => (isMobile ? 'column' : 'row')};
  justify-content: space-between;
`;

const DetailColumn = styled.View<{isMobile: boolean}>`
  flex-direction: ${({isMobile}) => (isMobile ? 'row' : 'column')};
  justify-content: ${({isMobile}) => (isMobile ? 'space-between' : 'flex-start')};
`;

const DepatureAirporInfoColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ArrivalAirporInfoColumn = styled.View<{isMobile: boolean}>`
  flex-direction: column;
  align-items: ${({isMobile}) => (isMobile ? 'flex-start' : 'flex-end')};
  justify-content: space-between;
`;

const DepatureTimeCoulumn = styled.View<{isMobile: boolean}>`
  flex-direction: column;
  align-items: ${({isMobile}) => (isMobile ? 'flex-end' : 'flex-start')};
`;

const ArrivalTimeCoulumn = styled.View<{isMobile: boolean}>`
  flex-direction: column;
  align-items: flex-end;
`;

const PillWrapper = styled.View`
  flex-direction: row;
`;

const BadgeWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
`;
