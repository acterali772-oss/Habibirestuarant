import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

export default function MenuPreview() {
  const { ref, visible } = useReveal();
  const preview = MENU_CATEGORIES.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-habibi-black-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Crafted With Passion"
          title="Our Menu"
          subtitle="From signature starters to wood-fired pizzas, every dish is prepared with care. Explore our categories — each menu image holds the full selection and prices."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-14`}
        >
          {preview.map((cat) => (
            <Link
              key={cat.id}
              to="/menu"
              className="group relative overflow-hidden rounded-sm border border-habibi-red/25 hover:border-habibi-red/70 transition-all duration-500 bg-habibi-card"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-habibi-black via-habibi-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <span className="font-display text-habibi-red text-[10px] tracking-[0.3em] uppercase">
                  Habibi
                </span>
                <h3 className="font-display text-lg sm:text-xl text-habibi-cream mt-1">
                  {cat.label}
                </h3>
              </div>
              <div className="absolute inset-0 border border-habibi-red/0 group-hover:border-habibi-red/30 transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-habibi-cream border border-habibi-red/50 hover:bg-habibi-red hover:border-habibi-red px-7 py-3 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,59,43,0.4)]"
          >
            View Full Menu
            <ArrowRight size={16} className="text-habibi-red group-hover:text-habibi-cream transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
