import {TypographyColorType} from '../typography';

export type DashboardCardItem = {
  title: string;
  value: string;
  valueColor?: TypographyColorType;
  description: string;
};

export type DashboardCardProps = {
  headerText?: string;
  items: DashboardCardItem[];
};
