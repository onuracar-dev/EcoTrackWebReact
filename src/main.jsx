import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Global CSS dosyalarını yüklüyoruz
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/custom.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
