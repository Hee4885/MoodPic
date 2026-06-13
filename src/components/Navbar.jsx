import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: '카테고리', path: '/main', active: location.pathname === '/main' || location.pathname.startsWith('/guide') },
    { label: '직접 보정', path: '/free-edit', active: location.pathname === '/free-edit' },
  ];

  const moveTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <button className="navbar__brand" type="button" onClick={() => moveTo('/main')} aria-label="MoodPic 메인으로 이동">
          <span className="navbar__logo">MoodPic</span>
          <span className="navbar__caption">soft photo recipe</span>
        </button>

        <div className="navbar__links">
          {links.map((link) => (
            <button
              key={link.path}
              className={`navbar__link ${link.active ? 'is-active' : ''}`}
              type="button"
              onClick={() => moveTo(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="navbar__menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="메뉴 열기"
        >
          메뉴
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map((link) => (
            <button
              key={link.path}
              className={`navbar__link ${link.active ? 'is-active' : ''}`}
              type="button"
              onClick={() => moveTo(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
