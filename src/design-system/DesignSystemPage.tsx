import { useState, useRef, useEffect } from "react";
import { ComponentCard } from "./components/ComponentCard";
import { tokens } from "./tokens";
import {
  generateTokensJSON,
  generateTokensCSS,
  generateTokensSCSS,
  downloadFile,
} from "./utils/downloadUtils";

// Sample button components for preview
function PrimaryButton() {
  return (
    <button className="bg-[#4a934f] text-white px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase drop-shadow-[0px_6px_8px_rgba(74,147,79,0.2)] hover:bg-[#3d7a41] transition-colors">
      Primary Button
    </button>
  );
}

function SecondaryButton() {
  return (
    <button className="bg-[#1e3366] text-white px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase border-b-2 border-[#ebbc59] hover:bg-[#172a54] transition-colors">
      Secondary Button
    </button>
  );
}

function OutlineButton() {
  return (
    <button className="bg-[#faf9f5] text-[#e0512c] px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase border border-[#e0512c] hover:bg-[#f5f4f0] transition-colors">
      Outline Button
    </button>
  );
}

// Color swatch component
function ColorSwatch({
  name,
  hex,
  textDark = false,
}: {
  name: string;
  hex: string;
  textDark?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleCopy}>
      <div
        className={`h-16 rounded-lg flex items-end p-2 ${textDark ? "text-[#11224d]" : "text-white"} relative group`}
        style={{ backgroundColor: hex }}
      >
        <span className="font-outfit text-xs font-semibold">
          {copied ? "Copied!" : hex}
        </span>
      </div>
      <span className="font-garamond text-sm text-[#5f666e] mt-1">{name}</span>
    </div>
  );
}

// Typography sample
function TypographySample() {
  return (
    <div className="space-y-3 text-left">
      <p className="font-barlow font-bold text-3xl text-[#11224d]">
        Barlow Condensed Bold
      </p>
      <p className="font-garamond text-lg text-[#5f666e]">
        EB Garamond Regular - Body text style
      </p>
      <p className="font-garamond italic text-lg text-[#ebbc59]">
        EB Garamond Italic - Tagline style
      </p>
      <p className="font-outfit font-semibold text-sm text-[#1e3366] uppercase">
        Outfit Semibold - UI Text
      </p>
      <p className="font-outfit font-bold text-xs tracking-[1px] text-[#4a934f] uppercase">
        Outfit Bold - Badge Text
      </p>
    </div>
  );
}

// Animation demo component
function AnimationDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const replay = () => {
    setIsPlaying(false);
    setKey((k) => k + 1);
    setTimeout(() => setIsPlaying(true), 50);
  };

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap justify-center">
        {["up", "down", "left", "right"].map((direction, index) => (
          <div
            key={`${key}-${direction}`}
            className="w-16 h-16 bg-[#4a934f] rounded-lg flex items-center justify-center"
            style={{
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying
                ? "none"
                : direction === "up"
                  ? "translateY(30px)"
                  : direction === "down"
                    ? "translateY(-30px)"
                    : direction === "left"
                      ? "translateX(30px)"
                      : "translateX(-30px)",
              transition: `opacity 0.6s ease-out ${index * 150}ms, transform 0.6s ease-out ${index * 150}ms`,
            }}
          >
            <span className="text-white font-outfit text-xs uppercase">
              {direction}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={replay}
        className="text-sm text-[#1e3366] font-outfit hover:underline"
      >
        ↻ Replay animation
      </button>
    </div>
  );
}

// Stagger animation demo
function StaggerDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const replay = () => {
    setIsPlaying(false);
    setKey((k) => k + 1);
    setTimeout(() => setIsPlaying(true), 50);
  };

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  const items = ["First", "Second", "Third", "Fourth", "Fifth"];
  const staggerDelay = 100;

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={`${key}-${item}`}
            className="bg-[#1e3366] text-white px-4 py-2 rounded-lg font-outfit text-sm"
            style={{
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying ? "translateX(0)" : "translateX(-20px)",
              transition: `opacity 0.4s ease-out ${index * staggerDelay}ms, transform 0.4s ease-out ${index * staggerDelay}ms`,
            }}
          >
            {item} item (delay: {index * staggerDelay}ms)
          </div>
        ))}
      </div>
      <button
        onClick={replay}
        className="text-sm text-[#1e3366] font-outfit hover:underline"
      >
        ↻ Replay stagger
      </button>
    </div>
  );
}

// Download dropdown component
function DownloadDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const downloadOptions = [
    {
      label: "Tokens (JSON)",
      description: "Raw token values",
      action: () =>
        downloadFile(
          generateTokensJSON(),
          "strategist-bank-tokens.json",
          "application/json",
        ),
    },
    {
      label: "Tokens (CSS)",
      description: "CSS custom properties",
      action: () =>
        downloadFile(
          generateTokensCSS(),
          "strategist-bank-tokens.css",
          "text/css",
        ),
    },
    {
      label: "Tokens (SCSS)",
      description: "SCSS variables",
      action: () =>
        downloadFile(
          generateTokensSCSS(),
          "strategist-bank-tokens.scss",
          "text/plain",
        ),
    },
    {
      label: "Documentation (MD)",
      description: "Design system guide",
      action: async () => {
        const response = await fetch("/design-system/DESIGN_SYSTEM.md");
        if (response.ok) {
          const content = await response.text();
          downloadFile(content, "DESIGN_SYSTEM.md", "text/markdown");
        } else {
          window.open("/design-system/DESIGN_SYSTEM.md", "_blank");
        }
      },
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#4a934f] text-white px-4 py-2 rounded-lg font-outfit font-semibold text-sm hover:bg-[#3d7a41] transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <svg
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download
        <svg
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#e2e8f0] overflow-hidden z-50"
          role="listbox"
        >
          <div className="p-2 border-b border-[#e2e8f0]">
            <span className="font-outfit text-xs text-[#5f666e] uppercase tracking-wide">
              Download Assets
            </span>
          </div>
          {downloadOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-[#f0f4f8] transition-colors flex flex-col gap-0.5"
              role="option"
            >
              <span className="font-outfit text-sm font-semibold text-[#1e3366]">
                {option.label}
              </span>
              <span className="font-garamond text-xs text-[#5f666e]">
                {option.description}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Asset preview component
function AssetPreview({
  name,
  path,
  type,
}: {
  name: string;
  path: string;
  type: "icon" | "decoration" | "background";
}) {
  const bgColor =
    type === "decoration" || type === "background"
      ? "bg-[#11224d]"
      : "bg-white";
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-20 h-20 ${bgColor} rounded-lg flex items-center justify-center p-2 border border-[#e2e8f0]`}
      >
        <img src={path} alt={name} className="max-w-full max-h-full" />
      </div>
      <span className="font-outfit text-xs text-[#5f666e] text-center">
        {name}
      </span>
    </div>
  );
}

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Header */}
      <header className="bg-[#11224d] text-white py-12 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="font-barlow font-bold text-4xl md:text-5xl">
              Strategist Bank Design System
            </h1>
            <p className="font-garamond text-lg text-[#7a99c1] mt-2">
              Component library and design tokens for consistent brand
              implementation
            </p>
          </div>
          <DownloadDropdown />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-12">
        {/* Color Tokens Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">
            Color Tokens
          </h2>

          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] space-y-8">
            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Primary Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <ColorSwatch name="Navy" hex={tokens.colors.primary.navy} />
                <ColorSwatch name="Blue" hex={tokens.colors.primary.blue} />
                <ColorSwatch
                  name="Blue Dark"
                  hex={tokens.colors.primary.blueDark}
                />
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Secondary Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <ColorSwatch name="Green" hex={tokens.colors.secondary.green} />
                <ColorSwatch
                  name="Gold"
                  hex={tokens.colors.secondary.gold}
                  textDark
                />
                <ColorSwatch
                  name="Orange"
                  hex={tokens.colors.secondary.orange}
                />
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Neutral Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <ColorSwatch
                  name="Cream"
                  hex={tokens.colors.neutral.cream}
                  textDark
                />
                <ColorSwatch
                  name="White"
                  hex={tokens.colors.neutral.white}
                  textDark
                />
                <ColorSwatch name="Gray" hex={tokens.colors.neutral.gray} />
                <ColorSwatch
                  name="Gray Light"
                  hex={tokens.colors.neutral.grayLight}
                />
                <ColorSwatch
                  name="Border"
                  hex={tokens.colors.neutral.border}
                  textDark
                />
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Semantic & Extended Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <ColorSwatch
                  name="Success Light"
                  hex={tokens.colors.semantic.successLight}
                  textDark
                />
                <ColorSwatch
                  name="Blue Alt"
                  hex={tokens.colors.extended.blueAlt}
                />
                <ColorSwatch
                  name="Text Dark"
                  hex={tokens.colors.extended.textDark}
                />
                <ColorSwatch
                  name="Hover Light"
                  hex={tokens.colors.extended.hoverLight}
                  textDark
                />
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">
            Typography
          </h2>

          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
            <TypographySample />
          </div>
        </section>

        {/* Backgrounds & Assets Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">
            Backgrounds & Assets
          </h2>

          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] space-y-8">
            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Step Icons
              </h3>
              <div className="flex gap-6 flex-wrap">
                <AssetPreview
                  name="File"
                  path={tokens.icons.stepIcons.file}
                  type="icon"
                />
                <AssetPreview
                  name="Credit Card"
                  path={tokens.icons.stepIcons.creditCard}
                  type="icon"
                />
                <AssetPreview
                  name="Phone"
                  path={tokens.icons.stepIcons.phone}
                  type="icon"
                />
                <AssetPreview
                  name="Check"
                  path={tokens.icons.ui.check}
                  type="icon"
                />
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Decorative Elements
              </h3>
              <div className="flex gap-6 flex-wrap">
                <AssetPreview
                  name="Header BG"
                  path={tokens.backgrounds.decorations.headerBg}
                  type="decoration"
                />
                <AssetPreview
                  name="Steps BG"
                  path={tokens.backgrounds.decorations.stepsBg}
                  type="decoration"
                />
                <AssetPreview
                  name="Chevron"
                  path={tokens.backgrounds.decorations.chevronDecoration}
                  type="decoration"
                />
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Brand Logos
              </h3>
              <div className="flex gap-6 flex-wrap items-end">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#faf9f5] rounded-lg p-4 border border-[#e2e8f0]">
                    <img
                      src={tokens.icons.brand.logo}
                      alt="Main Logo"
                      className="h-12"
                    />
                  </div>
                  <span className="font-outfit text-xs text-[#5f666e]">
                    Main Logo
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#1e3366] rounded-lg p-4">
                    <img
                      src={tokens.icons.brand.logoFooter}
                      alt="Footer Logo"
                      className="h-8"
                    />
                  </div>
                  <span className="font-outfit text-xs text-[#5f666e]">
                    Footer Logo
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Gradients
              </h3>
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col gap-2">
                  <div
                    className="w-48 h-16 rounded-lg"
                    style={{
                      background: tokens.gradients.footer,
                    }}
                  />
                  <span className="font-outfit text-xs text-[#5f666e]">
                    Footer / HowToInvest Gradient
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">
            Animations
          </h2>

          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] space-y-8">
            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Scroll Reveal Directions
              </h3>
              <p className="font-garamond text-[#5f666e] mb-6">
                Elements animate into view with configurable direction, delay,
                and stagger timing.
              </p>
              <AnimationDemo />
            </div>

            <div>
              <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">
                Stagger Animation
              </h3>
              <p className="font-garamond text-[#5f666e] mb-6">
                List items animate in sequence with configurable delay between
                each item.
              </p>
              <StaggerDemo />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#faf9f5] rounded-lg">
                <span className="font-outfit font-semibold text-sm text-[#1e3366]">
                  Duration
                </span>
                <p className="font-garamond text-[#5f666e]">600ms</p>
              </div>
              <div className="text-center p-4 bg-[#faf9f5] rounded-lg">
                <span className="font-outfit font-semibold text-sm text-[#1e3366]">
                  Translate
                </span>
                <p className="font-garamond text-[#5f666e]">30px</p>
              </div>
              <div className="text-center p-4 bg-[#faf9f5] rounded-lg">
                <span className="font-outfit font-semibold text-sm text-[#1e3366]">
                  Easing
                </span>
                <p className="font-garamond text-[#5f666e]">ease-out</p>
              </div>
              <div className="text-center p-4 bg-[#faf9f5] rounded-lg">
                <span className="font-outfit font-semibold text-sm text-[#1e3366]">
                  Stagger
                </span>
                <p className="font-garamond text-[#5f666e]">150ms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Grid */}
        <section>
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">
            Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Button */}
            <ComponentCard
              name="Primary Button"
              description="Main call-to-action button with green background. Used for primary actions like form submissions."
              code={`<button className="bg-[#4a934f] text-white px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase drop-shadow-[0px_6px_8px_rgba(74,147,79,0.2)] hover:bg-[#3d7a41] transition-colors">
  Primary Button
</button>`}
              prompt="Create a primary button component for Strategist Bank with green (#4a934f) background, white text, Outfit font semibold uppercase, rounded-md corners, and a green drop shadow. Include hover state that darkens the background."
            >
              <div className="flex justify-center">
                <PrimaryButton />
              </div>
            </ComponentCard>

            {/* Secondary Button */}
            <ComponentCard
              name="Secondary Button"
              description="Navy button with gold accent border. Used for secondary actions and navigation."
              code={`<button className="bg-[#1e3366] text-white px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase border-b-2 border-[#ebbc59] hover:bg-[#172a54] transition-colors">
  Secondary Button
</button>`}
              prompt="Create a secondary button component for Strategist Bank with navy (#1e3366) background, white text, Outfit font semibold uppercase, rounded-md corners, and a gold (#ebbc59) bottom border accent. Include hover state."
            >
              <div className="flex justify-center">
                <SecondaryButton />
              </div>
            </ComponentCard>

            {/* Outline Button */}
            <ComponentCard
              name="Outline Button"
              description="Cream background with orange border. Used for tertiary actions and alternative CTAs."
              code={`<button className="bg-[#faf9f5] text-[#e0512c] px-5 py-3 rounded-md font-outfit font-semibold text-[13px] uppercase border border-[#e0512c] hover:bg-[#f5f4f0] transition-colors">
  Outline Button
</button>`}
              prompt="Create an outline button component for Strategist Bank with cream (#faf9f5) background, orange (#e0512c) text and border, Outfit font semibold uppercase, rounded-md corners. Include hover state."
            >
              <div className="flex justify-center">
                <OutlineButton />
              </div>
            </ComponentCard>

            {/* Link Button */}
            <ComponentCard
              name="Link Button"
              description="Text link styled as a button with arrow. Used for navigation back to pages."
              code={`<a href="/" className="text-[#4a934f] font-outfit text-sm hover:underline">
  ← Back to home
</a>`}
              prompt="Create a text link component styled in green (#4a934f), Outfit font at 14px, with hover underline effect. Include left arrow for back navigation."
            >
              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-[#4a934f] font-outfit text-sm hover:underline"
                >
                  ← Back to home
                </a>
              </div>
            </ComponentCard>

            {/* Animated Section */}
            <ComponentCard
              name="Animated Section"
              description="Wrapper component that reveals children with scroll-triggered animations. Supports direction, delay, and responsive delays."
              code={`<AnimatedSection
  direction="up"
  delay={200}
  mobileDelay={0}
>
  <div>Content animates into view</div>
</AnimatedSection>`}
              prompt="Create an AnimatedSection wrapper component that uses IntersectionObserver to trigger reveal animations when scrolled into view. Support direction (up/down/left/right), configurable delay, and separate mobile delay. Use 600ms duration with ease-out easing."
            >
              <div className="flex justify-center">
                <div className="bg-[#11224d] text-white px-4 py-2 rounded-lg font-outfit text-sm">
                  Scroll-triggered reveal
                </div>
              </div>
            </ComponentCard>

            {/* Success Badge */}
            <ComponentCard
              name="Success Badge"
              description="Pill-shaped badge with icon for success states. Used in confirmation pages."
              code={`<div className="bg-[#ebf4ec] flex gap-2 items-center px-3 py-1.5 rounded-full">
  <img src="/images/check-icon.svg" alt="" className="size-4" />
  <span className="font-outfit font-bold text-[#4a934f] text-xs tracking-[1px] uppercase">
    Received
  </span>
</div>`}
              prompt="Create a success badge component with light green (#ebf4ec) background, rounded-full shape, check icon, and 'Received' text in Outfit bold uppercase with green color."
            >
              <div className="flex justify-center">
                <div className="bg-[#ebf4ec] flex gap-2 items-center px-3 py-1.5 rounded-full">
                  <svg
                    className="size-4 text-[#4a934f]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-outfit font-bold text-[#4a934f] text-xs tracking-[1px] uppercase">
                    Received
                  </span>
                </div>
              </div>
            </ComponentCard>

            {/* Status Badge */}
            <ComponentCard
              name="Status Badge"
              description="Small uppercase text badge. Used for status indicators like 'In Organization'."
              code={`<span className="font-outfit font-semibold text-[11px] uppercase tracking-wide text-[#4a934f]">
  In Organization
</span>`}
              prompt="Create a badge/label component for Strategist Bank using Outfit font, 11px size, semibold weight, uppercase with wide tracking, green (#4a934f) color."
            >
              <div className="flex justify-center">
                <span className="font-outfit font-semibold text-[11px] uppercase tracking-wide text-[#4a934f]">
                  In Organization
                </span>
              </div>
            </ComponentCard>

            {/* Dropdown */}
            <ComponentCard
              name="Dropdown Menu"
              description="Click-triggered dropdown with options. Closes on outside click or Escape."
              code={`<div className="relative">
  <button onClick={toggle}>Options ▼</button>
  {isOpen && (
    <div className="absolute bg-white rounded-lg shadow-lg border">
      <button className="hover:bg-[#f0f4f8]">Option 1</button>
    </div>
  )}
</div>`}
              prompt="Create a dropdown component with white background, border, shadow, and hover states. Support click-outside-to-close and escape key handling."
            >
              <div className="flex justify-center">
                <div className="bg-white border border-[#e2e8f0] rounded-lg shadow-md overflow-hidden">
                  <div className="px-4 py-2 text-sm font-outfit text-[#1e3366] hover:bg-[#f0f4f8]">
                    Option 1
                  </div>
                  <div className="px-4 py-2 text-sm font-outfit text-[#1e3366] hover:bg-[#f0f4f8]">
                    Option 2
                  </div>
                </div>
              </div>
            </ComponentCard>

            {/* Thank You Card */}
            <ComponentCard
              name="Thank You Card"
              description="Success confirmation card with staggered animations. Contains accent bar, logo, badge, heading, and CTA."
              code={`<div className="bg-white rounded-3xl shadow-xl p-14">
  <div className="bg-[#4a934f] h-1.5 rounded-full" />
  <img src="/images/logo.svg" />
  <div className="bg-[#ebf4ec] rounded-full">Received</div>
  <h1 className="text-[#2c4a92]">Thank You!</h1>
  <button className="bg-[#4a934f]">Back to Home</button>
</div>`}
              prompt="Create a thank you card component with white background, rounded-3xl, large shadow, green accent bar at top, logo, success badge, Thank You heading in blue (#2c4a92), description, and green CTA button. Each element should animate in with staggered delays."
            >
              <div className="flex justify-center">
                <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-lg p-4 w-full max-w-[180px]">
                  <div className="bg-[#4a934f] h-1 rounded-full w-full mb-3" />
                  <p className="font-outfit font-bold text-[#2c4a92] text-center text-lg">
                    Thank You!
                  </p>
                  <p className="font-garamond text-[#5f666e] text-xs text-center mt-1">
                    Your request was received
                  </p>
                </div>
              </div>
            </ComponentCard>

            {/* Step Card */}
            <ComponentCard
              name="Step Card"
              description="Investment step card with number, icon, title, description, and CTA button. Highlighted variant has green border."
              code={`<div className="bg-white rounded-xl border p-8 hover:-translate-y-2">
  <span className="font-barlow text-2xl">01</span>
  <img src="/images/icon-file.svg" />
  <h3 className="font-barlow text-[32px]">Review Offering</h3>
  <p className="font-garamond">Description text...</p>
  <button>Review Documents</button>
</div>`}
              prompt="Create a step card component with step number, icon, title (Barlow 32px), description (Garamond), and CTA button. Include hover lift effect (-8px translateY with enhanced shadow). Highlighted variant has green (#4a934f) 1.5px border."
            >
              <div className="flex justify-center">
                <div className="bg-white border-[1.5px] border-[#4a934f] rounded-xl p-4 w-full max-w-[180px] shadow-[0px_10px_24px_0px_rgba(74,147,79,0.08)]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-barlow font-bold text-lg text-[#4a934f]">
                      02
                    </span>
                    <svg className="size-4" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="15"
                        rx="2"
                        stroke="#4a934f"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-barlow font-bold text-[#1e3366]">
                    Complete & Fund
                  </h3>
                </div>
              </div>
            </ComponentCard>

            {/* Footer Tagline */}
            <ComponentCard
              name="Footer Tagline"
              description="Italic tagline in gold color. Used in footer brand section."
              code={`<p className="font-garamond italic text-[16px] text-[#ebbc59]">
  "A Bank that thinks like a Business."
</p>`}
              prompt="Create an italic tagline component using EB Garamond italic, 16px, gold (#ebbc59) color. Used for brand messaging."
            >
              <div className="flex justify-center">
                <p className="font-garamond italic text-base text-[#ebbc59]">
                  "A Bank that thinks like a Business."
                </p>
              </div>
            </ComponentCard>

            {/* Heading Styles */}
            <ComponentCard
              name="Heading Styles"
              description="Barlow Condensed Bold headings in various sizes. Used for all h1-h6 elements."
              code={`<h1 className="font-barlow font-bold text-[72px] text-[#11224d] leading-[1.05]">
  Hero Heading
</h1>
<h2 className="font-barlow font-bold text-[52px] text-[#2c4a92]">
  Section Title
</h2>
<h3 className="font-barlow font-bold text-[32px] text-[#1e3366]">
  Card Title
</h3>`}
              prompt="Create heading styles for Strategist Bank using Barlow Condensed Bold font. H1 is 72px navy (#11224d) with 1.05 line height. H2 is 52px blue-alt (#2c4a92). H3 is 32px blue (#1e3366). All headings should be bold."
            >
              <div className="space-y-2 text-left">
                <p className="font-barlow font-bold text-2xl text-[#11224d]">
                  Hero (72px)
                </p>
                <p className="font-barlow font-bold text-xl text-[#2c4a92]">
                  Section (52px)
                </p>
                <p className="font-barlow font-bold text-lg text-[#1e3366]">
                  Card (32px)
                </p>
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#e2e8f0]">
          <p className="font-garamond text-sm text-[#5f666e] text-center">
            Strategist Bank Design System v1.1.0 • Last updated: October 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
