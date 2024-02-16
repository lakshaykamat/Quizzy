import { Question, QuestionCategory, Quiz } from "../../../../types";

const SPORT_QUESTIONS: Question[] = [
  {
    id: "Q20",
    question: "Which country hosted the Winter Olympics in 2018?",
    explanation:
      "South Korea hosted the Winter Olympics in 2018, showcasing various winter sports events.",
    options: [
      { text: "Canada", isRight: false },
      { text: "Russia", isRight: false },
      { text: "South Korea", isRight: true },
      { text: "United States", isRight: false },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q3",
    question: "Who is known as 'The Greatest' in boxing?",
    explanation:
      "Muhammad Ali, also known as 'The Greatest,' was a legendary heavyweight boxer and cultural icon.",
    options: [
      { text: "Mike Tyson", isRight: false },
      { text: "Muhammad Ali", isRight: true },
      { text: "Floyd Mayweather", isRight: false },
      { text: "Manny Pacquiao", isRight: false },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q2",
    question: "In which sport would you perform a slam dunk?",
    explanation:
      "A slam dunk is a scoring technique in basketball, where a player jumps and forcefully puts the ball through the hoop.",
    options: [
      { text: "Tennis", isRight: false },
      { text: "Basketball", isRight: true },
      { text: "Swimming", isRight: false },
      { text: "Golf", isRight: false },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q1",
    question: "Who won the FIFA World Cup in 2018?",
    explanation:
      "France won the FIFA World Cup in 2018 by defeating Croatia in the final.",
    options: [
      { text: "Brazil", isRight: false },
      { text: "Germany", isRight: false },
      { text: "France", isRight: true },
      { text: "Argentina", isRight: false },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q21",
    question:
      "Which tennis player holds the record for the most Grand Slam singles titles?",
    explanation:
      "Serena Williams holds the record for the most Grand Slam singles titles in the Open Era, with 23 championships.",
    options: [
      { text: "Roger Federer", isRight: false },
      { text: "Rafael Nadal", isRight: false },
      { text: "Novak Djokovic", isRight: false },
      { text: "Serena Williams", isRight: true },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q22",
    question: "In which city did the first modern Olympics take place in 1896?",
    explanation:
      "The first modern Olympics took place in Athens, Greece, in 1896.",
    options: [
      { text: "Paris", isRight: false },
      { text: "London", isRight: false },
      { text: "Berlin", isRight: false },
      { text: "Athens", isRight: true },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q23",
    question: "Who is the all-time leading scorer in the NBA?",
    explanation:
      "Kareem Abdul-Jabbar is the all-time leading scorer in the NBA, with 38,387 points.",
    options: [
      { text: "Michael Jordan", isRight: false },
      { text: "LeBron James", isRight: false },
      { text: "Kobe Bryant", isRight: false },
      { text: "Kareem Abdul-Jabbar", isRight: true },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q24",
    question: "Which country hosted the 2016 Summer Olympics?",
    explanation:
      "Brazil hosted the 2016 Summer Olympics in Rio de Janeiro, showcasing various sports and cultural events.",
    options: [
      { text: "United States", isRight: false },
      { text: "China", isRight: false },
      { text: "Russia", isRight: false },
      { text: "Brazil", isRight: true },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q25",
    question:
      "Who is the only athlete to win Olympic gold in both the 100m and 200m sprints in three consecutive Olympics?",
    explanation:
      "Usain Bolt, the Jamaican sprinter, achieved this feat in the 2008, 2012, and 2016 Summer Olympics.",
    options: [
      { text: "Carl Lewis", isRight: false },
      { text: "Jesse Owens", isRight: false },
      { text: "Usain Bolt", isRight: true },
      { text: "Asafa Powell", isRight: false },
    ],
    category: QuestionCategory.Sport,
  },
  {
    id: "Q26",
    question: "Which team has won the most Super Bowls in NFL history?",
    explanation:
      "The Pittsburgh Steelers have won the most Super Bowls in NFL history, with a total of six championships.",
    options: [
      { text: "New England Patriots", isRight: false },
      { text: "San Francisco 49ers", isRight: false },
      { text: "Green Bay Packers", isRight: false },
      { text: "Pittsburgh Steelers", isRight: true },
    ],
    category: QuestionCategory.Sport,
  },
];
const QUIZ_SPORT_DATA: Quiz = {
  id: "WT4KlYBgA7",
  name: "Sport",
  image:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "Test your sports knowledge with questions about famous events, athletes, and championships from around the world.",
  category: QuestionCategory.General,
  questionsList: SPORT_QUESTIONS,
};

export default QUIZ_SPORT_DATA;
