import { Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
