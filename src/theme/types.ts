export type TextColors = {
  primary: string;
  primary_brand: string;
  secondary: string;
  secondary_hover: string;
  secondary_brand: string;
  tertiary: string;
  tertiary_hover: string;
  tertiary_brand: string;
  quaternary: string;
  quaternary_brand: string;
  white: string;
  disabled: string;
  placeholder: string;
  placeholder_subtle: string;
  brand_primary: string;
  brand_secondary: string;
  brand_tertiary: string;
  brand_tertiary_alt: string;
  error_primary: string;
  warning_primary: string;
  sucess_primary: string;
};

export type BorderColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
  disabled_subtle: string;
  brand: string;
  brand_alt: string;
  error: string;
  error_subtle: string;
};

export type ForgroundColors = {
  primary: string;
  secondary: string;
  secondary_horver: string;
  tertiary: string;
  tertiary_hover: string;
  quatenary: string;
  quatenary_hover: string;
  quinary: string;
  quinary_hover: string;
  senary: string;
  white: string;
  disabled: string;
  disabled_subtle: string;
  brand_primary: string;
  brand_primary_alt: string;
  brand_secondary: string;
  error_primary: string;
  error_secondary: string;
  error_warning_primary: string;
  error_warning_secondary: string;
  success_primary: string;
  success_secondary: string;
};

export type BackgroundColors = {
  primary: string;
  primary_alt: string;
  primary_hover: string;
  primary_solid: string;
  secondary: string;
  secondary_alt: string;
  secondary_hover: string;
  secondary_subtle: string;
  secondary_solid: string;
  tertiary: string;
  quaternary: string;
  active: string;
  disabled: string;
  disabled_subtle: string;
  overlay: string;
  brand_primary: string;
  brand_primary_alt: string;
  brand_secondary: string;
  brand_solid: string;
  brand_solid_hover: string;
  brand_section: string;
  brand_section_subtle: string;
  error_primary: string;
  error_secondary: string;
  error_solid: string;
  warning_primary: string;
  warning_secondary: string;
  warning_solid: string;
  success_primary: string;
  success_secondary: string;
  success_solid: string;
};

export type ColorVariablesType = {
  text: TextColors;
  border: BorderColors;
  forground: ForgroundColors;
  background: BackgroundColors;
};