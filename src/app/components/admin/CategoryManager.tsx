// 'use client';

// import React, { useState } from 'react';
// import { Category } from '@/app/types';
// import FalseIcon from '../icons/FalseIcon';
// import PlusIcon from '../icons/PlusIcon';
// import SaveIcon from '../icons/SaveIcon';

// type CategoryManagerProps = {
//   categories: Category[];
//   setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
//   isLoading: boolean;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function CategoryManager({
//   categories,
//   setCategories,
//   isLoading,
//   setIsLoading,
// }: CategoryManagerProps) {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//   });

//   const handleSubmit = async () => {
//     if (!formData.name) return;
//     setIsLoading(true);

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const newCategory = {
//       id: Date.now().toString(),
//       name: formData.name,
//     };

//     setCategories((prev) => [...prev, newCategory]);
//     setFormData({ name: '' });
//     setShowForm(false);
//     setIsLoading(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (confirm('Вы уверены, что хотите удалить эту категорию?')) {
//       setCategories((prev) => prev.filter((cat) => cat.id !== id));
//     }
//   };

//   return (
//     <div className='space-y-[25px]'>
//       <div className='flex justify-between items-center'>
//         <h2 className='text-xl font-semibold'>Управление категориями</h2>
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className='flex items-center gap-[10px] bg-main-green lg:hover:bg-main-green-hover text-white px-[15px] py-[10px] rounded-lg transition-colors'
//         >
//           <PlusIcon stylesClass='w-[20px] h-[20px]' />
//           Добавить категорию
//         </button>
//       </div>
//       {showForm && (
//         <div className='bg-gray-50 rounded-lg p-[25px] border'>
//           <h3 className='text-lg font-medium mb-[15px]'>Новая категория</h3>
//           <div className='space-y-[15px]'>
//             <div>
//               <label className='block text-sm font-medium text-gray-700 mb-[10px]'>
//                 Название категории
//               </label>
//               <input
//                 type='text'
//                 value={formData.name}
//                 onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
//                 className='w-full px-[10px] py-[8px] border border-gray-300 rounded-lg lg:focus:ring-2 lg:focus:ring-main-green lg:focus:border-main-green'
//                 required
//               />
//             </div>
//             <div className='flex gap-[15px]'>
//               <button
//                 type='button'
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className='flex items-center gap-[10px] bg-main-green lg:hover:bg-main-green-hover disabled:opacity-50 text-white px-[15px] py-[8px] rounded-lg transition-colors'
//               >
//                 <SaveIcon stylesClass='w-[20px] h-[20px]' />
//                 {isLoading ? 'Сохранение...' : 'Сохранить'}
//               </button>
//               <button
//                 type='button'
//                 onClick={() => setShowForm(false)}
//                 className='px-[15px] py-[8px] text-gray-600 border border-gray-300 rounded-lg lg:hover:bg-gray-50 transition-colors'
//               >
//                 Отмена
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className='space-y-[10px]'>
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className='bg-white border rounded-lg p-[15px] lg:hover:shadow-md transition-shadow'
//           >
//             <div className='flex justify-between items-start'>
//               <div>
//                 <h3 className='font-medium'>{category.name}</h3>
//               </div>
//               <button onClick={() => handleDelete(category.id)}>
//                 <FalseIcon stylesClass='w-[10px] h-[10px]' />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
