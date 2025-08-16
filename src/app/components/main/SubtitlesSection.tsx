import React from 'react';

export default function SubtitlesSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className='font-semibold mb-[15px] text-lg border-b border-neutral-200 pb-[5px]'>
        {title}
      </h4>
      <div className='grid gap-[10px]'>{children}</div>
    </div>
  );
}
