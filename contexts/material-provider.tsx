'use client';
import { ThemeProvider } from '@material-tailwind/react';

export default function MaterialProvider({ children }: { children: Children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
