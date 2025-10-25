import { AboutSection } from "../components/about-section";
import { BrandsSection } from "../components/brands-section";
import { CatalogSection } from "../components/catalog-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { HeroCarousel } from "../components/hero-carrusel";
import { Navbar } from "../components/navbar";
import { TestimonialsSection } from "../components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <CatalogSection />
      <AboutSection />
      <TestimonialsSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

