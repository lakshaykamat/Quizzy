"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import QUIZ_LOCAL_DATA from "@/lib/data/local/quiz-and-questions";
import { Quiz } from "@/types";
import Link from "next/link";

type QuizCardProps = {
  quiz: Quiz;
};

const Home = () => {
  return (
    <>
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Explore
      </h1>
      <div className="flex flex-wrap gap-12">
        {QUIZ_LOCAL_DATA.map((quiz) => {
          return <QuizCard key={quiz.id} quiz={quiz} />;
        })}
      </div>
    </>
  );
};

const QuizCard = (props: QuizCardProps) => {
  return (
    <Card className="max-w-xs rounded-lg">
      <img src={props.quiz.image} alt="" className="rounded-t-lg w-full" />
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {props.quiz.name}
        </h3>
      </CardHeader>
      <CardContent>
        <p>{props.quiz.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/quiz/${props.quiz.id}`}>
          <Button>Start Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Home;
