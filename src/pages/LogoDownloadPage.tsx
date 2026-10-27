import { useState, useRef, useEffect } from "react";

type ImageFormat = "svg" | "png" | "jpg" | "gif" | "bmp";

const FORMAT_OPTIONS: { value: ImageFormat; label: string; mimeType: string }[] = [
  { value: "svg", label: "SVG (Vector)", mimeType: "image/svg+xml" },
  { value: "png", label: "PNG", mimeType: "image/png" },
  { value: "jpg", label: "JPG", mimeType: "image/jpeg" },
  { value: "gif", label: "GIF", mimeType: "image/gif" },
  { value: "bmp", label: "BMP", mimeType: "image/bmp" },
];

export function LogoDownloadPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const downloadLogo = async (format: ImageFormat) => {
    setIsConverting(true);
    setIsOpen(false);

    try {
      if (format === "svg") {
        // Direct SVG download
        const response = await fetch("/assets/logo.svg");
        const svgText = await response.text();
        const blob = new Blob([svgText], { type: "image/svg+xml" });
        triggerDownload(blob, `strategist-bank-logo.${format}`);
      } else {
        // Convert SVG to raster format using canvas
        const response = await fetch("/assets/logo.svg");
        const svgText = await response.text();
        
        // Create an image from SVG
        const img = new Image();
        const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
        const url = URL.createObjectURL(svgBlob);

        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Failed to load SVG"));
          img.src = url;
        });

        // Create canvas and draw image
        const canvas = document.createElement("canvas");
        // Use a reasonable size for raster exports
        const scale = 2; // 2x for better quality
        canvas.width = img.width * scale || 800;
        canvas.height = img.height * scale || 400;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Could not get canvas context");

        // For formats that don't support transparency, add white background
        if (format === "jpg" || format === "bmp") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        // Convert to desired format
        const formatConfig = FORMAT_OPTIONS.find((f) => f.value === format);
        const mimeType = formatConfig?.mimeType || "image/png";
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              triggerDownload(blob, `strategist-bank-logo.${format}`);
            }
          },
          mimeType,
          format === "jpg" ? 0.95 : undefined
        );
      }
    } catch (error) {
      console.error("Error downloading logo:", error);
      alert("Failed to download logo. Please try again.");
    } finally {
      setIsConverting(false);
    }
  };

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col items-center justify-center p-8">
      {/* Logo display */}
      <div className="mb-12">
        <img
          src="/assets/logo.svg"
          alt="Strategist Bank Logo"
          className="max-w-md w-full h-auto"
        />
      </div>

      {/* Download button with dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isConverting}
          className="flex items-center gap-2 bg-[#1e3366] text-white px-6 py-3 rounded-lg font-outfit font-semibold text-sm uppercase tracking-wide hover:bg-[#172a54] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          {isConverting ? (
            <>
              <svg className="animate-spin size-5" viewBox="0 0 24 24" fill="none">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Converting...
            </>
          ) : (
            <>
              Download Logo
              <svg
                className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-[#e2e8f0] overflow-hidden z-10"
            role="listbox"
          >
            {FORMAT_OPTIONS.map((format) => (
              <button
                key={format.value}
                onClick={() => downloadLogo(format.value)}
                className="w-full px-4 py-3 text-left font-outfit text-sm text-[#1e3366] hover:bg-[#f0f4f8] transition-colors flex items-center justify-between"
                role="option"
              >
                <span>{format.label}</span>
                <span className="text-xs text-[#5f666e] uppercase">.{format.value}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Back link */}
      <a
        href="/"
        className="mt-8 text-[#4a934f] font-outfit text-sm hover:underline"
      >
        ← Back to home
      </a>
    </div>
  );
}
