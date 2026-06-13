import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import PhotoEditor from '../components/PhotoEditor';
import { DEFAULT_VALUES, buildFilter, getCategory, getRecommendedValues } from '../data/categoryData';
import './EditPhotoPage.css';

export default function EditPhotoPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const cat = getCategory(category);
  const [image, setImage] = useState(cat?.image || null);
  const [values, setValues] = useState(cat ? getRecommendedValues(cat) : { ...DEFAULT_VALUES });

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page edit-page">
        <header className="edit-page__header">
          <button type="button" className="edit-page__back" onClick={() => navigate(cat ? `/guide/${cat.id}` : '/main')}>
            ← 사진 보정
          </button>
        </header>

        <PhotoEditor
          image={image}
          values={values}
          filter={buildFilter(values)}
          tips={cat?.sliderTips}
          onImageChange={setImage}
          onImageClear={() => setImage(null)}
          onValueChange={updateValue}
          title="사진 보정"
          helper={cat ? `${cat.shortName} 사진에 어울리는 추천값으로 시작했어요.` : '원하는 사진을 올리고 직접 조절해보세요.'}
          actions={(
            <div className="button-row">
              {cat && (
                <button className="button-secondary" type="button" onClick={() => setValues(getRecommendedValues(cat))}>
                  추천값 적용
                </button>
              )}
              <button className="button-ghost" type="button" onClick={() => setValues({ ...DEFAULT_VALUES })}>
                새로고침
              </button>
            </div>
          )}
        />

        {cat && (
          <section className="edit-page__tip">
            <strong>TIP</strong>
            <p>{cat.summary}</p>
          </section>
        )}
      </main>
    </div>
  );
}
