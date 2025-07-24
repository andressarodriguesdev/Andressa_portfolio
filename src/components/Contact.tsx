import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import {Chatbot} from "@/components/Chatbot"
import { ChatbotFixed } from "@/components/ChatbotFixed"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigada pelo contato! Retornarei em breve.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "andressa.rodrigues.2172@gmail.com",
      href: "mailto:andressa.rodrigues.2172@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (61) 98122-7461",
      href: "tel:+5561981227461"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Brasília, DF - Brasil",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/andressa-macedo",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/andressamacedo",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:andressa.macedo@exemplo.com",
      color: "hover:text-red-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Estou sempre aberta a novas oportunidades, projetos interessantes ou uma boa conversa sobre tecnologia. Você pode entrar em contato diretamente comigo ou conversar com a Laura, minha assistente virtual — desenvolvida especialmente para melhorar a experiência de recrutadores aqui no portfólio!
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ChatbotFixed />
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-soft-lg">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Informações de Contato</h3>
                <p className="text-muted-foreground">
                  Prefere entrar em contato diretamente? Aqui estão minhas informações:
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

           
          

            {/* Availability */}
         
         
          </div>
          

        </div>
      </div>
    </section>
  )
}