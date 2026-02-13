function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
            Galería
          </h1>
          <p className="text-sm text-neutral-400">
            Explora la colección completa de fotografías de Sesgados.
          </p>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <article
            key={i}
            className="group aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900/80 ring-1 ring-neutral-900"
          >
            <div className="h-full w-full bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300" />
          </article>
        ))}
      </section>
    </main>
  )
}

export default GalleryPage

