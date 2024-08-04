import Link from 'next/link';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col gap-y-4 items-center justify-center min-h-[100vh]'>
      <div className='p-4 rounded-md border border-red-400'>{children}</div>
      <Link className='underline' href={'/'}>
        Go home
      </Link>
    </main>
  );
}
