import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider>  */}
      {/* ThemeProvider is using with context */}
      <App />
    {/* </ThemeProvider> */}
  </StrictMode>,
)
