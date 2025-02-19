import { DiceType } from '../types/character';

export const DICE_VALUES: DiceType[] = ['d4', 'd6', 'd8', 'd10', 'd12'];

export const getDiceValue = (dice: DiceType): number => {
  return parseInt(dice.substring(1)) / 2;
};

export const getDiceIndex = (dice: DiceType): number => {
  return DICE_VALUES.indexOf(dice) + 1;
};