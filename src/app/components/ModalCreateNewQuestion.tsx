'use client';

import { ChangeEvent, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CustomInput from './CustomInput';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Question = {
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
    text: '',
    error: null,
  },
};

export default function ModalCreateNewQuestion({
  isOpen,
  setIsOpen,
  setIsSuccessAdding,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsSuccessAdding: (isSuccessAdding: boolean) => void;
}) {
  const [formData, setFormData] = useState<Question>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let error: string | null = null;

    if (value.trim() === '') {
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
      correctAnswer.text.trim() === ''
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
            correctAnswer.text.trim() === ''
              ? 'Не выбраний номер правильної відповіді'
              : correctAnswer.error,
        },
      }));
      return;
    }

    const answersArr: Array<string> = [
      firstAnswer.text,
      secondAnswer.text,
      thirdAnswer.text,
      fourthAnswer.text,
    ];

    try {
      await setDoc(doc(db, 'questions', String(Date.now())), {
        text: question.text,
        answers: answersArr,
        correctAnswer: answersArr[Number(correctAnswer.text) - 1],
      });
    } catch (error) {}
    setIsOpen(false);
    setIsSuccessAdding(true);
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      showCloseIcon={false}
      center
      styles={{
        modal: {
          padding: 0,
        },
      }}
      blockScroll={false}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className='w-[100%] lg:w-[600px] px-[20px] py-[30px] lg:px-[50px] lg:py-[30px]'
      >
        <div>
          <h2 className='text-sm lg:text-base mb-[10px]'>Текст питання:</h2>
          <CustomInput
            name='question'
            placeholder='Текст питання'
            value={formData.question.text}
            onChangeInput={handleChange}
            required={true}
            inputType={'input'}
            error={formData.question.error}
          />
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-sm lg:text-base mb-[10px]'>Текст для 4-х відповідей:</h2>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <span>1.</span>
            <CustomInput
              name='firstAnswer'
              placeholder='Текст питання'
              value={formData.firstAnswer.text}
              onChangeInput={handleChange}
              required={true}
              inputType={'input'}
              error={formData.firstAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <span>2.</span>
            <CustomInput
              name='secondAnswer'
              placeholder='Текст питання'
              value={formData.secondAnswer.text}
              onChangeInput={handleChange}
              required={true}
              inputType={'input'}
              error={formData.secondAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] mb-[10px] items-center'>
            <span>3.</span>
            <CustomInput
              name='thirdAnswer'
              placeholder='Текст питання'
              value={formData.thirdAnswer.text}
              onChangeInput={handleChange}
              required={true}
              inputType={'input'}
              error={formData.thirdAnswer.error}
            />
          </div>
          <div className='flex gap-x-[10px] items-center'>
            <span>4.</span>
            <CustomInput
              name='fourthAnswer'
              placeholder='Текст питання'
              value={formData.fourthAnswer.text}
              onChangeInput={handleChange}
              required={true}
              inputType={'input'}
              error={formData.fourthAnswer.error}
            />
          </div>
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-sm lg:text-base mb-[10px]'>Номер правильної відповіді:</h2>
          <div className='flex gap-x-[10px] items-center'>
            <select
              name='correctAnswer'
              onChange={handleChange}
              className={`outline-none border-2 rounded-full py-[5px] px-[15px] text-sm ${
                formData.correctAnswer.error ? 'border-2 border-red-600' : 'border border-gray-500'
              }`}
              defaultValue='no-select'
            >
              <option value='no-select'>Не выбран</option>
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
        <div className='flex justify-end gap-x-[10px]'>
          <button
            type='submit'
            className='bg-emerald-400 hover:bg-emerald-500 py-[10px] px-[20px] rounded-full font-semibold text-sm duration-200 mt-[30px]'
          >
            Створити
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className='bg-red-500 hover:bg-red-600 py-[10px] px-[20px] rounded-full font-semibold text-sm duration-200 mt-[30px]'
          >
            Відміна
          </button>
        </div>
      </form>
    </Modal>
  );
}
