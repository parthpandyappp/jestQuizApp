import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/" class="underline-wavy">
          jestQuiz
        </Link>
      </h1>
      <div class="nav-opts">
        <p class="underline">Terms</p>
        <p class="underline">About Us</p>
        <p class="underline">Your results</p>
      </div>
    </nav>
  );
}

export { Nav };
