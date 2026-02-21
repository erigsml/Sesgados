import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PhotoModal({ isOpen, onClose, photo }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Small delay to allow initial DOM render before triggering CSS transition
            requestAnimationFrame(() => setIsVisible(true));
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    if (!isOpen && !isVisible) return null;

    if (!photo) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            {/* Close button at viewport level */}
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-[60] rounded-full bg-black/40 p-2 text-white/70 backdrop-blur-md transition-all hover:scale-110 hover:bg-black/80 hover:text-white md:right-8 md:top-8"
                aria-label="Cerrar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Animated Wrapper Container */}
            <div
                className={`relative flex max-h-full max-w-full items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                    }`}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
            >
                {/* Main Image Box (Shrink-wrapped to image) */}
                <div className="group relative flex max-h-[85vh] max-w-5xl overflow-hidden rounded-lg shadow-[0_4px_40px_rgba(0,0,0,0.8)]">
                    <img
                        src={photo.url}
                        alt="Viewed photograph"
                        className="h-auto w-auto max-h-[85vh] max-w-full object-contain"
                    />

                    {/* Metadata Overlay (Appears on Hover) tied exactly to image bounds */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end pointer-events-none sm:p-8">

                        {/* Author Section */}
                        <Link
                            to={`/profile/${photo.author.username}`}
                            className="flex items-center gap-3 mb-4 pointer-events-auto transition-transform hover:scale-105"
                            onClick={onClose} // Close the modal when navigating
                        >
                            <img
                                src={photo.author.avatarUrl}
                                alt={photo.author.name}
                                className="h-10 w-10 rounded-full border border-white/20 object-cover shadow-sm"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white drop-shadow-md">{photo.author.name}</span>
                                <span className="text-xs text-white/80 drop-shadow-md">@{photo.author.username}</span>
                            </div>
                        </Link>

                        {/* EXIF Data */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/20 pt-4 text-xs">
                            <div>
                                <span className="block text-white/60 mb-1 font-medium tracking-wider drop-shadow-md">CÁMARA</span>
                                <span className="block text-white/95 font-semibold drop-shadow-md">{photo.exif.camera}</span>
                            </div>
                            <div>
                                <span className="block text-white/60 mb-1 font-medium tracking-wider drop-shadow-md">LENTE</span>
                                <span className="block text-white/95 font-semibold drop-shadow-md">{photo.exif.lens}</span>
                            </div>
                            <div>
                                <span className="block text-white/60 mb-1 font-medium tracking-wider drop-shadow-md">AJUSTES</span>
                                <span className="block text-white/95 font-semibold drop-shadow-md">
                                    {photo.exif.aperture} • {photo.exif.shutterSpeed} • ISO {photo.exif.iso}
                                </span>
                            </div>
                            <div>
                                <span className="block text-white/60 mb-1 font-medium tracking-wider drop-shadow-md">LOCACIÓN</span>
                                <span className="block text-white/95 font-semibold drop-shadow-md">{photo.exif.location}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;
