import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Database, 
  Server, 
  Settings,
  Palette,
  Globe,
  Cpu,
  TestTube2
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "from-pink-500 to-purple-600",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend", 
      icon: Server,
      color: "from-blue-500 to-indigo-600",
      skills: ["Java", "Spring Boot", "Node.js", "Express", "PostgreSQL"]
    },
    {
      title: "DevOps",
      icon: Globe,
      color: "from-green-500 to-teal-600", 
      skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD"]
    },
    {
      title: "Tools",
      icon: Settings,
      color: "from-orange-500 to-red-600",
      skills: ["VS Code", "Figma", "Postman",  "Jira"]
    }
  ]

  const additionalSkills = [
   
    {
      category: "Frameworks",
      icon: Server, 
      skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate"]
    },
    {
      category: "Bancos de Dados",
      icon: Database,
      skills: ["MySQL", "PostgreSQL",  "H2"]
    },
    {
      category: "Testing",
      icon: TestTube2,
      skills: ["JUnit", "Mockito", "TestContainers" ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Minhas Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções eficientes e escaláveis.
          </p>
        </div>

        {/* Main Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs mx-1">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalSkills.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Competences */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-0 shadow-soft-lg">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-center">Outras Competências</h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="font-semibold mb-3 text-primary">Metodologias</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Scrum", "Kanban", "Agile"].map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold mb-3 text-primary">Ferramentas</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["IntelliJ IDEA", "VS Code", "Swagger", "Jira"].map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold mb-3 text-primary">Soft Skills</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Trabalho em Equipe", "Comunicação", "Resolução de Problemas", "Criatividade", "Organização"].map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}