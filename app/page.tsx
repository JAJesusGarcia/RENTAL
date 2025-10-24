import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { CatalogSection } from "@/components/catalog-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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

