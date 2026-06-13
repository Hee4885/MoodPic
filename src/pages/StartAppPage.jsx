import { useNavigate } from 'react-router-dom';
import { getCategoryList } from '../data/categoryData';
import './StartAppPage.css';

export default function StartAppPage() {
  const navigate = useNavigate();
  const categories = getCategoryList();

  return (
    <main className="app-shell start-page">
      <section className="start-page__inner">
        <div className="start-page__copy">
          <span className="eyebrow">MoodPic Studio</span>
          <h1 className="start-page__title serif-title">
            사진을 조금 더
            <br />
            다정하게 보정해요
          </h1>
          <p className="lead start-page__lead">
            장면별 보정 레시피를 보고 전후를 비교하거나, 카테고리 없이 원하는 사진을 바로 올려 직접 조절할 수 있어요.
          </p>

          <div className="button-row">
            <button className="button-primary" type="button" onClick={() => navigate('/main')}>
              카테고리 고르기
            </button>
            <button className="button-secondary" type="button" onClick={() => navigate('/free-edit')}>
              바로 보정하기
            </button>
          </div>

          <div className="chip-list start-page__chips">
            {categories.map((category) => (
              <span className="chip" key={category.id}>{category.shortName}</span>
            ))}
            <span className="chip">직접 보정</span>
          </div>
        </div>

        <div className="start-page__visual">
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85"
            alt="부드러운 빛이 들어오는 감성 사진"
          />
          <div className="start-page__note">
            <strong>soft edit</strong>
            <span>밝기, 색감, 온도만 천천히 맞춰도 분위기가 달라져요.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
