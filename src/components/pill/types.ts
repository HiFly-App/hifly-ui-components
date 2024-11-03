export type PillSize = 'sm' | 'md' | 'lg';
export type PillType = 'success' | 'error';

export type PillProps = {
  size?: PillSize;
  type?: PillType;
  label: string;
};

export type PillSizeDefinitionType = {
  [key in PillSize]: {
    height: string;
    fontSize: string;
    padding: string;
  };
};

export type PillColorDefinitionType = {
  [key in PillType]: {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
  };
};
