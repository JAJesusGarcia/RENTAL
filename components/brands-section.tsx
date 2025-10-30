import Image from "next/image"

const brands = [
  { name: "Yamaha", logo: "/yamaha-logo.jpg" },
  { name: "Shure", logo: "/shure-logo.jpg" },
  { name: "Pioneer", logo: "/placeholder.svg?height=80&width=160" },
  { name: "JBL", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Chauvet", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Pearl", logo: "/placeholder.svg?height=80&width=160" },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-foreground mb-12 text-balance">
          Trabajamos con las mejores marcas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="relative h-12 w-40">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
