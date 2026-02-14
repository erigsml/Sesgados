const MOCK_GALLERY = [
  { id: 1, ratio: 'r-3x2' },
  { id: 2, ratio: 'r-4x5' },
  { id: 3, ratio: 'r-1x1' },
  { id: 4, ratio: 'r-16x9' },
  { id: 5, ratio: 'r-3x4' },
  { id: 6, ratio: 'r-9x16' },
  { id: 7, ratio: 'r-1x1' },
  { id: 8, ratio: 'r-3x2' },
  { id: 9, ratio: 'r-4x5' },
  { id: 10, ratio: 'r-16x9' },
  { id: 11, ratio: 'r-9x16' },
  { id: 12, ratio: 'r-3x4' },
  { id: 13, ratio: 'r-1x1' },
  { id: 14, ratio: 'r-4x5' },
  { id: 15, ratio: 'r-3x2' },
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
            Fotografías que encuentran su lugar de forma natural y orgánica.
          </p>
        </div>
      </header>

      <section className="mosaic-grid">
        {MOCK_GALLERY.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.ratio}`}
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

