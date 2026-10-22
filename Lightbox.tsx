import { useEffect, useState, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export type LightboxImage = {
  src?: string;
  image?: string;
  alt: string;
};

type Props = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const open = index !== null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, goNext, goPrev]);

  if (!open || index === null) return null;
  const current = images[index];
  const currentSrc = current.src ?? current.image ?? '';

  return (
    <div
      className="fixed inset-0 z-[100] bg-habibi-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-habibi-cream hover:text-habibi-red transition-colors p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-habibi-cream/70 hover:text-habibi-red transition-colors p-2"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      <figure
        className="relative max-w-full max-h-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentSrc}
          alt={current.alt}
          className="max-w-[92vw] max-h-[82vh] object-contain rounded-sm border border-habibi-red/30 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
        />
        <figcaption className="mt-4 font-elegant text-habibi-cream-muted text-sm sm:text-base text-center">
          {current.alt}
        </figcaption>
      </figure>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-habibi-cream/70 hover:text-habibi-red transition-colors p-2"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  );
}

/** Convenience hook to drive a Lightbox from any list of images. */
export function useLightbox<T extends LightboxImage>(images: T[]) {
  const [index, setIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  return { index, open, close, setIndex, images };
}

/** Small trigger chip shown on hover over a menu image card. */
export function ZoomHint() {
  return (
    <span className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-widest uppercase text-habibi-cream/80 bg-habibi-black/70 border border-habibi-red/40 px-3 py-1.5 rounded-sm backdrop-blur-sm">
      <ZoomIn size={12} className="text-habibi-red" />
      Tap to view full size
    </span>
  );
}
