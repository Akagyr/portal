'use client';

import { useState, ChangeEvent } from 'react';
import CustomInput from './CustomInput';
import { Question } from '../lib/types';
import QuestionsList from './QuestionsList';

export default function SearchedQuestions({ questions }: { questions: Question[] }) {
  const [searchedQuestions, setSearchedQuestions] = useState<Question[]>(questions);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedQuestions(
        searchedQuestions.length > 0
        ? questions.filter((el) => el.text.toLowerCase().includes(value.toLowerCase()))
        : questions
    );
  };

  return (
    <>
      <CustomInput
        name='search'
        placeholder='Я шукаю...'
        containerStyles='mb-[30px] lg:mb-[40px] border-2 border-neutral-500 py-[10px] px-[20px] rounded-full text-sm'
        onChangeInput={handleChange}
        inputType={'input'}
      />
      <QuestionsList questions={searchedQuestions} />
    </>
  );
}
