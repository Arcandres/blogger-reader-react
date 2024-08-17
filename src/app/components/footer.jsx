import { HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 flex justify-center w-full max-w-2xl p-2 z-10'>
      <Link className='p-2 bg-post rounded-full' href={'/'}>
        <HomeIcon />
      </Link>
    </footer>
  );
}
