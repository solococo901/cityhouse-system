import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import JourneySection from "@/components/home/JourneySection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProductLinesSection from "@/components/home/ProductLinesSection";
import ServiceSection from "@/components/home/ServiceSection";
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";
import PartnerLogosSection from "@/components/home/PartnerLogosSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <PortfolioSection />
        <ProductLinesSection />
        <ServiceSection />
        <PartnerLogosSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}