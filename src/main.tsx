import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
