export type BackgroundColors = {
  primary: string;
};
export type ButtonColors = {
  primary_default: string;
  primary_default_text: string;
  primary_default_border: string;
  primary_hover: string;
  primary_hover_text: string;
  primary_hover_border: string;
  primary_disabled: string;
  primary_disabled_text: string;
  primary_disabled_border: string;
  secondary_default: string;
  secondary_default_text: string;
  secondary_default_border: string;
  secondary_hover: string;
  secondary_hover_text: string;
  secondary_hover_border: string;
  secondary_disabled: string;
  secondary_disabled_text: string;
  secondary_disabled_border: string;
};

export type BadgeColors = {
  filled_background: string;
  filled_text: string;
  success_background: string;
  success_text: string;
  success_border: string;
};

export type TextColors = {
  brand: string;
  tertiary: string;
  primary: string;
  secondary: string;
  success: string;
  quaternary: string;
  error: string;
  warning: string;
};

export type ColorVariablesType = {
  background: BackgroundColors;
  button: ButtonColors;
  badge: BadgeColors;
  text: TextColors;
};
