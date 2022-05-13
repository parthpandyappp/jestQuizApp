import { QuizCard } from "../components/QuizCard";
import { quizData, categories } from "../models";

function Themes() {
  return (
    <div className="center-hv">
      <div className="categories">
        {categories.map((category) => (
          <p className="category-badge" key={category.id}>
            {category.category}
          </p>
        ))}
      </div>
      <div className="theme-container">
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} data={quiz} />
        ))}
      </div>
    </div>
  );
}

export { Themes };
