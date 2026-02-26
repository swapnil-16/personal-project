import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx' 
import UiChanges from './ui.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import UserData from './UserData.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UiChanges></UiChanges> */}
    <App  /> 
   <UserData xyz = "Crud Operations"></UserData>
    
  </StrictMode>,
)
