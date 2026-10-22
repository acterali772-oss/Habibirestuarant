import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, UtensilsCrossed, Cake, MapPin, Navigation, Star, Phone } from 'lucide-react';
import { BRAND, BRANCHES, DELIVERY_IMAGE, ZESTRY_IMAGE, GALLERY_IMAGES } from '@/data/content';
import Gallery from '@/components/Gallery';
import MenuPreview from '@/components/MenuPreview';
import LocationsMap from '@/components/LocationsMap';
import { useReveal } from '@/hooks/useReveal';

const DEMO_REVIEWS = [
  { branch: 'Habibi 2 — Upper Adda', name: 'Adnan', rating: 4, feedback: 'The burger was fresh and the service was quick.', avatar: 'https://images.pexels.com/photos/14564843/pexels-photo-14564843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 2 — Upper Adda', name: 'Rashid', rating: 3, feedback: 'Good taste and a comfortable place for a family meal.', avatar: 'https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 2 — Upper Adda', name: 'Usman', rating: 4, feedback: 'The fries were hot and the portions were generous.', avatar: 'https://images.pexels.com/photos/37117955/pexels-photo-37117955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 3 — Lower Plate', name: 'Bilal', rating: 4, feedback: 'A tasty meal with friendly service and a nice atmosphere.', avatar: 'https://images.pexels.com/photos/25851303/pexels-photo-25851303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 3 — Lower Plate', name: 'Hamza', rating: 3, feedback: 'The pizza was enjoyable and arrived warm.', avatar: 'https://images.pexels.com/photos/19915586/pexels-photo-19915586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 3 — Lower Plate', name: 'Fahad', rating: 4, feedback: 'Clean seating, good flavour, and a relaxed visit.', avatar: 'https://images.pexels.com/photos/11644812/pexels-photo-11644812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 4 — Upper Chatter', name: 'Adnan', rating: 3, feedback: 'The meal was satisfying and the staff were welcoming.', avatar: 'https://images.pexels.com/photos/14564843/pexels-photo-14564843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 4 — Upper Chatter', name: 'Rashid', rating: 4, feedback: 'Loved the seasoning and the generous serving size.', avatar: 'https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 4 — Upper Chatter', name: 'Usman', rating: 4, feedback: 'A pleasant dinner stop with quick, polite service.', avatar: 'https://images.pexels.com/photos/37117955/pexels-photo-37117955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 5 — Mazmaan Khana', name: 'Bilal', rating: 4, feedback: 'The food was flavourful and nicely presented.', avatar: 'https://images.pexels.com/photos/25851303/pexels-photo-25851303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 5 — Mazmaan Khana', name: 'Hamza', rating: 3, feedback: 'A good local option with plenty of menu choice.', avatar: 'https://images.pexels.com/photos/19915586/pexels-photo-19915586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Habibi 5 — Mazmaan Khana', name: 'Fahad', rating: 4, feedback: 'The staff made our family visit feel very welcome.', avatar: 'https://images.pexels.com/photos/11644812/pexels-photo-11644812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Zeestry', name: 'Adnan', rating: 4, feedback: 'The dessert looked beautiful and tasted fresh.', avatar: 'https://images.pexels.com/photos/14564843/pexels-photo-14564843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Zeestry', name: 'Rashid', rating: 3, feedback: 'A sweet place to visit with a good range of treats.', avatar: 'https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { branch: 'Zeestry', name: 'Usman', rating: 4, feedback: 'The cake was soft, fresh, and nicely finished.', avatar: 'https://images.pexels.com/photos/37117955/pexels-photo-37117955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={GALLERY_IMAGES[2].src}
            alt="Habibi Restaurant atmosphere"
            className="w-full h-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-habibi-black/85 via-habibi-black/70 to-habibi-black" />
          <div className="absolute inset-0 bg-red-radial opacity-50" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-24">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.5em] reveal is-visible">
            Muzaffarabad · AJK
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-habibi-cream mt-5 leading-none reveal is-visible">
            HABIBI
          </h1>
          <div className="ornament-divider w-64 mx-auto mt-6 reveal is-visible">
            <span className="text-habibi-red text-xl">✦</span>
          </div>
          <p className="font-elegant text-xl sm:text-2xl md:text-3xl text-habibi-cream/90 mt-6 leading-relaxed reveal is-visible">
            A premium food experience born in the mountains —
            <br className="hidden sm:block" />
            crafted with courage, grown with trust.
          </p>
          <p className="font-display text-sm tracking-[0.3em] uppercase text-habibi-gold mt-4 reveal is-visible">
            The Proud Brand of Kashmir
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 reveal is-visible">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-red-bright/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(226,59,43,0.5)] red-glow"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-cream/30 hover:border-habibi-red hover:text-habibi-red transition-all duration-300"
            >
              Explore the Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-elegant text-habibi-cream-muted text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-habibi-red to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <IntroSection />

      {/* Stats band */}
      <StatsBand />

      {/* Menu preview */}
      <MenuPreview />

      {/* Gallery */}
      <Gallery />

      {/* Locations */}
      <LocationsSection />

      {/* Brand story intro */}
      <StoryIntro />

      {/* Zeestry feature */}
      <ZeestryFeature />

      {/* Delivery feature */}
      <DeliveryFeature />

      {/* Contact teaser */}
      <ContactTeaser />

      {/* Live interactive map */}
      <LocationsMap />
    </>
  );
}

function IntroSection() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 sm:py-28 bg-habibi-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} corner-ornament bg-habibi-card border border-habibi-red/25 rounded-sm p-8 sm:p-14`}
        >
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            Welcome to Habibi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-4 leading-tight">
            Where Every Meal
            <br />
            <span className="text-gradient-red">Tells a Story</span>
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-5">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg sm:text-xl text-habibi-cream-muted leading-relaxed mt-6">
            Habibi Restaurant Muzaffarabad began with a small step during
            uncertain times — and grew, with the love and trust of our
            customers, into a food brand serving 300+ families every day.
            Today, we bring quality food, new concepts, and a touch of
            sweetness to the mountain region.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const { ref, visible } = useReveal();
  const stats = [
    { value: '300+', label: 'Families Served Daily' },
    { value: '8', label: 'Menu Categories' },
    { value: '3', label: 'Beloved Brands' },
  ];
  return (
    <section className="py-14 bg-habibi-black-soft border-y border-habibi-red/20">
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-4 sm:gap-8`}
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl sm:text-5xl md:text-6xl text-gradient-red font-bold">
              {s.value}
            </div>
            <div className="font-elegant text-habibi-cream-muted text-xs sm:text-base mt-2 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section id="locations" className="py-20 sm:py-28 bg-habibi-black-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            Our Branches
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-4">
            Find Our Locations
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-5">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mt-5">
            Visit Habibi and Zeestry across Muzaffarabad. Call ahead or open the supplied location link for directions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {BRANCHES.map((branch) => (
            <article key={branch.name} className="corner-ornament bg-habibi-card border border-habibi-red/25 hover:border-habibi-red/60 rounded-sm p-6 transition-all duration-500 hover:shadow-[0_0_28px_rgba(192,57,43,0.14)]">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="text-habibi-red shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-habibi-cream leading-snug">{branch.name}</h3>
                  <p className="font-elegant text-base text-habibi-cream-muted leading-relaxed mt-2">{branch.address}</p>
                </div>
              </div>
              <a href={`tel:${branch.phone}`} className="inline-block font-elegant text-xl text-habibi-cream hover:text-habibi-red transition-colors mt-5">
                {branch.phone}
              </a>
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <a href={`tel:${branch.phone}`} className="inline-flex items-center justify-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-xs tracking-widest uppercase px-4 py-3 rounded-sm transition-colors">
                  <Phone size={14} />
                  Call
                </a>
                {branch.mapsUrl ? (
                  <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-habibi-red/50 hover:border-habibi-red hover:bg-habibi-red/10 text-habibi-cream font-display text-xs tracking-widest uppercase px-4 py-3 rounded-sm transition-colors">
                    <Navigation size={14} />
                    Get Directions
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center border border-habibi-cream/15 text-habibi-cream-muted font-display text-[10px] tracking-widest uppercase px-4 py-3 rounded-sm">
                    Location link coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <Star size={28} className="text-habibi-red mx-auto" />
            <h2 className="font-display text-2xl sm:text-3xl text-habibi-cream mt-5">Customer Reviews</h2>
          </div>
          <div className="space-y-10 mt-10">
            {BRANCHES.map((branch) => (
              <div key={branch.name}>
                <h3 className="font-display text-lg sm:text-xl text-habibi-cream text-center">{branch.name}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {DEMO_REVIEWS.filter((review) => review.branch === branch.name).map((review, index) => (
                    <article key={`${review.branch}-${review.name}-${index}`} className="corner-ornament min-h-56 bg-habibi-card border border-habibi-red/20 rounded-sm p-5 flex flex-col transition-all duration-300 hover:border-habibi-red/50 hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={review.avatar}
                          alt="Illustrative fictional Pakistani male demo avatar"
                          className="w-11 h-11 rounded-full object-cover border border-habibi-red/40"
                          loading="lazy"
                        />
                        <div>
                          <span className="font-display text-xs text-habibi-cream block">{review.name}</span>
                        </div>
                      </div>
                      <div className="flex gap-1 mt-5" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star key={starIndex} size={14} className={starIndex < review.rating ? 'text-habibi-gold fill-habibi-gold' : 'text-habibi-cream-muted/30'} />
                        ))}
                      </div>
                      <p className="font-elegant text-sm text-habibi-cream-muted leading-relaxed mt-4">“{review.feedback}”</p>
                      <span className="font-elegant text-xs text-habibi-cream-muted mt-auto pt-4">{review.branch}</span>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function StoryIntro() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 sm:py-28 bg-habibi-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative`}
        >
          <div className="relative overflow-hidden rounded-sm border border-habibi-red/30">
            <img
              src={GALLERY_IMAGES[0].src}
              alt="Habibi Restaurant food and dining"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-habibi-black/60 to-transparent" />
          </div>
          <div className="hidden sm:block absolute -bottom-5 -right-5 bg-habibi-card border border-habibi-red/40 px-6 py-4 rounded-sm shadow-xl">
            <div className="font-display text-2xl text-habibi-red">2020</div>
            <div className="font-elegant text-habibi-cream-muted text-sm">
              The journey began
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream leading-tight">
            Started With Courage,
            <br />
            <span className="text-gradient-red">Grown With Trust</span>
          </h2>
          <div className="ornament-divider w-40">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed">
            When the world stopped, we started writing our story. Habibi began
            in Muzaffarabad during one of the most uncertain times — with a
            small beginning, big dreams, and the courage to keep going.
          </p>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed">
            From those early days grew three beloved concepts: Habibi
            Restaurant, Zeestry desserts, and Mazman Khana — each a chapter in
            a story still being written.
          </p>
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-habibi-cream border border-habibi-red/50 hover:bg-habibi-red hover:border-habibi-red px-7 py-3 rounded-sm transition-all duration-300 w-fit"
          >
            Read Our Full Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ZeestryFeature() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 sm:py-28 bg-habibi-black-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em] inline-flex items-center gap-2">
            <Cake size={16} className="text-habibi-red" />
            Zeestry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream leading-tight">
            The Missing
            <br />
            <span className="text-gradient-red">Sweetness</span>
          </h2>
          <div className="ornament-divider w-40">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed">
            Zeestry was born from our vision to complete the food experience
            with premium bakery and desserts. Beautifully crafted,
            premium-quality cakes and desserts — made to be part of someone's
            special memory.
          </p>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed italic">
            Because for us, desserts aren't just eaten. They are shared,
            celebrated, and remembered.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-habibi-cream border border-habibi-red/50 hover:bg-habibi-red hover:border-habibi-red px-7 py-3 rounded-sm transition-all duration-300 w-fit"
          >
            View Zeestry Menu
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} order-1 lg:order-2 relative`}
        >
          <div className="relative overflow-hidden rounded-sm border border-habibi-red/30 corner-ornament">
            <img
              src={ZESTRY_IMAGE}
              alt="Zeestry Cakes and Desserts menu"
              className="w-full object-contain bg-habibi-black"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryFeature() {
  return (
    <section className="py-20 sm:py-28 bg-habibi-black-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-red-radial opacity-25 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
        <div className="relative overflow-hidden rounded-sm border border-habibi-red/30 corner-ornament bg-habibi-black max-w-md mx-auto w-full">
          <img
            src={DELIVERY_IMAGE}
            alt="Habibi Restaurant home delivery poster"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-center lg:text-left">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            Habibi at Your Door
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream mt-4 leading-tight">
            Order for Home Delivery
          </h2>
          <div className="ornament-divider w-40 mx-auto lg:mx-0 mt-5">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mt-6">
            Message Habibi directly for your order and delivery details. The original delivery information is shown exactly as provided.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-red-bright/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(226,59,43,0.5)] red-glow"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactTeaser() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-20 sm:py-28 bg-habibi-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} bg-habibi-card border border-habibi-red/30 rounded-sm p-10 sm:p-16 corner-ornament`}
        >
          <UtensilsCrossed size={36} className="text-habibi-red mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl text-habibi-cream mt-5">
            Ready to Order?
          </h2>
          <div className="ornament-divider w-40 mx-auto mt-4">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          <p className="font-elegant text-lg text-habibi-cream-muted mt-5 max-w-lg mx-auto">
            Reach out on WhatsApp for quick orders, or send us an email for
            inquiries and special requests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-red-bright/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(226,59,43,0.5)]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-habibi-cream font-display text-sm tracking-widest uppercase px-8 py-4 rounded-sm border border-habibi-cream/30 hover:border-habibi-red hover:text-habibi-red transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
