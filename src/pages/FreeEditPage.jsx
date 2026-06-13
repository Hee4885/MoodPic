import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PhotoEditor from '../components/PhotoEditor';
import { DEFAULT_VALUES, buildFilter } from '../data/categoryData';
import './FreeEditPage.css';

const FALLBACK_PHOTOS = [
  { id: 'sample-1', download_url: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=85', author: 'MoodPic' },
  { id: 'sample-2', download_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85', author: 'MoodPic' },
  { id: 'sample-3', download_url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=85', author: 'MoodPic' },
  { id: 'sample-4', download_url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85', author: 'MoodPic' },
];

export default function FreeEditPage() {
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({ ...DEFAULT_VALUES });
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    fetch('https://picsum.photos/v2/list?page=8&limit=8')
      .then((res) => res.json())
      .then((data) => {
        if (!alive) return;
        const mapped = Array.isArray(data)
          ? data.map((item) => ({ ...item, download_url: `https://picsum.photos/id/${item.id}/900/700` }))
          : FALLBACK_PHOTOS;
        setPhotos(mapped);
      })
      .catch(() => {
        if (alive) setPhotos(FALLBACK_PHOTOS);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const displayPhotos = photos.length ? photos : FALLBACK_PHOTOS;

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page free-page">
        <header className="free-page__header">
          <span className="eyebrow">Free Edit</span>
          <h1 className="serif-title">카테고리 없이 바로 보정하기</h1>
          <p className="lead">
            추천값 없이 원하는 사진을 직접 올리거나 무료 사진 API 샘플을 선택해 보정해볼 수 있어요.
          </p>
        </header>

        <PhotoEditor
          image={image}
          values={values}
          filter={buildFilter(values)}
          onImageChange={setImage}
          onImageClear={() => setImage(null)}
          onValueChange={updateValue}
          title="직접 보정"
          helper="추천 기능 없이 밝기, 대비, 채도, 온도, 선명도를 원하는 만큼 조절합니다."
          actions={(
            <button className="button-ghost" type="button" onClick={() => setValues({ ...DEFAULT_VALUES })}>
              새로고침
            </button>
          )}
        />

        <section className="free-page__samples">
          <div className="free-page__sample-head">
            <div>
              <h2 className="section-title">무료 샘플 사진</h2>
              <p className="hint">무료 사진 API에서 불러온 이미지입니다.</p>
            </div>
            {loading && <span className="hint">불러오는 중</span>}
          </div>

          <div className="free-page__sample-grid">
            {displayPhotos.slice(0, 4).map((photo) => (
              <button className="sample-card" type="button" key={photo.id} onClick={() => setImage(photo.download_url)}>
                <img src={photo.download_url} alt={`${photo.author} 샘플 사진`} />
                <span>샘플 선택</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
