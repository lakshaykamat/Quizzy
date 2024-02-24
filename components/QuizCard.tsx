import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QuizType } from "@/types";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

type QuizCardProps = {
  quiz: QuizType;
};

const QuizCard = (props: QuizCardProps) => {
  return (
    <Card className="max-w-sm rounded-lg flex flex-col">
      <img src={props.quiz.image} alt="" className="rounded-t-lg w-full" />
      <CardHeader>
        <h3 className="scroll-m-20  text-2xl font-semibold tracking-tight">
          {props.quiz.name}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{props.quiz.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/quiz/${props.quiz._id}`}>
          <Button>Start Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-4 rounded-lg">
      <Skeleton className="h-[150px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-full mb-3 " />
        <Skeleton className="h-8 w-[100px]" />
      </div>
    </div>
  );
}

export default QuizCard;
