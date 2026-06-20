import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import './styles/variables.css'
import './styles/reset.css'
import './styles/globals.css'
import './styles/style.css'


import './styles/form.css'
import './styles/chart.css'
import './styles/ranking.css'
import './styles/participants.css'
import './styles/footer.css'

import './styles/mobile.css'
import './styles/tablet.css'
