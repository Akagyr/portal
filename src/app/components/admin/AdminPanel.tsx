// 'use client';

// import { Category, Question, Subcategory, Test } from '@/app/types';
// import React, { useState, useEffect } from 'react';
// import CategoryManager from './CategoryManager';
// import SubcategoryManager from './SubcategoryManager';
// import TestManager from './TestManager';
// import QuestionManager from './QuestionManager';

// type ContentType = 'category' | 'subcategory' | 'test' | 'question';

// export default function AdminPanel() {
//   const [activeTab, setActiveTab] = useState<ContentType>('category');
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
//   const [tests, setTests] = useState<Test[]>([]);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setCategories([
//       { id: '1', name: 'Математика', subcategoriesId: 'math' },
//       { id: '2', name: 'Физика', testsId: 'physics' },
//     ]);
//     setSubcategories([
//       { id: '1', name: 'Алгебра', testsId: 'algebra' },
//       { id: '2', name: 'Геометрия', testsId: 'geometry' },
//     ]);
//     setTests([
//       { id: '1', name: 'Основы алгебры', questionsId: 'algebra-basic' },
//       { id: '2', name: 'Линейные уравнения', questionsId: 'linear-eq' },
//     ]);
//     setQuestions([
//       {
//         id: '1',
//         text: 'Что такое переменная в алгебре?',
//         answers: ['Число', 'Буква, обозначающая неизвестное значение', 'Операция', 'Функция'],
//         correctAnswer: 'Буква, обозначающая неизвестное значение',
//       },
//     ]);
//   }, []);

//   const tabs = [
//     { id: 'category', label: 'Категорії', icon: '📚' },
//     { id: 'subcategory', label: 'Підкатегорії', icon: '📖' },
//     { id: 'test', label: 'Тести', icon: '📝' },
//     { id: 'question', label: 'Питання', icon: '❓' },
//   ] as const;

//   return (
//     <div className='rounded-xl shadow-lg overflow-hidden'>
//       <div className='bg-main-green text-white p-[20px]'>
//         <h1 className='text-2xl font-bold'>Адмін панель</h1>
//         <p className='mt-[5px]'>Керування контентом системи тестування</p>
//       </div>
//       <div className='border-b border-gray-200'>
//         <div className='flex overflow-x-auto'>
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`w-1/4 flex items-center justify-center gap-[10px] px-[25px] py-[15px] font-medium whitespace-nowrap transition-colors ${
//                 activeTab === tab.id
//                   ? 'text-main-green border-b-2 border-main-green bg-main-green/10'
//                   : 'lg:hover:text-main-green lg:hover:bg-gray-50'
//               }`}
//             >
//               <span className='text-lg'>{tab.icon}</span>
//               {tab.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className='p-[25px]'>
//         {activeTab === 'category' && (
//           <CategoryManager
//             categories={categories}
//             setCategories={setCategories}
//             isLoading={isLoading}
//             setIsLoading={setIsLoading}
//           />
//         )}
//         {activeTab === 'subcategory' && (
//           <SubcategoryManager
//             subcategories={subcategories}
//             setSubcategories={setSubcategories}
//             categories={categories}
//             isLoading={isLoading}
//             setIsLoading={setIsLoading}
//           />
//         )}
//         {activeTab === 'test' && (
//           <TestManager
//             tests={tests}
//             setTests={setTests}
//             subcategories={subcategories}
//             categories={categories}
//             isLoading={isLoading}
//             setIsLoading={setIsLoading}
//           />
//         )}
//         {activeTab === 'question' && (
//           <QuestionManager
//             questions={questions}
//             setQuestions={setQuestions}
//             tests={tests}
//             isLoading={isLoading}
//             setIsLoading={setIsLoading}
//           />
//         )}
//       </div>
//     </div>
//   );
// }
