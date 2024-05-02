'use client';

import { ChangeEvent, useState } from 'react';
import CustomInput from './custom/CustomInput';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Question } from '../lib/types';
import CustomAlert from './custom/CustomAlert';

type QuestionForm = {
  question: {
    text: string;
    error: string | null;
  };
  firstAnswer: {
    text: string;
    error: string | null;
  };
  secondAnswer: {
    text: string;
    error: string | null;
  };
  thirdAnswer: {
    text: string;
    error: string | null;
  };
  fourthAnswer: {
    text: string;
    error: string | null;
  };
  correctAnswer: {
    text: string;
    error: string | null;
  };
};

const initialState = {
  question: {
    text: '',
    error: null,
  },
  firstAnswer: {
    text: '',
    error: null,
  },
  secondAnswer: {
    text: '',
    error: null,
  },
  thirdAnswer: {
    text: '',
    error: null,
  },
  fourthAnswer: {
    text: '',
    error: null,
  },
  correctAnswer: {
    text: 'no-select',
    error: null,
  },
};

export default function FormCreateNewQuestion({ questions }: { questions: Question[] }) {
  const [formData, setFormData] = useState<QuestionForm>(initialState);
  const [isShowAlertMessage, setIsShowAlertMessage] = useState<boolean>(false);
  const [alertMessageType, setAlertMessageType] = useState<'success' | 'error' | null>(null);
  const [alertMessageText, setAlertMessageText] = useState<string>('');
  const [questionsNum, setQuestionsNum] = useState<number>(questions.length + 1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let error: string | null = null;

    if (value.trim() === '' || value === 'no-select') {
      error = 'Поле не може бути пустим';
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        text: value,
        error,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { question, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer } =
      formData;

    if (
      question.text.trim() === '' ||
      firstAnswer.text.trim() === '' ||
      secondAnswer.text.trim() === '' ||
      thirdAnswer.text.trim() === '' ||
      fourthAnswer.text.trim() === '' ||
      correctAnswer.text.trim() === 'no-select'
    ) {
      setFormData((prevState) => ({
        ...prevState,
        question: {
          ...prevState.question,
          error: question.text.trim() === '' ? 'Поле не може бути пустим' : question.error,
        },
        firstAnswer: {
          ...prevState.firstAnswer,
          error: firstAnswer.text.trim() === '' ? 'Поле не може бути пустим' : firstAnswer.error,
        },
        secondAnswer: {
          ...prevState.secondAnswer,
          error: secondAnswer.text.trim() === '' ? 'Поле не може бути пустим' : secondAnswer.error,
        },
        thirdAnswer: {
          ...prevState.thirdAnswer,
          error: thirdAnswer.text.trim() === '' ? 'Поле не може бути пустим' : thirdAnswer.error,
        },
        fourthAnswer: {
          ...prevState.fourthAnswer,
          error: fourthAnswer.text.trim() === '' ? 'Поле не може бути пустим' : fourthAnswer.error,
        },
        correctAnswer: {
          ...prevState.correctAnswer,
          error:
            correctAnswer.text.trim() === 'no-select'
              ? 'Не вибраний номер правильної відповіді'
              : correctAnswer.error,
        },
      }));
      return;
    }

    const isCreatedQuestion = questions.find((el) => el.text === formData.question.text);
    if (isCreatedQuestion) {
      setIsShowAlertMessage(true);
      setAlertMessageType('error');
      setAlertMessageText('Таке питання вже існує!');
      return;
    }

    const answersArr: Array<string> = [
      firstAnswer.text,
      secondAnswer.text,
      thirdAnswer.text,
      fourthAnswer.text,
    ];
    const questionId = String(Date.now());

    await setDoc(doc(db, 'questions', questionId), {
      id: questionId,
      text: question.text,
      answers: answersArr,
      correctAnswer: answersArr[Number(correctAnswer.text) - 1],
    });

    const questionDocSnap = await getDoc(doc(db, 'questions', questionId));
    const questionData = questionDocSnap.data();

    if (questionData) {
      setAlertMessageType('success');
      setAlertMessageText('Питання успішно створене');
      setFormData(initialState);
      setQuestionsNum(questionsNum + 1);
    } else {
      setAlertMessageType('error');
      setAlertMessageText('Помилка додавання у базу даних');
    }
    setIsShowAlertMessage(true);
  };

  return (
    <>
      {isShowAlertMessage && alertMessageType !== null && (
        <CustomAlert
          typeMessage={alertMessageType}
          duration={3000}
          textMessage={alertMessageText}
          isShowMessage={isShowAlertMessage}
          setIsShowMessage={setIsShowAlertMessage}
        />
      )}
      <form id='form' onSubmit={handleSubmit} noValidate className='w-full'>
        <div>
          <h2 className='mb-[10px]'>Текст питання:</h2>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <label htmlFor='question'>{questionsNum}.</label>
            <CustomInput
              id='question'
              name='question'
              placeholder='Текст питання'
              value={formData.question.text}
              onChange={handleChange}
              required={true}
              error={formData.question.error}
            />
          </div>
        </div>
        <div className='mt-[30px]'>
          <h2 className='mb-[10px]'>Текст для 4-х відповідей:</h2>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <label htmlFor='firstAnswer'>1.</label>
            <CustomInput
              id='firstAnswer'
              name='firstAnswer'
              placeholder='Текст першої відповіді'
              value={formData.firstAnswer.text}
              onChange={handleChange}
              required={true}
              error={formData.firstAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <label htmlFor='secondAnswer'>2.</label>
            <CustomInput
              id='secondAnswer'
              name='secondAnswer'
              placeholder='Текст другої відповіді'
              value={formData.secondAnswer.text}
              onChange={handleChange}
              required={true}
              error={formData.secondAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <label htmlFor='thirdAnswer'>3.</label>
            <CustomInput
              id='thirdAnswer'
              name='thirdAnswer'
              placeholder='Текст третьої відповіді'
              value={formData.thirdAnswer.text}
              onChange={handleChange}
              required={true}
              error={formData.thirdAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] items-center'>
            <label htmlFor='fourthAnswer'>4.</label>
            <CustomInput
              id='fourthAnswer'
              name='fourthAnswer'
              placeholder='Текст четвертої відповіді'
              value={formData.fourthAnswer.text}
              onChange={handleChange}
              required={true}
              error={formData.fourthAnswer.error}
            />
          </div>
        </div>
        <div className='mt-[30px]'>
          <h2 className='mb-[10px]'>Номер правильної відповіді:</h2>
          <div className='flex gap-x-[10px] items-center'>
            <select
              name='correctAnswer'
              onChange={handleChange}
              className={`outline-none border-2 rounded-full py-[5px] px-[15px] text-sm ${
                formData.correctAnswer.error ? 'border-2 border-red-600' : 'border border-gray-500'
              }`}
              defaultValue='no-select'
            >
              <option value='no-select'>Не вибрано</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            <div className='text-red-600 text-sm mt-[5px]'>
              {formData.correctAnswer.error ? formData.correctAnswer.error : ''}
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-emerald-400 lg:hover:bg-emerald-500 py-[10px] px-[20px] rounded-full font-semibold text-sm duration-200 mt-[30px]'
          >
            Створити
          </button>
        </div>
      </form>
    </>
  );
}
