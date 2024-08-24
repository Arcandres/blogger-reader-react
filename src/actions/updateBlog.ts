'use server';

import { getBlogById } from '@/app/lib/bloggerService';
import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

export default async function updateBlog(formData: FormData) {
  const blogId = String(formData.get('blogId'));

  const { data } = await getBlogById(blogId);

  const restructuredData = {
    kind: data.kind,
    id: data.id,
    name: data.name,
    description: data.description,
    published: new Date(data.published),
    updated: new Date(data.updated),
    url: data.url,
    selfLink: data.selfLink,
    postsCount: data.posts.totalItems,
    postsUrl: data.posts.selfLink,
    pagesCount: data.pages.totalItems,
    pagesUrl: data.pages.selfLink,
    language: data.locale.language,
    country: data.locale.country,
  };

  await prisma.blog.update({ where: { id: blogId }, data: restructuredData });
  revalidatePath('/blogs');
}
