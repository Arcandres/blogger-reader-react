import Image from 'next/image';
import BlogForm from './blog-form';

export default async function Welcome() {
  return (
    <main className='flex flex-col justify-center items-center  min-h-[100dvh]'>
      <header className='flex flex-col gap-4 items-center'>
        <Image
          src='Blogger-logo.svg'
          alt='Blogger Reader Logo'
          width={80}
          height={80}
          priority={true}
          className='rounded-2xl bg-orange-300'
        />
        <h1 className='text-3xl'>Blogger Reader</h1>
        <p>A simple app for reading blogspot Blogs.</p>
      </header>
      <BlogForm />
    </main>
  );
}
