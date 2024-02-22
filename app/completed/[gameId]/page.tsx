"use client";
import AXIOS from "@/lib/axiosHelper";
import { UserResult } from "@/lib/axiosHelper/fetchGameData";
import { Options } from "@/types";
import React from "react";
import useSWR from "swr";

const FinalPage = ({ params }: { params: { gameId: string } }) => {
  const { gameId } = params;
  const {
    data: gameData,
    error,
    isLoading,
  } = useSWR(
    () => `${process.env.NEXT_PUBLIC_WEB_URL}/game/?id=${gameId}`,
    AXIOS.fetchGameData
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (gameData) {
    console.log(gameData);
    const wrongAnswers = gameData.game.userResult.filter(
      (result) => !result.isCorrect
    );
    const rightAnswers = gameData.game.userResult.filter(
      (result) => result.isCorrect
    );
    return (
      <div className="">
        <div className="flex items-center my-7 gap-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
            {gameData.game.percen}%
          </h1>
          <p className="text-3xl mb-2">Can do better :(</p>
        </div>
        <div className="flex gap-6 mb-6">
          <p>
            <span className="text-bold">Question attempted:</span>{" "}
            {gameData.game.totalQuestions}
          </p>
          <p>
            <span className="text-bold">Score accquired:</span>{" "}
            {gameData.game.totalScore}
          </p>
        </div>

        <WrongAnswerSection wrongAnswers={wrongAnswers} />
        <RightAnswerSection rightAnswers={rightAnswers} />
      </div>
    );
  }
};

const WrongAnswerSection = ({
  wrongAnswers,
}: {
  wrongAnswers: UserResult[];
}) => {
  if (wrongAnswers.length === 0) return;
  return (
    <div className="bg-destructive p-10 mb-12 rounded-3xl">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-5">
        Wrong answers
      </h2>
      {wrongAnswers.map((question, index) => {
        return (
          <div key={question.question.id + index} className="mb-8">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {`Q${index + 1}. ${question.question.question}`}
            </h4>
            {question.question.options.map((option: Options) => {
              return (
                <div
                  key={option.text}
                  className={`${option.isRight && "bg-green-700"} ${
                    question.userChoice === option.text && "bg-yellow-700"
                  } px-5 py-1 rounded-xl mt-1`}
                >
                  <input type="radio" disabled={true} />
                  <label className="ml-4">{option.text}</label>
                </div>
              );
            })}

            <p className="leading-7 [&:not(:first-child)]:mt-2">
              {`Explanation: ${question.question.explanation}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};
const RightAnswerSection = ({
  rightAnswers,
}: {
  rightAnswers: UserResult[];
}) => {
  if (rightAnswers.length === 0) return;

  return (
    <div className="bg-green-900 p-10 mb-12 rounded-3xl">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-5">
        Right answers
      </h2>
      {rightAnswers.map((question, index) => {
        return (
          <div key={question.question.id + index} className="mb-8">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {`Q${index + 1}. ${question.question.question}`}
            </h4>
            {question.question.options.map((option: Options) => {
              return (
                <div
                  key={option.text}
                  className={`${
                    question.userChoice === option.text && "bg-green-600"
                  } px-5 py-1 rounded-xl mt-1`}
                >
                  <input type="radio" disabled={true} />
                  <label className="ml-4">{option.text}</label>
                </div>
              );
            })}

            <p className="leading-7 [&:not(:first-child)]:mt-2">
              {`Explanation: ${question.question.explanation}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default FinalPage;
