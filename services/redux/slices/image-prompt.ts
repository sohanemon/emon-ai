import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

const imagePrompt = createSlice({
  name: 'image-prompt',
  initialState,
  reducers: {
    changeInput: (state, { payload }) => {
      state.inputValue = payload;
    },
  },
});

export const { changeInput } = imagePrompt.actions;

export default imagePrompt.reducer;
