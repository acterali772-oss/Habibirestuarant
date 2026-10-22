import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND, LOGO_ARTWORK } from '@/data/content';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-habibi-black/95 backdrop-blur-md border-b border-habibi-red/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Wordmark */}
          <Link to="/" className="group flex items-center gap-2.5 leading-none">
            <img
              src={LOGO_ARTWORK}
              alt=""
              aria-hidden="true"
              className="pointer-events-none h-9 w-9 object-contain object-center opacity-80 mix-blend-screen shrink-0 sm:h-11 sm:w-11"
            />
            <span className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-habibi-cream">
                HABIBI
              </span>
              <span className="font-elegant text-[10px] sm:text-xs tracking-[0.3em] text-habibi-red uppercase mt-0.5">
                Restaurant · Muzaffarabad
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-display text-sm tracking-widest uppercase transition-colors duration-300 relative py-2 ${
                    isActive
                      ? 'text-habibi-red'
                      : 'text-habibi-cream/85 hover:text-habibi-cream'
                  } after:absolute after:bottom-0 after:left-0 after:h-px after:bg-habibi-red after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-habibi-red hover:bg-habibi-red-bright text-habibi-cream font-display text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm border border-habibi-red-bright/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,59,43,0.5)]"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-habibi-cream p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[480px]' : 'max-h-0'
        } bg-habibi-black-soft border-t border-habibi-red/20`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-display tracking-widest uppercase py-3 border-b border-habibi-red/10 transition-colors ${
                  isActive
                    ? 'text-habibi-red'
                    : 'text-habibi-cream/90 hover:text-habibi-cream'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-habibi-red text-habibi-cream font-display text-sm tracking-widest uppercase px-5 py-3 rounded-sm"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
