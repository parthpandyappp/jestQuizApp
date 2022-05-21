import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useQuestData } from "../contexts";
import { Toaster } from "react-hot-toast";

function Home() {
  const { currentUser } = useAuth();
  const { dispatch } = useQuestData();

  useEffect(() => {
    dispatch({ type: "SET_OPTION", payload: "" });
    dispatch({ type: "SET_QUEST", payload: {} });
    dispatch({ type: "SET_RESULT", payload: [] });
    dispatch({ type: "SET_QUEST_TITLE", payload: "" });
    dispatch({ type: "SET_SCORE", payload: 0 });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="center-hv">
        <h1 className="main-head underline-wavy">jestQuiz</h1>
        <p className="main-desc">
          A one stop solution to build questionnare and distribute among your
          network. Theme based quiz, fun for sure!
        </p>
        <div className="main-opt">
          <button className="btn btn-primary">
            <Link to={currentUser ? "/themes" : "/login"}>Explore Quizzes</Link>
          </button>
          <button className="btn btn-secondary">
            <a href="https://github.com/parthpandyappp/jestQuizApp/">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Home };
