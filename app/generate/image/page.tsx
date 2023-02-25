'use client';
import {
  changeInput,
  inputLengthSelect,
  inputValueSelect,
} from '@/services/redux/slices/image-prompt';
import { Button, Input } from '@material-tailwind/react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();

  const inputValue = useSelector(inputValueSelect);
  const inputLength = useSelector(inputLengthSelect);

  /* ----------------------------- functions ----------------------------- */
  function handleSubmit() {}

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch(changeInput((e.target as HTMLInputElement).value));
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
