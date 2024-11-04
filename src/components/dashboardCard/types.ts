import {ComponentType} from 'react';
import {TypographyColorType} from '../typography';
import {SvgProps} from 'react-native-svg';

export type DashboardCardItem = {
  title: string;
  value: string;
  valueColor?: TypographyColorType;
  description: string;
  icon?: ComponentType<SvgProps>;
};

export type DashboardCardProps = {
  headerText?: string;
  items: DashboardCardItem[];
};
