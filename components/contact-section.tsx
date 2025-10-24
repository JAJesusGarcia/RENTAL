"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Instagram, MessageCircle, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Necesitás cotizar o tenés una consulta?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Estamos para ayudarte a hacer realidad tu evento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Contanos sobre tu evento o consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border text-foreground min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+54 341 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@audioarterental.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground mb-4">Seguinos en redes</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors group"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors group"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
