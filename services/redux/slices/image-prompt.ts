import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'lol',
};

const imagePrompt = createSlice({
  name: 'image-prompt',
  initialState,
  reducers: {},
});

export const {} = imagePrompt.actions;

export default imagePrompt.reducer;
