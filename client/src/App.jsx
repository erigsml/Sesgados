import { Outlet, Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import { useAuthContext } from './context/AuthContext.jsx'
import Sidebar from './components/layout/Sidebar.jsx'

function App() {
  const { isAuthenticated } = useAuthContext()

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Sidebar />
      <div className="ml-44 min-h-screen">
        <Outlet />
      </div>
      <Link
        to={isAuthenticated ? '/profile' : '/login'}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-50"
        aria-label={isAuthenticated ? 'Ir a perfil' : 'Iniciar sesión'}
      >
        <PersonIcon fontSize="medium" />
      </Link>
    </div>
  )
}

export default App
