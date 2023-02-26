'use client';
import { Button, Input, Textarea } from '@material-tailwind/react';
export default function Page() {
  return (
    <>
      <div className='grid justify-center pt-10'>
        <div className='w-96 h-[calc(100vh-120px)] flex flex-col justify-end'>
          <div className='grow '>
            <span>{'> '}</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            laborum fuga? Ullam ducimus molestiae, animi autem maiores ut sit
            earum praesentium adipisci, ipsa provident dicta qui corporis minus?
            Accusantium, architecto?
          </div>
          <Textarea color='gray' label={'Ask your question'} />
          <Button color='green' className='w-full mt-2'>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
