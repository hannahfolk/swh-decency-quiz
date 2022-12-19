import { useLocation } from "react-router-dom";

import { Answer } from "../../components";

import questions from "../../questions.json";

export const EndPage = () => {
  const location = useLocation();

  const { usersAnswers, score, totalQuestions } = location.state;

  return (
    <>
      <h1>
        You scored{" "}
        <strong>
          {score} out of {totalQuestions}
        </strong>
        .
      </h1>
      <br />
      <p>
        Please proceed to show Zack your score to see whether or not you have
        passed this examination. Bear in mind that the score is not the only
        judge of character to enter the Southern Wushu House. Your behavior must
        back up your score, if passing.
      </p>

      <h1 className="mt-10 text-xl">Answers</h1>
      {questions.map((question, i) => (
        <Answer key={i} {...question} usersAnswer={usersAnswers[i]} />
      ))}
    </>
  );
};
