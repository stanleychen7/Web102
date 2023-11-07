import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Import Link
import App from './App.jsx';
import './index.css';
import Layout from './routes/Layout.jsx';
import DetailView from './routes/DetailView.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path="detail/:date/:units" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
