import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import initMobileLazy from './utils/mobileLazy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// initialize mobile-only lazy behavior
if (typeof window !== 'undefined') {
  initMobileLazy();
}