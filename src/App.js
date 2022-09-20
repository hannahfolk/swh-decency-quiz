import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { EndPage, QuizPage, WelcomePage } from "./pages";

const App = () => {
  return (
    <Router>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Southern Wushu House Decency Quiz
            </h1>
          </Link>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-10">
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/end" element={<EndPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
