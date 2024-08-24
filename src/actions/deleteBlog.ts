'use server';

import prisma from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

export default async function deleteBlog(formData: FormData) {
  const blogId = String(formData.get('blogId'));

  await prisma.blog.delete({ where: { id: blogId } });
  revalidatePath('/blogs');
}
