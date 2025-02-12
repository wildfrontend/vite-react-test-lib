import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './components/layouts/main.tsx';
import './index.css';
import Home from './routes/home/index.tsx';
import FetchPage from './routes/fetch/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="fetch" element={<FetchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
