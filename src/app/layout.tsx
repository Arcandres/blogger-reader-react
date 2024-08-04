import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '500', '700'] });

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
      <body className={ubuntu.className}>
        <div className='container max-w-2xl mx-auto min-h-[100vh]'>
          {children}
        </div>
      </body>
    </html>
  );
}
