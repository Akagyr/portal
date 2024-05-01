import React from 'react';
import { Question } from '../lib/types';

export default function QuestionsList({ questions }: { questions: Question[] }) {
  const showQuestions = questions.map((question, idx) => (
    <article
      key={idx}
      className='mb-[40px] last:mb-0 rounded-2xl shadow-[0_11px_9px_6px_rgba(0,0,0,0.3)]'
    >
      <h2 className='px-[20px] py-[15px] bg-yellow-300 rounded-t-2xl font-semibold text-gray-800'>
        {idx + 1}. {question.text}:
      </h2>
      <div className='p-[20px] flex flex-col gap-[10px]'>
        {question.answers.map((answer, idx) => (
          <p
            className={`${
              question.correctAnswer === answer && 'font-bold'
            } text-sm`}
            key={idx}
          >
            {idx + 1}. {answer}
          </p>
        ))}
      </div>
    </article>
  ));

  return <>{showQuestions}</>;
}
