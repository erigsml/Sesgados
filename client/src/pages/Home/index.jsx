const MOCK_PHOTOS = [
  { id: 1, orientation: 'portrait' },
  { id: 2, orientation: 'landscape' },
  { id: 3, orientation: 'portrait' },
  { id: 4, orientation: 'landscape' },
  { id: 5, orientation: 'portrait' },
  { id: 6, orientation: 'landscape' },
  { id: 7, orientation: 'portrait' },
  { id: 8, orientation: 'landscape' },
  { id: 9, orientation: 'portrait' },
  { id: 10, orientation: 'landscape' },
]

function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col px-4 py-10">
      <section className="mb-10 flex flex-col items-center gap-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Galería fotográfica minimal
        </p>
        <h1
          className="glitch-title text-4xl sm:text-5xl md:text-6xl"
          data-text="SESGADOS"
        >
          SESGADOS
        </h1>
        <p className="max-w-xl text-sm text-neutral-400">
          Un lienzo oscuro donde las fotos respiran. Desliza y deja que el mosaico se
          arme solo.
        </p>
      </section>

      <section className="mosaic-grid">
        {MOCK_PHOTOS.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.orientation}`}
            aria-label="Foto de la comunidad"
          >
            {/* Placeholder: más adelante será <img src={photo.url} /> */}
            <div className="mosaic-photo">
              {/* La textura base simula variaciones de fotos horizontales / verticales */}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default HomePage

