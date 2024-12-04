export type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12';

export interface CharacterStats {
  str: DiceType | null;
  dex: DiceType | null;
  int: DiceType | null;
  con: DiceType | null;
  wis: DiceType | null;
}

export interface CharacterFeature {
  id: string;
  name: string;
  description: string;
}

export interface CharacterCondition {
  id: string;
  name: string;
  color: string;
}

export interface CharacterSkill {
  id: string;
  name: string;
  description: string;
  mpCost: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: 'common' | 'weapon' | 'pocket';
}

export interface Character {
  id: string;
  name: string;
  stats: CharacterStats;
  hp: number;
  mp: number;
  chaos: number;
  features: CharacterFeature[];
  skills: CharacterSkill[];
  pockets: (Item | null)[];
  conditions: CharacterCondition[];
  backpack: Item[];
  weapon: Item | null;
}