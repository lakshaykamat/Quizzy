"use client";

import QuizCard from "@/components/QuizCard";
import CONSTANTS from "@/lib/data/Constants";
import QUIZ_LOCAL_DATA from "@/lib/data/local/quiz-and-questions";
import { INTERNET } from "@/lib/utils";
import { Quiz } from "@/types";
import useSWR from "swr";

const Home = () => {
  const {
    isLoading,
    data: quiz,
    error,
  } = useSWR(CONSTANTS.API_URL, INTERNET.quiz);

  if (error) return <div>failed to load</div>;

  if (isLoading)
    return (
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Loading
      </h1>
    );

  return (
    <>
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Explore
      </h1>
      <div className="flex flex-wrap gap-12">
        {quiz &&
          quiz.map((quiz: Quiz) => {
            return <QuizCard key={quiz.id} quiz={quiz} />;
          })}
      </div>
    </>
  );
};

export default Home;
