export default function MicrosoftLogo({ size = 14 }) {
  const half = size / 2 - 1;
  return (
    <div
      className="grid grid-cols-2 shrink-0"
      style={{ width: size, height: size, gap: `${Math.max(1, size / 7)}px` }}
    >
      <div style={{ width: half, height: half, background: '#F25022' }} />
      <div style={{ width: half, height: half, background: '#7FBA00' }} />
      <div style={{ width: half, height: half, background: '#00A4EF' }} />
      <div style={{ width: half, height: half, background: '#FFB900' }} />
    </div>
  );
}
