import { Heart, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/andressarodriguesdev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/andressa-macedo-rodrigues/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:andressa.rodrigues.2172@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contato", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent">
              Andressa Rodrigues
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvedora Backend Java, Spring Boot e arquiteturas modernas. 
              Criando soluções escaláveis e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Brasília, DF - Brasil</p>
              <a 
                href="mailto:andressa.rodrigues.2172@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                andressa.rodrigues.2172@gmail.com
              </a>
              <a 
                href="tel:+5511981667461"
                className="block hover:text-primary transition-colors"
              >
                +55 (61) 98122-7461
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Andressa Macedo Rodrigues. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>usando React + TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  )
}