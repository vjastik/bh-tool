import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Character,
  CharacterFeature,
  CharacterSkill,
  CharacterStats,
  Item,
} from "../types/character";
import { getDiceValue, getDiceIndex } from "../utils/dice";
import { loadCharacters } from "../utils/storage";

interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: loadCharacters().map((char) => ({
    ...char,
    features: char.features || [],
    skills: char.skills || [],
    pockets: char.pockets || [null, null, null, null],
    backpack: char.backpack || [],
    weapon: char.weapon || null,
  })),
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push({
        ...action.payload,
        features: [],
        skills: [],
        pockets: [null, null, null, null],
        backpack: [],
        weapon: null,
      });
    },
    updateStats: (
      state,
      action: PayloadAction<{ characterId: string; stats: CharacterStats }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        if (action.payload.stats.con !== character.stats.con) {
          character.hp = getDiceValue(action.payload.stats.con || "d4");
        }

        if (action.payload.stats.wis !== character.stats.wis) {
          character.mp = getDiceIndex(action.payload.stats.wis || "d4");
        }

        character.stats = action.payload.stats;
      }
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const index = state.characters.findIndex(
        (char) => char.id === action.payload.id
      );
      if (index !== -1) {
        state.characters[index] = {
          ...action.payload,
          features: action.payload.features || [],
          skills: action.payload.skills || [],
          pockets: action.payload.pockets || [null, null, null, null],
          backpack: action.payload.backpack || [],
          weapon: action.payload.weapon || null,
        };
      }
    },
    deleteCharacter: (state, action: PayloadAction<string>) => {
      state.characters = state.characters.filter(
        (char) => char.id !== action.payload
      );
    },
    addFeature: (
      state,
      action: PayloadAction<{ characterId: string; feature: CharacterFeature }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        character.features = character.features || [];
        character.features.push(action.payload.feature);
      }
    },
    updateFeature: (
      state,
      action: PayloadAction<{ characterId: string; feature: CharacterFeature }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character && character.features) {
        const index = character.features.findIndex(
          (f) => f.id === action.payload.feature.id
        );
        if (index !== -1) {
          character.features[index] = action.payload.feature;
        }
      }
    },
    deleteFeature: (
      state,
      action: PayloadAction<{ characterId: string; featureId: string }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character && character.features) {
        character.features = character.features.filter(
          (f) => f.id !== action.payload.featureId
        );
      }
    },
    addSkill: (
      state,
      action: PayloadAction<{ characterId: string; skill: CharacterSkill }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        character.skills = character.skills || [];
        character.skills.push(action.payload.skill);
      }
    },
    updateSkill: (
      state,
      action: PayloadAction<{ characterId: string; skill: CharacterSkill }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character && character.skills) {
        const index = character.skills.findIndex(
          (s) => s.id === action.payload.skill.id
        );
        if (index !== -1) {
          character.skills[index] = action.payload.skill;
        }
      }
    },
    deleteSkill: (
      state,
      action: PayloadAction<{ characterId: string; skillId: string }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character && character.skills) {
        character.skills = character.skills.filter(
          (s) => s.id !== action.payload.skillId
        );
      }
    },
    useSkill: (
      state,
      action: PayloadAction<{ characterId: string; skillId: string }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        const skill = character.skills?.find(
          (s) => s.id === action.payload.skillId
        );
        if (skill) {
          if (character.mp > 0) {
            character.mp = Math.max(0, character.mp - skill.mpCost);
          } else {
            character.chaos += skill.mpCost;
          }
        }
      }
    },
    addItem: (
      state,
      action: PayloadAction<{ characterId: string; item: Item }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        if (action.payload.item.type === "pocket") {
          const emptyIndex = character.pockets.findIndex(
            (item) => item === null
          );
          character.pockets[emptyIndex] = action.payload.item;
          return;
        }

        character.backpack = character.backpack || [];
        character.backpack.push(action.payload.item);
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ characterId: string; itemId: string }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        character.backpack = (character.backpack || []).filter(
          (item) => item.id !== action.payload.itemId
        );
      }
    },
    equipWeapon: (
      state,
      action: PayloadAction<{ characterId: string; weapon: Item | null }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        character.weapon = action.payload.weapon;
      }
    },
    setPocketItem: (
      state,
      action: PayloadAction<{
        characterId: string;
        pocketIndex: number;
        item: Item | null;
      }>
    ) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.characterId
      );
      if (character) {
        character.pockets = character.pockets || [null, null, null, null];
        character.pockets[action.payload.pocketIndex] = action.payload.item;
      }
    },
  },
});

export const {
  addCharacter,
  updateStats,
  updateCharacter,
  deleteCharacter,
  addFeature,
  updateFeature,
  deleteFeature,
  addSkill,
  updateSkill,
  deleteSkill,
  useSkill,
  addItem,
  removeItem,
  equipWeapon,
  setPocketItem,
} = characterSlice.actions;
export default characterSlice.reducer;
