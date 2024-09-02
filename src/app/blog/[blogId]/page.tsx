import Breadcrumb from '@/app/components/breadcrumb';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import PostView from '@/app/components/post-view';
import { getPosts, getPostsByToken } from '@/app/lib/bloggerService';
import { TPost } from '@/app/lib/types';
import { PrismaClient } from '@prisma/client';
import { TrackNextIcon, TrackPreviousIcon } from '@radix-ui/react-icons';
import { redirect } from 'next/navigation';

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

  if (!blog) redirect('/');

  const { data: blogContent } = await getPosts(blogId);

  if (blogContent.nextPageToken) {
  }

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
        <footer className='flex justify-between'>
          <div className='flex items-center gap-1 cursor-pointer p-2 hover:text-white transition'>
            {blogContent.nextPageToken && (
              <PreviousPosts
                nextPageToken={blogContent.nextPageToken}
                blogId={blogId}
              />
            )}
          </div>
          {/* <div className='flex items-center gap-1 cursor-pointer p-2 hover:text-white transition'>
            Next <TrackNextIcon />
          </div> */}
        </footer>
      </main>
      <Footer />
    </>
  );
}

async function PreviousPosts({ blogId, nextPageToken }: any) {
  const { data: posts } = await getPostsByToken(blogId, nextPageToken);

  return (
    <>
      <TrackPreviousIcon /> Previous
    </>
  );
}
