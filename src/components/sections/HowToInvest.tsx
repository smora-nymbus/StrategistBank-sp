interface StepCardProps {
  step: string;
  stepColor: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
  isHighlighted?: boolean;
}

function StepCard({
  step,
  stepColor,
  icon,
  iconAlt,
  title,
  description,
  buttonText,
  buttonVariant,
  isHighlighted = false,
}: StepCardProps) {
  const cardStyles = isHighlighted
    ? "border-[#4a934f] border-[1.5px] shadow-[0px_10px_24px_0px_rgba(74,147,79,0.08),0px_4px_24px_0px_rgba(0,0,0,0.03)]"
    : "border-[#e2e8f0] border drop-shadow-[0px_2px_5px_rgba(0,0,0,0.04)]";

  const buttonStyles = {
    primary:
      "bg-[#4a934f] text-white drop-shadow-[0px_6px_8px_rgba(74,147,79,0.2)] cursor-pointer hover:bg-[#3d7a41]",
    secondary:
      "bg-[#1e3366] text-white border-b-2 border-[#ebbc59] drop-shadow-[0px_6px_8px_rgba(224,81,44,0.08)] hover:bg-[#172a54]",
    outline:
      "bg-[#faf9f5] text-[#e0512c] border border-solid border-[#e0512c] drop-shadow-[0px_6px_8px_rgba(224,81,44,0.08)] hover:bg-[#f5f4f0]",
  };

  return (
    <div
      className={`bg-white rounded-xl flex flex-col w-full lg:flex-1 lg:min-w-0 overflow-hidden p-6 lg:p-8 ${cardStyles}`}
    >
      {/* Top content - fills available space */}
      <div className="flex flex-col flex-1 gap-4 lg:gap-6 w-full min-h-0">
        {/* Step number and icon */}
        <div className="flex items-center justify-between w-full shrink-0">
          <span
            className="font-barlow font-bold text-xl lg:text-2xl"
            style={{ color: stepColor }}
          >
            {step}
          </span>
          <img src={icon} alt={iconAlt} className="size-5 lg:size-6" />
        </div>

        {/* Title and description */}
        <div className="flex flex-col flex-1 gap-2 lg:gap-3 w-full min-h-0">
          <h3 className="font-barlow font-bold text-2xl lg:text-[32px] text-[#1e3366] leading-tight shrink-0">
            {title}
          </h3>
          <p className="font-garamond text-base lg:text-[18px] text-[#5f666e] leading-normal flex-1 overflow-hidden">
            {description}
          </p>
        </div>
      </div>

      {/* Action button - always at bottom */}
      <button
        className={`w-full mt-4 lg:mt-6 px-4 lg:px-5 py-3 rounded-md font-outfit font-semibold text-[12px] lg:text-[13px] uppercase text-center transition-colors shrink-0 ${buttonStyles[buttonVariant]}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export function HowToInvest() {
  const steps: StepCardProps[] = [
    {
      step: "01",
      stepColor: "#171b18",
      icon: "/images/icon-file.svg",
      iconAlt: "Document icon",
      title: "Review Offering",
      description:
        "Read and download the offering memorandum or circular for the full terms and details of the investment.",
      buttonText: "Review offering documents",
      buttonVariant: "secondary",
    },
    {
      step: "02",
      stepColor: "#4a934f",
      icon: "/images/icon-credit-card.svg",
      iconAlt: "Credit card icon",
      title: "Complete & Fund",
      description:
        "Complete the subscription agreement, then use the provided wiring instructions to fund your investment.",
      buttonText: "Complete and fund investment",
      buttonVariant: "primary",
      isHighlighted: true,
    },
    {
      step: "03",
      stepColor: "#e0512c",
      icon: "/images/icon-phone.svg",
      iconAlt: "Phone icon",
      title: "Have Questions?",
      description:
        "Schedule a call with management or a founder before you proceed with your commitment.",
      buttonText: "Schedule a call",
      buttonVariant: "outline",
    },
  ];

  return (
    <section className="relative bg-linear-to-r from-[#1e3366] from-[55.29%] to-[#0f1b2d] flex flex-col gap-6 md:gap-8 px-5 sm:px-10 md:px-16 lg:px-20 py-6 md:py-9 w-full">
      {/* Background decoration - hidden on mobile */}
      <img
        src="/images/steps-bg.svg"
        alt=""
        className="hidden md:block absolute left-0 top-0 w-140.25 h-96 pointer-events-none"
        aria-hidden="true"
      />

      {/* Steps container */}
      <div className="relative bg-[#11224d] border-[0.5px] border-[#EBBC59]/20 rounded-2xl md:rounded-3xl overflow-hidden p-4 md:pb-5.5 md:pt-4.5 md:px-5 w-full">
        {/* Chevron decoration - hidden on mobile */}
        <img
          src="/images/chevron-decoration.svg"
          alt=""
          className="hidden md:block absolute -right-10.25 -bottom-4.25 size-30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Steps grid */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-6 p-2 lg:p-3 w-full">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
