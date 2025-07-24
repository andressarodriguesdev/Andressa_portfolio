import { Code, Database, Server, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Desenvolvimento com foco em código limpo, legível e manutenível"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Modelagem e otimização de bancos de dados relacionais"
    },
    {
      icon: Server,
      title: "APIs REST",
      description: "Criação de APIs documentadas seguindo padrões REST"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de práticas de segurança e autenticação em aplicações"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou desenvolvedora de software em constante evolução, com vivência prática em projetos full stack e mobile. Já participei de soluções como o AdminStay, ChamaElas, Capivara System e um app Android com interface em XML. Atuei também como estagiária de banco de dados . Tenho experiência com Java, Spring Boot, React, Node.js, Docker e bancos relacionais. Busco desafios onde eu possa crescer, colaborar e criar soluções com impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}