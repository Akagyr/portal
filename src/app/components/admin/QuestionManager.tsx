// 'use client';

// import React, { useState } from 'react';
// import { Category, Question, Test } from '@/app/types';
// import FalseIcon from '../icons/FalseIcon';
// import PlusIcon from '../icons/PlusIcon';
// import SaveIcon from '../icons/SaveIcon';

// interface QuestionManagerProps {
//   questions: Question[];
//   setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
//   tests: Test[];
//   isLoading: boolean;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function QuestionManager({
//   questions,
//   setQuestions,
//   tests,
//   isLoading,
//   setIsLoading,
// }: QuestionManagerProps) {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     text: '',
//     testId: '',
//     answers: ['', '', '', ''],
//     correctAnswer: '',
//   });

//   const handleSubmit = async () => {
//     if (!formData.text || !formData.testId || !formData.correctAnswer) return;
//     setIsLoading(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const newQuestion = {
//       id: Date.now().toString(),
//       text: formData.text,
//       answers: formData.answers.filter((answer) => answer.trim()),
//       correctAnswer: formData.correctAnswer,
//     };

//     setQuestions((prev) => [...prev, newQuestion]);
//     setFormData({
//       text: '',
//       testId: '',
//       answers: ['', '', '', ''],
//       correctAnswer: '',
//     });
//     setShowForm(false);
//     setIsLoading(false);
//   };

//   const updateAnswer = (index: number, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       answers: prev.answers.map((answer, i) => (i === index ? value : answer)),
//     }));
//   };

//   return (
//     <div className='space-y-6'>
//       <div className='flex justify-between items-center'>
//         <h2 className='text-xl font-semibold'>Управление вопросами</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors'
//         >
//           <PlusIcon stylesClass='w-[20px] h-[20px]' />
//           Добавить вопрос
//         </button>
//       </div>

//       {showForm && (
//         <div className='bg-gray-50 rounded-lg p-6 border'>
//           <h3 className='text-lg font-medium mb-4'>Новый вопрос</h3>
//           <div className='space-y-4'>
//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>Тест</label>
//               <select
//                 value={formData.testId}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, testId: e.target.value }))}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                 required
//               >
//                 <option value=''>Выберите тест</option>
//                 {tests.map((test) => (
//                   <option key={test.id} value={test.id}>
//                     {test.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>Текст вопроса</label>
//               <textarea
//                 value={formData.text}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                 rows={3}
//                 required
//               />
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>
//                 Варианты ответов
//               </label>
//               <div className='space-y-2'>
//                 {formData.answers.map((answer, index) => (
//                   <div key={index} className='flex gap-2'>
//                     <input
//                       type='text'
//                       value={answer}
//                       onChange={(e) => updateAnswer(index, e.target.value)}
//                       placeholder={`Вариант ${index + 1}`}
//                       className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                     />
//                     <button
//                       type='button'
//                       onClick={() => setFormData((prev) => ({ ...prev, correctAnswer: answer }))}
//                       className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//                         formData.correctAnswer === answer
//                           ? 'bg-green-600 text-white'
//                           : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                       }`}
//                     >
//                       ✓
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <p className='text-sm text-gray-500 mt-1'>Нажмите ✓ рядом с правильным ответом</p>
//             </div>

//             <div className='flex gap-3'>
//               <button
//                 type='button'
//                 onClick={handleSubmit}
//                 disabled={isLoading || !formData.correctAnswer}
//                 className='flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors'
//               >
//                 <SaveIcon stylesClass='w-[20px] h-[20px]' />
//                 {isLoading ? 'Сохранение...' : 'Сохранить'}
//               </button>
//               <button
//                 type='button'
//                 onClick={() => setShowForm(false)}
//                 className='px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
//               >
//                 Отмена
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className='space-y-3'>
//         {questions.map((question) => (
//           <div
//             key={question.id}
//             className='bg-white border rounded-lg p-4 hover:shadow-md transition-shadow'
//           >
//             <div className='flex justify-between items-start'>
//               <div className='flex-1'>
//                 <h3 className='font-medium text-gray-900 mb-2'>{question.text}</h3>
//                 <div className='text-sm text-gray-600 space-y-1'>
//                   {question.answers.map((answer, index) => (
//                     <div
//                       key={index}
//                       className={`flex items-center gap-2 ${
//                         answer === question.correctAnswer ? 'text-green-600 font-medium' : ''
//                       }`}
//                     >
//                       <span className='w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs'>
//                         {answer === question.correctAnswer ? '✓' : index + 1}
//                       </span>
//                       {answer}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button
//                 onClick={() => setQuestions((prev) => prev.filter((q) => q.id !== question.id))}
//                 className='text-red-500 hover:text-red-700 p-1'
//               >
//                 <FalseIcon stylesClass='w-[10px] h-[10px]' />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
