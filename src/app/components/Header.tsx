import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 bg-[#0A0A0A] flex items-center justify-between p-[10px] lg:px-[30px]'>
      <Link href='/' className='uppercase text-white font-bold text-[26px] lg:text-[30px]'>
        Portal
      </Link>
      <div className='flex gap-[10px] items-center'>
        <Link
          href='quiz'
          className='text-white hover:bg-emerald-600 py-[10px] px-[20px] rounded-full text-sm duration-200'
        >
          Пройти тестування
        </Link>
        <Link
          href='createNewQuestion'
          className='text-white hover:bg-emerald-600 py-[10px] px-[20px] rounded-full text-sm duration-200'
        >
          + Додати питання
        </Link>
      </div>
    </header>
  );
}
