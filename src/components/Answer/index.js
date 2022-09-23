import { useState, useEffect } from "react";

export const Answer = (props) => {
  const { question, answers, correct, usersAnswer } = props;

  const [mappedAnswers, setMappedAnswers] = useState([]);

  useEffect(() => {
    mapAnswers();
  }, []);

  const mapAnswers = () => {
    const mappedAnswers = [];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === usersAnswer && usersAnswer === correct) {
        mappedAnswers.push({
          answer: answers[i],
          styling:
            "text-white bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600",
        });
      } else if (answers[i] === correct) {
        mappedAnswers.push({
          answer: answers[i],
          styling:
            "text-white bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600",
        });
      } else if (answers[i] === usersAnswer) {
        mappedAnswers.push({
          answer: answers[i],
          styling:
            "text-white bg-red-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600",
        });
      } else {
        mappedAnswers.push({
          answer: answers[i],
          styling:
            "text-gray-900 bg-white border border-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600",
        });
      }
    }

    setMappedAnswers(mappedAnswers);
  };

  return (
    <div>
      <h1 className="mt-5">{question}</h1>
      <ul className="mt-5">
        {mappedAnswers.map(({ answer, styling }, i) => (
          <li key={i}>
            <button type="button" disabled className={styling}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
