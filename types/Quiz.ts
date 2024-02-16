import { Question, QuestionCategory } from ".";

type Quiz = {
  id: string;
  image: string;
  name: string;
  description: string;
  questionsList: Array<Question>;
  category: QuestionCategory;
};
export default Quiz;
