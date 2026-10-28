import { AnimatedSection } from "../ui/AnimatedSection";

export function CommunitySection() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#faf9f5] px-5 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28 lg:py-32">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Main title */}
        <AnimatedSection>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#2C4A92] text-center">
            Built by the community for the community
          </h2>
        </AnimatedSection>

        {/* Closing message */}
        <AnimatedSection delay={150}>
          <p className="font-garamond text-base md:text-lg lg:text-[20px] text-[#5f666e] text-center leading-normal w-full max-w-4xl">
            Thank you for helping make Strategist Bank possible. Your commitment
            strengthens the local business ecosystem across New Hampshire.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
