import { shuffleArray } from "@/lib/utils";

/**

Helper function to shuffle questions in a quiz.
@param {any[]} questionsList - The list of questions to be shuffled.
@param {number} limit - The maximum number of questions to include in the shuffled list.
@returns {any[]} - Shuffled list of questions with randomized options.
*/
function shuffleQuestions(questionsList: any[], limit: number): any[] {
  // Shuffle the entire list of questions
  const shuffledQuestionsList = shuffleArray(questionsList).slice(0, limit);
  // Randomize the order of options for each question
  shuffledQuestionsList.forEach((question) => {
    question.options = shuffleArray(question.options);
  });

  return shuffledQuestionsList;
}
export default shuffleQuestions;
