import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { BRAND, SOCIAL_LINKS } from '@/data/content';

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="relative bg-habibi-black-soft border-t border-habibi-red/30 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-habibi-red to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-2xl font-bold tracking-wider text-habibi-cream">
              HABIBI
            </span>
            <span className="font-elegant text-sm tracking-[0.3em] text-habibi-red uppercase">
              The Proud Brand of Kashmir
            </span>
            <p className="font-elegant text-habibi-cream-muted text-base leading-relaxed mt-2 max-w-xs">
              Serving 300+ families every day in the mountain region with
              quality food, memorable experiences, and a touch of sweetness.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm tracking-widest uppercase text-habibi-cream">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-elegant text-habibi-cream-muted hover:text-habibi-red transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-sm tracking-widest uppercase text-habibi-cream">
              Get in Touch
            </h4>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-habibi-cream-muted hover:text-habibi-cream transition-colors group"
            >
              <MessageCircle
                size={18}
                className="text-habibi-red group-hover:scale-110 transition-transform"
              />
              <span className="font-elegant text-base">
                {BRAND.whatsappNumber}
              </span>
            </a>
            <a
              href={BRAND.emailUrl}
              className="inline-flex items-center gap-3 text-habibi-cream-muted hover:text-habibi-cream transition-colors group break-all"
            >
              <Mail
                size={18}
                className="text-habibi-red group-hover:scale-110 transition-transform shrink-0"
              />
              <span className="font-elegant text-base">{BRAND.email}</span>
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border border-habibi-red-bright/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,59,43,0.5)] w-fit"
            >
              <Phone size={14} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-habibi-red/35 hover:border-habibi-red hover:bg-habibi-red/10 text-habibi-cream-muted hover:text-habibi-cream px-4 py-2 rounded-sm font-display text-xs tracking-widest uppercase transition-colors"
          >
            <Facebook size={16} />
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-habibi-red/35 hover:border-habibi-red hover:bg-habibi-red/10 text-habibi-cream-muted hover:text-habibi-cream px-4 py-2 rounded-sm font-display text-xs tracking-widest uppercase transition-colors"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>

        <div className="ornament-divider mt-12 mb-6">
          <span className="text-habibi-red text-sm">✦</span>
        </div>
        <p className="text-center font-elegant text-sm text-habibi-cream-muted">
          © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
        </p>
        <p className="text-center font-elegant text-sm text-habibi-red mt-3">
          Owner: Zeeshan Habib | Built by Ali Naeem
        </p>
      </div>
    </footer>
  );
}
