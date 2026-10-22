import { MessageCircle, Mail, Phone, Copy, Check, MapPin, Navigation, Star } from 'lucide-react';
import { useState } from 'react';
import { BRAND, BRANCHES, GALLERY_IMAGES, type Branch } from '@/data/content';
import SectionHeading from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const [copied, setCopied] = useState<'whatsapp' | 'email' | null>(null);

  const copy = (text: string, which: 'whatsapp' | 'email') => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={GALLERY_IMAGES[2].src}
            alt="Habibi Restaurant contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-habibi-black/90 via-habibi-black/75 to-habibi-black" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.5em]">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-habibi-cream mt-4">
            Contact Us
          </h1>
          <div className="ornament-divider w-48 mx-auto mt-5">
            <span className="text-habibi-red text-xl">✦</span>
          </div>
          <p className="font-elegant text-lg sm:text-xl text-habibi-cream-muted mt-5 max-w-lg mx-auto">
            Place an order, ask a question, or share a kind word — we'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 sm:py-24 bg-habibi-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <ContactCard
              icon={<MessageCircle size={26} />}
              label="WhatsApp"
              value={BRAND.whatsappNumber}
              actionLabel="Open WhatsApp Chat"
              href={BRAND.whatsappUrl}
              onCopy={() => copy(BRAND.whatsappNumber, 'whatsapp')}
              copied={copied === 'whatsapp'}
              primary
            />
            {/* Email */}
            <ContactCard
              icon={<Mail size={26} />}
              label="Email"
              value={BRAND.email}
              actionLabel="Send Email"
              href={BRAND.emailUrl}
              onCopy={() => copy(BRAND.email, 'email')}
              copied={copied === 'email'}
            />
          </div>

          {/* Note */}
          <div className="mt-10 text-center">
            <p className="font-elegant text-habibi-cream-muted max-w-xl mx-auto">
              We respond to messages during business hours. For quick orders,
              WhatsApp is the fastest way to reach us.
            </p>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 sm:py-24 bg-habibi-black-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Your Nearest Location"
            title="Our Branches"
            subtitle="Visit Habibi and Zeestry across Muzaffarabad. Call ahead or get directions with one tap."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {BRANCHES.map((branch) => (
              <BranchCard key={branch.name} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews connection */}
      <section className="py-16 sm:py-20 bg-habibi-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="corner-ornament bg-habibi-card border border-habibi-red/25 rounded-sm p-8 sm:p-12 text-center">
            <Star size={28} className="text-habibi-red mx-auto" />
            <h2 className="font-display text-2xl sm:text-3xl text-habibi-cream mt-5">
              Customer Reviews
            </h2>
            <div className="ornament-divider w-36 mx-auto mt-4">
              <span className="text-habibi-red text-sm">✦</span>
            </div>
            <p className="font-elegant text-lg text-habibi-cream-muted leading-relaxed mt-5">
              Live customer reviews are not connected yet. Genuine reviews can
              be displayed here after connecting an authorized Google Business
              Profile or Google Places review source for Habibi Restaurant.
            </p>
            <p className="font-display text-[10px] tracking-[0.22em] uppercase text-habibi-red mt-5">
              No placeholder reviews shown
            </p>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-habibi-black-soft">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Ready When You Are"
            title="Order in Seconds"
          />
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
      </section>
    </>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  actionLabel: string;
  href: string;
  onCopy: () => void;
  copied: boolean;
  primary?: boolean;
};

function BranchCard({ branch }: { branch: Branch }) {
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} corner-ornament bg-habibi-card border border-habibi-red/25 hover:border-habibi-red/60 rounded-sm p-6 flex flex-col transition-all duration-500 hover:shadow-[0_0_28px_rgba(192,57,43,0.14)]`}
    >
      <div className="flex items-start gap-3">
        <MapPin size={22} className="text-habibi-red shrink-0 mt-1" />
        <div>
          <h3 className="font-display text-lg text-habibi-cream leading-snug">
            {branch.name}
          </h3>
          <p className="font-elegant text-base text-habibi-cream-muted leading-relaxed mt-2">
            {branch.address}
          </p>
        </div>
      </div>
      <div className="ornament-divider w-24 mt-5 justify-start">
        <span className="text-habibi-red text-sm">✦</span>
      </div>
      <a
        href={`tel:${branch.phone}`}
        className="font-elegant text-xl text-habibi-cream hover:text-habibi-red transition-colors mt-3"
      >
        {branch.phone}
      </a>
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <a
          href={`tel:${branch.phone}`}
          className="inline-flex items-center justify-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-xs tracking-widest uppercase px-4 py-3 rounded-sm transition-colors"
        >
          <Phone size={14} />
          Call
        </a>
        {branch.mapsUrl && (
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-habibi-red/50 hover:border-habibi-red hover:bg-habibi-red/10 text-habibi-cream font-display text-xs tracking-widest uppercase px-4 py-3 rounded-sm transition-colors"
          >
            <Navigation size={14} />
            Get Directions
          </a>
        )}
      </div>
      {!branch.mapsUrl && (
        <p className="font-elegant text-sm text-habibi-cream-muted mt-4">
          Location link coming soon.
        </p>
      )}
    </article>
  );
}

function ContactCard({
  icon,
  label,
  value,
  actionLabel,
  href,
  onCopy,
  copied,
  primary = false,
}: ContactCardProps) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} corner-ornament bg-habibi-card border rounded-sm p-7 sm:p-9 flex flex-col gap-5 transition-all duration-500 ${
        primary
          ? 'border-habibi-red/40 hover:border-habibi-red/70'
          : 'border-habibi-red/25 hover:border-habibi-red/55'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-habibi-red">{icon}</div>
        <span className="font-display text-sm tracking-[0.3em] uppercase text-habibi-cream">
          {label}
        </span>
      </div>
      <div className="ornament-divider w-20 justify-start">
        <span className="text-habibi-red text-sm">✦</span>
      </div>
      <p className="font-elegant text-xl sm:text-2xl text-habibi-cream break-all">
        {value}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`inline-flex items-center justify-center gap-2 font-display text-xs tracking-widest uppercase px-5 py-3 rounded-sm border transition-all duration-300 ${
            primary
              ? 'bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream border-habibi-red-bright/50'
              : 'text-habibi-cream border-habibi-red/50 hover:bg-habibi-red hover:border-habibi-red'
          }`}
        >
          {primary && <Phone size={14} />}
          {actionLabel}
        </a>
        <button
          onClick={onCopy}
          className="inline-flex items-center justify-center gap-2 font-display text-xs tracking-widest uppercase text-habibi-cream-muted hover:text-habibi-cream border border-habibi-cream/20 hover:border-habibi-cream/40 px-5 py-3 rounded-sm transition-all duration-300"
        >
          {copied ? <Check size={14} className="text-habibi-red" /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
