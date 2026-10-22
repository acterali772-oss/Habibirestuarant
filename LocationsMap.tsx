import { useState } from 'react';
import { MapPin, Phone, Navigation, Star } from 'lucide-react';
import { BRANCHES } from '@/data/content';

const MAP_QUERIES: Record<string, string> = {
  'Habibi 2 — Upper Adda': 'Habibi Restaurant Upper Adda CMH Road Muzaffarabad',
  'Habibi 3 — Lower Plate': 'Habibi Restaurant Neelum Road Red Fort Plate Muzaffarabad',
  'Habibi 4 — Upper Chatter': 'Habibi Restaurant Upper Chatter Ali Akbar Awan School Muzaffarabad',
  'Habibi 5 — Mazmaan Khana': 'Mazmaan Khana Superior College Rubani Road Muzaffarabad',
  'Zeestry': 'Zeestry CMH Road Upper Adda Muzaffarabad',
};

function buildEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

function buildDirectionsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function LocationsMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBranch = BRANCHES[activeIndex];
  const activeQuery = MAP_QUERIES[activeBranch.name] ?? activeBranch.address;
  const embedUrl = buildEmbedUrl(activeQuery);
  const directionsUrl = activeBranch.mapsUrl ?? buildDirectionsUrl(activeQuery);

  return (
    <section id="live-map" className="py-20 sm:py-28 bg-habibi-black relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            Our Locations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-4">
            Find Our Branches
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-5">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mt-5">
            Visit Habibi and Zeestry across Muzaffarabad. Tap a branch to focus the live map, zoom in, or open directions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-10 mt-14">
          {/* Branch list */}
          <div className="flex flex-col gap-4">
            {BRANCHES.map((branch, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={branch.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`corner-ornament text-left bg-habibi-card border rounded-sm p-5 transition-all duration-300 ${
                    isActive
                      ? 'border-habibi-red shadow-[0_0_24px_rgba(192,57,43,0.18)]'
                      : 'border-habibi-red/20 hover:border-habibi-red/50'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={22}
                      className={`shrink-0 mt-1 ${isActive ? 'text-habibi-red' : 'text-habibi-red/60'}`}
                    />
                    <div className="flex-1">
                      <h3 className="font-display text-base sm:text-lg text-habibi-cream leading-snug">{branch.name}</h3>
                      <p className="font-elegant text-sm text-habibi-cream-muted leading-relaxed mt-1.5">{branch.address}</p>
                      <a
                        href={`tel:${branch.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 font-elegant text-base text-habibi-cream hover:text-habibi-red transition-colors mt-3"
                      >
                        <Phone size={14} className="text-habibi-red" />
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      href={`tel:${branch.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-[10px] tracking-widest uppercase px-3 py-2 rounded-sm transition-colors"
                    >
                      <Phone size={12} />
                      Call
                    </a>
                    <a
                      href={branch.mapsUrl ?? buildDirectionsUrl(MAP_QUERIES[branch.name] ?? branch.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 border border-habibi-red/50 hover:border-habibi-red hover:bg-habibi-red/10 text-habibi-cream font-display text-[10px] tracking-widest uppercase px-3 py-2 rounded-sm transition-colors"
                    >
                      <Navigation size={12} />
                      Directions
                    </a>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Live map */}
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-sm border border-habibi-red/30 corner-ornament bg-habibi-black h-[360px] lg:h-[560px]">
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={`Live Google Map showing ${activeBranch.name}`}
                className="w-full h-full grayscale-[0.25] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 bg-habibi-card border border-habibi-red/25 rounded-sm p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <Star size={16} className="text-habibi-red shrink-0" />
                <span className="font-display text-sm text-habibi-cream truncate">{activeBranch.name}</span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-sm transition-colors shrink-0"
              >
                <Navigation size={12} />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
