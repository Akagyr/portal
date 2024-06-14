'use client';

import { useEffect, useState } from 'react';
import { Question } from '../lib/types';

export default function Quiz({ questions }: { questions: Question[] }) {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [isCorrectAnswers, setIsCorrectAnswers] = useState<boolean[]>([]);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [currentQuestion, setCurrentQusetion] = useState<Question | null>(null);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isShowCorrectAnswer, setIsShowCorrectAnswer] = useState<boolean>(false);

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

    setCurrentQuestions(selectedQuestions);
    setCurrentQusetion(selectedQuestions[questionNum]);
  }, []);

  const handleClick = (answer: string) => {
    const newQuestionNum: number = questionNum + 1;
    const isTrue = answer === currentQuestion?.correctAnswer;
    setSelectedAnswer(answer);
    setIsShowCorrectAnswer(true);

    const timeout = setTimeout(() => {
      if (newQuestionNum > 9) {
        const newCorrectAnswers = [...isCorrectAnswers, isTrue];
        setIsCorrectAnswers([...newCorrectAnswers]);
        setCountCorrectAnswers(newCorrectAnswers.filter((el) => el === true).length);
      } else {
        setIsCorrectAnswers([...isCorrectAnswers, isTrue]);
        setQuestionNum(newQuestionNum);
        setCurrentQusetion(questions[newQuestionNum]);
      }

      setSelectedAnswer(null);
      setIsShowCorrectAnswer(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <>
      <div className='flex gap-[10px] lg:gap-[20px] mb-[20px] justify-center text-xl lg:text-2xl'>
        {isCorrectAnswers?.map((el, idx) =>
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
              Ваш результат: {countCorrectAnswers} з {currentQuestions.length}
            </p>
            <p>Ваша оцінка: {Math.ceil(countCorrectAnswers / (currentQuestions.length / 5))}</p>
          </div>
        ) : (
          <>
            <h2 className='px-[20px] py-[15px] bg-yellow-300 rounded-t-2xl font-semibold text-gray-800'>
              {questionNum + 1}. {currentQuestion?.text}:
            </h2>
            <div className='p-[20px] flex flex-col gap-[10px]'>
              {currentQuestion?.answers.map((answer, idx) => (
                <button
                  className={`${
                    isShowCorrectAnswer && currentQuestion.correctAnswer === answer
                      ? 'bg-emerald-300'
                      : selectedAnswer === answer &&
                        selectedAnswer !== currentQuestion.correctAnswer &&
                        'bg-red-400'
                  } text-left text-sm p-[10px] pl-[15px] duration-200 rounded-lg border-[1px]`}
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
