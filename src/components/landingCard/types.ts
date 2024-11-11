import {PillType} from '../pill';

export type LandingTimePillProps = {
  label: string;
  type: PillType;
};

export type LandingCardProps = {
  title: string;
  timeText: string;
  gate: string;
  timePillProps: LandingTimePillProps;
};
