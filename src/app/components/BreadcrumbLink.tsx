'use client';

import Link from 'next/link';
import { useBreadcrumbs } from '../context/breadcrumbsContext';

interface BreadcrumbLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  href,
  label,
  children,
  className,
}) => {
  const { addBreadcrumb } = useBreadcrumbs();

  const handleClick = () => {
    addBreadcrumb({
      label,
      href,
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};
