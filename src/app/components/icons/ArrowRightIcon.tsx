import React from 'react';

export default function ArrowRightIcon({
  stylesClass = 'w-[15px] h-[15px]',
}: {
  stylesClass?: string;
}) {
  return (
    <svg
      className={stylesClass}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
}
