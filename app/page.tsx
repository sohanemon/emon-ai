import Button from '@/components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col min-h-screen place-content-center place-items-center gap-y-3'>
        <Link href={'generate/image'}>
          <Button>Image Generation</Button>
        </Link>
        <Link href={'generate/qna'} className='block'>
          <Button>Question/Answer</Button>
        </Link>
      </div>
    </main>
  );
}
