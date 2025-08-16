// 'use client';

// import { Category, Subcategory } from '@/app/types';
// import React, { useState } from 'react';
// import PlusIcon from '../icons/PlusIcon';
// import SaveIcon from '../icons/SaveIcon';
// import FalseIcon from '../icons/FalseIcon';

// type SubcategoryManagerProps = {
//   subcategories: Subcategory[];
//   setSubcategories: React.Dispatch<React.SetStateAction<Subcategory[]>>;
//   categories: Category[];
//   isLoading: boolean;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function SubcategoryManager({
//   subcategories,
//   setSubcategories,
//   categories,
//   isLoading,
//   setIsLoading,
// }: SubcategoryManagerProps) {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     categoryId: '',
//   });

//   const handleSubmit = async () => {
//     if (!formData.name || !formData.categoryId) return;
//     setIsLoading(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const newSubcategory = {
//       id: Date.now().toString(),
//       name: formData.name,
//       testsId: `${formData.name.toLowerCase()}-tests`,
//     };

//     setSubcategories((prev) => [...prev, newSubcategory]);
//     setFormData({ name: '', categoryId: '' });
//     setShowForm(false);
//     setIsLoading(false);
//   };

//   const availableCategories = categories.filter((cat) => cat.subcategoriesId);

//   return (
//     <div className='space-y-6'>
//       <div className='flex justify-between items-center'>
//         <h2 className='text-xl font-semibold'>Управление подкатегориями</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors'
//         >
//           <PlusIcon stylesClass='w-[20px] h-[20px]' />
//           Добавить подкатегорию
//         </button>
//       </div>

//       {showForm && (
//         <div className='bg-gray-50 rounded-lg p-6 border'>
//           <h3 className='text-lg font-medium mb-4'>Новая подкатегория</h3>
//           <div className='space-y-4'>
//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>
//                 Родительская категория
//               </label>
//               <select
//                 value={formData.categoryId}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, categoryId: e.target.value }))}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
//                 required
//               >
//                 <option value=''>Выберите категорию</option>
//                 {availableCategories.map((cat) => (
//                   <option key={cat.id} value={cat.id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-2'>
//                 Название подкатегории
//               </label>
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
//         {subcategories.map((subcategory) => (
//           <div
//             key={subcategory.id}
//             className='bg-white border rounded-lg p-4 hover:shadow-md transition-shadow'
//           >
//             <div className='flex justify-between items-start'>
//               <div>
//                 <h3 className='font-medium text-gray-900'>{subcategory.name}</h3>
//                 <p className='text-sm text-gray-500 mt-1'>ID тестов: {subcategory.testsId}</p>
//               </div>
//               <button
//                 onClick={() =>
//                   setSubcategories((prev) => prev.filter((sub) => sub.id !== subcategory.id))
//                 }
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
