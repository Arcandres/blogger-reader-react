import Breadcrumb from '@/app/components/breadcrumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import PostView from '@/app/components/post-view';
import { getPosts } from '@/app/lib/bloggerService';
import { TPost } from '@/app/lib/types';
import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';

type BlogParams = {
  params: {
    blogId: string;
  };
};

const prisma = new PrismaClient();

export default async function Blog({ params }: BlogParams) {
  const blogId = params.blogId;

  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  });

  if (!blog) return notFound();

  const { data: blogContent } = await getPosts(blogId);

  return (
    <>
      <main>
        <Breadcrumb blogTitle={blog.name} />
        <Header>{blog.name}</Header>
        <section className='flex p-4 gap-y-4 flex-col w-full max-w-[460px] mx-auto'>
          {blogContent.items.map((post: TPost) => (
            <PostView key={post.id} post={post} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
