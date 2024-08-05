import { HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 flex justify-center w-full bg-main border-t border-teal-100/20 p-2 z-10'>
      <Link href={'/'}>
        <HomeIcon className='' />
      </Link>
    </footer>
  );
}
