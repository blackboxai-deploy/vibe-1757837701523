import HeroSection from "@/components/HeroSection";
import ImpactCounters from "@/components/ImpactCounters";
import HopeSection from "@/components/HopeSection";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import StickyDonateButton from "@/components/StickyDonateButton";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with emotional impact and main CTA */}
      <HeroSection />
      
      {/* Impact Counters showing foundation's achievements */}
      <ImpactCounters />
      
      {/* Hope Section with donation breakdown and transformation story */}
      <HopeSection />
      
      {/* Instagram Feed showing real impact and authenticity */}
      <InstagramFeed />
      
      {/* Footer with complete information and trust signals */}
      <Footer />
      
      {/* Sticky Donate Button for constant accessibility */}
      <StickyDonateButton />
    </main>
  );
}