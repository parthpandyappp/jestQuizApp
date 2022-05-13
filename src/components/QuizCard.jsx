import { Link } from "react-router-dom";

function QuizCard({ data }) {
  const { id, title, assets, content } = data;
  return (
    <div className="card">
      <img className="card-img" src={assets.imgUrl} alt={assets.alt} />

      <div className="card-content">
        <h4>{title}</h4>
        <p>{content}</p>

        <Link to={`/quest/${id}/rules`}>
          <button className="btn btn-primary modalBtn">Start now</button>
        </Link>
      </div>
    </div>
  );
}

export { QuizCard };
