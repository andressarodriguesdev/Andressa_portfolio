import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-image.jpg"
import { FaWhatsapp } from "react-icons/fa";





export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    window.open("/Andressa_Rodrigues.pdf", "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
     <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none"></div>

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-primary">Olá, eu sou</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Andressa
                </span>
                <br />
                <span className="text-foreground">Rodrigues</span>
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Desenvolvedora Software
              </h3>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Desenvolvedora de software com forte interesse em criar soluções que unam eficiência, organização e impacto real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-primary/80 border-0 shadow-glow"
                onClick={() => window.open("mailto: andressa.rodrigues.2172@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              
              <Button 
              
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10"
                onClick={() => window.open("https://github.com/andressarodriguesdev", "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10"
                onClick={() => window.open("https://www.linkedin.com/in/andressa-macedo-rodrigues/", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
             <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open("https://wa.me/5561981227461", "_blank")}
                >
                  <FaWhatsapp className="h-6 w-6" />
                </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/img/hero-image.jpg"
                alt="Andressa Macedo - Desenvolvedora Backend" 
                className="w-[500px] h-auto rounded-3xl shadow-soft-lg mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}