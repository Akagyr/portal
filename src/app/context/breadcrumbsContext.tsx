'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type BreadcrumbItem = {
  label: string;
  href: string;
}

type BreadcrumbsContextType = {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
  addBreadcrumb: (item: BreadcrumbItem) => void;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider');
  }
  return context;
};

const BREADCRUMBS_COOKIE = 'breadcrumbs';

const saveBreadcrumbsToCookie = (breadcrumbs: BreadcrumbItem[]) => {
  if (typeof document === 'undefined') return;
  try {
    document.cookie = `${BREADCRUMBS_COOKIE}=${encodeURIComponent(
      JSON.stringify(breadcrumbs)
    )}; path=/; max-age=${2 * 60 * 60}`;
  } catch (error) {
    console.error('Failed to save breadcrumbs:', error);
  }
};

const getBreadcrumbsFromCookie = (): BreadcrumbItem[] => {
  if (typeof document === 'undefined') return [];
  try {
    const cookies = document.cookie.split(';');
    const breadcrumbsCookie = cookies.find((cookie) =>
      cookie.trim().startsWith(`${BREADCRUMBS_COOKIE}=`)
    );

    if (breadcrumbsCookie) {
      const value = breadcrumbsCookie.split('=')[1];
      return JSON.parse(decodeURIComponent(value));
    }
  } catch (error) {
    console.error('Failed to get breadcrumbs:', error);
  }
  return [];
};

export const BreadcrumbsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [breadcrumbs, setBreadcrumbsState] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const savedBreadcrumbs = getBreadcrumbsFromCookie();
    if (savedBreadcrumbs.length > 0) {
      setBreadcrumbsState(savedBreadcrumbs);
    }
  }, []);

  useEffect(() => {
    saveBreadcrumbsToCookie(breadcrumbs);
  }, [breadcrumbs]);

  const setBreadcrumbs = (newBreadcrumbs: BreadcrumbItem[]) => {
    setBreadcrumbsState(newBreadcrumbs);
  };

  const addBreadcrumb = (item: BreadcrumbItem) => {
    setBreadcrumbsState((prev) => [...prev, item]);
  };

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs,
        addBreadcrumb,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};
