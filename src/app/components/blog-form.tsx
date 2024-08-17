import { createBlog } from '@/actions/actions';
import { PlusCircledIcon, ReaderIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function BlogForm() {
  return (
    <form
      action={createBlog}
      className='flex items-center flex-col gap-6 mt-8 w-[70%] max-w-[350px]'
    >
      <input
        autoFocus
        name='BlogUrl'
        className='text-sm p-4 w-full rounded-lg bg-transparent border-2 border-main outline-none'
        placeholder='https://blog.blogspot.com/'
        required
        type='url'
      />
      <div className='flex items-end gap-x-4'>
        <button className='flex items-center gap-x-1 bg-main py-3 px-5 rounded-lg font-bold'>
          <PlusCircledIcon /> Add
        </button>
        <Link
          className='flex items-center gap-x-1 font-bold border border-main py-3 px-4 rounded-lg mt-6'
          href={'/blogs'}
        >
          <ReaderIcon /> Read
        </Link>
      </div>
    </form>
  );
}
