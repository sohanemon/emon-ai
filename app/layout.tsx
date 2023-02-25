import MaterialProvider from '@/contexts/material-provider';
import './globals.css';

export const metadata = {
  title: 'Emon Ai',
  description: 'Created by SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <MaterialProvider>{children}</MaterialProvider>
      </body>
    </html>
  );
}
