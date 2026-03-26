import { useEffect, useState } from 'react';

export default function useCountUp(end, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, ''), 10) : end;
    if (isNaN(num) || num === 0) { setCount(num || 0); return; }

    let start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(eased * num);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, inView, duration]);

  return count;
}
