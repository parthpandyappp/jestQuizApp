import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { userSignup, setUserData } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="center-hv">
      <div className="auth-form">
        <form
          onSubmit={(e) =>
            userSignup(e, email, pass, name, setUserData, navigate)
          }
        >
          <h2>Sign up</h2>
          <div className="inp-unit">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="fname"
              placeholder="johnsangram"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inp-unit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnsangram@gkool.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inp-unit">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="email"
              placeholder="**********"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="inp-unit">
            <button className="btn btn-primary login-btn" type="submit">
              Sign Up
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login" className="underline">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export { Signup };
