import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  inputValue: '',
  inputLength: 0,
};

const imagePrompt = createSlice({
  name: 'image-prompt',
  initialState,
  reducers: {
    changeInput: (state, { payload }) => {
      state.inputValue = payload;
      state.inputLength = parseInt(payload.length);
    },
  },
});

// actions
export const { changeInput } = imagePrompt.actions;

// selections

export const inputValueSelect = (state: RootState) =>
  state['image-prompt'].inputValue;
export const inputLengthSelect = (state: RootState) =>
  state['image-prompt'].inputLength;
export default imagePrompt.reducer;
