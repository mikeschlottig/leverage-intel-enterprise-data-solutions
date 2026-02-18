import { useLocation, useNavigate } from "react-router-dom";
import { useLeadCapture } from "@/hooks/use-lead-capture";
export function useNavigationHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const onOpenLeadCapture = useLeadCapture((s) => s.onOpen);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, href: string, isPage: boolean = false) => {
    // 1. Lead Capture handling
    if (href === "#contact") {
      if (e) e.preventDefault();
      onOpenLeadCapture();
      return;
    }
    // 2. Page navigation handling
    if (isPage) return;
    // 3. Hash link handling
    if (href.startsWith("#")) {
      if (e) e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  };
  return { handleNavClick };
}