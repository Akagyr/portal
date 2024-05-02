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

  function shuffleArray(array: Question[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledQuestions = shuffleArray(questions);
  const selectedQuestions = shuffledQuestions.slice(0, 10);

  return (
    <Quiz questions={selectedQuestions} />
  );
}
