import { PrismaClient } from '@prisma/client';
import BlogView from '../components/blog-view';
import Header from '../components/header';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export default async function Blogs() {
  const blogs = await prisma.blog.findMany();

  if (blogs.length <= 0) redirect('/');

  return (
    <>
      <Header>Blogs</Header>
      <main>
        <div className='flex flex-col gap-4 p-4'>
          {blogs.map((blog) => (
            <BlogView key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </>
  );
}
