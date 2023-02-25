import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main style={inter.style} className='min-h-screen text-white bg-black'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
      molestias rem maxime adipisci asperiores consectetur laborum delectus nemo
      enim, corporis quos assumenda alias eligendi, sapiente commodi eaque, in
      necessitatibus nostrum.
    </main>
  );
}
