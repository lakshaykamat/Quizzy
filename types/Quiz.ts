import { Question, QuestionCategory } from ".";

type QuizType = {
  _id: string;
  image: string;
  name: string;
  description: string;
  questionsList: Array<Question>;
  category: QuestionCategory | string;
};
export default QuizType;
