import { useRef, useState } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  afterFilter,
  beforeLabel = 'Before',
  afterLabel = 'After',
  alt = '전후 비교 이미지',
}) {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);

  const updatePosition = (clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerDown = (event) => {
    setDragging(true);
    updatePosition(event.clientX);
  };

  return (
    <div
      ref={sliderRef}
      className={`before-after ${dragging ? 'is-dragging' : ''}`}
      style={{ '--slider-position': `${position}%`, '--after-filter': afterFilter }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
      role="presentation"
    >
      <figure className="before-after__figure before-after__figure--before">
        <img src={beforeImage} alt={`${alt} 보정 전`} />
        <figcaption>{beforeLabel}</figcaption>
      </figure>

      <figure className="before-after__figure before-after__figure--after">
        <img src={afterImage || beforeImage} alt={`${alt} 보정 후`} />
        <figcaption>{afterLabel}</figcaption>
      </figure>

      <div className="before-after__line" aria-hidden="true" />
      <button className="before-after__handle" type="button" aria-label="전후 비교 슬라이더">
        <span />
      </button>
    </div>
  );
}
