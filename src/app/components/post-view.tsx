import Link from 'next/link';
import { TPost } from '../lib/types';
import { ArrowBottomRightIcon, ReaderIcon } from '@radix-ui/react-icons';

type PostProp = {
  post: TPost;
};

const imgPattern = /<img[^>]*src=["']([^"']*)["'][^>]*\/>/;

export default function PostView({ post }: PostProp) {
  const image = imgPattern.exec(post.content);
  let imageUrl;

  if (image) {
    imageUrl = image[1];
  } else {
    imageUrl = '/default.png';
  }

  const content = post.content.replace(/<[^>]*>?/g, '').split(' ');
  const average = Math.round(content.length / 200);

  return (
    <article
      key={post.id}
      className='card p-4 rounded-lg border border-[#232f40]'
    >
      <h2 className='text-sm font-bold text-white'>{post.title}</h2>
      <div className='flex gap-4 pt-4'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='rounded-md object-cover'
          src={imageUrl}
          alt={post.title}
          width={150}
          height={94}
        />
        <div className='text-xs flex flex-col justify-between w-full'>
          <div>
            <p className='pb-1'>
              Author:{' '}
              <span className='font-bold'>{post.author.displayName}</span>
            </p>
            <p className='pb-1'>Comments: # {post.replies.totalItems}</p>
            <p className='pb-1'>
              Reading Time:{' '}
              {average <= 1 ? 'Less than a minute' : `${average} mins`}
            </p>
          </div>
          <Link
            href={{
              pathname: `/posts/${post.id}`,
              query: {
                blogId: post.blog.id,
              },
            }}
            className='flex items-center gap-x-1 self-end font-black'
          >
            Read <ArrowBottomRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
