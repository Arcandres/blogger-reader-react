import PostView from '@/app/components/post-view';
import { getPostsByToken } from '@/app/lib/bloggerService';
import { TPost } from '@/app/lib/types';

type PageParams = {
  params: {
    blogId: string;
    token: string;
  };
};

export default async function Page({ params }: PageParams) {
  const token = params.token;
  const blogId = params.blogId;
  const { data: blogContent } = await getPostsByToken(blogId, token);

  return (
    <main>
      {blogContent.items.map((post: TPost) => (
        <PostView key={post.id} post={post} />
      ))}
    </main>
  );
}
