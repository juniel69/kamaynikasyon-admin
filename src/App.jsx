import './App.css'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Users from './pages/Users.jsx'
import Content from './pages/Content.jsx'
import Settings from './pages/Settings.jsx'

function App() {
  return (
    <HashRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside style={{ width: 220, padding: 16, borderRight: '1px solid #e5e7eb' }}>
          <h2 style={{ marginTop: 0 }}>Kamaynikasyon Admin</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/content">Content</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: 24 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/content" element={<Content />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
