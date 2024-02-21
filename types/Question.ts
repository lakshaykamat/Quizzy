import { QuestionCategory, Options } from ".";

type Question = {
  id: string;
  question: string;
  explanation: string;
  options: Options[];
  category: QuestionCategory | string;
};

export default Question;
