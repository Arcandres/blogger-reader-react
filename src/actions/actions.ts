'use server';

import { getBlog } from '@/app/lib/bloggerService';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { notFound, redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function createBlog(formData: FormData) {
  if (!formData.get('BlogUrl')) return;

  const { data } = await getBlog(String(formData.get('BlogUrl')));

  if (!data) return notFound();

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
}
