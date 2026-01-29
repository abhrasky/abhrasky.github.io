import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/all.min.css';
import '@/assets/scss/main.scss';
import '@/assets/css/animate.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-modal-video/scss/modal-video.scss';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
