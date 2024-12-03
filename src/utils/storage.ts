import { Character } from '../types/character';

const STORAGE_KEY = 'ttrpg_characters';

export const loadCharacters = (): Character[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading characters from localStorage:', error);
    return [];
  }
};

export const saveCharacters = (characters: Character[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  } catch (error) {
    console.error('Error saving characters to localStorage:', error);
  }
};