import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import EmptyState from '@/app/components/EmptyState';
import ArrowRightIcon from '@/app/components/icons/ArrowRightIcon';
import QuestionsSearch from '@/app/components/questions/QuestionsSearch';
import { getQuestionsById } from '@/app/firebase/databaseQueries';
import Link from 'next/link';
import React from 'react';

export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: { questionsId: string };
}) {
  const questions = await getQuestionsById(searchParams.questionsId);

  return (
    <>
      <Breadcrumbs />
      <div className='mb-[30px]'>
        <Link
          href={`/quiz?questionsId=${searchParams.questionsId}`}
          className='group inline-flex items-center gap-[12px] bg-main-green lg:hover:bg-main-green-hover text-white px-[20px] py-[10px] rounded-full font-semibold text-sm lg:text-base transition-all duration-500'
        >
          <div className='w-[28px] h-[28px] bg-white/20 rounded-full flex items-center justify-center'>
            <svg className='w-[14px] h-[14px] text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
          <span>Пройти тестування</span>
          <ArrowRightIcon />
        </Link>
      </div>
      {questions.length === 0 ? (
        <EmptyState
          title='Тут поки ще пусто!'
          description='Питання для цього тесту ще не додані. Спробуйте пізніше або оберіть інший тест.'
        />
      ) : (
        <QuestionsSearch questions={questions} />
      )}
    </>
  );
}
