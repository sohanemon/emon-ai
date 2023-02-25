'use client';
import { changeTest } from '@/services/redux/slices/image-prompt';
import { Button, Input } from '@material-tailwind/react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();

  /* ----------------------------- functions ----------------------------- */
  function handleSubmit() {
    dispatch(changeTest());
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-96'>
        <Input
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
