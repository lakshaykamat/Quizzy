"use client";

import QuizCard from "@/components/QuizCard";
import CONSTANTS from "@/lib/data/Constants";
import { INTERNET } from "@/lib/utils";
import { QuizType } from "@/types";
import useSWR from "swr";

const Home = () => {
  const { data: quizzes, error } = useSWR(CONSTANTS.API_URL, INTERNET.quiz);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!quizzes) {
    return (
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Explore
      </h1>
      <div className="flex flex-wrap gap-12">
        {quizzes.length > 0 ? (
          quizzes.map((quiz: QuizType) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))
        ) : (
          <h1>No categories</h1>
        )}
      </div>
    </>
  );
};

export default Home;
