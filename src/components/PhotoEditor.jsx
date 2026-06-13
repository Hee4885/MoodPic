import { useRef } from 'react';
import { SLIDER_DEFS } from '../data/categoryData';
import './PhotoEditor.css';

export default function PhotoEditor({
  image,
  values,
  filter,
  tips = [],
  onImageChange,
  onImageClear,
  onValueChange,
  actions,
  title = '보정 조절',
  helper = '슬라이더를 움직이면 사진에 바로 적용됩니다.',
}) {
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    onImageChange(URL.createObjectURL(file));
  };

  return (
    <section className="photo-editor">
      <div className="photo-editor__preview">
        <div className="photo-editor__toolbar">
          <div>
            <p className="photo-editor__kicker">Preview</p>
            <h2 className="section-title">작업 사진</h2>
          </div>
          <div className="button-row">
            <button className="button-secondary" type="button" onClick={() => fileInputRef.current?.click()}>
              사진 선택
            </button>
            {image && (
              <button className="button-ghost" type="button" onClick={onImageClear}>
                사진 비우기
              </button>
            )}
          </div>
        </div>

        {image ? (
          <div className="photo-editor__image-card">
            <img className="photo-editor__image" src={image} alt="보정 중인 사진" style={{ filter }} />
          </div>
        ) : (
          <div
            className="photo-editor__drop"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              handleFile(event.dataTransfer.files?.[0]);
            }}
          >
            <strong>사진을 올려주세요</strong>
            <p>클릭해서 선택하거나 파일을 끌어다 놓을 수 있습니다.</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(event) => handleFile(event.target.files?.[0])}
          hidden
        />
      </div>

      <aside className="photo-editor__panel">
        <div className="photo-editor__panel-head">
          <h2 className="section-title">{title}</h2>
          <p>{helper}</p>
          {actions && <div className="photo-editor__actions">{actions}</div>}
        </div>

        <div className="photo-editor__controls">
          {SLIDER_DEFS.map((def) => {
            const tip = tips.find((item) => item.key === def.key);
            return (
              <label className="photo-editor__control" key={def.key}>
                <span className="photo-editor__control-head">
                  <span>{def.label}</span>
                  <strong>{values[def.key] > 0 ? `+${values[def.key]}` : values[def.key]}</strong>
                </span>
                <input
                  type="range"
                  min={def.min}
                  max={def.max}
                  value={values[def.key]}
                  onChange={(event) => onValueChange(def.key, Number(event.target.value))}
                />
                {tip && <small>{tip.tip}</small>}
              </label>
            );
          })}
        </div>
      </aside>
    </section>
  );
}
