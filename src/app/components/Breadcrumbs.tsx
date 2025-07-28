'use client';

import Link from 'next/link';
import { useBreadcrumbs } from '../context/breadcrumbsContext';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, setBreadcrumbs } = useBreadcrumbs();

  const handleBreadcrumbClick = (clickedIndex: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, clickedIndex + 1);
    setBreadcrumbs(newBreadcrumbs);
  };

  const handleHomeClick = () => {
    setBreadcrumbs([]);
  };

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className='mb-[25px]' aria-label='Breadcrumb'>
      <ol className='flex items-center text-sm'>
        <li>
          <Link
            href='/'
            onClick={handleHomeClick}
            className='text-blue-600 lg:hover:text-blue-800 transition-colors'
          >
            Головна
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={`${breadcrumb.href}-${index}`} className='flex items-center'>
              <span className='mx-[10px] text-gray-400'>/</span>
              {isLast ? (
                <span className='font-medium'>{breadcrumb.label}</span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  onClick={() => handleBreadcrumbClick(index)}
                  className='text-blue-600 lg:hover:text-blue-800 transition-colors'
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
