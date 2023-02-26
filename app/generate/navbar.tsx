'use client';
import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

export default function TopBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='#' className='flex items-center'>
          Pages
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='max-w-screen-xl px-4 py-2 mx-auto lg:px-8 lg:py-4'>
      <div className='container flex items-center justify-between mx-auto text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='small'
          className='mr-4 cursor-pointer py-1.5 font-normal'
        >
          <span>Emon Ai</span>
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        <Button variant='gradient' size='sm' className='hidden lg:inline-block'>
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
          <Button variant='gradient' size='sm' fullWidth className='mb-2'>
            {contact}
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

const contact = <span>Contact</span>;
