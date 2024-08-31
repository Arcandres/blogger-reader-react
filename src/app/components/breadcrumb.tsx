'use client';

import { HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbProps = {
  blogTitle?: string;
  blogId?: string;
  postTitle?: string;
};

export default function Breadcrumb({
  blogTitle,
  blogId,
  postTitle,
}: BreadcrumbProps) {
  const pathname = usePathname();
  return (
    <nav className='p-4 text-xs max-w-[460px] md:max-w-full m-auto w-full'>
      <ul className='flex gap-3'>
        {pathname.includes('blog') && (
          <ul className='flex items-center gap-x-4'>
            <li>
              <Link href={'/'}>
                <HomeIcon />
              </Link>
            </li>
            /
            <li>
              <Link href={'/blogs'}>Blogs</Link>
            </li>
            /
            <li>
              <span>{blogTitle}</span>
            </li>
          </ul>
        )}
        {pathname.includes('posts') && (
          <ul className='flex items-center gap-3'>
            <li>
              <Link href={'/'}>
                <HomeIcon />
              </Link>
            </li>
            /
            <li>
              <Link href={'/blogs'}>Blogs</Link>
            </li>
            /
            <li>
              <Link href={`/blog/${blogId}`}>{blogTitle}</Link>
            </li>
            /
            <li>
              <span>{postTitle}</span>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
