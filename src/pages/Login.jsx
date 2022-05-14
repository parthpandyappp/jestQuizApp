import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { userLogin } = useAuth();

  return (
    <div className="center-hv">
      <div className="auth-form">
        <form onSubmit={(e) => userLogin(e, email, pass)}>
          <h2>Login</h2>
          <div className="inp-unit">
            <label for="email">Email</label>
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
            <label for="email">Password</label>
            <input
              type="password"
              name="password"
              value={pass}
              placeholder="**********"
              onChange={(e) => setPass(e.target.value)}
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
              onClick={(e) => userLogin(e, "test123@gkool.com", "test1234")}
            >
              Test Credentials
            </button>
            <div className="text-center">
              <input type="checkbox" id="rem-me" name="rem-me" />
              <label for="rem-me">Remember me</label>
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
