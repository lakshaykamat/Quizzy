"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {};

const Page = ({ params }: { params: { quiz: string } }) => {
  const { quiz } = params;
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
        {quiz}
      </h2>
      <QuestionPage />
    </div>
  );
};

const QuestionPage = () => {
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
          </div>
        );
      })}
      <Button>Submit</Button>
    </div>
  );
};

export default Page;
