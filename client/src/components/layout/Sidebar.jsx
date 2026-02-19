import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import PersonIcon from '@mui/icons-material/Person'
import { useAuthContext } from '../../context/AuthContext.jsx'

function Sidebar() {
  const location = useLocation()
  const { isAuthenticated } = useAuthContext()

  const navItems = [
    { to: '/', label: 'Inicio', icon: HomeIcon },
    { to: '/gallery', label: 'Galería', icon: PhotoLibraryIcon },
  ]

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-44 flex-col border-r border-neutral-800/60 bg-neutral-950/95 px-4 py-6">
      <div className="mb-8 flex justify-center">
        <Link
          to="/"
          className="hero-title sidebar-logo cursor-pointer text-[3.85rem] font-bold leading-none tracking-wide text-neutral-50"
          aria-label="Ir al inicio"
        >
          ses
        </Link>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
              location.pathname === to
                ? 'bg-neutral-800 text-neutral-50'
                : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-300'
            }`}
          >
            <Icon sx={{ fontSize: 20 }} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4">
        <Link
          to={isAuthenticated ? '/profile' : '/login'}
          className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
            location.pathname === '/login' || location.pathname === '/profile'
              ? 'bg-neutral-800 text-neutral-50'
              : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-300'
          }`}
          aria-label={isAuthenticated ? 'Ir a perfil' : 'Iniciar sesión'}
        >
          <PersonIcon sx={{ fontSize: 20 }} />
          {isAuthenticated ? 'Perfil' : 'Entrar'}
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
