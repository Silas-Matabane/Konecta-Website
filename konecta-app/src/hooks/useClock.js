import { useEffect, useState } from 'react';

export default function useClock(timezone) {
  const [time, setTime] = useState(() => formatTime(timezone));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timezone)), 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return time;
}

function formatTime(tz) {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}
