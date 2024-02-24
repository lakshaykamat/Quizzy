import Game from "@/app/models/Game";

/**
 * Creates a new game entry in the database.
 *
 * @param {string} quizId - The ID of the quiz associated with the game.
 * @param {number} totalScore - The total score achieved by the user in the game.
 * @param {string} percentage - The percentage of correct answers in the game.
 * @param {number} totalQuestions - The total number of questions in the game.
 * @param {any[]} userResult - An array containing detailed information about each user response.
 * @returns {Promise<any>} - A Promise resolving to the newly created game entry.
 * @throws {Error} - Throws an error if there is an issue creating the game entry.
 */
async function createNewGame(
  quizId: string,
  totalScore: number,
  percentage: string,
  totalQuestions: number,
  userResult: any[]
): Promise<any> {
  try {
    // Create a new game entry in the database
    const newGame = await Game.create({
      totalScore,
      percen: parseFloat(percentage),
      totalQuestions,
      userId: "USER_ID", // Replace with actual user ID when implementing user authentication
      quizId,
      userResult,
    });

    return newGame;
  } catch (error) {
    // Handle any errors that occur during game creation
    console.error("Error creating new game:", error);
    throw new Error("Failed to create a new game entry");
  }
}
export default createNewGame;
