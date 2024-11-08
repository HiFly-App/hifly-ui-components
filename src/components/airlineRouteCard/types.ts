import {PillType} from '../pill';
import {TypographyColorType} from '../typography';

export type AirportInfo = {
  airportCode: string;
  city: string;
  airportName: string;
};

export type TimeData = {
  originalTime: string;
  scheduledTime: string;
  scheduleTimeText: string;
  scheduleTimeColor: TypographyColorType;
  timeStatusText: string;
  timeStatusColor: PillType;
};

export type DepartureAndArrivalInfo = {
  airportInfo: AirportInfo;
  timeData: TimeData;
  gate: string;
  baggageCount?: string;
};

export type AirlineRouteCardProps = {
  departure: DepartureAndArrivalInfo;
  arrival: DepartureAndArrivalInfo;
  flyingTime: string;
  flyingDistance: string;
};
