'use client';

import { Input } from '@material-tailwind/react';

export default function Page() {
  return (
    <div className='grid place-content-center'>
      <div className='w-72'>
        <Input
          color='gray'
          label='Input With Icon'
          icon={<i className='fas fa-heart' />}
        />
      </div>
    </div>
  );
}
