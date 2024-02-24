/**
 * Helper function to calculate the total score based on the user's results.
 *
 * @param {any[]} userResult - The user's results for each quiz question.
 * @returns {number} - The total score calculated from the correct answers.
 */
function calculateTotalScore(userResult: any[]) {
  return userResult.filter((result) => result?.isCorrect).length;
}

export default calculateTotalScore;
