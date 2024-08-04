type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className='flex items-center justify-center min-h-32 py-6 px-4'>
      <h1 className='text-4xl text-center sm:text-left'>{children}</h1>
    </header>
  );
}
