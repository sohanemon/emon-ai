'use client';
import DnaLoader from '@/components/dna-loader';
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
import { useState } from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { imageSrcSelect } from '../../../services/redux/slices/image-prompt';

const LABEL = 'A cow flying in the sky';

export default function Page() {
  const dispatch = useDispatch();

  const inputValue = useSelector(inputValueSelect);
  const imageSrc = useSelector(imageSrcSelect);
  const inputLength = useSelector(inputLengthSelect);
  const isImageFetching = useSelector(isImageFetchingSelect);

  /* ---------------------------- local states --------------------------- */
  const [label, setLabel] = useState(LABEL);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  /* ----------------------------- functions ----------------------------- */
  async function handleSubmit() {
    setIsImageLoaded(false);
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
    setIsImageLoaded(false);
  }

  function handleClear(e: React.MouseEvent<SVGElement, MouseEvent>) {
    // @ts-ignore
    e.target.parentElement.parentElement.querySelector('input').value = '';
    dispatch(changeInput(''));
    setIsImageLoaded(false);
    dispatch(updateImageFetching(false));
    dispatch(updateImage(''));
  }

  /* --------------------------------------------------------------------- */
  return (
    <div className='grid justify-center pt-10'>
      <div className='w-96'>
        <Input
          onInput={(e) => handleInputChange(e)}
          color='gray'
          label={label}
          onFocus={() => setLabel('Write a prompt')}
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
          disabled={isImageFetching || !inputLength}
          onClick={handleSubmit}
          color='green'
          className='w-full mt-2'
        >
          Submit
        </Button>

        {isImageLoaded && <hr className='my-5' />}

        {isImageFetching && <DnaLoader />}

        {!isImageLoaded && imageSrc && <DnaLoader />}

        {imageSrc && (
          <>
            <Image
              onLoadingComplete={() => setIsImageLoaded(true)}
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
