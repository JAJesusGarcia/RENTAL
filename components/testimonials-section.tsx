import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Estudio XYZ",
    role: "Productora Musical",
    content:
      "Excelente servicio y equipos impecables. Todo funcionó perfecto durante nuestro show en vivo. El equipo técnico fue muy profesional.",
    rating: 5,
  },
  {
    name: "Eventos Rosario",
    role: "Organizadora de Eventos",
    content:
      "La pantalla LED se veía increíble, el montaje fue rápido y profesional. Sin dudas volveremos a trabajar con ellos.",
    rating: 5,
  },
  {
    name: "Teatro Municipal",
    role: "Centro Cultural",
    content:
      "Alquilamos equipos de sonido e iluminación para nuestra temporada teatral. Calidad excepcional y atención personalizada.",
    rating: 5,
  },
  {
    name: "DJ Martín López",
    role: "Músico Profesional",
    content:
      "Los instrumentos están en perfecto estado y el precio es muy competitivo. Recomiendo 100% para músicos exigentes.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-balance">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
