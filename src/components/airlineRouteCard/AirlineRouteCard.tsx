import styled from '@emotion/native';
import {Card} from '../card';
import {AirlineRouteCardProps, DepartureAndArrivalInfo} from './types';
import {Typography} from '../typography';
import {Spacing} from '../spacing';
import {Pill} from '../pill';
import {Badge} from '../badge';
import {useTheme} from '@emotion/react';
import {View} from 'react-native';
import {useCallback} from 'react';
import GateIcon from '../icons/GateIcon';
import BaggageIcon from '../icons/BaggageIcon';

export const AirlineRouteCard = ({departure, arrival, flyingTime, flyingDistance}: AirlineRouteCardProps) => {
  const {spacing} = useTheme();

  const renderDataSection = useCallback(
    ({airportInfo, timeData, baggageCount, gate}: DepartureAndArrivalInfo, isArrival?: boolean) => {
      return (
        <DataContainer>
          <DataColumn align="flex-start">
            <View>
              <Typography variant="display" size="xs" weight="bold">
                {airportInfo.city}
              </Typography>
              <Typography variant="text" size="md" weight="semibold" color="secondary">
                {airportInfo.airportCode}
              </Typography>
              <Typography variant="text" size="xs" color="quaternary">
                {airportInfo.airportName}
              </Typography>
              <Spacing height={spacing.xl} />
            </View>
            <Badge label={timeData.scheduledTime} size="sm" />
          </DataColumn>
          <DataColumn align="flex-end">
            <View>
              <Typography variant="display" size="xs" weight="bold" color={timeData.scheduleTimeColor ?? 'primary'}>
                {timeData.scheduledTime}
              </Typography>
              {timeData.scheduledTime !== timeData.originalTime && (
                <Typography
                  variant="text"
                  size="xs"
                  weight="medium"
                  color="quaternary"
                  style={{
                    textDecorationLine: 'line-through',
                    textAlign: 'right',
                  }}>
                  {timeData.originalTime}
                </Typography>
              )}
              <Spacing height={spacing.md} />
              <PillWrapper>
                <Pill label={timeData.timeStatusText} type={timeData.timeStatusColor} size="sm" />
              </PillWrapper>
            </View>
            <PillWrapper>
              {isArrival && <Badge label={`${baggageCount}`} type="filled" size="lg" icon={BaggageIcon} />}
              <Badge label={gate} type="filled" size="lg" icon={GateIcon} />
            </PillWrapper>
          </DataColumn>
        </DataContainer>
      );
    },
    [],
  );

  return (
    <Card>
      {renderDataSection(departure)}
      <Spacing height={spacing.xxl} />
      <MiddleContainer>
        <MiddleTextWrapper>
          <Typography variant="text" size="xs" color="quaternary">
            {flyingTime}
          </Typography>
          <Dot />
          <Typography variant="text" size="xs" color="quaternary">
            {flyingDistance}
          </Typography>
        </MiddleTextWrapper>
        <DividerWrapper>
          <VerticalDivider />
        </DividerWrapper>
      </MiddleContainer>
      <Spacing height={spacing.xxl} />
      {renderDataSection(arrival, true)}
    </Card>
  );
};

const DataContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 128px;
`;

const DataColumn = styled.View<{align: 'flex-start' | 'flex-end'}>`
  align-items: ${({align}) => align};
  justify-content: space-between;
`;

const PillWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
`;
const MiddleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${({theme}) => `${theme.spacing.xl}px`};
`;

const MiddleTextWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
  justify-content: space-between;
  align-items: center;
`;

const Dot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.text.quaternary};
`;

const DividerWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const VerticalDivider = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.devider.background};
  width: 100%;
`;
