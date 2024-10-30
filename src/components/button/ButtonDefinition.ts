import {ColorVariablesType} from '../../theme';
import {ButtonColorDefinitionType, ButtonSizeDefinitionType} from './types';

export const ButtonSizeDefinition: ButtonSizeDefinitionType = {
  sm: {
    height: '36px',
    padding: '8px 12px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  md: {
    height: '40px',
    padding: '10px 14px',
    fontSize: '14px',
    lineHeight: '20px',
  },
  lg: {
    height: '44px',
    padding: '10px 16px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  xl: {
    height: '48px',
    padding: '12px 18px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  '2xl': {
    height: '60px',
    padding: '16px 22px',
    fontSize: '18px',
    lineHeight: '28px',
  },
};

export const GetButtonColorDefinition = (colors: ColorVariablesType): ButtonColorDefinitionType => {
  return {
    primary: {
      default: {
        backgroundColor: colors.forground.brand_primary,
        color: colors.text.primary_brand,
        border: '2px solid rgba(255, 255, 255, 0.12)',
      },
      hover: {
        backgroundColor: colors.background.brand_solid_hover,
        color: colors.text.primary_brand,
        border: '2px solid rgba(255, 255, 255, 0.24)',
      },
      disabled: {
        backgroundColor: colors.background.disabled,
        color: colors.forground.disabled,
        border: `1px solid ${colors.border.disabled_subtle}`,
      },
    },
    secondary: {
      default: {
        backgroundColor: colors.background.primary,
        color: colors.text.secondary,
        border: `1px solid ${colors.border.primary}`,
      },
      hover: {
        backgroundColor: colors.background.primary_hover,
        color: colors.text.secondary_hover,
        border: `1px solid ${colors.border.primary}`,
      },
      disabled: {
        backgroundColor: colors.background.primary,
        color: colors.forground.disabled,
        border: `1px solid ${colors.border.disabled_subtle}`,
      },
    },
  };
};
