function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <section className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
          Inspiración en negativo
        </h1>
        <p className="max-w-xl text-sm text-neutral-400">
          Una galería minimalista donde las fotos son las protagonistas. Desliza y explora
          el trabajo de la comunidad.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900/80 ring-1 ring-neutral-900"
          >
            <div className="h-full w-full animate-pulse bg-gradient-to-br from-neutral-800 to-neutral-900" />
          </div>
        ))}
      </section>
    </main>
  )
}

export default HomePage

