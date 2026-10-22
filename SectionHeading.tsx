import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) {
  const { ref, visible } = useReveal();
  const alignClass =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} flex flex-col ${alignClass} gap-4 max-w-2xl ${
        align === 'center' ? 'mx-auto' : ''
      }`}
    >
      {eyebrow && (
        <span className="font-display text-habibi-red text-xs sm:text-sm uppercase tracking-[0.4em]">
          {eyebrow}
        </span>
      )}
      <div className="flex flex-col gap-3">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-habibi-cream leading-tight">
          {title}
        </h2>
        <div className="ornament-divider w-full max-w-[200px]">
          <span className="text-habibi-red text-lg">✦</span>
        </div>
      </div>
      {subtitle && (
        <p className="font-elegant text-lg sm:text-xl text-habibi-cream-muted leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
