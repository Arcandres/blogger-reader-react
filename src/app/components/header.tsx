export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='flex items-center justify-center min-h-32 py-6 px-4'>
      <h1 className='text-3xl capitalize'>{children}</h1>
    </header>
  );
}
