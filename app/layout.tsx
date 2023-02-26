import MaterialProvider from '@/contexts/material-provider';
import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from '../contexts/redux-provider';

export const metadata = {
  title: 'Emon Ai',
  description: 'Created by SohanEmon',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={inter.style}>
        <MaterialProvider>
          <ReduxProvider>
            {/* #todo: fix scrollbar bug */}
            <main className='min-h-screen text-white bg-black [&_*]:scrollbar-thin'>
              {children}
            </main>
          </ReduxProvider>
        </MaterialProvider>
      </body>
    </html>
  );
}
