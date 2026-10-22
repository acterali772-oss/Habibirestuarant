import { Link } from 'react-router-dom';
import { ArrowRight, Heart, UtensilsCrossed, Cake, Mountain } from 'lucide-react';
import { BRAND, GALLERY_IMAGES } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={GALLERY_IMAGES[1].src}
            alt="Habibi Restaurant dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-habibi-black/90 via-habibi-black/75 to-habibi-black" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.5em]">
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-habibi-cream mt-4">
            A Brand Built on
            <br />
            <span className="text-gradient-red">Perseverance</span>
          </h1>
          <div className="ornament-divider w-56 mx-auto mt-5">
            <span className="text-habibi-red text-xl">✦</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-habibi-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} corner-ornament bg-habibi-card border border-habibi-red/25 rounded-sm p-8 sm:p-12`}>
            <p className="font-elegant text-lg sm:text-xl text-habibi-cream-muted leading-relaxed">
              {BRAND.fullName} is a food brand built through perseverance,
              customer trust, and a commitment to memorable food experiences.
              What began as a small step during uncertain times has grown into a
              beloved name in the mountain region — proudly serving 300+
              families every day.
            </p>
            <div className="ornament-divider w-32 mt-6">
              <span className="text-habibi-red text-sm">✦</span>
            </div>
            <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mt-6">
              We don't just open restaurants. We create experiences, introduce
              new concepts, and take quality food to places where it was needed.
              And because we felt something was incomplete — a missing sweetness
              in our story — we added it.
            </p>
          </div>
        </div>
      </section>

      {/* Three concepts */}
      <section className="py-16 sm:py-24 bg-habibi-black-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We've Built"
            title="Three Beloved Concepts"
            subtitle="Each one a chapter in a story still being written."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: <UtensilsCrossed size={28} />,
                name: 'Habibi Restaurant',
                desc: 'Our flagship — quality food and memorable experiences, serving 300+ families daily in Muzaffarabad.',
              },
              {
                icon: <Cake size={28} />,
                name: 'Zeestry',
                desc: 'Premium bakery and desserts, born to complete the food experience with cakes made to be remembered.',
              },
              {
                icon: <Mountain size={28} />,
                name: 'Mazman Khana',
                desc: 'A concept dedicated to authentic desi cuisine — celebrating traditional flavours and our local food culture.',
              },
            ].map((c) => (
              <ConceptCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-habibi-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Values"
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Heart size={22} />, title: 'Courage', text: 'We started with courage during uncertain times, and that spirit carries us forward.' },
              { icon: <Heart size={22} />, title: 'Trust', text: 'We grow with the trust and love of our customers — every step earned, not given.' },
              { icon: <Heart size={22} />, title: 'Quality', text: 'We take quality food to places where it was needed, and keep raising the bar.' },
            ].map((v) => (
              <div key={v.title} className="bg-habibi-card border border-habibi-red/20 hover:border-habibi-red/50 transition-colors duration-400 rounded-sm p-6 text-center">
                <div className="text-habibi-red mx-auto w-fit">{v.icon}</div>
                <h3 className="font-display text-xl text-habibi-cream mt-4">{v.title}</h3>
                <p className="font-elegant text-habibi-cream-muted mt-2 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-habibi-black-soft text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl sm:text-3xl text-habibi-cream">
            Come Taste the Story
          </h3>
          <p className="font-elegant text-habibi-cream-muted mt-3">
            Every dish carries our journey. Every visit adds to it.
          </p>
          <Link
            to="/our-story"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-habibi-cream border border-habibi-red/50 hover:bg-habibi-red hover:border-habibi-red px-7 py-3 rounded-sm transition-all duration-300"
          >
            Read Our Full Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ConceptCard({ icon, name, desc }: { icon: React.ReactNode; name: string; desc: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group bg-habibi-card border border-habibi-red/25 hover:border-habibi-red/60 rounded-sm p-7 transition-all duration-500 hover:shadow-[0_0_30px_rgba(192,57,43,0.15)]`}
    >
      <div className="text-habibi-red group-hover:scale-110 transition-transform duration-400 w-fit">{icon}</div>
      <h3 className="font-display text-xl sm:text-2xl text-habibi-cream mt-5">{name}</h3>
      <div className="ornament-divider w-24 mt-3 justify-start">
        <span className="text-habibi-red text-sm">✦</span>
      </div>
      <p className="font-elegant text-habibi-cream-muted mt-4 leading-relaxed">{desc}</p>
    </div>
  );
}
