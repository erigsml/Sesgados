const MOCK_PHOTOS = [
  { id: 1, ratio: 'r-4x5' },
  { id: 2, ratio: 'r-16x9' },
  { id: 3, ratio: 'r-1x1' },
  { id: 4, ratio: 'r-3x4' },
  { id: 5, ratio: 'r-3x2' },
  { id: 6, ratio: 'r-9x16' },
  { id: 7, ratio: 'r-4x5' },
  { id: 8, ratio: 'r-1x1' },
  { id: 9, ratio: 'r-16x9' },
  { id: 10, ratio: 'r-3x4' },
  { id: 11, ratio: 'r-3x2' },
  { id: 12, ratio: 'r-9x16' },
]

function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col px-4 py-10">
      <section className="mb-10 flex flex-col items-center gap-4 text-center">
        <h1
          className="glitch-title text-6xl sm:text-7xl md:text-8xl"
          data-text="sesgados"
        >
          sesgados
        </h1>
      </section>

      <section className="mosaic-grid">
        {MOCK_PHOTOS.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.ratio}`}
            aria-label="Foto de la comunidad"
          >
            <div className="mosaic-photo" />
          </article>
        ))}
      </section>
    </main>
  )
}

export default HomePage

