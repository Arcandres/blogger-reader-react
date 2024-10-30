import Breadcrumb from '@/app/components/breadcrumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import PostByToken from '@/app/components/post-by-token';
import PostView from '@/app/components/post-view';
import { getPosts } from '@/app/lib/bloggerService';
import prisma from '@/app/lib/db';
import { TPost } from '@/app/lib/types';
import { redirect } from 'next/navigation';

type BlogParams = {
  params: {
    blogId: string;
  };
};

export default async function Blog({ params }: BlogParams) {
  const blogId = params.blogId;

  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  });

  if (!blog) redirect('/');

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
          {blogContent.nextPageToken && (
            <PostByToken
              initialToken={blogContent.nextPageToken}
              blogId={blogId}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
