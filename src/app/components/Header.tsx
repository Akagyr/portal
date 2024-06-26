import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 bg-[#0A0A0A] flex items-center justify-between p-[10px] lg:px-[30px]'>
      <Link href='/' className='uppercase text-white font-bold text-[26px] lg:text-[30px]'>
        Portal
      </Link>
      <Link
        href='quiz'
        className='text-white px-[10px] py-[6px] lg:py-[8px] lg:px-[20px] rounded-full text-xs lg:text-sm duration-200 text-center lg:text-left border-2 border-white lg:hover:border-emerald-600 lg:hover:bg-emerald-600'
      >
        Пройти тестування
      </Link>
    </header>
  );
}
