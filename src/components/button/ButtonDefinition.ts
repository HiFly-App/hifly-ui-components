import {ColorVariablesType} from '../../theme';
import {ButtonColorDefinitionType, ButtonSizeDefinitionType} from './types';

export const ButtonSizeDefinition: ButtonSizeDefinitionType = {
  sm: {
    height: '36px',
    padding: '8px 12px',
    fontSize: '14px',
  },
  md: {
    height: '40px',
    padding: '10px 14px',
    fontSize: '14px',
  },
  lg: {
    height: '44px',
    padding: '10px 16px',
    fontSize: '16px',
  },
  xl: {
    height: '48px',
    padding: '12px 18px',
    fontSize: '16px',
  },
  '2xl': {
    height: '60px',
    padding: '16px 22px',
    fontSize: '18px',
  },
};

export const GetButtonColorDefinition = (colors: ColorVariablesType): ButtonColorDefinitionType => {
  return {
    primary: {
      default: {
        backgroundColor: colors.button.primary_default,
        color: colors.button.primary_default_text,
        border: `2px solid ${colors.button.primary_default_border}`,
      },
      hover: {
        backgroundColor: colors.button.primary_hover,
        color: colors.button.primary_hover_text,
        border: `2px solid ${colors.button.primary_hover_border}`,
      },
      disabled: {
        backgroundColor: colors.button.primary_disabled,
        color: colors.button.primary_disabled_text,
        border: `1px solid ${colors.button.primary_disabled_border}`,
      },
    },
    secondary: {
      default: {
        backgroundColor: colors.button.secondary_default,
        color: colors.button.secondary_default_text,
        border: `2px solid ${colors.button.secondary_default_border}`,
      },
      hover: {
        backgroundColor: colors.button.secondary_hover,
        color: colors.button.secondary_hover_text,
        border: `2px solid ${colors.button.secondary_hover_border}`,
      },
      disabled: {
        backgroundColor: colors.button.secondary_disabled,
        color: colors.button.secondary_disabled_text,
        border: `1px solid ${colors.button.secondary_disabled_border}`,
      },
    },
  };
};
