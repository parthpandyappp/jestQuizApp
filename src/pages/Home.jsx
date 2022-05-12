import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container">
      <div class="center-hv">
        <h1 class="main-head underline-wavy">jestQuiz</h1>
        <p class="main-desc">
          A one stop solution to build questionnare and distribute among your
          network. Theme based quiz, fun for sure!
        </p>
        <div class="main-opt">
          <button class="btn btn-primary">
            <Link to="/themes">Explore Quizzes</Link>
          </button>
          <button class="btn btn-secondary">
            <a href="https://github.com/parthpandyappp/jestQuiz/">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Home };
