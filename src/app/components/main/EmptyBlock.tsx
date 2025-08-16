import React from 'react';

export default function EmptyBlock({ text = 'Поки пусто' }: { text?: string }) {
  return (
    <div className='p-[15px] bg-neutral-50 rounded-xl border border-dashed border-neutral-300 text-center text-neutral-500 text-sm'>
      {text}
    </div>
  );
}
