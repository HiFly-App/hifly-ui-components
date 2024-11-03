import {ColorVariablesType} from '../../theme';
import {BadgeColorDefinitionType, BadgeSizeDefinitionType} from './types';

export const BadgeSizeDefinition: BadgeSizeDefinitionType = {
  sm: {
    height: '22px',
    padding: '2px 6px',
    fontSize: '12px',
  },
  md: {
    height: '24px',
    padding: '2px 8px',
    fontSize: '14px',
  },
  lg: {
    height: '28px',
    padding: '4px 10px',
    fontSize: '14px',
  },
};

export const GetBadgeColorDefinition = (colors: ColorVariablesType): BadgeColorDefinitionType => {
  return {
    filled: {
      background: colors.badge.filled_background,
      text: colors.badge.filled_text,
    },
    success: {
      background: colors.badge.success_background,
      text: colors.badge.success_text,
      border: `1px solid ${colors.badge.success_border}`,
    },
  };
};
