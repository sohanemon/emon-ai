'use client';
import fetchAnswer from '@/utils/fetch-answer';
import { Button, Textarea } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  answerSelect,
  questionSelect,
  setAnswer,
} from '../../../services/redux/slices/qna-slice';

export default function Page() {
  const dispatch = useDispatch();

  /* --------------------------- global states --------------------------- */
  const answer = useSelector(answerSelect);
  const question = useSelector(questionSelect);
  console.log('🛑 ~ Page ~ answer:', answer);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    dispatch(setAnswer(await fetchAnswer(question)));
  }

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {}

  return (
    <>
      <div className='grid justify-center pt-10 px:4 md:px-20'>
        <div className='w-full h-[calc(100vh-120px)] flex flex-col justify-end'>
          <div className='grow overflow-y-scroll overflow-x-hidden my-3 scrollbar-thin'>
            <span>{'> '}</span>
            <pre className='whitespace-pre-wrap'>{answer}</pre>
          </div>
          <Textarea
            onInput={(e) => handleInput(e)}
            color='gray'
            label={'Ask your question'}
          />
          <Button onClick={handleSubmit} color='green' className='w-full mt-2'>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
