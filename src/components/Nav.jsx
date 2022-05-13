import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/" className="underline-wavy">
          jestQuiz
        </Link>
      </h1>
      <div className="nav-opts">
        <p className="underline">Terms</p>
        <p className="underline">About Us</p>
        <p className="underline">Your results</p>
      </div>
    </nav>
  );
}

export { Nav };
