import { UpdateIcon } from '@radix-ui/react-icons';
import DeleteBlog from './delete-blog';

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
  const parsedUrl = blogUrl.replace('http://', '');

  return (
    <h2
      className=' flex gap-1 items-center justify-between font-bold text-white'
      style={{
        background: `url("//www.google.com/s2/favicons?domain=${parsedUrl}") no-repeat 1px center`,
        paddingLeft: '1.4rem',
      }}
    >
      {blogTitle}
      <span className='flex gap-x-1'>
        <span className='text-cyan-400 cursor-pointer'>
          <UpdateIcon />
        </span>
        <DeleteBlog blogId={blogId} />
      </span>
    </h2>
  );
}
