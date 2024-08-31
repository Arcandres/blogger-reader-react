'use server';

import { TBlog, TPosts, TSinglePost } from './types';

const bloggerService = 'https://www.googleapis.com/blogger/v3';

export const getBlog = async (blogUrl: string): Promise<TBlog> =>
  fetch(
    `${bloggerService}/blogs/byurl?url=${blogUrl}&key=${process.env.API_KEY}`
  )
    .then((data) => data.json())
    .then((blog) => ({ data: blog }));

export const getBlogById = async (blogId: string): Promise<TBlog> =>
  fetch(`${bloggerService}/blogs/${blogId}?key=${process.env.API_KEY}`)
    .then((data) => data.json())
    .then((blog) => ({ data: blog }));

export const getPosts = async (blogID: string): Promise<TPosts> =>
  fetch(`${bloggerService}/blogs/${blogID}/posts?key=${process.env.API_KEY}`)
    .then((data) => data.json())
    .then((blog) => ({ data: blog }));

export const getPost = async (
  blogId: string,
  postId: string
): Promise<TSinglePost> =>
  fetch(
    `${bloggerService}/blogs/${blogId}/posts/${postId}?key=${process.env.API_KEY}`
  )
    .then((data) => data.json())
    .then((post) => ({ data: post }));
