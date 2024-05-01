'use client';

import { useEffect } from 'react';

export default function CustomAlert({
  isShowMessage,
  setIsShowMessage,
  duration = 2000,
  textMessage,
  typeMessage,
}: {
  isShowMessage: boolean;
  setIsShowMessage: (value: boolean) => void;
  duration?: number;
  textMessage: string;
  typeMessage: 'success' | 'warning' | 'error' | 'info';
}) {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (isShowMessage) {
      timeoutId = setTimeout(() => {
        setIsShowMessage(false);
      }, duration);
    }
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [isShowMessage, duration, setIsShowMessage]);

  return (
    <>
      {isShowMessage ? (
        <div
          className={`${
            typeMessage === 'success'
              ? 'text-green-500'
              : typeMessage === 'warning'
              ? 'text-yellow-500'
              : typeMessage === 'error'
              ? 'text-red-500'
              : 'text-blue-500'
          } font-semibold fixed top-[9vh] left-[50%] translate-x-[-50%] z-10 bg-[#FFFFFF] w-[90%] text-sm lg:text-base lg:w-[300px] aspect-[5/1] lg:aspect-[3/1] flex items-center justify-center rounded-lg shadow-[0_3px_10px_1px_rgba(0,0,0,0.2)]`}
        >
          {textMessage}
        </div>
      ) : (
        ''
      )}
    </>
  );
}
