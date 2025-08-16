// 'use client';

// import React, { useState } from 'react';
// import { Category, Subcategory, Test } from '@/app/types';
// import FalseIcon from '../icons/FalseIcon';
// import PlusIcon from '../icons/PlusIcon';
// import SaveIcon from '../icons/SaveIcon';

// interface TestManagerProps {
//   tests: Test[];
//   setTests: React.Dispatch<React.SetStateAction<Test[]>>;
//   subcategories: Subcategory[];
//   categories: Category[];
//   isLoading: boolean;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function TestManager({
//   tests,
//   setTests,
//   subcategories,
//   categories,
//   isLoading,
//   setIsLoading,
// }: TestManagerProps) {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     parentType: '',
//     parentId: '',
//   });

//   const handleSubmit = async () => {
//     if (!formData.name || !formData.parentId) return;
//     setIsLoading(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const newTest = {
//       id: Date.now().toString(),
//       name: formData.name,
//       questionsId: `${formData.name.toLowerCase()}-questions`,
//     };

//     setTests((prev) => [...prev, newTest]);
//     setFormData({ name: '', parentType: '', parentId: '' });
//     setShowForm(false);
//     setIsLoading(false);
//   };

//   // Получаем доступных родителей (подкатегории или категории без подкатегорий)
//   const availableParents = [
//     ...subcategories.map((sub) => ({ ...sub, type: 'subcategory' })),
//     ...categories.filter((cat) => cat.testsId).map((cat) => ({ ...cat, type: 'category' })),
//   ];

//   return (
//     <div className='space-y-6'>
//       <div className='flex justify-between items-center'>
//         <h2 className='text-xl font-semibold'>Управление тестами</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors'
//         >
//           <PlusIcon stylesClass='w-[20px] h-[20px]' />
//           Добавить тест
//         </button>
//       </div>

//       {showForm && (
//         <div className='bg-gray-50 rounded-lg p-6 border'>
//           <h3 className='text-lg font-medium mb-4'>Новый тест</h3>
//           <div className='space-y-4'>
//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>
//                 Родительский элемент
//               </label>
//               <select
//                 value={formData.parentId}
//                 onChange={(e) => {
//                   const selected = availableParents.find((p) => p.id === e.target.value);
//                   setFormData((prev) => ({
//                     ...prev,
//                     parentId: e.target.value,
//                     parentType: selected?.type || '',
//                   }));
//                 }}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                 required
//               >
//                 <option value=''>Выберите категорию или подкатегорию</option>
//                 {availableParents.map((parent) => (
//                   <option key={parent.id} value={parent.id}>
//                     {parent.name} ({parent.type === 'category' ? 'Категория' : 'Подкатегория'})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>Название теста</label>
//               <input
//                 type='text'
//                 value={formData.name}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                 required
//               />
//             </div>

//             <div className='flex gap-3'>
//               <button
//                 type='button'
//                 onClick={handleSubmit}
//                 disabled={isLoading}
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
//         {tests.map((test) => (
//           <div
//             key={test.id}
//             className='bg-white border rounded-lg p-4 hover:shadow-md transition-shadow'
//           >
//             <div className='flex justify-between items-start'>
//               <div>
//                 <h3 className='font-medium text-gray-900'>{test.name}</h3>
//                 <p className='text-sm text-gray-500 mt-1'>ID вопросов: {test.questionsId}</p>
//               </div>
//               <button
//                 onClick={() => setTests((prev) => prev.filter((t) => t.id !== test.id))}
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
