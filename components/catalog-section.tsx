"use client"

import { Music, Radio, Monitor, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"



const products = [
  {
    category: "Instrumentos Musicales",
    icon: Music,
    items: [
      {
        name: "Guitarra Eléctrica Fender",
        description: "Stratocaster profesional con amplificador",
        price: "$8.000/día",
        image: "/fender-stratocaster-electric-guitar.jpg",
      },
      {
        name: "Batería Acústica Pearl",
        description: "Set completo con platillos Zildjian",
        price: "$15.000/día",
        image: "/pearl-acoustic-drum-set.jpg",
      },
      {
        name: "Teclado Yamaha",
        description: "Piano digital 88 teclas contrapesadas",
        price: "$10.000/día",
        image: "/yamaha-digital-piano-keyboard.jpg",
      },
    ],
  },
  {
    category: "Consolas y Equipos de Sonido",
    icon: Radio,
    items: [
      {
        name: "Consola Digital Yamaha",
        description: "Mezcladora 32 canales con efectos",
        price: "$25.000/día",
        image: "/yamaha-digital-mixing-console.jpg",
      },
      {
        name: "Sistema de Altavoces JBL",
        description: "Line array profesional 2000W",
        price: "$30.000/día",
        image: "/jbl-professional-speakers-line-array.jpg",
      },
      {
        name: "Micrófonos Shure",
        description: "Set de 8 micrófonos inalámbricos",
        price: "$12.000/día",
        image: "/shure-wireless-microphones.jpg",
      },
    ],
  },
  {
    category: "Pantallas LED",
    icon: Monitor,
    items: [
      {
        name: "Pantalla LED P3.9",
        description: "Módulos 6x3m alta resolución indoor/outdoor",
        price: "$50.000/día",
        image: "/led-screen-stage-display.jpg",
      },
      {
        name: "Pantalla LED P2.6",
        description: "Ultra HD para eventos corporativos",
        price: "$70.000/día",
        image: "/ultra-hd-led-display-screen.jpg",
      },
    ],
  },
  {
    category: "Iluminación Profesional",
    icon: Lightbulb,
    items: [
      {
        name: "Moving Heads Chauvet",
        description: "Set de 8 cabezales móviles LED",
        price: "$20.000/día",
        image: "/chauvet-moving-head-lights.jpg",
      },
      {
        name: "Par LED RGBW",
        description: "Pack de 12 reflectores LED",
        price: "$15.000/día",
        image: "/led-par-lights-rgbw.jpg",
      },
    ],
  },
]

export function CatalogSection() {
  return (
    <section id="catalog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestro Catálogo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Equipos profesionales de las mejores marcas para tus eventos y producciones
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <category.icon className="h-8 w-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{item.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Cotizar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
