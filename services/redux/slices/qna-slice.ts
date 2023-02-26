import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answer: '',
  question: '',
};

const qnaSlice = createSlice({
  name: 'qna',
  initialState,
  reducers: {
    setAnswer: (state, { payload }) => {
      state.answer = payload;
    },
    setQuestion: (state, { payload }) => {
      state.question = payload;
    },
  },
});

export const { setAnswer, setQuestion } = qnaSlice.actions;
export const answerSelect = (state: RootState) => state.qna.answer;
export const questionSelect = (state: RootState) => state.qna.question;
export default qnaSlice.reducer;
