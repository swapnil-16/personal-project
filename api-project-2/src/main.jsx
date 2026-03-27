import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './uploadpdf.jsx'
import UploadPDF from './uploadpdf.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadPDF></UploadPDF>
  </StrictMode>,
)
