import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'lol',
};

const imagePrompt = createSlice({
  name: 'image-prompt',
  initialState,
  reducers: {
    changeTest: (state) => {
      state.test = 'lol lol';
    },
  },
});

export const { changeTest } = imagePrompt.actions;

export default imagePrompt.reducer;
