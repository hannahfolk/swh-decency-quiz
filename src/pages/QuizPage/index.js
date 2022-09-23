import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Question } from "../../components";

import questions from "../../questions.json";

export const QuizPage = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(
    Math.round(((currentQuestion + 1) * 100) / questions.length) + "%"
  );
  const [usersAnswers, setUsersAnswers] = useState([]);

  const handleAnswerClick = (event, correct) => {
    usersAnswers.push(event.target.textContent);
    setUsersAnswers(usersAnswers);
    let updatedScore = score;
    if (event.target.textContent === correct) {
      updatedScore = score + 1;
      setScore(updatedScore);
    } else if (event.target.textContent === "Do more wushu.") {
      updatedScore = score + 0.5;
      setScore(updatedScore);
    }
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(
        Math.round(((currentQuestion + 2) * 100) / questions.length) + "%"
      );
    } else {
      navigate("/end", {
        state: {
          usersAnswers,
          score: updatedScore,
          totalQuestions: questions.length,
        },
      });
    }
  };

  return (
    <div>
      <h1 className="mb-2.5">
        Question {currentQuestion + 1} / {questions.length}
      </h1>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-2.5 mb-5">
        <div
          className="bg-blue-600 rounded-full h-2.5"
          style={{ width: progress }}
        ></div>
      </div>
      <Question
        {...questions[currentQuestion]}
        handleAnswerClick={handleAnswerClick}
      />
    </div>
  );
};
