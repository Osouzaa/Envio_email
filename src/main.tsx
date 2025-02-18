import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Register } from './pages/Register/index.tsx'
import { GlobalStyles } from './styles/global.ts'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors />
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
