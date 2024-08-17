import Header from '@/app/components/header';
import { getBlogById, getPost } from '../../lib/bloggerService';
import Footer from '@/app/components/footer';
import Breadcrumb from '@/app/components/breadcrumb';

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
  const { data: blog } = await getBlogById(blogId);

  if (!post) return 'Post not found';

  return (
    <>
      <main>
        <Breadcrumb
          blogId={blogId}
          blogTitle={blog.name}
          postTitle={post.title}
        />
        <Header>{post.title}</Header>
        <article
          className='post bg-main rounded-md p-4 m-4 border border-[#232f40]'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
      <Footer />
    </>
  );
}
