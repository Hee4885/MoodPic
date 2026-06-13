import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getCategoryList } from '../data/categoryData';
import './MainMenuPage.css';

export default function MainMenuPage() {
  const navigate = useNavigate();
  const categories = getCategoryList();

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page main-menu">
        <header className="main-menu__header">
          <p className="main-menu__kicker">Mood Pic</p>
          <h1 className="serif-title main-menu__title">
            사진마다 어울리는 감성은 다릅니다.
            <br />
            <span>주제별 보정법</span>을 쉽고 빠르게 배워보세요.
          </h1>
          <p className="lead main-menu__lead">
            사진 주제를 선택하면 맞춤 보정법과 전후 비교를 확인할 수 있어요.
          </p>

        </header>

        <section className="main-menu__grid" aria-label="사진 카테고리">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.id}
              type="button"
              onClick={() => navigate(`/guide/${category.id}`)}
            >
              <img className="category-card__image" src={category.image} alt={`${category.name} 예시`} />
              <div className="category-card__body">
                <div>
                  <h2>{category.name}</h2>
                  <p>{category.tagline}</p>
                </div>
                <span className="category-card__arrow" aria-hidden="true">→</span>
              </div>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
