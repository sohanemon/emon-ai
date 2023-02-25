'use client';
import { Button as TwButton } from '@material-tailwind/react';

export default function Button({
  children,
  className,
}: {
  children: Children;
  className?: string;
}) {
  return (
    <TwButton variant='outlined' color='gray' className={className}>
      {children}
    </TwButton>
  );
}
