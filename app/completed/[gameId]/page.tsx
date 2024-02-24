"use client";
import { Progress } from "@/components/ui/progress";
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
    () => `${process.env.NEXT_PUBLIC_WEB_URL}/game/${gameId}`,
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
        <div className="flex flex-col sm:flex-row items-center my-7 gap-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
            {gameData.game.percen}%
          </h1>
          <p className="text-3xl mb-2">Can do better :(</p>
        </div>
        <Progress className="my-4 " value={Number(gameData.game.percen)} />
        <div className="flex items-center justify-center sm:justify-start flex-wrap gap-6 mb-6">
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
    <div className="mx-auto xl:max-w-2xl mb-12">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-6 mt-2">
        Wrong answers
      </h4>
      {wrongAnswers.map((question, index) => {
        return (
          <div key={question.question.id + index} className="mb-8">
            <h4 className="text-base font-medium tracking-normal">
              {`Q${index + 1}. ${question.question.question}`}
            </h4>
            {question.question.options.map((option: Options) => {
              return (
                <div
                  key={option.text}
                  className={`${option.isRight && "bg-green-500"} ${
                    question.userChoice === option.text && "bg-yellow-500"
                  } px-5 py-1 rounded-lg mt-1 flex items-center`}
                >
                  <input type="radio" disabled={true} />
                  <label className="ml-4 text-base">{option.text}</label>
                </div>
              );
            })}

            <p className="leading-7 text-base [&:not(:first-child)]:mt-2">
              <span className="font-bold">Explanation: </span>
              {question.question.explanation}
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
    <div className="mx-auto xl:max-w-2xl mb-12">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-6 mt-2">
        Right answers
      </h4>
      {rightAnswers.map((question, index) => {
        return (
          <div key={question.question.id + index} className="mb-8">
            <h4 className="text-base font-medium tracking-normal">
              {`Q${index + 1}. ${question.question.question}`}
            </h4>
            {question.question.options.map((option: Options) => {
              return (
                <div
                  key={option.text}
                  className={`${
                    option.isRight && "bg-green-500"
                  } px-5 py-1 rounded-lg mt-1 flex items-center`}
                >
                  <input type="radio" disabled={true} />
                  <label className="ml-4 text-base">{option.text}</label>
                </div>
              );
            })}

            <p className="leading-7 text-base [&:not(:first-child)]:mt-2">
              <span className="font-bold">Explanation: </span>
              {question.question.explanation}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default FinalPage;
