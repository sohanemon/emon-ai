'use client';
import { Button, Input } from '@material-tailwind/react';
export default function Page() {
  return (
    <>
      <div className='grid justify-center pt-10'>
        <div className='w-96'>
          <Input
            color='gray'
            label={'label'}

            // icon={
            //   !inputLength ? (
            //     <BiMessageRoundedDots />
            //   ) : (
            //     <MdClear
            //       onClick={(e) => handleClear(e)}
            //       className='cursor-pointer'
            //     />
            //   )
            // }
          />
          <Button color='green' className='w-full mt-2'>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
