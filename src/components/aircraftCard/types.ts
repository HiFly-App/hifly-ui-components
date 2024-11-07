import {ComponentType, ReactElement} from 'react';
import {SvgProps} from 'react-native-svg';

export type AircraftAmenity = {
  icon: ReactElement;
  text: string;
};

export type AircraftCardProps = {
  name: string;
  ageText: string;
  seatCountText: string;
  imageBase64: string;
  registrationNumber: string;
  engineCount: number;
  firstFlightYear: number;
  amenities: AircraftAmenity[];
};
