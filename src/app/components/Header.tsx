'use client';

import { useState } from 'react';
import ModalCreateNewQuestion from './ModalCreateNewQuestion';
import CustomAlert from './CustomAlert';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccessAdding, setIsSuccessAdding] = useState<boolean>(false);

  return (
    <>
      {isOpen && (
        <ModalCreateNewQuestion
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsSuccessAdding={setIsSuccessAdding}
        />
      )}
      <CustomAlert
        typeMessage={'success'}
        textMessage='Питання успішно додане!'
        isShowMessage={isSuccessAdding}
        setIsShowMessage={setIsSuccessAdding}
      />
      <header className='h-[8vh] bg-black flex items-center justify-between px-[10px] lg:px-[30px]'>
        <h1 className='uppercase text-white font-bold text-[26px] lg:text-[30px]'>Portal</h1>
        <button
          onClick={() => setIsOpen(true)}
          className='text-white hover:bg-emerald-600 py-[10px] px-[20px] rounded-full text-sm duration-200'
        >
          + Додати питання
        </button>
      </header>
    </>
  );
}
