import mongoose, { Schema, models } from "mongoose";

const gameSchema = new Schema(
  {
    totalScore: {
      type: String,
      required: true,
    },
    totalQuestions: {
      type: String,
      required: true,
    },
    percen: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    userResult: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Game = models.Game || mongoose.model("Game", gameSchema);
export default Game;
