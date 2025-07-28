import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import Card from '@/app/components/Card';
import EmptyState from '@/app/components/EmptyState';
import { getSubcategoriesById } from '@/app/firebase/databaseQueries';
import React from 'react';

export default async function SubcategoriesPage({
  searchParams,
}: {
  searchParams: { subcategoriesId: string };
}) {
  const subcategories = await getSubcategoriesById(searchParams.subcategoriesId);

  return (
    <>
      <Breadcrumbs />
      {subcategories.length === 0 ? (
        <EmptyState
          title='Тут поки ще пусто!'
          description='Розділи для цієї категорії ще не додані. Спробуйте пізніше або оберіть іншу категорію.'
        />
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {subcategories.map((subcat) => (
            <Card
              key={subcat.id}
              name={subcat.name}
              btnText='До тестів'
              href={`/tests?testsId=${subcat.testsId}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
