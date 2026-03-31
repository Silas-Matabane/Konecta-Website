import { TICKER_ITEMS } from '@data/constants';

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-konecta-orange py-2.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-12 animate-ticker">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-heading text-xs font-bold uppercase tracking-widest text-konecta-white inline-flex items-center gap-3"
          >
            {item}
            <span className="w-1 h-1 bg-white/45 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
