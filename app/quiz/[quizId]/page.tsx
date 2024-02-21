"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { INTERNET, getQuiz, shuffleQuestionAndOptions } from "@/lib/utils";
import { Question, QuizType } from "@/types";
import { useState } from "react";
import useSWR from "swr";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Page = ({ params }: { params: { quizId: string } }) => {
  const { quizId } = params;

  const { data: quizData, error } = useSWR(
    () => `${"http://localhost:3000/api"}/questions?id=${quizId}&limit=${10}`,
    INTERNET.questionsList
  );

  if (error) return <h1>Error loading data</h1>;
  if (!quizData) return <h1>Loading...</h1>;

  const { questionsList, name } = quizData;

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
        {name}
      </h2>
      <QuestionPage questionList={questionsList} />
    </div>
  );
};

type Props = {
  questionList: Question[];
};

const QuestionPage = (props: Props) => {
  return (
    <div>
      {props.questionList.map((question, index) => (
        <div key={question.id} className="flex flex-col mb-12">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
            {index + 1}. {question.question}
          </h4>
          <RadioGroup defaultValue="comfortable">
            {question.options.map((option, index) => (
              <div
                key={`${index}${option.text}`}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem value={option.text} id={option.text} />
                <Label className="text-md" htmlFor={option.text}>
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
      <Button>Submit</Button>
    </div>
  );
};

export default Page;
