import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redirect legacy HashRouter URLs (…/#/projects) to real paths (…/projects)
// so links shared before the BrowserRouter switch keep working.
const { pathname, hash } = window.location;
if (hash.startsWith('#/')) {
  window.history.replaceState(
    null,
    '',
    pathname.replace(/\/$/, '') + hash.slice(1)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
