'use client';

import { getDocs, collection } from 'firebase/firestore';
import { db } from './lib/firebase';
import { Question } from './lib/types';
import CustomInput from './components/CustomInput';
import { useState, ChangeEvent, useEffect } from 'react';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const filteredQuestions = search.length > 0 ? questions.filter(el => el.text.toLowerCase().includes(search.toLowerCase())) : questions;

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, 'questions'));
      const fetchedQuestions = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      } as Question));
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, []);

  const showQuestions = filteredQuestions.map((question, idx) => (
    <div key={idx} className='mb-[50px]'>
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <CustomInput
            name='search'
            placeholder='Я шукаю...'
            containerStyles='mb-[30px] border-2 border-neutral-500 py-[10px] px-[20px] rounded-full text-sm'
            value={search}
            onChangeInput={handleChange}
            inputType={'input'}
          />
      {showQuestions}
    </>
  );
}
