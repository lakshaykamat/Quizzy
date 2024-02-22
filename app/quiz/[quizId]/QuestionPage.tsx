import { useState } from "react";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import AXIOS from "@/lib/axiosHelper";

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
  const router = useRouter();

  const { mutate: mutateData } = useSWR(
    ["/questions", formData],
    AXIOS.postUserResponseOfQuestions
  );

  const handleOptionChange = (
    questionId: string,
    userChoice: string,
    question: any
  ) => {
    const existingQuestion = formData.find(
      (item: any) => item.questionId === questionId
    );

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      quizId: props.quizId,
      userResponse: Array.from(formData),
    };

    try {
      // Set loading to true during the mutation
      mutateData();

      // Perform the POST request and update the cache
      const res = await AXIOS.postUserResponseOfQuestions("/questions", data);

      // Manually trigger a re-fetch to get the updated data
      await mutateData(["/questions", data]);
      console.log(res);
      router.push(`/completed/${res.game._id}`);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.questionList.map((question, index) => (
        <div key={question.id} className="flex flex-col mb-12">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
            {index + 1}. {question.question}
          </h4>
          <div>
            {question.options.map((option, index) => (
              <div className="flex items-center space-x-2 mb-2" key={index}>
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
          </div>
        </div>
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default QuestionPage;
