'use server';

import prisma from '@/app/lib/db';
import { getBlog } from '@/app/lib/bloggerService';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlog(formData: FormData) {
  const blogUrl = String(formData.get('BlogUrl'));
  const blogDB = await prisma.blog.findUnique({
    where: {
      url: `${blogUrl.replace('https', 'http')}/`, // solve https://spanishblogsdreamteam.blogspot.com/
    },
  });

  // Let's skip to /blogs in case the blog is already added
  if (blogDB != null) return redirect('/blogs');

  const { data } = await getBlog(blogUrl);

  const restructuredData = {
    kind: data.kind,
    id: data.id,
    name: data.name,
    description: data.description,
    published: new Date(data.published),
    updated: new Date(data.updated),
    url: data.url,
    selfLink: data.selfLink,
    postsCount: data.posts?.totalItems,
    postsUrl: data.posts?.selfLink,
    pagesCount: data.pages?.totalItems,
    pagesUrl: data.pages?.selfLink,
    language: data.locale?.language,
    country: data.locale?.country,
  };

  // if id not found, means the blog doesn't exist on Blogger database
  if (!restructuredData.id) {
    return redirect(`/?created=false`);
  }

  await prisma.blog.upsert({
    where: {
      id: restructuredData.id,
    },
    update: {},
    create: restructuredData,
  });

  revalidatePath(`/blogs`);
  redirect(`/blogs/?created=true`);
}
