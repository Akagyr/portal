import { Question } from '@/app/lib/types';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import Quiz from '@/app/components/Quiz';

export default async function QuizPage() {
  const querySnapshot = await getDocs(collection(db, 'questions'));
  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Question)
  );

  return <Quiz questions={questions} countQuestions={2} />;
}
