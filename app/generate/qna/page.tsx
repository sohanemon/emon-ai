'use client';
import fetchAnswer from '@/utils/fetch-answer';
import { Button, Textarea } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  answerSelect,
  setAnswer,
} from '../../../services/redux/slices/qna-slice';
export default function Page() {
  const dispatch = useDispatch();
  const answer = useSelector(answerSelect);
  console.log('🛑 ~ Page ~ answer:', answer);

  async function handleSubmit() {
    dispatch(setAnswer(await fetchAnswer()));
  }

  return (
    <>
      <div className='grid justify-center pt-10'>
        <div className='w-96 h-[calc(100vh-120px)] flex flex-col justify-end'>
          <div className='grow overflow-y-scroll overflow-x-hidden'>
            <span>{'> '}</span>
            {answer}
          </div>
          <Textarea color='gray' label={'Ask your question'} />
          <Button onClick={handleSubmit} color='green' className='w-full mt-2'>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
