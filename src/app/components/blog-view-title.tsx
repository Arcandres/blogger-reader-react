import BlogAction from './blog-action';
import { BlogActions } from '../lib/constants';
import Link from 'next/link';

type BlogViewTitleProps = {
  blogId: string;
  blogTitle: string;
  blogUrl: string;
};

export default function BlogViewTitle({
  blogId,
  blogTitle,
  blogUrl,
}: BlogViewTitleProps) {
  const parsedUrl = blogUrl.replace('http://', 'https://');

  return (
    <h2
      className=' flex gap-1 items-center justify-between font-bold text-white capitalize'
      style={{
        background: `url("//www.google.com/s2/favicons?domain=${parsedUrl}") no-repeat 1px center`,
        paddingLeft: '1.4rem',
      }}
    >
      <Link href={`/blog/${blogId}`}>{blogTitle}</Link>
      <span className='flex gap-x-1'>
        <BlogAction action={BlogActions.UPDATE} blogId={blogId} />
        <BlogAction action={BlogActions.DELETE} blogId={blogId} />
      </span>
    </h2>
  );
}
