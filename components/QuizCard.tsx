import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QuizType } from "@/types";
import Link from "next/link";

type QuizCardProps = {
  quiz: QuizType;
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
      <CardContent className="flex">
        <p className="text-sm flex-grow">{props.quiz.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/quiz/${props.quiz._id}`}>
          <Button>Start Quiz</Button>
        </Link>
        <div>
          <p className="text-sm">{props.quiz.questionsList.length} Qusetions</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
