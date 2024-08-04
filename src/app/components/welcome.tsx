import Image from 'next/image';
import BlogForm from './blog-form';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function Welcome() {
  const blogs = await prisma.blog.count();

  return (
    <main className='flex flex-col justify-center items-center  min-h-[100dvh]'>
      <header className='flex flex-col gap-4 items-center'>
        <Image
          src='Blogger-logo.svg'
          alt='Blogger Reader Logo'
          width={80}
          height={80}
          className='rounded-2xl'
        />
        <h1 className='text-3xl'>Blogger Reader</h1>
        <p>A simple app for reading blogspot Blogs.</p>
      </header>
      <BlogForm />
      {blogs > 0 && (
        <Link className='p-5 hover:underline border-b-main' href={'/blogs'}>
          Go to blogs
        </Link>
      )}
    </main>
  );
}
