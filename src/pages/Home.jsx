import { Link } from "react-router-dom";
import { useAuth } from "../contexts";

function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="container">
      <div className="center-hv">
        <h1 className="main-head underline-wavy">jestQuiz</h1>
        <p className="main-desc">
          A one stop solution to build questionnare and distribute among your
          network. Theme based quiz, fun for sure!
        </p>
        <div className="main-opt">
          <button className="btn btn-primary">
            {currentUser ? (
              <Link to="/themes">Explore Quizzes</Link>
            ) : (
              <Link to="/login">Explore Quizzes</Link>
            )}
          </button>
          <button className="btn btn-secondary">
            <a href="https://github.com/parthpandyappp/jestQuiz/">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Home };
