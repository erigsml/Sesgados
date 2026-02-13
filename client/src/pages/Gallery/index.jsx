const MOCK_GALLERY = [
  { id: 1, orientation: 'landscape' },
  { id: 2, orientation: 'portrait' },
  { id: 3, orientation: 'portrait' },
  { id: 4, orientation: 'landscape' },
  { id: 5, orientation: 'landscape' },
  { id: 6, orientation: 'portrait' },
  { id: 7, orientation: 'landscape' },
  { id: 8, orientation: 'portrait' },
  { id: 9, orientation: 'portrait' },
  { id: 10, orientation: 'landscape' },
  { id: 11, orientation: 'portrait' },
  { id: 12, orientation: 'landscape' },
]

function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
            Galería
          </h1>
          <p className="text-sm text-neutral-400">
            La cuadrícula completa, mezclando retratos y horizontales en un mosaico
            orgánico.
          </p>
        </div>
      </header>

      <section className="mosaic-grid">
        {MOCK_GALLERY.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.orientation}`}
            aria-label="Foto de la galería"
          >
            <div className="mosaic-photo" />
          </article>
        ))}
      </section>
    </main>
  )
}

export default GalleryPage

