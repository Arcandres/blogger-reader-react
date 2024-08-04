import { createBlog } from '@/actions/actions';

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
      />
      <button className='bg-main py-3 px-5 rounded-lg'>Add a Blog</button>
    </form>
  );
}
