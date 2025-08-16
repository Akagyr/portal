import Quiz from '@/app/components/Quiz';
import { getQuestionsByTestId } from '@/app/firebase/databaseQueries';

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { testsId: string };
}) {
  const questions = await getQuestionsByTestId(searchParams.testsId);

  return <Quiz questions={questions} countQuestions={10} />;
}
