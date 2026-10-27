import { AnimatedSection } from "../ui/AnimatedSection";

export function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#1e3366] via-[#1e3366] via-55% to-[#0f1b2d] flex flex-col gap-8 md:gap-12 items-start pb-8 md:pb-10 pt-12 md:pt-20 px-5 sm:px-10 md:px-16 lg:px-20 w-full">
      {/* Footer main content */}
      <AnimatedSection className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 w-full">
        {/* Brand column */}
        <div className="flex flex-col gap-4 items-start w-full md:w-95">
          <img
            src="/images/logo-footer.svg"
            alt="Strategist Bank"
            className="h-8 w-27"
          />
          <p className="font-garamond italic text-[16px] text-[#ebbc59]">
            "A Bank that thinks like a Business."
          </p>
          <p className="font-garamond text-[13px] text-white opacity-70 leading-normal">
            Born in New Hampshire. Built across New England. Servicing the
            financial needs of small-to-mid commercial businesses.
          </p>
        </div>

        {/* Contact and Legal columns wrapper */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 w-full md:w-auto">
          {/* Contact column */}
          <div className="flex flex-col gap-3 items-start">
            <p className="font-garamond text-[14px] text-white">CONTACT</p>
            <div className="font-garamond text-[14px] text-[#7a99c1] leading-normal">
              <p>Strategist Bank (in formation)</p>
              <p>info@strategistbank.com</p>
              <p>(603) 555-0140</p>
            </div>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-3 items-start">
            <p className="font-garamond text-[14px] text-white">LEGAL INFO</p>
            <div className="font-garamond text-[14px] text-[#7a99c1] leading-normal">
              <p>Investor Portal Disclosures</p>
              <p>
                <a
                  href="https://example.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:opacity-80"
                >
                  Privacy Policy
                </a>
                {" | "}
                <a
                  href="https://example.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:opacity-80"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Divider line */}
      <AnimatedSection className="w-full" delay={100}>
        <div className="w-full h-px bg-[#2C4A92]" />
      </AnimatedSection>

      {/* Bottom section */}
      <AnimatedSection
        className="flex flex-col gap-4 items-start w-full"
        delay={200}
      >
        <p className="font-garamond italic text-[11px] md:text-[12px] text-[#7a99c1] leading-normal w-full">
          Disclosures: This page is for general information only and is not an
          offer to sell or a solicitation of an offer to buy securities. Any
          offering will be made solely through official private-placement
          materials to verified accredited investors. Strategist Bank is in
          formation. An investment is not a bank deposit, is not FDIC insured,
          and involves significant risk of capital loss.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full font-garamond text-[11px] md:text-[12px] text-white">
          <p className="opacity-60">
            © 2026 Strategist Bank (in formation). All rights reserved.
          </p>
          <p className="opacity-60">
            Southern New Hampshire &amp; The Seacoast Region
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
