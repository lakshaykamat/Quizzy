"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <h1 className="scroll-m-20 my-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Explore
      </h1>
      <div className="flex flex-wrap gap-12">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </>
  );
};

const QuizCard = () => {
  return (
    <Card className="max-w-xs rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="rounded-t-lg w-full"
      />
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Sport
        </h3>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
          distinctio odit delectus odio incidunt eos veniam tempore sapiente
          dicta
        </p>
      </CardContent>
      <CardFooter>
        <Button>Start Quiz</Button>
      </CardFooter>
    </Card>
  );
};

const QuestionPage = () => {
  function RadioGroupDemo() {
    return (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Option1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Option2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Option3</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Option3</Label>
        </div>
      </RadioGroup>
    );
  }
  const questions = [
    {
      questionName: "Who is our prime minster?",
      options: ["me", "you", "her", "him"],
    },
    {
      questionName: "Who is our prime minster?",
      options: ["me", "you", "her", "him"],
    },
    {
      questionName: "Who is our prime minster?",
      options: ["me", "you", "her", "him"],
    },
    {
      questionName: "Who is our prime minster?",
      options: ["me", "you", "her", "him"],
    },
    {
      questionName: "Who is our prime minster?",
      options: ["me", "you", "her", "him"],
    },
  ];
  return (
    <div>
      {questions.map((question) => {
        return (
          <div className="flex flex-col mb-7">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
              {question.questionName}
            </h4>
            <RadioGroupDemo />
          </div>
        );
      })}
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
