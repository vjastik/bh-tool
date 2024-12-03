import { Middleware } from '@reduxjs/toolkit';
import { saveCharacters } from '../../utils/storage';
import { RootState } from '../store';

export const storageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  
  if (action.type?.startsWith('characters/')) {
    const state = store.getState() as RootState;
    saveCharacters(state.characters.characters);
  }
  
  return result;
};