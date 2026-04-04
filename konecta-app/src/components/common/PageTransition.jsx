import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
