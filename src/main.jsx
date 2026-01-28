import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AdminProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AdminProvider>
 </BrowserRouter>
)
