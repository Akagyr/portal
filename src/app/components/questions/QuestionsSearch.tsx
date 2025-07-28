'use client';

import { useState, ChangeEvent } from 'react';
import { Question } from '../../types';
import QuestionsList from './QuestionsList';
import QuestionsSeachInput from './QuestionsSeachInput';

export default function QuestionsSearch({ questions }: { questions: Question[] }) {
  const [searchedQuestions, setSearchedQuestions] = useState<Question[]>(questions);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedQuestions(
        searchedQuestions.length > 0 && value.length > 1
        ? questions.filter((el) => el.text.toLowerCase().includes(value.toLowerCase()))
        : questions
    );
  };

  return (
    <>
      <QuestionsSeachInput
        name='search'
        placeholder='Я шукаю...'
        onChange={handleChange}
      />
      <QuestionsList questions={searchedQuestions} />
    </>
  );
}
