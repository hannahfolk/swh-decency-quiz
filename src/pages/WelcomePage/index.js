import { Link } from "react-router-dom";

export const WelcomePage = () => {
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
      <Link
        to="/quiz"
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-10"
      >
        BEGIN
      </Link>
    </>
  );
};
