'use client';

import PostView from '@/app/components/post-view';
import { getPostsByToken } from '@/app/lib/bloggerService';
import { TPost } from '@/app/lib/types';
import { useState } from 'react';

type PageParams = {
  blogId: string;
  initialToken: string;
};

export default function PostByToken({ blogId, initialToken }: PageParams) {
  const [token, setToken] = useState(initialToken);
  const [posts, setPosts] = useState<any>([]);

  const getPosts = async (blogId: string, token: string) => {
    const { data } = await getPostsByToken(blogId, token);

    return data;
  };

  const handleClick = async () => {
    const blogContent = await getPosts(blogId, token);
    if (!blogContent.nextPageToken || blogContent.nextPageToken === token) {
      setToken('');
      return;
    }
    setPosts((prev: any) => [...prev, ...blogContent.items]);
    setToken(blogContent.nextPageToken);
  };

  return (
    <>
      {posts.length > 0 &&
        posts.map((post: TPost) => <PostView key={post.id} post={post} />)}
      {token && <button onClick={handleClick}>Load more</button>}
    </>
  );
}
