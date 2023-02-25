import Button from '@/components/button';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main style={inter.style} className='min-h-screen text-white bg-black'>
      <div className='grid min-h-screen place-content-center'>
        <Link href={'generate/image'}>
          <Button>Image Generation</Button>
        </Link>
      </div>
    </main>
  );
}
