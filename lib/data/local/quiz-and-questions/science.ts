import { Question, QuestionCategory, Quiz } from "../../../../types";

const SCIENCE_QUESTIONS: Question[] = [
  {
    id: "FB3D49A32E96E60A",
    question: "What is the chemical symbol for gold?",
    explanation:
      "The chemical symbol for gold is 'Au.' It comes from the Latin word 'aurum.'",
    options: [
      { text: "Au", isRight: true },
      { text: "Ag", isRight: false },
      { text: "Fe", isRight: false },
      { text: "Cu", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "DCEA2F9781B3DB42",
    question: "Who developed the theory of relativity?",
    explanation:
      "Albert Einstein developed the theory of relativity, revolutionizing our understanding of space, time, and gravity.",
    options: [
      { text: "Isaac Newton", isRight: false },
      { text: "Galileo Galilei", isRight: false },
      { text: "Albert Einstein", isRight: true },
      { text: "Stephen Hawking", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "59E8A3F68E4325D7",
    question: "What is the powerhouse of the cell?",
    explanation:
      "Mitochondria are the powerhouse of the cell. They produce energy (ATP) through cellular respiration.",
    options: [
      { text: "Nucleus", isRight: false },
      { text: "Mitochondria", isRight: true },
      { text: "Endoplasmic Reticulum", isRight: false },
      { text: "Golgi Apparatus", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "A27C6C3C447F78A9",
    question: "Which planet is known as the 'Red Planet'?",
    explanation:
      "Mars is known as the 'Red Planet' due to the iron oxide on its surface, giving it a reddish appearance.",
    options: [
      { text: "Venus", isRight: false },
      { text: "Mars", isRight: true },
      { text: "Jupiter", isRight: false },
      { text: "Saturn", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q27",
    question: "What is the chemical symbol for water?",
    explanation:
      "H2O is the chemical symbol for water, consisting of two hydrogen atoms and one oxygen atom.",
    options: [
      { text: "CO2", isRight: false },
      { text: "H2O", isRight: true },
      { text: "O2", isRight: false },
      { text: "NaCl", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q28",
    question: "Who developed the theory of relativity?",
    explanation:
      "Albert Einstein developed the theory of relativity, revolutionizing our understanding of space, time, and gravity.",
    options: [
      { text: "Isaac Newton", isRight: false },
      { text: "Galileo Galilei", isRight: false },
      { text: "Albert Einstein", isRight: true },
      { text: "Stephen Hawking", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q29",
    question: "What is the powerhouse of the cell?",
    explanation:
      "Mitochondria are often called the powerhouse of the cell, as they generate most of the cell's supply of adenosine triphosphate (ATP).",
    options: [
      { text: "Nucleus", isRight: false },
      { text: "Mitochondria", isRight: true },
      { text: "Endoplasmic Reticulum", isRight: false },
      { text: "Golgi Apparatus", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q30",
    question: "What is the largest planet in our solar system?",
    explanation:
      "Jupiter is the largest planet in our solar system, known for its massive size and strong magnetic field.",
    options: [
      { text: "Venus", isRight: false },
      { text: "Mars", isRight: false },
      { text: "Jupiter", isRight: true },
      { text: "Saturn", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q31",
    question: "Who is known as the father of modern physics?",
    explanation:
      "Sir Isaac Newton is often referred to as the father of modern physics, making significant contributions to classical mechanics.",
    options: [
      { text: "Galileo Galilei", isRight: false },
      { text: "Niels Bohr", isRight: false },
      { text: "Albert Einstein", isRight: false },
      { text: "Isaac Newton", isRight: true },
    ],
    category: QuestionCategory.Science,
  },
  {
    id: "Q32",
    question: "What is the process by which plants make their own food?",
    explanation:
      "Photosynthesis is the process by which plants convert light energy into chemical energy to produce their own food.",
    options: [
      { text: "Respiration", isRight: false },
      { text: "Transpiration", isRight: false },
      { text: "Photosynthesis", isRight: true },
      { text: "Digestion", isRight: false },
    ],
    category: QuestionCategory.Science,
  },
];

const QUIZ_SCIENCE_DATA: Quiz = {
  id: "V2PpEiGtR9",
  name: "Science",
  image:
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "Explore the world of science with questions on chemistry, physics, biology, and astronomy to test your scientific knowledge.",
  category: QuestionCategory.Science,
  questionsList: SCIENCE_QUESTIONS,
};

export default QUIZ_SCIENCE_DATA;
