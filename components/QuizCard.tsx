import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Quiz } from "@/types";
import Link from "next/link";

type QuizCardProps = {
  quiz: Quiz;
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

export default QuizCard;
