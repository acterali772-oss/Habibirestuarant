import { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { MENU_CATEGORIES, ZESTRY_IMAGE, BRAND } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import Lightbox, { useLightbox } from '@/components/Lightbox';
import { useReveal } from '@/hooks/useReveal';

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { ref, visible } = useReveal();

  const activeIndex = MENU_CATEGORIES.findIndex((c) => c.id === activeId);
  const allImages = [
    ...MENU_CATEGORIES,
    { id: 'zeestry', label: 'Zeestry', image: ZESTRY_IMAGE, alt: 'Zeestry Cakes and Desserts menu' },
  ];
  const lb = useLightbox(allImages);

  // Scroll active tab into view on mobile
  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  return (
    <>
      {/* Page header */}
      <section className="pt-20 pb-8 bg-habibi-black-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Crafted With Passion"
            title="The Habibi Menu"
            subtitle="Browse each category to see the full menu — items, descriptions, and prices exactly as served. Tap any image to view it in full size."
          />
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-habibi-black/95 backdrop-blur-md border-y border-habibi-red/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="no-scrollbar flex gap-2 overflow-x-auto justify-start sm:justify-center">
            {MENU_CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setActiveId(cat.id)}
                className={`shrink-0 font-display text-xs sm:text-sm tracking-widest uppercase px-4 sm:px-5 py-2.5 rounded-sm border transition-all duration-300 ${
                  activeId === cat.id
                    ? 'bg-habibi-red border-habibi-red-bright text-habibi-cream shadow-[0_0_15px_rgba(226,59,43,0.4)]'
                    : 'bg-transparent border-habibi-red/25 text-habibi-cream-muted hover:text-habibi-cream hover:border-habibi-red/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active menu image */}
      <section className="py-12 sm:py-16 bg-habibi-black relative min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
              Habibi
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-habibi-cream mt-2">
              {MENU_CATEGORIES[activeIndex].label}
            </h2>
            <div className="ornament-divider w-40 mx-auto mt-3">
              <span className="text-habibi-red text-lg">✦</span>
            </div>
          </div>

          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} relative group cursor-zoom-in`}
            onClick={() => lb.open(activeIndex)}
          >
            <div className="relative overflow-hidden rounded-sm border border-habibi-red/30 bg-habibi-card corner-ornament">
              <img
                src={MENU_CATEGORIES[activeIndex].image}
                alt={MENU_CATEGORIES[activeIndex].alt}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-habibi-black/0 group-hover:bg-habibi-black/10 transition-colors duration-500" />
            </div>
          </div>

          <p className="font-elegant text-habibi-cream-muted text-center text-sm mt-6">
            Tap the image to view it full size. Menu contents and prices are
            shown exactly as served.
          </p>
        </div>


      </section>

      {/* Zeestry section */}
      <section className="py-16 sm:py-24 bg-habibi-black-soft relative overflow-hidden">
        <div className="absolute inset-0 bg-red-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
              A Habibi Concept
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-2">
              Zeestry Cakes & Desserts
            </h2>
            <div className="ornament-divider w-48 mx-auto mt-4">
              <span className="text-habibi-red text-lg">✦</span>
            </div>
            <p className="font-elegant text-lg text-habibi-cream-muted mt-5 max-w-xl mx-auto leading-relaxed">
              Premium bakery and desserts, crafted to complete the food
              experience. Every cake and pastry is made to be part of a special
              memory.
            </p>
          </div>

          <div
            className="relative group cursor-zoom-in"
            onClick={() => lb.open(MENU_CATEGORIES.length)}
          >
            <div className="relative overflow-hidden rounded-sm border border-habibi-red/30 bg-habibi-card corner-ornament">
              <img
                src={ZESTRY_IMAGE}
                alt="Zeestry Cakes and Desserts menu"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-habibi-black text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl sm:text-3xl text-habibi-cream">
            Hungry Already?
          </h3>
          <p className="font-elegant text-habibi-cream-muted mt-3">
            Place your order in seconds through WhatsApp.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-red-bright/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(226,59,43,0.5)] red-glow"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </section>

      <Lightbox
        images={lb.images}
        index={lb.index}
        onClose={lb.close}
        onNavigate={lb.setIndex}
      />
    </>
  );
}
