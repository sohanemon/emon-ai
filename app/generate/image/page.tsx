'use client';
import {
  changeInput,
  inputLengthSelect,
  inputValueSelect,
  isImageFetchingSelect,
  updateImage,
  updateImageFetching,
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
  const isImageFetching = useSelector(isImageFetchingSelect);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    dispatch(updateImageFetching(true));
    fetchImageWithPrompt(inputValue).then((res) => {
      dispatch(updateImage(res));
      dispatch(updateImageFetching(false));
    });
  }

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch(changeInput((e.target as HTMLInputElement).value));
    dispatch(updateImage(''));
    dispatch(updateImageFetching(false));
  }

  function handleClear(e: React.MouseEvent<SVGElement, MouseEvent>) {
    // @ts-ignore
    e.target.parentElement.parentElement.querySelector('input').value = '';
    dispatch(changeInput(''));
    dispatch(updateImageFetching(false));
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid justify-center min-h-screen pt-10'>
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
        <Button
          disabled={isImageFetching}
          onClick={handleSubmit}
          color='green'
          className='w-full mt-2'
        >
          Submit
        </Button>
        {imageSrc && (
          <>
            <hr className='my-5' />
            <Image
              src={imageSrc}
              alt=''
              width={1024}
              height={1024}
              className='w-full rounded-lg'
            />
          </>
        )}
      </div>
    </div>
  );
}
