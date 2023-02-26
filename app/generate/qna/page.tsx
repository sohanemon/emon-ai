'use client';
import fetchAnswer from '@/utils/fetch-answer';
import { Button, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { Comment } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  answerSelect,
  questionSelect,
  setAnswer,
  setQuestion,
} from '../../../services/redux/slices/qna-slice';

export default function Page() {
  const dispatch = useDispatch();

  /* --------------------------- global states --------------------------- */
  const answer = useSelector(answerSelect);
  const question = useSelector(questionSelect);

  /* ---------------------------- local states --------------------------- */
  const [isLoading, setIsLoading] = useState(false);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    setIsLoading(true);
    fetchAnswer(question).then((res) => {
      dispatch(setAnswer(res));
      setIsLoading(false);
    });
  }

  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement;
    dispatch(setQuestion(target.value));
  }

  return (
    <>
      <div className='grid justify-center pt-0 px:4 md:px-20'>
        <div className='w-[calc(100vw-100px)] mx-auto h-[calc(100vh-120px)] flex flex-col justify-end'>
          <div className='grow overflow-y-scroll overflow-x-hidden mb-6 scrollbar-thin'>
            {isLoading ? (
              <div className='flex mt-10 gap-3'>
                <span>Emon Ai is thinking </span>
                <Comment
                  visible={true}
                  height='40'
                  width='40'
                  ariaLabel='content-loading'
                  wrapperStyle={{}}
                  wrapperClass='comment-wrapper'
                  color='#fff'
                  backgroundColor='#black'
                />
              </div>
            ) : (
              <pre className='whitespace-pre-wrap'>{answer}</pre>
            )}
          </div>
          <Textarea
            onInput={(e) => handleInput(e)}
            color='gray'
            label={'Ask your question'}
          />
          <Button
            disabled={isLoading}
            onClick={handleSubmit}
            color='green'
            className='w-full mt-2'
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
