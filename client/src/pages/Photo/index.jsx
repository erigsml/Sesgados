function PhotoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="overflow-hidden rounded-xl bg-neutral-900">
          <div className="aspect-[4/5] w-full bg-gradient-to-br from-neutral-800 to-neutral-900" />
        </div>

        <aside className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-xl font-semibold tracking-tight text-neutral-50">
              Título de la foto
            </h1>
            <p className="text-sm text-neutral-400">
              Aquí vivirá la descripción corta que cuenta la historia detrás de esta toma.
            </p>
          </header>

          <dl className="grid grid-cols-2 gap-3 text-xs text-neutral-400">
            <div>
              <dt className="text-neutral-500">Filtro</dt>
              <dd className="text-neutral-200">Grano suave</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Fecha</dt>
              <dd className="text-neutral-200">2026-02-13</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Likes</dt>
              <dd className="text-neutral-200">134</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  )
}

export default PhotoPage

