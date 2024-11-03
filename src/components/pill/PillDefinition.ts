import {PillColors} from '../../theme';
import {PillColorDefinitionType, PillSizeDefinitionType} from './types';

export const PillSizeDefinition: PillSizeDefinitionType = {
  sm: {
    height: '22px',
    fontSize: '12px',
    padding: '2px 8px',
  },
  md: {
    height: '24px',
    fontSize: '14px',
    padding: '2px 10px',
  },
  lg: {
    height: '28px',
    fontSize: '14px',
    padding: '4px 12px',
  },
};

export const GetPillColorDefinition = (colors: PillColors): PillColorDefinitionType => {
  return {
    success: {
      backgroundColor: colors.success,
      borderColor: colors.success_border,
      textColor: colors.success_text,
    },
    error: {
      backgroundColor: colors.error,
      borderColor: colors.error_border,
      textColor: colors.error_text,
    },
  };
};
