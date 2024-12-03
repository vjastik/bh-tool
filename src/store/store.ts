import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import { storageMiddleware } from './middleware/storageMiddleware';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;