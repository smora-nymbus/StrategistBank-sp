import { useState, useRef, useEffect } from "react";

interface ComponentCardProps {
  name: string;
  description: string;
  children: React.ReactNode;
  code: string;
  prompt: string;
}

export function ComponentCard({
  name,
  description,
  children,
  code,
  prompt,
}: ComponentCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
      setDropdownOpen(false);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] flex flex-col overflow-visible">
      {/* Preview Area */}
      <div className="bg-[#faf9f5] p-6 min-h-48 flex items-center justify-center border-b border-[#e2e8f0]">
        <div className="w-full">{children}</div>
      </div>

      {/* Info Area */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="font-barlow font-bold text-lg text-[#11224d]">
            {name}
          </h3>
          <p className="font-garamond text-sm text-[#5f666e] mt-1">
            {description}
          </p>
        </div>

        {/* Copy Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full px-4 py-2 bg-[#1e3366] text-white font-outfit font-semibold text-xs uppercase rounded-md flex items-center justify-between hover:bg-[#172a54] transition-colors"
          >
            <span>{copied ? `Copied ${copied}!` : "Copy"}</span>
            <svg
              className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-md shadow-lg z-50 overflow-hidden">
              <button
                onClick={() => copyToClipboard(code, "Code")}
                className="w-full px-4 py-3 text-left font-outfit text-sm text-[#11224d] hover:bg-[#faf9f5] transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Copy Code
              </button>
              <button
                onClick={() => copyToClipboard(prompt, "Prompt")}
                className="w-full px-4 py-3 text-left font-outfit text-sm text-[#11224d] hover:bg-[#faf9f5] transition-colors flex items-center gap-2 border-t border-[#e2e8f0]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                Copy Prompt
              </button>
              <button
                onClick={() =>
                  copyToClipboard(
                    `${prompt}\n\n---\n\nCode:\n\`\`\`tsx\n${code}\n\`\`\``,
                    "Both",
                  )
                }
                className="w-full px-4 py-3 text-left font-outfit text-sm text-[#11224d] hover:bg-[#faf9f5] transition-colors flex items-center gap-2 border-t border-[#e2e8f0]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Both
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
