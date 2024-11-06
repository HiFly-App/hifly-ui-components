import {PillType} from '../pill';
import {TypographyColorType} from '../typography';

export type AirportInfo = {
  airportCode: string;
  city: string;
  airportName: string;
};

export type DepatureAndArrivalInfoType = {
  airportInfo: AirportInfo;
  time: string;
  timeColor: TypographyColorType;
  status: {
    text: string;
    type: PillType;
  };
  gate: string;
};

export type AirlineRouteCardProps = {
  depatureInfo: DepatureAndArrivalInfoType;
  arrivalInfo: DepatureAndArrivalInfoType;
  baggageCount: string;
  curruntFlyingTime: string;
  curruntFlyingDistance: string;
};
