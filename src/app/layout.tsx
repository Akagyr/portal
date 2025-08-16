import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portal',
  description: 'Test questions with answers about itt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <body className={inter.className}>
        <main className='px-[20px] lg:px-0 lg:max-w-[700px] mx-auto py-[40px] lg:py-[50px]'>
          {children}
        </main>
      </body>
    </html>
  );
}
