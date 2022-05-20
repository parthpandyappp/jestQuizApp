import { quizData } from "../models";
import { useQuestData } from "../contexts";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Quest() {
  const { qid } = useParams();
  const navigate = useNavigate();
  const { title, questions } = quizData.find((quest) => quest.id === qid);

  const [index, setIndex] = useState(0);
  const [activeBtnIndex, setActiveBtnIndex] = useState();
  const [goToNext, setGoToNext] = useState(false);

  const quest = questions[index];
  const { state, dispatch } = useQuestData();

  const nextQuest = () => {
    dispatch({ type: "SET_RESULT", payload: state.option });
    responseValidation(state.option);

    let ind = index + 1;

    if (ind > 5) {
      setIndex(5);
    }

    setIndex(ind);
    setGoToNext(false);
    setActiveBtnIndex(null);
  };

  const submitHandler = () => {
    dispatch({ type: "SET_RESULT", payload: state.option });
    responseValidation(state.option);
    navigate("/result");
  };

  const responseValidation = (option) => {
    let flag = false;

    questions.forEach((quest) => {
      if (option === quest.answer) {
        dispatch({ type: "SET_SCORE", payload: state.score + 5 });
        flag = true;
      }
    });

    if (flag === false) {
      dispatch({ type: "SET_SCORE", payload: state.score - 2 });
    }
  };

  const handleOptionSelection = (index, option) => {
    setActiveBtnIndex(index);
    setGoToNext(true);
    dispatch({ type: "SET_OPTION", payload: option });
  };

  useEffect(() => {
    dispatch({ type: "SET_QUEST", payload: questions });

    if (index === 0) {
      dispatch({ type: "SET_OPTION", payload: "" });
      dispatch({ type: "SET_RESULT", payload: [] });
      dispatch({ type: "SET_SCORE", payload: 0 });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="center-hv">
      <div className="quest-container">
        <h2 className="underline underline-wavy">{title}</h2>
        <div className="quest-pills">
          <p>Question: {quest.id}/5</p>
          <p>Score: {state.score}</p>
        </div>
        <p>{quest.question}</p>
        <div className="quest-opts">
          {quest.options.map((option, index) => (
            <button
              className={
                activeBtnIndex === index
                  ? `btn btn-secondary btn-lg`
                  : `btn btn-primary btn-lg`
              }
              key={index}
              onClick={() => handleOptionSelection(index, option)}
            >
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
          <button className="btn btn-secondary" onClick={() => submitHandler()}>
            Submit
          </button>
        ) : (
          <>
            {goToNext ? (
              <button className="btn btn-secondary" onClick={nextQuest}>
                Next
              </button>
            ) : (
              <button className="btn btn-secondary">Next</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export { Quest };
