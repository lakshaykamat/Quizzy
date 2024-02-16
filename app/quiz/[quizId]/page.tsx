"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getQuiz, shuffleArray } from "@/lib/utils";
import { Question, Quiz } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  questionList: Question[];
};

const Page = ({ params }: { params: { quizId: string } }) => {
  const { quizId } = params;
  const [questions, setQuestion] = useState<Quiz | null>(null);
  useEffect(() => {
    setQuestion(getQuiz(quizId, 3));
  });
  if (!questions) return <h1>Loading</h1>;
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
        {questions.name}
      </h2>
      <QuestionPage questionList={questions.questionsList} />
    </div>
  );
};

const QuestionPage = (props: Props) => {
  return (
    <div>
      {props.questionList.map((question) => {
        return (
          <div key={question.id} className="flex flex-col mb-7">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
              {question.question}
            </h4>
            <RadioGroup defaultValue="comfortable">
              {question.options.map((option, index) => {
                return (
                  <div
                    key={`${index}${option.text}`}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem value={option.text} id={option.text} />
                    <Label className="text-md" htmlFor={option.text}>
                      {option.text}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        );
      })}
      <Button>Submit</Button>
    </div>
  );
};

export default Page;
