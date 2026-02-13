function Navbar() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
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
          <a href="/login" className="hover:text-neutral-100">
            Entrar
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

