import Quiz from '@/app/components/Quiz';
import { getQuestionsById } from '@/app/firebase/databaseQueries';

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { questionsId: string };
}) {
  const questions = await getQuestionsById(searchParams.questionsId);

  return <Quiz questions={questions} countQuestions={10} />;
}
