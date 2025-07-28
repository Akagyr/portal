'use client';

import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EmptyState({
  title = 'Тут поки ще пусто!',
  description,
  icon,
  className = '',
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center gap-[20px] justify-center ${className}`}>
      <div className='bg-white rounded-full p-[20px] shadow-xl border-4 border-main-green'>
        {icon ? (
          icon
        ) : (
          <svg
            className='w-[50px] h-[50px] text-main-green'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
        )}
      </div>
      <div className='text-center max-w-[450px]'>
        <h3 className='text-xl lg:text-2xl font-semibold mb-[10px]'>{title}</h3>
        {description && (
          <p className='text-gray-500 text-sm lg:text-base leading-relaxed'>{description}</p>
        )}
      </div>
      <button
        onClick={() => router.back()}
        className='flex gap-[10px] items-center group bg-main-green lg:hover:bg-main-green-hover text-white px-[20px] py-[10px] rounded-full font-medium transition-all duration-500'
      >
        <ArrowRightIcon stylesClass='w-[15px] h-[15px] rotate-180 transition-transform duration-300 lg:group-hover:-translate-x-1' />
        <span>Повернутись назад</span>
      </button>
    </div>
  );
}
