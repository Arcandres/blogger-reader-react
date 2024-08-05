import Header from '@/app/components/header';
import { getPost } from '../../lib/bloggerService';
import Footer from '@/app/components/footer';

type PostParams = {
  searchParams: {
    blogId: string;
  };
  params: {
    postId: string;
  };
};

export default async function page({ searchParams, params }: PostParams) {
  const postId = params.postId;
  const blogId = searchParams.blogId;

  const { data: post } = await getPost(blogId, postId);

  if (!post) return 'Post not found';

  return (
    <>
      <main>
        <Header>{post.title}</Header>
        <article
          className='post bg-main rounded-md p-4 m-4'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
      <Footer />
    </>
  );
}
