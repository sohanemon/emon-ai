'use client';
import { Button as TwButton } from '@material-tailwind/react';

export default function Button({ children }: { children: Children }) {
  return (
    <TwButton variant='outlined' color='gray'>
      {children}
    </TwButton>
  );
}
