import BlogForm from './blog-form';
import BloggerLogo from './blogger-logo';

export default async function Welcome() {
  return (
    <main className='flex flex-col justify-center items-center  min-h-[100dvh]'>
      <header className='flex flex-col gap-4 items-center'>
        <BloggerLogo />
        <h1 className='text-3xl'>Blogger Reader</h1>
        <p>A simple app for reading blogspot Blogs.</p>
      </header>
      <BlogForm />
    </main>
  );
}
