import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { quizData } from "../models";

function Quest() {
  const { qid } = useParams();
  const { title, questions } = quizData.find((quest) => quest.id === qid);

  const [index, setIndex] = useState(0);
  const quest = questions[index];

  const nextQuest = () => {
    let ind = index + 1;
    if (ind > 5) {
      setIndex(5);
    }
    setIndex(ind);
  };

  return (
    <div className="center-hv">
      <div className="quest-container">
        <h2 className="underline underline-wavy">{title}</h2>
        <div className="quest-pills">
          <p>Question: {quest.id}/5</p>
          <p>Score: 0</p>
        </div>
        <p>{quest.question}</p>
        <div className="quest-opts">
          {quest.options.map((option, index) => (
            <button className="btn btn-primary btn-lg" key={index}>
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="quest-btns">
        <Link to="/themes">
          <button className="btn btn-secondary">Quit</button>
        </Link>
        {index === 4 ? (
          <button className="btn btn-secondary">Submit</button>
        ) : (
          <button className="btn btn-secondary" onClick={nextQuest}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export { Quest };
