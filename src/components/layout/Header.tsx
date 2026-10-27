import { AnimatedSection } from "../ui/AnimatedSection";

export function Header() {
  return (
    <header className="relative bg-[#faf9f5] flex flex-col gap-6 md:gap-10 items-start pb-10 md:pb-14 pt-8 md:pt-12 px-5 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      {/* Background decorations - hidden on mobile for cleaner look */}
      <img
        src="/images/header-bg.svg"
        alt=""
        className="hidden md:block absolute left-0 top-0 w-full max-w-360 h-auto pointer-events-none"
        aria-hidden="true"
      />
      <img
        src="/images/header-decoration.svg"
        alt=""
        className="hidden lg:block absolute right-0 top-0 w-auto h-full max-h-125 pointer-events-none"
        aria-hidden="true"
      />

      {/* Logo section */}
      <AnimatedSection
        className="relative flex flex-col gap-2 md:gap-3 items-start w-full"
        delay={0}
      >
        <img
          src="/images/logo.svg"
          alt="Strategist Bank"
          className="h-12 sm:h-16 md:h-20 lg:h-23.75 w-auto"
        />
        <p className="font-outfit font-semibold text-[10px] md:text-[11px] uppercase tracking-wide text-[#4a934f]">
          In organization
        </p>
      </AnimatedSection>

      {/* Hero text */}
      <AnimatedSection
        className="relative flex flex-col items-center w-full"
        delay={200}
      >
        <h1 className="font-barlow font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#11224d] text-center leading-[1.05]">
          <span className="block">Take the next step.</span>
          <span className="block">
            Invest in the bank that thinks like a Business.
          </span>
        </h1>
      </AnimatedSection>
    </header>
  );
}
