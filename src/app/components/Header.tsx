'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className='sticky top-0 bg-[#0A0A0A] flex items-center justify-between p-[10px] lg:px-[30px]'>
      <Link href='/' className='uppercase text-white font-bold text-[26px] lg:text-[30px]'>
        Portal
      </Link>
      <button
        onClick={() => router.push('/createNewQuestion')}
        className='text-white hover:bg-emerald-600 py-[10px] px-[20px] rounded-full text-sm duration-200'
      >
        + Додати питання
      </button>
    </header>
  );
}
