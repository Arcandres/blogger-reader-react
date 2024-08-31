import prisma from '../lib/db';
import BlogView from '../components/blog-view';
import Header from '../components/header';
import Footer from '../components/footer';
import BlogNotify from '../components/blog-notify';

interface SearchParamsProps {
  searchParams: { created: 'true' | 'false' };
}

export default async function Blogs({ searchParams }: SearchParamsProps) {
  const { created } = searchParams;

  const blogs = await prisma.blog.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <>
      <Header>Blogs</Header>
      <main>
        <div className='flex flex-col gap-4 p-4'>
          {blogs.length > 0 &&
            blogs.map((blog) => <BlogView key={blog.id} blog={blog} />)}
          {blogs.length <= 0 && (
            <p className='text-center'>
              Add a blog first, before trying to read it
            </p>
          )}
        </div>
        <BlogNotify text='Blog added succesfully!' created={created} />
      </main>
      <Footer />
    </>
  );
}
