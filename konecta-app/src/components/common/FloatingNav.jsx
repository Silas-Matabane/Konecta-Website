import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);
  const [winHeight, setWinHeight] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const sy = window.scrollY;
      const dh = document.documentElement.scrollHeight;
      const wh = window.innerHeight;
      setScrollY(sy);
      setDocHeight(dh);
      setWinHeight(wh);
      setVisible(sy > 300);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const atBottom = scrollY + winHeight >= docHeight - 100;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: docHeight, behavior: "smooth" });
  const goBack = () => window.history.back();

  const btnBase =
    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border outline-none focus-visible:ring-2 focus-visible:ring-konecta-orange";
  const btnDefault =
    "bg-konecta-black/70 border-white/10 text-white/60 hover:text-konecta-white hover:border-white/20 hover:bg-konecta-black/90";
  const btnOrange =
    "bg-konecta-orange/90 border-konecta-orange/40 text-white hover:bg-konecta-orange shadow-[0_0_20px_rgba(244,129,32,0.25)]";

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Back (browser history) */}
      <button
        onClick={goBack}
        className={`${btnBase} ${btnDefault}`}
        aria-label="Go back to previous page"
        title="Go back"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Scroll to bottom / top toggle */}
      {!atBottom ? (
        <button
          onClick={scrollToBottom}
          className={`${btnBase} ${btnDefault}`}
          aria-label="Scroll to bottom of page"
          title="Go to bottom"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      ) : null}

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`${btnBase} ${btnOrange}`}
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
