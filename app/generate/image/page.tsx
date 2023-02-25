'use client';
import { changeInput } from '@/services/redux/slices/image-prompt';
import { RootState } from '@/services/redux/store';
import { Button, Input } from '@material-tailwind/react';
import { useRef } from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);

  const inputState = useSelector(
    (state: RootState) => state['image-prompt'].inputValue
  );

  /* ----------------------------- functions ----------------------------- */
  function handleSubmit() {
    dispatch(changeInput(inputRef.current.querySelector('input').value));
    console.log('🛑 ~ Page ~ inputState:', inputState);
  }

  function handleInputChange() {
    dispatch(changeInput(inputRef.current.querySelector('input').value));
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-96'>
        <Input
          onChange={handleInputChange}
          ref={inputRef}
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
