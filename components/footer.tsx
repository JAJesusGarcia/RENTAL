import { Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Audio Arte Rental</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              YouTube
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 Audio Arte Rental — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
