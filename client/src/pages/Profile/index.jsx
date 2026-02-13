function ProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-neutral-800" />
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-neutral-50">
            Mi perfil
          </h1>
          <p className="text-sm text-neutral-400">
            Ajusta tu espacio y gestiona tus fotos. Más adelante esta vista será privada
            y se conectará con tu sesión real.
          </p>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <article
            key={i}
            className="group aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900/80 ring-1 ring-neutral-900"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="h-3/4 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300" />
              <button
                type="button"
                className="w-full border-t border-neutral-800 px-3 py-2 text-xs text-neutral-400 hover:bg-neutral-900 hover:text-red-300"
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProfilePage

