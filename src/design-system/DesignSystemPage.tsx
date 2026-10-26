import { ComponentCard } from "./components/ComponentCard";
import { tokens } from "./tokens";

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
function ColorSwatch({ name, hex, textDark = false }: { name: string; hex: string; textDark?: boolean }) {
  return (
    <div className="flex flex-col">
      <div 
        className={`h-16 rounded-lg flex items-end p-2 ${textDark ? "text-[#11224d]" : "text-white"}`}
        style={{ backgroundColor: hex }}
      >
        <span className="font-outfit text-xs font-semibold">{hex}</span>
      </div>
      <span className="font-garamond text-sm text-[#5f666e] mt-1">{name}</span>
    </div>
  );
}

// Typography sample
function TypographySample() {
  return (
    <div className="space-y-3 text-left">
      <p className="font-barlow font-bold text-3xl text-[#11224d]">Barlow Condensed Bold</p>
      <p className="font-garamond text-lg text-[#5f666e]">EB Garamond Regular - Body text style</p>
      <p className="font-outfit font-semibold text-sm text-[#1e3366] uppercase">Outfit Semibold - UI Text</p>
    </div>
  );
}

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Header */}
      <header className="bg-[#11224d] text-white py-12 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-barlow font-bold text-4xl md:text-5xl">
            Strategist Bank Design System
          </h1>
          <p className="font-garamond text-lg text-[#7a99c1] mt-2">
            Component library and design tokens for consistent brand implementation
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-12">
        {/* Color Tokens Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">Color Tokens</h2>
          
          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
            <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <ColorSwatch name="Navy" hex={tokens.colors.primary.navy} />
              <ColorSwatch name="Blue" hex={tokens.colors.primary.blue} />
              <ColorSwatch name="Blue Dark" hex={tokens.colors.primary.blueDark} />
            </div>

            <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">Secondary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <ColorSwatch name="Green" hex={tokens.colors.secondary.green} />
              <ColorSwatch name="Gold" hex={tokens.colors.secondary.gold} textDark />
              <ColorSwatch name="Orange" hex={tokens.colors.secondary.orange} />
            </div>

            <h3 className="font-barlow font-bold text-lg text-[#1e3366] mb-4">Neutral Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <ColorSwatch name="Cream" hex={tokens.colors.neutral.cream} textDark />
              <ColorSwatch name="White" hex={tokens.colors.neutral.white} textDark />
              <ColorSwatch name="Gray" hex={tokens.colors.neutral.gray} />
              <ColorSwatch name="Gray Light" hex={tokens.colors.neutral.grayLight} />
              <ColorSwatch name="Border" hex={tokens.colors.neutral.border} textDark />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">Typography</h2>
          
          <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
            <TypographySample />
          </div>
        </section>

        {/* Components Grid */}
        <section>
          <h2 className="font-barlow font-bold text-2xl text-[#11224d] mb-6">Components</h2>
          
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

            {/* Heading Styles */}
            <ComponentCard
              name="Heading Styles"
              description="Barlow Condensed Bold headings in various sizes. Used for all h1-h6 elements."
              code={`<h1 className="font-barlow font-bold text-[72px] text-[#11224d] leading-[1.05]">
  Hero Heading
</h1>
<h2 className="font-barlow font-bold text-[52px] text-[#11224d]">
  Section Title
</h2>
<h3 className="font-barlow font-bold text-[32px] text-[#1e3366]">
  Card Title
</h3>`}
              prompt="Create heading styles for Strategist Bank using Barlow Condensed Bold font. H1 is 72px navy (#11224d) with 1.05 line height. H2 is 52px navy. H3 is 32px blue (#1e3366). All headings should be bold."
            >
              <div className="space-y-2 text-left">
                <p className="font-barlow font-bold text-3xl text-[#11224d]">Hero Heading (72px)</p>
                <p className="font-barlow font-bold text-2xl text-[#11224d]">Section Title (52px)</p>
                <p className="font-barlow font-bold text-xl text-[#1e3366]">Card Title (32px)</p>
              </div>
            </ComponentCard>

            {/* Body Text */}
            <ComponentCard
              name="Body Text"
              description="EB Garamond Regular for all body content. Provides elegant, readable text."
              code={`<p className="font-garamond text-[18px] text-[#5f666e] leading-normal">
  Body text content goes here. EB Garamond provides an elegant, 
  professional look for longer content.
</p>`}
              prompt="Create body text styles for Strategist Bank using EB Garamond font at 18px, gray (#5f666e) color, with normal (1.5) line height. This is used for descriptions, paragraphs, and general content."
            >
              <p className="font-garamond text-lg text-[#5f666e] leading-normal text-left">
                Body text content goes here. EB Garamond provides an elegant, professional look for longer content and descriptions.
              </p>
            </ComponentCard>

            {/* Badge */}
            <ComponentCard
              name="Badge / Label"
              description="Small uppercase text using Outfit font. Used for status indicators and labels."
              code={`<span className="font-outfit font-semibold text-[11px] uppercase tracking-wide text-[#4a934f]">
  In Organization
</span>`}
              prompt="Create a badge/label component for Strategist Bank using Outfit font, 11px size, semibold weight, uppercase with wide tracking, green (#4a934f) color. Used for status indicators like 'In Organization'."
            >
              <div className="flex justify-center">
                <span className="font-outfit font-semibold text-[11px] uppercase tracking-wide text-[#4a934f]">
                  In Organization
                </span>
              </div>
            </ComponentCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#e2e8f0]">
          <p className="font-garamond text-sm text-[#5f666e] text-center">
            Strategist Bank Design System v1.0.0 • Last updated: October 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
