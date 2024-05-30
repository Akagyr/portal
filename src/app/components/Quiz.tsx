'use client';

import { useEffect, useState } from 'react';
import { Question } from '../lib/types';

export default function Quiz({ questions }: { questions: Question[] }) {
  const [localQuestions, setLocalQuestions] = useState<Question[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[questionNum]);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState<number | null>(null);

  useEffect(() => {
    function shuffleArray(array: Question[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const shuffledQuestions = shuffleArray(questions);
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    setLocalQuestions(selectedQuestions);
  }, []);

  const handleClick = (answer: string) => {
    const newQuestionNum: number = questionNum + 1;
    const isTrue = answer === currentQuestion.correctAnswer;

    if (newQuestionNum > 9) {
      const newCorrectAnswers = [...correctAnswers, isTrue];
      setCorrectAnswers([...newCorrectAnswers]);
      setCountCorrectAnswers(newCorrectAnswers.filter((el) => el === true).length);
    } else {
      setCorrectAnswers([...correctAnswers, isTrue]);
      setQuestionNum(newQuestionNum);
      setCurrentQuestion(localQuestions[newQuestionNum]);
    }
  };

  return (
    <>
      <div className='flex gap-[10px] lg:gap-[20px] mb-[20px] justify-center text-xl lg:text-2xl'>
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
              Ваш результат: {countCorrectAnswers} з {localQuestions.length}
            </p>
            <p>Ваша оцінка: {Math.ceil(countCorrectAnswers / (localQuestions.length / 5))}</p>
          </div>
        ) : (
          <>
            <h2 className='px-[20px] py-[15px] bg-yellow-300 rounded-t-2xl font-semibold text-gray-800'>
              {questionNum + 1}. {currentQuestion.text}:
            </h2>
            <div className='p-[20px] flex flex-col gap-[10px]'>
              {currentQuestion.answers.map((answer, idx) => (
                <button
                  className='text-left text-sm lg:hover:bg-emerald-300 p-[10px] rounded-lg duration-200'
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
