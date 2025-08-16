import Link from 'next/link';
import React from 'react';

export default function TestCard({ name, testsId }: { name: string; testsId: string }) {
  return (
    <Link
      href={`/questions?testsId=${testsId}`}
      className='p-[15px] bg-neutral-50 rounded-xl border border-neutral-200 lg:hover:border-neutral-300 lg:hover:bg-white lg:hover:shadow-sm transition-all duration-200 cursor-pointer'
    >
      <div className='font-medium'>{name}</div>
    </Link>
  );
}
