import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Admin Stay - gerenciamento de hospedagens",
      description: "AdminStay API é um sistema back‑end em Java  + Spring Boot para gerenciamento de hotéis (clientes, quartos e reservas). O projeto prioriza boas práticas REST, documentação automática via Swagger e testes.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "JUnit", "Docker","Swagger","React"],
      githubUrl: "https://github.com/andressarodriguesdev/Admin_Stay.git",
      liveUrl: "https://admin-stay-front.vercel.app/",
      image: "/img/bento-1.png",
      featured: true
    },
    {
      title: "Capivara Management System - catálogo de capivaras",
      description: "Capivara Management System é um software desenvolvido para ajudar na catalogação de capivaras em zoológicos, substituindo o registro manual e facilitando a organização de informações como idade, peso, estado de saúde, e foto via URL.",
      technologies: ["Nodejs", "Vue", "MySQL","Docker"],
      githubUrl: "https://github.com/andressarodriguesdev/capivara_system.git",
      image: "/img/bento-2.png",
      featured: true
    },
    {
      title: "Chama Elas - sistema de Chamados Técnicos",
      description: "Sistema de Chamados Técnicos para gestão de solicitações de serviços, com funcionalidades de criação, acompanhamento e resolução de chamados. Desenvolvido com foco em usabilidade e eficiência.",
      technologies: ["Java", "Spring Boot", "Swagger", "Junit", "Bootstrap", "Mockito", "MySQL"],
      githubUrl: "https://github.com/andressarodriguesdev/chamaelas.git",
      image: "/img/bento-3.png",
      featured: false
    },
    {
      title: "Frases Abençoadas - app de frases motivacionais",
      description: "Um aplicativo Android simples desenvolvido em Kotlin, que exibe frases abençoadas de forma aleatória para inspirar seu dia!",
      technologies: ["Kotlin", "Studio Android", "XML"],
      githubUrl:"https://github.com/andressarodriguesdev/FrasesAbencoadas.",
       image: "/img/bento-4.png",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Meus Projetos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
            em desenvolvimento backend, arquitetura de software e boas práticas de programação.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft-lg hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-gradient-primary/90 text-white border-0">
                      Destaque
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="hover:bg-primary/10 hover:border-primary"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-gradient-primary hover:bg-gradient-primary/80"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-1 hover:bg-primary/10 hover:border-primary"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
