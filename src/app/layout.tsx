import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
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
        <Header />
        <main className='max-w-[90%] lg:max-w-[700px] mx-auto py-[50px]'>{children}</main>
      </body>
    </html>
  );
}
