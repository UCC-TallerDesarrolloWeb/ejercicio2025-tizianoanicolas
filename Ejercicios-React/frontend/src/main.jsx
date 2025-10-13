import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles/index.css'
import './styles/App.css'
import './styles/login.scss'
import './styles/Activities.scss'
import App from './App.jsx'
import Login from "./login.jsx"
import Activities from "./activities.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/actividades" element={<Activities />} />
    </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
