"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CONSTANTS from "@/lib/data/Constants";
import { INTERNET, getQuiz, shuffleQuestionAndOptions } from "@/lib/utils";
import { Question, Quiz } from "@/types";
import useSWR from "swr";

const Page = ({ params }: { params: { quizId: string } }) => {
  const { quizId } = params;

  const {
    isLoading,
    data: quizes,
    error,
  } = useSWR(CONSTANTS.API_URL, INTERNET.quiz);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  let quiz: Quiz | null = getQuiz(quizId, quizes as Quiz[]);

  if (quiz) {
    quiz = shuffleQuestionAndOptions(quiz, 2);

    return (
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
          {quiz.name}
        </h2>
        <QuestionPage questionList={quiz.questionsList} />
      </div>
    );
  }
};

type Props = {
  questionList: Question[];
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
