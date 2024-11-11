import {ReactElement} from 'react';

export type AircraftAmenity = {
  icon: ReactElement;
  text: string;
};

export type AircraftDetailsItem = {
  title: string;
  value: string | number;
};

export type AircraftCardProps = {
  name: string;
  ageText: string;
  seatCountText: string;
  imageBase64: string;
  amenities: AircraftAmenity[];
  details: AircraftDetailsItem[];
};
