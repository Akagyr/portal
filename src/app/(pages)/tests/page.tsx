import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import Card from '@/app/components/Card';
import EmptyState from '@/app/components/EmptyState';
import { getTestsById } from '@/app/firebase/databaseQueries';
import React from 'react';

export default async function TestsPage({ searchParams }: { searchParams: { testsId: string } }) {
  const tests = await getTestsById(searchParams.testsId);

  return (
    <>
      <Breadcrumbs />
      {tests.length === 0 ? (
        <EmptyState
          title='Тут поки ще пусто!'
          description='Тести для цієї категорії ще не додані. Спробуйте пізніше або оберіть інший розділ.'
        />
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {tests.map((test) => (
            <Card
              key={test.id}
              name={test.name}
              btnText='До питань'
              href={`/questions?questionsId=${test.questionsId}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
