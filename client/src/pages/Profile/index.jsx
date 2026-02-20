import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { MOCK_USERS, getPhotosByUser } from '../../utils/mockData';
import PhotoModal from '../../components/ui/PhotoModal';

function ProfilePage() {
  const { username } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Fallback to a default user if not found just to not break during development,
  // or redirect to home if totally invalid
  const user = MOCK_USERS[username];

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const userPhotos = getPhotosByUser(username);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ─── Centered Header Concept ─── */}
      <div className="relative flex flex-col items-center pt-8 sm:pt-12">

        {/* Blurred Banner (Takes up upper half visually in the header area) */}
        <div className="absolute top-0 left-0 right-0 h-48 sm:h-64 overflow-hidden pointer-events-none">
          <img
            src={user.coverUrl}
            alt="Banner de perfil"
            className="w-full h-full object-cover blur-2xl scale-125 opacity-40 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>

        {/* User Data (Avatar in center, stats, bio) */}
        <div className="relative z-10 flex flex-col items-center text-center mt-12 sm:mt-16 w-full max-w-2xl px-4">

          {/* Avatar (Centered, overlapping the blurred region) */}
          <div className="group relative h-28 w-28 sm:h-36 sm:w-36 mb-4">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-md transition-transform duration-500 group-hover:scale-110" />
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="relative h-full w-full rounded-full border-2 border-neutral-800 object-cover shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Name & Username */}
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
            {user.name}
          </h1>
          <p className="text-sm font-medium text-neutral-400 mb-6">@{user.username}</p>

          {/* Followers / Following Stats */}
          <div className="flex gap-8 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold text-white">{user.followers.toLocaleString()}</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Seguidores</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold text-white">{user.following.toLocaleString()}</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">Siguiendo</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed text-neutral-300 max-w-md mb-8">
            {user.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-neutral-200">
              Seguir
            </button>
            <button className="rounded-full border border-neutral-700 bg-neutral-900/50 px-8 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-neutral-800">
              Mensaje
            </button>
          </div>
        </div>
      </div>

      {/* ─── Gallery Grid ─── */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10 pb-20">
        {userPhotos.length > 0 ? (
          <div className="album-grid mosaic-grid">
            {userPhotos.map((photo) => (
              <article
                key={photo.id}
                className={`mosaic-item ${photo.ratio} cursor-pointer group`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  className="mosaic-photo"
                  alt={`Fotografía de ${user.name}`}
                  loading="lazy"
                />

                {/* Subtle hover overlay to make it dynamic */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-neutral-900/50 p-4">
              <svg className="h-8 w-8 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-neutral-300">Aún no hay fotografías</h3>
            <p className="mt-2 text-sm text-neutral-500">
              {user.name} todavía no ha subido ninguna pieza.
            </p>
          </div>
        )}
      </section>

      {/* ─── Photo Modal ─── */}
      {selectedPhoto && (
        <PhotoModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          photo={selectedPhoto}
        />
      )}
    </main>
  );
}

export default ProfilePage;

