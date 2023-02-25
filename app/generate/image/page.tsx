'use client';
import { changeInput } from '@/services/redux/slices/image-prompt';
import { RootState } from '@/services/redux/store';
import { Button, Input } from '@material-tailwind/react';
import { useRef, useEffect, ReactElement, FormEvent } from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();

  const inputState = useSelector(
    (state: RootState) => state['image-prompt'].inputValue
  );
  console.log('🛑 ~ Page ~ inputState:', inputState);

  /* ------------ adding event listener for material tailwind ------------ */
  /* ----------------------------- functions ----------------------------- */
  function handleSubmit() {}

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    console.log((e.target as HTMLInputElement).value);
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-96'>
        <Input
          onInput={(e) => handleInputChange(e)}
          color='gray'
          label='Write prompt'
          icon={<BiMessageRoundedDots />}
        />
        <Button onClick={handleSubmit} color='green' className='w-full mt-2'>
          Submit
        </Button>
      </div>
    </div>
  );
}
