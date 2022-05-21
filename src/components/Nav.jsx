import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";
import { notifyUserLogout, notifyError } from "../helper-functions";

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
            <Link to="/latest-result">
              <p className="underline">Latest scores</p>
            </Link>
            <p
              className="underline pointer"
              onClick={() =>
                userLogOut(
                  navigate,
                  setCurrentUser,
                  notifyUserLogout,
                  notifyError
                )
              }
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
