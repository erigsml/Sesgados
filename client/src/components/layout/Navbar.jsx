import { useState, useEffect, useRef } from 'react'
import PersonIcon from '@mui/icons-material/Person'

function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY

      if (currentY > lastScrollY.current && currentY > 60) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`navbar-sticky ${hidden ? 'navbar-hidden' : ''}`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="/" className="text-lg font-semibold tracking-wide text-neutral-50">
          Sesgados
        </a>
        <nav className="flex items-center gap-6 text-sm text-neutral-400">
          <a href="/" className="hover:text-neutral-100">
            Inicio
          </a>
          <a href="/gallery" className="hover:text-neutral-100">
            Galería
          </a>
          <a href="/login" className="hover:text-neutral-100 flex items-center">
            <PersonIcon fontSize="small" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
