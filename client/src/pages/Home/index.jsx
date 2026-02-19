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
    <main className="album-page mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-10 sm:px-8 md:px-10">
      <section className="album-grid mosaic-grid">
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

