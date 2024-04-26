import { getDocs, collection } from 'firebase/firestore';
import { db } from './lib/firebase';
import { Question } from './lib/types';
import SearchedQuestions from './components/SearchedQuestions';

export default async function Home() {
  const querySnapshot = await getDocs(collection(db, 'questions'));
  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Question)
  );

  return (
    <>
      <SearchedQuestions questions={questions} />
    </>
  );
}
