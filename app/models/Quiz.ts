import mongoose, { Schema, models } from "mongoose";

const quizSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    questionsList: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Quiz = models.Quiz || mongoose.model("Quiz", quizSchema);
export default Quiz;
