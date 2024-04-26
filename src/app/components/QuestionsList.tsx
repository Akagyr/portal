import React from 'react';
import { Question } from '../lib/types';

export default function QuestionsList({
  questions,
}: {
  questions: Question[];
}) {

  const showQuestions = questions.map((question, idx) => (
    <div key={idx} className='mb-[50px] last:mb-0'>
      <h2>
        {idx + 1}. {question.text}:
      </h2>
      {question.answers.map((answer, idx) => (
        <p
          className={`${
            question.correctAnswer === answer && 'font-bold'
          } mt-[20px] text-sm pl-[30px]`}
          key={idx}
        >
          {idx + 1}. {answer}
        </p>
      ))}
    </div>
  ));

  return <>{showQuestions}</>;
}
