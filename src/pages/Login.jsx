import { useState } from "react";
import { useAuth } from "../contexts";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="center-hv">
      <div className="auth-form">
        <form
          onSubmit={(e) =>
            userLogin(e, email, password, setCurrentUser, navigate)
          }
        >
          <h2>Login</h2>
          <div className="inp-unit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="johnsangram@gkool.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inp-unit">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="inp-unit">
            <button className="btn btn-primary login-btn" type="submit">
              Login
            </button>
            <button
              className="btn btn-primary login-btn"
              type="button"
              onClick={(e) =>
                userLogin(
                  e,
                  "test123@gkool.com",
                  "test1234",
                  setCurrentUser,
                  navigate
                )
              }
            >
              Test Credentials
            </button>
            <div className="text-center">
              <input type="checkbox" id="rem-me" name="rem-me" />
              <label htmlFor="rem-me">Remember me</label>
            </div>
          </div>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup" className="underline">
                {" "}
                Sign up?
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Login };
