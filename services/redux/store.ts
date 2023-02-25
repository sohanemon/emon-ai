import { configureStore } from '@reduxjs/toolkit';
import imagePrompt from './slices/image-prompt';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    'image-prompt': imagePrompt,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
