/**
 * Helper function to calculate the percentage based on the total score and the total number of questions.
 *
 * @param {number} totalScore - The total score achieved by the user.
 * @param {number} totalQuestions - The total number of questions in the quiz.
 * @returns {string} - The percentage calculated from the total score and total questions.
 */
function calculatePercentage(totalScore: number, totalQuestions: number) {
  return ((totalScore / totalQuestions) * 100).toFixed(2);
}

export default calculatePercentage;
