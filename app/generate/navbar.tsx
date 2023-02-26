'use client';
import { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';

export default function TopBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 950 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        variant='small'
        color='white'
        className='p-1 font-normal hover:text-gray-300'
      >
        <Link href='/generate/image' className='flex items-center'>
          Image
        </Link>
      </Typography>
      <Typography
        variant='small'
        color='white'
        className='p-1 font-normal hover:text-gray-300'
      >
        <Link href='/generate/qna' className='flex items-center'>
          Q/A
        </Link>
      </Typography>
    </ul>
  );

  return (
    <section className='pt-3 px-5'>
      <Navbar className='max-w-screen-xl px-4 py-2 mx-auto bg-transparent lg:px-8 border-none shadow-sm shadow-gray-300 rounded-t-none '>
        <div className='container flex items-center justify-between mx-auto text-white'>
          <Typography
            variant='small'
            className='mr-4 cursor-pointer py-1.5 font-bold tracking-[5px]'
          >
            <Link href={'/'}>Emon Ai</Link>
          </Typography>
          <div className='hidden lg:block'>{navList}</div>
          <Button
            variant='gradient'
            size='sm'
            color='green'
            className='hidden lg:inline-block'
          >
            {contact}
          </Button>
          <IconButton
            variant='text'
            className='w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='w-6 h-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className='container mx-auto'>
            {navList}
            <Button
              variant='gradient'
              color='green'
              size='sm'
              fullWidth
              className='mb-2'
            >
              {contact}
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </section>
  );
}

const contact = (
  <a
    href='https://github.com/sohanemon'
    target={'_blank'}
    className='flex items-center gap-2 font-normal'
  >
    <BsGithub />
    <span>Github</span>
  </a>
);
