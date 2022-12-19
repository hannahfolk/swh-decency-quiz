import { useNavigate } from "react-router-dom";

export const WelcomePage = (props) => {
  const { name, setName } = props;

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleStartQuiz = (event) => {
    event.preventDefault();
    navigate("/quiz");
  };

  return (
    <>
      <h1>CONGRATULATIONS!</h1>
      <br />
      <p>
        You have been chosen to answer the following questions due to your
        questionable behavior and actions. We members of the Southern Wushu
        House have spent great time and effort to create a safe space for
        everyone. To safeguard the best interest of everyone, this short quiz is
        now being offered to you,
        <strong>free of charge</strong>! We sincerely hope you are someone that
        can be trusted and uphold a strong moral character.
      </p>
      <br />
      <p>This is not a joke; we take this seriously.</p>
      <br />
      <p>
        May you think with the right head and successfully pass this short
        examination. Jiayou!
      </p>
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded pt-6" onSubmit={handleStartQuiz}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            BEGIN
          </button>
        </form>
      </div>
    </>
  );
};
