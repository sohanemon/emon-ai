'use client';
import {
  changeInput,
  inputLengthSelect,
  inputValueSelect,
  updateImage,
} from '@/services/redux/slices/image-prompt';
import { fetchImageWithPrompt } from '@/utils/fetch-image';
import { Button, Input } from '@material-tailwind/react';
import Image from 'next/image';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { imageSrcSelect } from '../../../services/redux/slices/image-prompt';

export default function Page() {
  const dispatch = useDispatch();

  const inputValue = useSelector(inputValueSelect);
  const imageSrc = useSelector(imageSrcSelect);
  const inputLength = useSelector(inputLengthSelect);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    dispatch(updateImage(await fetchImageWithPrompt('dog eating water')));
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
        <hr className='my-5' />
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=''
            width={1024}
            height={1024}
            className='w-full rounded-lg'
          />
        )}
      </div>
    </div>
  );
}
