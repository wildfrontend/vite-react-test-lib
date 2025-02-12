import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './components/layouts/main.tsx';
import './index.css';
import Count from './routes/counter/index.tsx';
import Home from './routes/home/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="count" element={<Count />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
