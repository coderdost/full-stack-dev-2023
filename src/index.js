import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VideosProvider } from './contexts/videosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideosProvider>
      <App />
    </VideosProvider>
  </React.StrictMode>
);

