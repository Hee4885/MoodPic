import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { SLIDER_DEFS, buildFilter, getCategory, getRecommendedValues, getRelatedCategories } from '../data/categoryData';
import './GuidephotoPage.css';

export default function GuidephotoPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const cat = getCategory(category);

  if (!cat) {
    return (
      <div className="app-shell">
        <Navbar />
        <main className="page page--narrow guide-page">
          <h1 className="serif-title">카테고리를 찾을 수 없습니다.</h1>
          <button className="button-primary" type="button" onClick={() => navigate('/main')}>
            카테고리로 돌아가기
          </button>
        </main>
      </div>
    );
  }

  const recommendedValues = getRecommendedValues(cat);
  const afterFilter = buildFilter(recommendedValues);
  const related = getRelatedCategories(cat);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page guide-page">
        <div className="guide-page__top">
          <button className="guide-page__back" type="button" onClick={() => navigate('/main')}>
            ← 카테고리로 돌아가기
          </button>
          <button className="button-primary" type="button" onClick={() => navigate(`/edit/${cat.id}`)}>
            이 사진 분위기로 보정하기
          </button>
        </div>

        <header className="guide-page__header">
          <span className="eyebrow">{cat.shortName} Guide</span>
          <h1 className="serif-title">{cat.name} 보정법</h1>
          <p className="lead">{cat.summary}</p>
        </header>

        <section className="guide-page__compare">
          <BeforeAfterSlider
            beforeImage={cat.image}
            afterImage={cat.image}
            afterFilter={afterFilter}
            beforeLabel="보정 전"
            afterLabel="보정 후"
            alt={cat.name}
          />
        </section>

        <section className="guide-page__content">
          <div className="guide-card">
            <h2 className="section-title">핵심 포인트</h2>
            <div className="guide-card__list">
              {cat.keyPoints.map((point, index) => (
                <article className="guide-point" key={point.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="guide-card guide-card--sliders">
            <h2 className="section-title">추천 조절값</h2>
            {SLIDER_DEFS.map((def) => {
              const tip = cat.sliderTips.find((item) => item.key === def.key);
              return (
                <div className="guide-slider" key={def.key}>
                  <div className="guide-slider__head">
                    <strong>{def.label}</strong>
                    <span>{tip.recommended > 0 ? `+${tip.recommended}` : tip.recommended}</span>
                  </div>
                  <div className="guide-slider__bar">
                    <i style={{ width: `${Math.min(100, Math.abs(tip.recommended))}%` }} />
                  </div>
                  <p>{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="tip-box">
          <strong>TIP</strong>
          <p>{cat.summary}</p>
        </section>

        <section className="guide-page__related">
          <p>다른 분위기도 둘러보기</p>
          <div className="button-row">
            {related.map((item) => (
              <button className="button-secondary" type="button" key={item.id} onClick={() => navigate(`/guide/${item.id}`)}>
                {item.shortName}
              </button>
            ))}
            <button className="button-ghost" type="button" onClick={() => navigate('/free-edit')}>
              직접 보정
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
