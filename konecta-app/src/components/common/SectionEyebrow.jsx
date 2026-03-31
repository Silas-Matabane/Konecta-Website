export default function SectionEyebrow({ text, color = 'orange' }) {
  const lineColor = color === 'blue' ? 'bg-[#5D6770]' : 'bg-konecta-orange';
  const textColor = color === 'blue' ? 'text-konecta-silver' : 'text-konecta-orange';

  return (
    <div className="section-eyebrow">
      <div className={`section-eyebrow-line ${lineColor}`} />
      <span className={`section-eyebrow-text ${textColor}`}>{text}</span>
    </div>
  );
}
