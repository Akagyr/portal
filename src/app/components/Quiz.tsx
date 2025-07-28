'use client';

import { useEffect, useState } from 'react';
import { Question } from '../types';
import FalseIcon from './icons/FalseIcon';
import TrueIcon from './icons/TrueIcon';
import ResultQuiz from './quiz/ResultQuiz';

export default function Quiz({
  questions,
  countQuestions,
}: {
  questions: Question[];
  countQuestions: number;
}) {
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

    const shuffledQuestions = shuffleArray([...questions]);
    const selectedQuestions = shuffledQuestions.slice(0, countQuestions);

    setCurrentQuestions(selectedQuestions);
    setCurrentQusetion(selectedQuestions[0]);
  }, [questions, countQuestions]);

  const handleClick = (answer: string) => {
    const newQuestionNum: number = questionNum + 1;
    const isTrue = answer === currentQuestion?.correctAnswer;
    setSelectedAnswer(answer);
    setIsShowCorrectAnswer(true);

    const timeout = setTimeout(() => {
      const newCorrectAnswers = [...isCorrectAnswers, isTrue];
      setIsCorrectAnswers(newCorrectAnswers);

      if (newQuestionNum >= currentQuestions.length) {
        const localCountCorrectAnswers = newCorrectAnswers.filter((el) => el === true).length;
        setCountCorrectAnswers(localCountCorrectAnswers > 0 ? localCountCorrectAnswers : 0);
      } else {
        setQuestionNum(newQuestionNum);
        setCurrentQusetion(currentQuestions[newQuestionNum]);
      }

      setSelectedAnswer(null);
      setIsShowCorrectAnswer(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  };

  if (countCorrectAnswers !== null) {
    return (
      <ResultQuiz currentQuestions={currentQuestions} countCorrectAnswers={countCorrectAnswers} />
    );
  }

  return (
    <>
      <div className='flex gap-[10px] lg:gap-[20px] mb-[20px] justify-center text-xl lg:text-2xl'>
        {isCorrectAnswers?.map((el, idx) =>
          el ? (
            <TrueIcon key={idx} stylesClass='w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]' />
          ) : (
            <FalseIcon key={idx} stylesClass='w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]' />
          )
        )}
      </div>
      <article className='border-2 border-main-green/50 rounded-2xl overflow-hidden'>
        <div className='bg-main-green/10 p-[20px] lg:p-[25px] border-b border-main-green/20'>
          <div className='flex items-center gap-[15px]'>
            <div className='w-[35px] h-[35px] bg-main-green rounded-full flex items-center justify-center shadow-md flex-shrink-0'>
              <span className='text-white font-bold text-sm'>{questionNum + 1}</span>
            </div>
            <h2 className='text-lg lg:text-xl font-bold'>{currentQuestion?.text}</h2>
          </div>
        </div>
        <div className='p-[20px] lg:p-[25px] bg-white'>
          <div className='space-y-[12px]'>
            {currentQuestion?.answers.map((answer, idx) => (
              <button
                key={idx}
                className={`
                      w-full flex items-start gap-[12px] p-[15px] rounded-xl transition-all duration-300 text-left
                      ${
                        isShowCorrectAnswer && currentQuestion.correctAnswer === answer
                          ? 'bg-main-green/10 border-2 border-main-green/30 shadow-sm'
                          : selectedAnswer === answer &&
                            selectedAnswer !== currentQuestion.correctAnswer &&
                            isShowCorrectAnswer
                          ? 'bg-red-100 border-2 border-red-300'
                          : 'bg-gray-50 border-2 border-transparent lg:hover:bg-gray-100'
                      }
                      ${isShowCorrectAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                onClick={() => handleClick(answer)}
                disabled={isShowCorrectAnswer}
              >
                <div
                  className={`
                        w-[24px] h-[24px] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold
                        ${
                          isShowCorrectAnswer && currentQuestion.correctAnswer === answer
                            ? 'bg-main-green text-white'
                            : selectedAnswer === answer &&
                              selectedAnswer !== currentQuestion.correctAnswer &&
                              isShowCorrectAnswer
                            ? 'bg-red-400 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }
                      `}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <p
                  className={`
                        text-sm lg:text-base leading-relaxed
                        ${
                          isShowCorrectAnswer && currentQuestion.correctAnswer === answer
                            ? 'font-semibold'
                            : 'text-gray-700'
                        }
                      `}
                >
                  {answer}
                </p>
                {isShowCorrectAnswer && currentQuestion.correctAnswer === answer && (
                  <div className='ml-auto'>
                    <TrueIcon stylesClass='w-[15px] h-[15px]' />
                  </div>
                )}
                {isShowCorrectAnswer &&
                  selectedAnswer === answer &&
                  selectedAnswer !== currentQuestion.correctAnswer && (
                    <div className='ml-auto'>
                      <FalseIcon stylesClass='w-[15px] h-[15px]' />
                    </div>
                  )}
              </button>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
