import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blogger Reader',
  description: 'A simple app for reading blogspot Blogs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='overflow-y-scroll'>
        <div className='container max-w-2xl mx-auto min-h-[100vh] pb-8'>
          {children}
        </div>
      </body>
    </html>
  );
}
