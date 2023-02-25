import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  inputValue: '',
  inputLength: 0,
  imageSrc: '',
  isImageFetching: false,
};

const imagePrompt = createSlice({
  name: 'image-prompt',
  initialState,
  reducers: {
    changeInput: (state, { payload }) => {
      state.inputValue = payload;
      state.inputLength = parseInt(payload.length);
    },
    updateImage: (state, { payload }) => {
      state.imageSrc = payload;
    },
    updateImageFetching: (state, { payload }) => {
      return { ...state, isImageFetching: payload };
    },
  },
});

// actions
export const { changeInput, updateImage, updateImageFetching } =
  imagePrompt.actions;

// selections

export const inputValueSelect = (state: RootState) =>
  state['image-prompt'].inputValue;
export const inputLengthSelect = (state: RootState) =>
  state['image-prompt'].inputLength;
export const imageSrcSelect = (state: RootState) =>
  state['image-prompt'].imageSrc;
export const isImageFetchingSelect = (state: RootState) =>
  state['image-prompt'].isImageFetching;
export default imagePrompt.reducer;
