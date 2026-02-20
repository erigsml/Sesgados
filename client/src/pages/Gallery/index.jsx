import { useState } from 'react';
import PhotoModal from '../../components/ui/PhotoModal';
import { MOCK_PHOTOS } from '../../utils/mockData';

function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
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
        {MOCK_PHOTOS.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.ratio} cursor-pointer`}
            aria-label="Foto de la galería"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              className="mosaic-photo"
              alt="Gallery shot"
              loading="lazy"
            />
          </article>
        ))}
      </section>

      {selectedPhoto && (
        <PhotoModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          photo={selectedPhoto}
        />
      )}
    </main>
  )
}

export default GalleryPage

