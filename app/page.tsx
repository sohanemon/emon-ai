import Button from '@/components/button';
import { Inter } from 'next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='grid min-h-screen place-content-center'>
        <Link href={'generate/image'}>
          <Button>Image Generation</Button>
        </Link>
      </div>
    </main>
  );
}
