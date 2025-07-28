import React from 'react';

export default function ArrowRightIcon({
  stylesClass = 'w-[15px] h-[15px] transition-transform duration-300 lg:group-hover:translate-x-1',
}: {
  stylesClass?: string;
}) {
  return (
    <svg
      className={stylesClass}
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
  );
}
