import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { BreadcrumbLink } from './BreadcrumbLink';

export default function Card({
  name,
  btnText,
  href,
}: {
  name: string;
  btnText: string;
  href: string;
}) {
  return (
    <div className='border-2 border-main-green/50 rounded-2xl p-[20px] lg:p-[30px]'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[15px]'>
        <div className='flex items-center gap-[20px]'>
          <div className='w-[40px] h-[40px] bg-main-green rounded-full flex items-center justify-center shadow-lg flex-shrink-0'>
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
          <h2 className='text-xl font-bold'>{name}</h2>
        </div>
        <BreadcrumbLink
          href={href}
          label={name}
          className='w-full min-w-[150px] lg:w-auto group bg-main-green lg:hover:bg-main-green-hover text-white px-[20px] py-[10px] rounded-full font-medium transition-all duration-500'
        >
          <span className='flex items-center justify-center gap-[10px]'>
            {btnText}
            <ArrowRightIcon />
          </span>
        </BreadcrumbLink>
      </div>
    </div>
  );
}
