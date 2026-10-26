import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HowToInvest } from "@/components/sections/HowToInvest";
import { CommunitySection } from "@/components/sections/CommunitySection";

export function SplashPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1">
        <HowToInvest />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
