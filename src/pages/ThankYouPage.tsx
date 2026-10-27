import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation on page load
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8"
      style={{
        backgroundImage: "url('/images/SuccessMessage-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#faf9f5",
      }}
    >
      {/* Success Card */}
      <div
        className="bg-white border border-[#e2e8f0] rounded-3xl shadow-[0px_18px_24px_rgba(0,0,0,0.08),0px_2px_4px_rgba(0,0,0,0.06)] flex flex-col gap-6 p-8 sm:p-10 md:p-14 w-full max-w-190"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.98)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        {/* Brand Accent Bar */}
        <div
          className="bg-[#4a934f] h-1.5 rounded-full w-full origin-left"
          style={{
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.6s ease-out 0.3s",
          }}
        />

        {/* Header with Logo and Status Badge */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition:
              "opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s",
          }}
        >
          <img
            src="/images/logo.svg"
            alt="Strategist Bank"
            className="h-10 sm:h-12 md:h-14.25 w-auto"
          />
          <div className="bg-[#ebf4ec] flex gap-2 items-center px-3 py-1.5 rounded-full">
            <img
              src="/images/check-icon.svg"
              alt=""
              className="size-4"
              aria-hidden="true"
            />
            <span className="font-outfit font-bold text-[#4a934f] text-xs tracking-[1px] uppercase">
              Received
            </span>
          </div>
        </div>

        {/* Thank You Heading */}
        <h1
          className="font-outfit font-extrabold leading-[1.1] text-[#2c4a92] text-3xl sm:text-4xl md:text-[52px] text-center w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition:
              "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s",
          }}
        >
          Thank You!
        </h1>

        {/* Description */}
        <p
          className="font-garamond font-normal leading-[1.6] text-[#1a1d20] text-base sm:text-lg text-center w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition:
              "opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s",
          }}
        >
          Your interest has been received. A member of the Strategist Bank
          formation team will contact you about the qualification process and
          next steps.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="bg-[#4a934f] flex h-14 items-center justify-center rounded-xl w-full hover:bg-[#3d7a41] transition-colors"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition:
              "opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s, background-color 0.2s ease",
          }}
        >
          <span className="font-outfit font-bold text-[15px] text-white tracking-[1px] uppercase">
            Back to Home
          </span>
        </Link>

        {/* Disclaimer */}
        <p
          className="font-garamond font-normal leading-normal text-[#5f666e] text-[13px] text-center w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.8s",
          }}
        >
          Strategist bank is in formation. An investment is not a bank deposit,
          is not FDIC insured, and involves significant risk of capital loss.
        </p>
      </div>
    </div>
  );
}
