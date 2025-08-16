'use client';

import { Category, Subcategory, Test } from '@/app/types';
import { useState } from 'react';
import EmptyBlock from './EmptyBlock';
import TestCard from './TestCard';
import SubtitlesSection from './SubtitlesSection';
import ArrowRightIcon from '../icons/ArrowRightIcon';

export default function CategoriesDropdown({
  categories,
  subcategories,
  tests,
}: {
  categories: Category[];
  subcategories: Subcategory[];
  tests: Test[];
}) {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (categoryId: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      newSet.has(categoryId) ? newSet.delete(categoryId) : newSet.add(categoryId);
      return newSet;
    });
  };

  const getCategorySubcategories = (categoryId: string) =>
    subcategories.filter((sub) =>
      categories.find((cat) => cat.id === categoryId)?.subcategoriesId?.includes(sub.id)
    );

  const getSubcategoryTests = (subcategoryId: string) => {
    const subcategory = subcategories.find((sub) => sub.id === subcategoryId);
    return tests.filter((test) => subcategory?.testsId?.includes(test.id));
  };

  const getCategoryDirectTests = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    const categorySubcategories = getCategorySubcategories(categoryId);
    const subcategoryTestIds = new Set(categorySubcategories.flatMap((sub) => sub.testsId));

    return tests.filter(
      (test) => category?.testsId?.includes(test.id) && !subcategoryTestIds.has(test.id)
    );
  };

  return (
    <div className='flex flex-col gap-5 mx-auto max-w-4xl'>
      {categories.map((cat) => {
        const isOpen = openDropdowns.has(cat.id);
        return (
          <div
            key={cat.id}
            className='rounded-2xl border border-neutral-200 bg-white shadow-md overflow-hidden transition-all duration-300 lg:hover:shadow-lg'
          >
            <div
              onClick={() => toggleDropdown(cat.id)}
              className='flex items-center justify-between px-[25px] py-[20px] bg-neutral-50 lg:hover:bg-neutral-100 cursor-pointer transition-colors'
            >
              <span className='font-semibold text-lg'>{cat.name}</span>
              <ArrowRightIcon
                stylesClass={`w-[25px] h-[25px] text-neutral-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : '-rotate-90'
                }`}
              />
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              }`}
            >
              <div className='overflow-hidden'>
                <div className='p-[25px] space-y-[30px]'>
                  {getCategorySubcategories(cat.id).length === 0 &&
                    getCategoryDirectTests(cat.id).length > 0 && (
                      <SubtitlesSection title='Тести без розділу'>
                        {getCategoryDirectTests(cat.id).map((test) => (
                          <TestCard key={test.id} name={test.name} testsId={test.id} />
                        ))}
                      </SubtitlesSection>
                    )}
                  {getCategorySubcategories(cat.id).map((sub) => (
                    <SubtitlesSection key={sub.id} title={sub.name}>
                      {getSubcategoryTests(sub.id).length > 0 ? (
                        getSubcategoryTests(sub.id).map((test) => (
                          <TestCard key={test.id} name={test.name} testsId={test.id} />
                        ))
                      ) : (
                        <EmptyBlock text='Тести поки що відсутні' />
                      )}
                    </SubtitlesSection>
                  ))}
                  {getCategorySubcategories(cat.id).length === 0 &&
                    getCategoryDirectTests(cat.id).length === 0 && <EmptyBlock />}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
