import React from 'react';
import ReactDOM from 'react-dom/client';

// --- IMPORTANT: Place ALL imports at the very top ---
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './index.css'; // Keep CSS imports here too
import App from './App';
import reportWebVitals from './reportWebVitals';
// --- End of import section ---

// --- Configuration and other code comes AFTER all imports ---
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();