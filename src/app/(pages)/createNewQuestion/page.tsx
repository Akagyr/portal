import FormCreateNewQuestion from '@/app/components/FormCreateNewQuestion';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import { Question } from '@/app/lib/types';

export default async function CreateNewQuestionPage() {
  const querySnapshot = await getDocs(collection(db, 'questions'));
  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Question)
  );

  return <FormCreateNewQuestion questions={questions} />;
}
