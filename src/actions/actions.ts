'use server';

import prisma from '@/app/lib/db';
import { getBlog } from '@/app/lib/bloggerService';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlog(formData: FormData) {
  if (!formData.get('BlogUrl')) return;

  try {
    const { data } = await getBlog(String(formData.get('BlogUrl')));

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

    await prisma.blog.create({
      data: restructuredData,
    });

    revalidatePath(`/blogs`);
    redirect(`/blogs`);
  } catch {
    console.log('Blog not found or already added');
  }
}
