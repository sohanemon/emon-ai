'use client';
import {
  changeInput,
  inputLengthSelect,
  inputValueSelect,
} from '@/services/redux/slices/image-prompt';
import { fetchImageWithPrompt } from '@/utils/fetch-image';
import { Button, Input } from '@material-tailwind/react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();

  const inputValue = useSelector(inputValueSelect);

  const inputLength = useSelector(inputLengthSelect);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    await fetchImageWithPrompt('dog eating water');
  }

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch(changeInput((e.target as HTMLInputElement).value));
  }

  function handleClear(e: React.MouseEvent<SVGElement, MouseEvent>) {
    // @ts-ignore
    e.target.parentElement.parentElement.querySelector('input').value = '';
    dispatch(changeInput(''));
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-96'>
        <Input
          onInput={(e) => handleInputChange(e)}
          color='gray'
          label='Write prompt'
          icon={
            !inputLength ? (
              <BiMessageRoundedDots />
            ) : (
              <MdClear
                onClick={(e) => handleClear(e)}
                className='cursor-pointer'
              />
            )
          }
        />
        <Button onClick={handleSubmit} color='green' className='w-full mt-2'>
          Submit
        </Button>
      </div>
    </div>
  );
}
