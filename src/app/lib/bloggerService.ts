'use server';

import axios from 'axios';
import { TBlog, TPosts, TSinglePost } from './types';

const bloggerService = axios.create({
  baseURL: 'https://www.googleapis.com/blogger/v3',
});

export const getBlog = async (blogUrl: string): Promise<TBlog> =>
  bloggerService.get(`/blogs/byurl?url=${blogUrl}&key=${process.env.API_KEY}`);

export const getBlogById = async (blogId: string): Promise<TBlog> =>
  bloggerService.get(`/blogs/${blogId}?key=${process.env.API_KEY}`);

export const getPosts = async (blogID: string): Promise<TPosts> =>
  bloggerService.get(`/blogs/${blogID}/posts?key=${process.env.API_KEY}`);

export const getPost = async (
  blogId: string,
  postId: string
): Promise<TSinglePost> =>
  bloggerService.get(
    `/blogs/${blogId}/posts/${postId}?key=${process.env.API_KEY}`
  );
