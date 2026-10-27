import { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  mobileDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  mobileDelay,
  direction = "up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const activeDelay = isLargeScreen ? delay : (mobileDelay ?? delay);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      case "none":
        return "none";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransform(),
        transition: `opacity 0.6s ease-out ${activeDelay}ms, transform 0.6s ease-out ${activeDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}
