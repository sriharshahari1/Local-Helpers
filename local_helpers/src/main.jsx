import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BrowserRouter from 'react-router-dom/BrowserRouter'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
