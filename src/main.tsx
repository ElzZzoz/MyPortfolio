import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 4. Wrap everything in BrowserRouter so useLocation works */}
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </StrictMode>,
);
