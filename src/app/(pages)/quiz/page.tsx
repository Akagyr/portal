import Quiz from '@/app/components/Quiz';
import { getRandomQuestions } from '@/app/lib/helpers';

export default async function QuizPage() {
  const questions = await getRandomQuestions();

  return <Quiz questions={questions} />;
}