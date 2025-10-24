export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Pasión por el sonido y la imagen
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-balance">
                En <span className="text-primary font-semibold">Audio Arte Rental</span> combinamos experiencia técnica
                con pasión por la música y la tecnología visual.
              </p>
              <p className="text-balance">
                Brindamos soluciones integrales en sonido, iluminación y pantallas LED para eventos de cualquier escala,
                desde conciertos íntimos hasta grandes producciones audiovisuales.
              </p>
              <p className="text-balance">
                Nuestro equipo de profesionales garantiza un servicio de excelencia, con equipos de última generación y
                soporte técnico especializado para que tu evento sea un éxito total.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Eventos realizados</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/audio-technician-working-stage-setup.jpg"
                alt="Equipo técnico trabajando"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
