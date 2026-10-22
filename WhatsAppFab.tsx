import { BRAND } from '@/data/content';

export default function WhatsAppFab() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_6px_24px_rgba(0,0,0,0.5)] border border-white/20 transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="w-7 h-7 fill-current">
        <path d="M16 3.2A12.8 12.8 0 0 0 5 22.5L3.5 28.5l6.2-1.6A12.8 12.8 0 1 0 16 3.2Zm0 23.3c-2 0-3.9-.6-5.5-1.7l-.4-.2-3.7 1 .9-3.6-.3-.4A10.8 10.8 0 1 1 16 26.5Zm5.9-8.1c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.7.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
