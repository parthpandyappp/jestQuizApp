import { Link } from "react-router-dom";
import { useAuth } from "../contexts";

function Nav() {
  const { currentUser, userLogOut } = useAuth();

  console.log("Current: ", currentUser);

  return (
    <nav>
      <h1>
        <Link to="/" className="underline-wavy">
          jestQuiz
        </Link>
      </h1>
      <div className="nav-opts">
        {currentUser ? (
          <>
            <p>Hello {currentUser.displayName}👋</p>
            <p className="underline pointer" onClick={userLogOut}>
              Logout
            </p>
            <p className="underline">Your results</p>
          </>
        ) : (
          <Link to="/login">
            <p className="underline">Login</p>
          </Link>
        )}
        <p className="underline">About Us</p>
      </div>
    </nav>
  );
}

export { Nav };
