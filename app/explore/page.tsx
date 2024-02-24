"use client";

import QuizCard, { SkeletonCard } from "@/components/QuizCard";
import AXIOS from "@/lib/axiosHelper";
import { QuizType } from "@/types";
import useSWR from "swr";

const Home = () => {
  const {
    data: quizzes,
    error,
    isLoading,
  } = useSWR(process.env.NEXT_PUBLIC_WEB_URL, AXIOS.fetchQuiz);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return (
      <div className="grid my-12 flex-wrap gap-12 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (quizzes) {
    return (
      <>
        <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Explore
        </h1>
        <div className="grid flex-wrap gap-12 grid-cols-1 place-content-center place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-3">
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
  }
};

export default Home;
