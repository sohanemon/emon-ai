import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answer: '',
};

const qnaSlice = createSlice({
  name: 'qna',
  initialState,
  reducers: {
    setAnswer: (state, { payload }) => {
      state.answer = payload;
    },
  },
});

export const { setAnswer } = qnaSlice.actions;
export const answerSelect = (state: RootState) => state.qna.answer;
export default qnaSlice.reducer;
