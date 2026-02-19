import { Outlet } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Sidebar />
      <div className="ml-44 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default App
