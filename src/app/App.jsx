import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css'
import App from '../features/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
