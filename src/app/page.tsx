import Card from './components/Card';
import { getCategories } from './firebase/databaseQueries';

export default async function MainPage() {
  const categories = await getCategories();

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {categories.map((cat) => (
          <Card
            key={cat.id}
            name={cat.name}
            btnText='До тестів'
            href={
              cat.subcategoriesId
                ? `/subcategories?subcategoriesId=${cat.subcategoriesId}`
                : `/tests?testsId=${cat.testsId}`
            }
          />
        ))}
      </div>
      <div className='text-center mt-[40px]'>
        <button disabled className='bg-gray-200 lg:hover:bg-gray-300 px-[20px] py-[10px] rounded-full font-medium transition-colors duration-500'>
          Перейти в режим додавання
        </button>
      </div>
    </>
  );
}
