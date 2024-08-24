import { TrashIcon } from '@radix-ui/react-icons';
import deleteBlog from '@/actions/deleteBlog';

export default function DeleteBlog({ blogId }: { blogId: string }) {
  return (
    <form action={deleteBlog} className='text-red-400 cursor-pointer'>
      <input name='blogId' className='hidden' value={blogId} required />
      <button>
        <TrashIcon />
      </button>
    </form>
  );
}
