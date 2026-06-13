import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartAppPage from './pages/StartAppPage';
import MainMenuPage from './pages/MainMenuPage';
import GuidephotoPage from './pages/GuidephotoPage';
import EditPhotoPage from './pages/EditPhotoPage';
import FreeEditPage from './pages/FreeEditPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartAppPage />} />
        <Route path="/main" element={<MainMenuPage />} />
        <Route path="/guide/:category" element={<GuidephotoPage />} />
        <Route path="/edit/:category" element={<EditPhotoPage />} />
        <Route path="/free-edit" element={<FreeEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}