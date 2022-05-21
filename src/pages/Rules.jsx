import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { notifyQuizStart } from "../helper-functions";

function Rules() {
  const { qid } = useParams();
  const navigate = useNavigate();

  const initialHandler = () => {
    navigate(`/quest/${qid}`);
    notifyQuizStart();
  };
  return (
    <div className="center-hv">
      <h2 className="underline underline-wavy">General Rules</h2>
      <div className="quest-container">
        <h4>You must abide by some rules prescribed below</h4>

        <ul className="rules">
          <li>You can quit the quiz in the middle of quest.</li>
          <li className="rule">
            10 points will be credited on every correct answer and 5 points will
            be deducted upon each incorrect answer.
          </li>
          <li className="rule">
            The score will only submitted on succesful completion of quest.
          </li>
          <li className="rule">
            If any malpractice is noticed, you'll be banned from our servers.
          </li>
        </ul>
      </div>
      <button className="btn btn-primary" onClick={initialHandler}>
        Start Quiz
      </button>
    </div>
  );
}

export { Rules };
