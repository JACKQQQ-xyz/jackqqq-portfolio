import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto md:px-10 px-5 md:pb-10 pb-5'>
    <App />
    </div>
  </StrictMode>,
)
