import { Subcategory } from '@/app/types';
import Link from 'next/link';
import React from 'react';

export default function SubcategoriesCard({ subcategory }: { subcategory: Subcategory }) {
  return (
    <div className='border-2 border-main-green/50 rounded-2xl p-[20px] lg:p-[30px]'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[15px]'>
        <div className='flex items-center gap-[10px]'>
          <div className='w-[40px] h-[40px] bg-main-green rounded-full flex items-center justify-center shadow-lg'>
            <svg
              className='w-[20px] h-[20px] text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <h2 className='text-xl font-bold'>{subcategory.name}</h2>
        </div>
        <Link
          href={`/questions?test_id=${subcategory.testsId}`}
          className='w-full min-w-[150px] lg:w-auto group bg-main-green lg:hover:bg-main-green-hover text-white px-[20px] py-[10px] rounded-full font-medium transition-all duration-500'
        >
          <span className='flex items-center justify-center gap-[10px]'>
            До питань
            <svg
              className='w-[15px] h-[15px] transition-transform duration-300 lg:group-hover:translate-x-1'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                strokeLinejoin='round'
                strokeLinecap='round'
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
