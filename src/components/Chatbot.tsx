import { useState } from "react"
import { GoogleGenAI } from "@google/genai"
import { MessageCircle, X, Send, Download, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { baseContext } from "../data/laura-context"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
})

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Olá! Sou a Laura, assistente virtual da Andressa. Como posso ajudá-lo a saber mais sobre a Andressa e seu currículo? 😊",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setLoading(true)

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Você é Laura, assistente virtual da Andressa Rodrigues. Baseie suas respostas exclusivamente nas informações a seguir:

${baseContext}

Se a pergunta "${inputMessage}" estiver fora do contexto dessas informações, responda educadamente que não pode responder essa pergunta.

Pergunta: ${inputMessage}

Resposta:`,
      })

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text || "Desculpe, não entendi sua pergunta.",
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Erro ao chamar Gemini:", error)
      const fallbackMessage: Message = {
        id: (Date.now() + 2).toString(),
        content:
          "Ops, tive um problema para responder. Pode tentar novamente em alguns instantes?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadCV = () => {
    window.open("/Andressa_Rodrigues.pdf", "_blank")
  }

  return (
    <>
      {/* Botão para abrir chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg bg-gradient-primary hover:bg-gradient-primary/80 border-0"
          disabled={loading}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Janela do chatbot */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/20 backdrop-blur-sm">
          <Card className="w-full max-w-md h-[600px] bg-background border-0 shadow-2xl animate-scale-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-primary text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Laura - Chatbot</h3>
                  <p className="text-xs text-white/80">
                    Montei um chatbot aqui que conhece todas as minhas habilidades, experiências e tem uma cópia do meu CV/Resume.
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
                disabled={loading}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex flex-col h-[calc(100%-120px)] p-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.isBot ? "" : "flex-row-reverse space-x-reverse"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full ${
                          message.isBot ? "bg-primary/10" : "bg-muted"
                        }`}
                      >
                        {message.isBot ? (
                          <Bot className="h-4 w-4 text-primary" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.isBot
                            ? "bg-muted"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t bg-muted/30">
                <Button
                  onClick={handleDownloadCV}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/80"
                  size="sm"
                  disabled={loading}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Baixar currículo
                </Button>
              </div>

              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Digite sua pergunta sobre o currículo..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                    disabled={loading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-primary hover:bg-gradient-primary/80"
                    disabled={loading}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
