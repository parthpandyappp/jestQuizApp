import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

function Nav() {
  const { currentUser, userLogOut, setCurrentUser } = useAuth();
  const navigate = useNavigate();

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
            <p className="underline">Latest scores</p>
            <p
              className="underline pointer"
              onClick={() => userLogOut(navigate, setCurrentUser)}
            >
              Logout
            </p>
          </>
        ) : (
          <Link to="/login">
            <p className="underline">Login</p>
          </Link>
        )}
      </div>
    </nav>
  );
}

export { Nav };
