import { useState } from "react";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import AXIOS from "@/lib/axiosHelper";

type Props = {
  questionList: Question[];
  quizId: string;
};

export interface FormData {
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

export interface QuestionRequestBody {
  quizId: string;
  userResponse: UserResponse[];
}

export interface UserResponse {
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
  const [formData, setFormData] = useState<FormData[]>([]);
  const router = useRouter();

  const { mutate: mutateData, isValidating } = useSWR(
    ["/questions"],
    AXIOS.postUserResponseOfQuestions,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
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
      setFormData((prevData) => [
        ...prevData,
        { userChoice, questionId, question },
      ]);
    }
  };

  const handleSubmit = async () => {
    const data: QuestionRequestBody = {
      quizId: props.quizId,
      userResponse: Array.from(formData),
    };

    if (data.userResponse.length === 0) return alert("Required feild");
    try {
      // Set loading to true during the mutation
      mutateData([`/questions`], false);

      // Perform the POST request and update the cache
      const response: any = await AXIOS.postUserResponseOfQuestions(
        "/questions",
        {
          data: data,
          quizId: props.quizId,
        }
      );
      console.log(response.game._id);

      // Manually trigger a re-fetch to get the updated data
      await mutateData([`/questions`]);
      if (response?.game?._id) {
        router.push(`/completed/${response.game._id}`);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
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

      <Button disabled={isValidating} type="button" onClick={handleSubmit}>
        {isValidating ? "Submitting..." : "Submit Response"}
      </Button>
    </div>
  );
};

export default QuestionPage;
