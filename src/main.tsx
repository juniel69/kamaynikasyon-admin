import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AuthPage } from './modules/auth/AuthPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>,
)
