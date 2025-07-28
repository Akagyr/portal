import { Question } from '@/app/types';
import React from 'react';

export default function QuestionsList({ questions }: { questions: Question[] }) {
  const showQuestions = questions.map((question, idx) => (
    <article
      key={idx}
      className='mb-[20px] last:mb-0 border-2 border-main-green/50 rounded-2xl overflow-hidden'
    >
      <div className='bg-main-green/10 p-[20px] lg:p-[25px] border-b border-main-green/20'>
        <div className='flex items-center gap-[15px]'>
          <div className='w-[35px] h-[35px] bg-main-green rounded-full flex items-center justify-center shadow-md flex-shrink-0'>
            <span className='text-white font-bold text-sm'>{idx + 1}</span>
          </div>
          <h2 className='text-lg lg:text-xl font-bold'>{question.text}</h2>
        </div>
      </div>

      <div className='p-[20px] lg:p-[25px] bg-white'>
        <div className='space-y-[12px]'>
          {question.answers.map((answer, answerIdx) => (
            <div
              key={answerIdx}
              className={`
                flex items-start gap-[12px] p-[15px] rounded-xl transition-all duration-300
                ${
                  question.correctAnswer === answer
                    ? 'bg-main-green/10 border-2 border-main-green/30 shadow-sm'
                    : 'bg-gray-50 border-2 border-transparent lg:hover:bg-gray-100'
                }
              `}
            >
              <div
                className={`
                w-[24px] h-[24px] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold
                ${
                  question.correctAnswer === answer
                    ? 'bg-main-green text-white'
                    : 'bg-gray-300 text-gray-600'
                }
              `}
              >
                {String.fromCharCode(65 + answerIdx)}
              </div>
              <p
                className={`
                text-sm lg:text-base leading-relaxed
                ${
                  question.correctAnswer === answer
                    ? 'font-semibold'
                    : 'text-gray-700'
                }
              `}
              >
                {answer}
              </p>
              {question.correctAnswer === answer && (
                <div className='ml-auto'>
                  <svg
                    className='w-[20px] h-[20px] text-main-green'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z' />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  ));

  return <div className='space-y-[20px]'>{showQuestions}</div>;
}
