import { useState } from 'react';
import { GALLERY_IMAGES } from '@/data/content';
import Lightbox, { useLightbox } from '@/components/Lightbox';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const { ref, visible } = useReveal();
  const lb = useLightbox(GALLERY_IMAGES);
  const [hovered, setHovered] = useState<number | null>(null);

  // Layered, asymmetric arrangement for visual interest
  return (
    <section className="py-20 sm:py-28 bg-habibi-black relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            A Glimpse Inside
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-3">
            Our Gallery
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-4">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5`}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => lb.open(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden rounded-sm border border-habibi-red/25 hover:border-habibi-red/70 transition-all duration-500 cursor-zoom-in ${
                i === 0
                  ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto lg:min-h-[420px]'
                  : 'aspect-square'
              }`}
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full object-contain bg-habibi-card transition-transform duration-700 ${
                  hovered === i ? 'scale-[1.03]' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 border border-habibi-red/0 group-hover:border-habibi-red/30 transition-colors duration-500 pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={lb.images}
        index={lb.index}
        onClose={lb.close}
        onNavigate={lb.setIndex}
      />
    </section>
  );
}
