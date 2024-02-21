import mongoose, { Schema, models } from "mongoose";

const gameSchema = new Schema(
  {
    score: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    questionsList: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Game = models.Game || mongoose.model("Game", gameSchema);
export default Game;
