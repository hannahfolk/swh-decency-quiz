export const Question = (props) => {
  const { question, answers, correct, handleAnswerClick } = props;

  return (
    <div>
      <h1 className="text-xl">{question}</h1>
      <ul className="mt-5">
        {answers.map((answer, i) => (
          <li key={i}>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700"
              onClick={(event) => handleAnswerClick(event, correct)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};