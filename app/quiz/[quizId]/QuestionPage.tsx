import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";

type Props = {
  questionList: Question[];
  quizId: string;
};
export interface Root {
  userChoice: string;
  question: Question;
}

export interface Question {
  id: string;
  question: string;
  explanation: string;
  options: Option[];
  category: string;
}

export interface Option {
  text: string;
  isRight: boolean;
}

const QuestionPage = (props: Props) => {
  const [formData, setFormData] = useState<Root[]>([]);

  const handleOptionChange = (
    questionId: string,
    userChoice: string,
    question: any
  ) => {
    console.log(formData);
    // Check if the questionId is already in formData
    const existingQuestion = formData.find(
      (item: any) => item.questionId === questionId
    );

    console.log(question);
    // If exists, update the userChoice, else add a new entry
    if (existingQuestion) {
      setFormData((prevData) =>
        prevData.map((item: any) =>
          item.questionId === questionId
            ? { ...item, userChoice, question }
            : item
        )
      );
    } else {
      setFormData((prevData) => [...prevData, { userChoice, question }]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted data:", {
      quizId: props.quizId,
      userResponse: [...formData],
    });
    // Handle the submitted data (e.g., send it to the server)
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.questionList.map((question, index) => (
        <div key={question.id} className="flex flex-col mb-12">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
            {index + 1}. {question.question}
          </h4>
          <RadioGroup defaultValue="comfortable">
            {question.options.map((option, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <input
                  required
                  type="radio"
                  id={option.text}
                  name={`question_${question.id}`}
                  value={option.text}
                  checked={formData.some(
                    (item) =>
                      item.question.id === question.id &&
                      item.userChoice === option.text
                  )}
                  onChange={() =>
                    handleOptionChange(question.id, option.text, question)
                  }
                />
                <label htmlFor={option.text}>{option.text}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default QuestionPage;
