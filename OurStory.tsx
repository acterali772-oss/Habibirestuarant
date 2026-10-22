import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND, GALLERY_IMAGES, ZESTRY_IMAGE } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={GALLERY_IMAGES[3].src}
            alt="Habibi Restaurant journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-habibi-black/90 via-habibi-black/75 to-habibi-black" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.5em]">
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-habibi-cream mt-4 leading-tight">
            We Started With Courage.
            <br />
            <span className="text-gradient-red">We Grow With Trust.</span>
          </h1>
          <div className="ornament-divider w-56 mx-auto mt-5">
            <span className="text-habibi-red text-xl">✦</span>
          </div>
        </div>
      </section>

      {/* Habibi story */}
      <StoryBlock
        eyebrow="Habibi"
        title="When the World Stopped, We Started Writing Our Story"
        image={GALLERY_IMAGES[2].src}
        alt="Habibi Restaurant food and dining"
        paragraphs={[
          'When COVID-19 brought businesses to a standstill, we chose to take a different path. Habibi started its journey in Muzaffarabad during one of the most uncertain times, with a small beginning, big dreams, and the courage to keep going.',
          'Our journey was never overnight. We struggled, worked, learned, improved, and moved forward one step at a time. With the trust and love of our customers, that small beginning slowly grew into a food brand with a bigger vision.',
          'In the mountain region, we are proudly serving 300+ families every day. Today, we continue to move forward not just by opening restaurants, but by creating experiences, introducing new concepts, and taking quality food to places where it was needed.',
        ]}
        highlight="Yet despite the growth, we felt something was incomplete — a missing sweetness in our story."
        highlightLabel="That missing sweetness became Zeestry."
        reverse={false}
      />

      {/* Zeestry story */}
      <StoryBlock
        eyebrow="Zeestry"
        title="What We've Achieved"
        image={ZESTRY_IMAGE}
        alt="Zeestry Cakes and Desserts menu"
        imageContain
        paragraphs={[
          'Zeestry was born from our vision to complete the food experience with premium bakery and desserts. We believed in baking with intention, decorating with love, and serving with honesty. Every cake we design and every pastry we prepare is made to be part of someone\'s special memory.',
          'Because for us, desserts aren\'t just eaten. They are shared, celebrated, and remembered.',
          'We introduced beautifully crafted, premium-quality cakes and desserts that previously were not easily available in Muzaffarabad, AJK. Today, Zeestry continues to grow and expand.',
        ]}
        reverse
        bgSoft
      />

      {/* Mazman Khana story */}
      <StoryBlock
        eyebrow="Mazman Khana"
        title="For the Love of Authentic Desi Cuisine"
        image={GALLERY_IMAGES[0].src}
        alt="Habibi Restaurant traditional desi cuisine"
        paragraphs={[
          'For our love of authentic desi cuisine, we introduced Mazman Khana, a concept dedicated to traditional flavours and the richness of our local food culture.',
          'In a small town with limited resources, but unlimited belief, we began our journey. There were challenges, sleepless nights, and difficult decisions. But there was also faith in Allah and continuous support from loyal customers.',
          'Mazman Khana is growing, and new projects are on the horizon. Habibi continues to build its future step by step.',
        ]}
        highlight="We started with courage. We grow with trust. And we're still writing the story."
        highlightLabel="HABIBI — The Proud Brand of Kashmir"
        reverse={false}
      />

      {/* CTA */}
      <section className="py-16 bg-habibi-black-soft text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl sm:text-3xl text-habibi-cream">
            Be Part of the Story
          </h3>
          <p className="font-elegant text-habibi-cream-muted mt-3">
            Order a meal, share a dessert, or simply reach out — we'd love to
            hear from you.
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
          <div className="mt-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-habibi-cream-muted hover:text-habibi-red transition-colors"
            >
              Explore the Menu
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

type StoryBlockProps = {
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
  highlight?: string;
  highlightLabel?: string;
  reverse?: boolean;
  bgSoft?: boolean;
  imageContain?: boolean;
};

function StoryBlock({
  eyebrow,
  title,
  image,
  alt,
  paragraphs,
  highlight,
  highlightLabel,
  reverse = false,
  bgSoft = false,
  imageContain = false,
}: StoryBlockProps) {
  const { ref, visible } = useReveal();
  return (
    <section className={`py-16 sm:py-24 ${bgSoft ? 'bg-habibi-black-soft' : 'bg-habibi-black'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-sm border border-habibi-red/30 corner-ornament ${
              imageContain ? 'bg-habibi-black' : ''
            }`}
          >
            <img
              src={image}
              alt={alt}
              className={`w-full ${imageContain ? 'h-auto object-contain' : 'h-[380px] sm:h-[480px] object-cover'} ${!imageContain ? 'slow-zoom' : ''}`}
              loading="lazy"
            />
            {!imageContain && (
              <div className="absolute inset-0 bg-gradient-to-t from-habibi-black/50 to-transparent" />
            )}
          </div>
        </div>

        <div className={`flex flex-col gap-5 ${reverse ? 'lg:order-1' : ''}`}>
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream leading-tight">
            {title}
          </h2>
          <div className="ornament-divider w-40">
            <span className="text-habibi-red text-lg">✦</span>
          </div>
          {paragraphs.map((p, i) => (
            <p key={i} className="font-elegant text-lg text-habibi-cream-muted leading-relaxed">
              {p}
            </p>
          ))}
          {highlight && (
            <div className="mt-2 border-l-2 border-habibi-red pl-5 py-2">
              <p className="font-elegant text-lg sm:text-xl text-habibi-cream italic leading-relaxed">
                {highlight}
              </p>
              {highlightLabel && (
                <p className="font-display text-habibi-red text-sm tracking-widest uppercase mt-3">
                  {highlightLabel}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
