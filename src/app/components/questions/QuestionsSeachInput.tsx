import React from 'react';
import { ChangeEventHandler } from 'react';

export default function QuestionsSearchInput({
  placeholder,
  type,
  onChange,
  value,
  required,
  error,
  name,
  id,
}: {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: 'text' | 'number';
  value?: string;
  required?: boolean;
  error?: string | null;
  name: string;
  id?: string;
}) {
  return (
    <div className='w-full mb-[30px]'>
      <div className='relative'>
        <div className='absolute left-[20px] top-1/2 transform -translate-y-1/2 pointer-events-none'>
          <svg
            className='w-[20px] h-[20px] text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type || 'text'}
          className='w-full pl-[55px] pr-[20px] py-[12px] lg:py-[15px] border-2 rounded-2xl text-sm lg:text-base bg-white shadow-sm placeholder:text-gray-400 outline-none lg:focus:ring-0 lg:focus:border-main-green lg:focus:shadow-md transition-all duration-300'
          placeholder={placeholder}
          required={required}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
