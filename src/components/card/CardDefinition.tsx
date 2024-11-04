import {CardColors} from '../../theme';

export const getCardColorDefinition = (color: CardColors) => {
  return {
    background: color.background,
    border: color.border,
  };
};
