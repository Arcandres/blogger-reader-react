import { TrashIcon, UpdateIcon } from '@radix-ui/react-icons';
import deleteBlog from '@/actions/deleteBlog';
import updateBlog from '@/actions/updateBlog';
import { BlogActions } from '../lib/constants';

type BlogActionProps = {
  blogId: string;
  action: BlogActions;
};

export default function BlogAction({ blogId, action }: BlogActionProps) {
  return (
    <form
      action={action === BlogActions.DELETE ? deleteBlog : updateBlog}
      className='cursor-pointer'
      style={{ color: action === BlogActions.DELETE ? 'tomato' : 'cyan' }}
    >
      <input
        name='blogId'
        readOnly
        className='hidden'
        value={blogId}
        required
      />
      <button>
        {action === BlogActions.UPDATE ? <UpdateIcon /> : <TrashIcon />}
      </button>
    </form>
  );
}
