import prisma from '../lib/db';
import BlogView from '../components/blog-view';
import Header from '../components/header';
import Footer from '../components/footer';
import { redirect } from 'next/navigation';

export default async function Blogs() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      name: 'asc',
    },
  });

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
      <Footer />
    </>
  );
}
