import { Blog } from '@prisma/client';
import Link from 'next/link';
import BlogViewTitle from '@/app/components/blog-view-title';
import { ArrowBottomRightIcon } from '@radix-ui/react-icons';

type BlogViewProps = {
  blog: Blog;
};

export default function BlogView({ blog }: BlogViewProps) {
  return (
    <article className='flex gap-y-4 flex-col w-full max-w-[460px] bg-post p-4 rounded-lg mx-auto'>
      <BlogViewTitle blogTitle={blog.name} blogUrl={blog.url} />
      <p className='text-white/80'>{blog.description}</p>
      <div className='flex justify-between'>
        <small className='flex gap-x-3'>
          <span>
            Posts: <span className='font-bold'>{blog.postsCount}</span>
          </span>
          |
          <span>
            Pages: <span className='font-bold'>{blog.pagesCount}</span>
          </span>
        </small>
        <Link
          href={`/blog/${blog.id}`}
          className='flex items-center gap-x-1 text-xs text-white font-bold hover:text-background-radial transition-colors duration-100'
        >
          Read <ArrowBottomRightIcon />
        </Link>
      </div>
    </article>
  );
}
