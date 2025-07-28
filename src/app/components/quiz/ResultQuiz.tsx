'use client';

import { Question } from '@/app/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import RotateIcon from '../icons/RotateIcon';

export default function ResultQuiz({
  countCorrectAnswers,
  currentQuestions,
}: {
  countCorrectAnswers: number;
  currentQuestions: Question[];
}) {
  const router = useRouter();

  return (
    <div className='border-2 border-main-green/50 rounded-2xl overflow-hidden'>
      <div className='bg-main-green/10 p-[20px] lg:p-[25px] border-b border-main-green/20'>
        <h2 className='text-lg lg:text-xl font-bold'>Результат тесту</h2>
      </div>
      <div className='p-[20px] lg:p-[25px] bg-white flex flex-col gap-[20px]'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-[15px] mb-[10px]'>
          <div className='bg-main-green/10 rounded-xl p-[15px] text-center'>
            <div className='text-2xl font-bold text-main-green'>{countCorrectAnswers}</div>
            <div className='text-sm text-main-green'>Правильних</div>
          </div>
          <div className='bg-red-50 rounded-xl p-[15px] text-center'>
            <div className='text-2xl font-bold text-red-600'>
              {currentQuestions.length - countCorrectAnswers}
            </div>
            <div className='text-sm text-red-500'>Неправильних</div>
          </div>
          <div className='bg-gray-100 rounded-xl p-[15px] text-center'>
            <div className='text-2xl font-bold text-gray-700'>
              {Math.ceil(countCorrectAnswers / (currentQuestions.length / 5))}
            </div>
            <div className='text-sm text-gray-500'>Оцінка</div>
          </div>
        </div>
        <div className='bg-gray-100 rounded-xl p-[15px]'>
          <div className='flex items-center justify-between mb-[10px]'>
            <span className='text-sm font-medium text-gray-600'>
              Відсоток правильних відповідей
            </span>
            <span className='text-lg font-bold text-main-green'>
              {Math.round((countCorrectAnswers / currentQuestions.length) * 100)}%
            </span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-[8px] overflow-hidden'>
            <div
              className='bg-gradient-to-r from-main-green to-main-green/80 h-[8px] rounded-full'
              style={{ width: `${(countCorrectAnswers / currentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className='text-center'>
          {(() => {
            const percentage = (countCorrectAnswers / currentQuestions.length) * 100;
            if (percentage === 100) {
              return (
                <div className='bg-gradient-to-r from-green-100 to-main-green/20 rounded-xl p-[15px]'>
                  <p className='text-main-green font-semibold'>
                    Відмінно! Ви відповіли на всі запитання правильно!
                  </p>
                </div>
              );
            } else if (percentage >= 80) {
              return (
                <div className='bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-[15px]'>
                  <p className='text-blue-700 font-semibold'>
                    Чудовий результат! Ви добре знаєте матеріал!
                  </p>
                </div>
              );
            } else if (percentage >= 60) {
              return (
                <div className='bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-xl p-[15px]'>
                  <p className='text-yellow-700 font-semibold'>
                    Добре! Є над чим працювати, але основи засвоєні!
                  </p>
                </div>
              );
            } else {
              return (
                <div className='bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-[15px]'>
                  <p className='text-orange-700 font-semibold'>
                    Варто повторити матеріал і спробувати ще раз!
                  </p>
                </div>
              );
            }
          })()}
        </div>
        <div className='flex flex-col sm:flex-row gap-[15px] items-center w-full'>
          <button
            className='w-full sm:w-1/2 bg-gray-200 p-[15px] rounded-xl font-semibold lg:hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-[10px] group shadow-sm lg:hover:shadow-md'
            onClick={() => router.back()}
          >
            <ArrowRightIcon stylesClass='w-[15px] h-[15px] transition-transform duration-300 lg:group-hover:-translate-x-1 rotate-180' />
            <span>Повернутись до запитань</span>
          </button>
          <button
            className='w-full sm:w-1/2 bg-main-green text-white p-[15px] rounded-xl font-semibold lg:hover:bg-main-green-hover transition-all duration-300 flex items-center justify-center gap-[10px] group shadow-sm lg:hover:shadow-md'
            onClick={() => window.location.reload()}
          >
            <RotateIcon stylesClass='w-[18px] h-[18px] text-white lg:group-hover:-rotate-180 transition-all duration-700' />
            <span>Пройти ще раз</span>
          </button>
        </div>
      </div>
    </div>
  );
}
