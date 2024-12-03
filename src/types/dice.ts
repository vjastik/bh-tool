import { DiceType } from './character'

export interface DiceConfig {
  type: DiceType;
  maxValue: number;
}

export const DICE_CONFIGS: Record<DiceType, DiceConfig> = {
  'd4': { type: 'd4', maxValue: 4 },
  'd6': { type: 'd6', maxValue: 6 },
  'd8': { type: 'd8', maxValue: 8 },
  'd10': { type: 'd10', maxValue: 10 },
  'd12': { type: 'd12', maxValue: 12 },
};