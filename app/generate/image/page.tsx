'use client';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { Input } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

export default function Page() {
  return (
    <div className='grid min-h-screen place-content-center'>
      <div className='w-96'>
        <Input
          color='gray'
          label='Write prompt'
          icon={<BiMessageRoundedDots />}
        />
        <Button color='green' className='w-full mt-2'>
          Submit
        </Button>
      </div>
    </div>
  );
}
