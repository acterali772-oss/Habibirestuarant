const MESSAGE = 'HABIBI RESTAURANT — OPEN DAILY · 11:00 AM – 2:00 AM';

export default function OpeningTicker() {
  return (
    <div className="opening-ticker border-y border-habibi-red/30 bg-habibi-black-soft text-habibi-cream" aria-label={MESSAGE}>
      <div className="opening-ticker-track">
        <span>{MESSAGE}</span>
        <span aria-hidden="true">{MESSAGE}</span>
        <span aria-hidden="true">{MESSAGE}</span>
        <span aria-hidden="true">{MESSAGE}</span>
      </div>
    </div>
  );
}
