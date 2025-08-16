import CategoriesDropdown from './components/main/CategoriesDropdown';
import { getCategories, getSubcategories, getTests } from './firebase/databaseQueries';

export default async function MainPage() {
  const categories = await getCategories();
  const subcategories = await getSubcategories();
  const tests = await getTests();

  return (
    <>
      <CategoriesDropdown categories={categories} subcategories={subcategories} tests={tests} />
      <div className='text-center mt-[40px]'>
        <button
          disabled
          className='bg-gray-200 lg:hover:bg-gray-300 px-[20px] py-[10px] rounded-full font-medium transition-colors duration-500'
        >
          Перейти в режим додавання
        </button>
      </div>
    </>
  );
}
