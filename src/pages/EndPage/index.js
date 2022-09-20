import { useLocation } from "react-router-dom";

export const EndPage = () => {
  const location = useLocation();

  const { score, totalQuestions } = location.state;

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
    </>
  );
};
