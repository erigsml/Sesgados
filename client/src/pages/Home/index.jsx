import { useState } from 'react';
import PhotoModal from '../../components/ui/PhotoModal';
import { MOCK_PHOTOS } from '../../utils/mockData';

function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <main className="album-page mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-10 sm:px-8 md:px-10">
      <section className="album-grid mosaic-grid">
        {MOCK_PHOTOS.map((photo) => (
          <article
            key={photo.id}
            className={`mosaic-item ${photo.ratio} cursor-pointer`}
            aria-label="Foto de la comunidad"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              className="mosaic-photo"
              alt="Community shot"
              loading="lazy"
            />
          </article>
        ))}
      </section>

      {/* The Photo Viewer Modal */}
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

export default HomePage

