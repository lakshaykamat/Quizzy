"use client";
import { INTERNET } from "@/lib/utils";
import useSWR from "swr";
import QuestionPage from "./QuestionPage";

const Page = ({ params }: { params: { quizId: string } }) => {
  const { quizId } = params;

  const { data: quizData, error } = useSWR(
    () =>
      `${process.env.NEXT_PUBLIC_WEB_URL}/questions?id=${quizId}&limit=${10}`,
    INTERNET.questionsList,
    {
      revalidateOnFocus: false, // Disable refetching on focus
      revalidateOnReconnect: false, // Disable refetching on reconnect
    }
  );

  if (error) return <h1>Error loading data</h1>;
  if (!quizData) return <h1>Loading...</h1>;

  const { questionsList, name } = quizData;

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
        {name}
      </h2>
      <QuestionPage quizId={quizData.quizId} questionList={questionsList} />
    </div>
  );
};

export default Page;
