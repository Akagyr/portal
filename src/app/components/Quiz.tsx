'use client';

import { useState } from 'react';
import { Question } from '../lib/types';

export default function Quiz({ questions }: { questions: Question[] }) {
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [currentQuestion, setCurrentQusetion] = useState<Question>(questions[questionNum]);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState<number | null>(null);

  const handleClick = (answer: string) => {
    const newQuestionNum: number = questionNum + 1;
    const isTrue = answer === currentQuestion.correctAnswer;

    if (newQuestionNum > 9) {
      setCorrectAnswers([...correctAnswers, isTrue]);
      setCountCorrectAnswers(correctAnswers.filter((el) => el === true).length);
    } else {
      setCorrectAnswers([...correctAnswers, isTrue]);
      setQuestionNum(newQuestionNum);
      setCurrentQusetion(questions[newQuestionNum]);
    }
  };

  return (
    <>
      <div className='flex gap-[20px] mb-[20px] justify-center text-2xl'>
        {correctAnswers?.map((el, idx) =>
          el ? (
            <span key={idx} className='text-green-600'>
              ✔
            </span>
          ) : (
            <span key={idx} className='text-red-600'>
              ✖
            </span>
          )
        )}
      </div>
      <div className='mb-[40px] last:mb-0 rounded-2xl shadow-[0_11px_9px_6px_rgba(0,0,0,0.3)]'>
        {countCorrectAnswers ? (
          <div className='flex flex-col gap-[20px] p-[20px]'>
            <p>
              Ваш результат: {countCorrectAnswers} з {questions.length}
            </p>
            <p>Ваша оцінка: {Math.ceil(countCorrectAnswers / (questions.length / 5))}</p>
          </div>
        ) : (
          <>
            <h2 className='px-[20px] py-[15px] bg-yellow-300 rounded-t-2xl font-semibold text-gray-800'>
              {questionNum + 1}. {currentQuestion.text}:
            </h2>
            <div className='p-[20px] flex flex-col gap-[10px]'>
              {currentQuestion.answers.map((answer, idx) => (
                <button
                  className='text-left text-sm hover:bg-emerald-300 p-[10px] rounded-lg duration-200'
                  key={idx}
                  onClick={() => handleClick(answer)}
                >
                  {idx + 1}. {answer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}