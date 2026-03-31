import MicrosoftLogo from '@components/common/MicrosoftLogo';
import { CREDIBILITY_ITEMS } from '@data/constants';

export default function CredibilityBand() {
  return (
    <div className="border-y border-konecta-border/30 bg-konecta-black/80 py-5 px-6 lg:px-14 overflow-x-auto">
      <div className="flex items-center justify-between gap-6 min-w-max">
        {CREDIBILITY_ITEMS.map((item, i) => (
          <div key={item.title} className="contents">
            <div className="flex items-center gap-3">
              <div className={`text-xl shrink-0 ${item.isMicrosoft ? 'flex items-center justify-center' : ''}`}>
                {item.isMicrosoft ? <MicrosoftLogo size={20} /> : item.icon}
              </div>
              <div>
                <div className={`font-heading font-bold text-xs ${item.isMicrosoft ? 'text-konecta-silver' : 'text-konecta-white'}`}>
                  {item.title}
                </div>
                <div className="text-[0.65rem] text-konecta-muted">{item.desc}</div>
              </div>
            </div>
            {i < CREDIBILITY_ITEMS.length - 1 && (
              <div className="w-px h-8 bg-konecta-border/30 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
