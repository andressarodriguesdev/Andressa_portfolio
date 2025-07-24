// components/ChatWindow.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Download, Send, User, X } from "lucide-react"
import { baseContext } from "../data/laura-context" // ajuste o caminho conforme seu projeto



interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

interface ChatWindowProps {
  messages: Message[]
  inputMessage: string
  setInputMessage: (msg: string) => void
  loading: boolean
  onSend: () => void
  onClose?: () => void
  showDownload?: boolean
}

export function ChatWindow({
  messages,
  inputMessage,
  setInputMessage,
  loading,
  onSend,
  onClose,
  showDownload = true,
}: ChatWindowProps) {
  const handleDownloadCV = () => {
    window.open("/Andressa_Rodrigues.pdf", "_blank")

    
  }

  return (
    <Card className="w-full min-h-[500px] p-4 shadow-lg rounded-2xl">
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
              Montei um chatbot aqui que conhece todas as minhas habilidades e experiências.
            </p>
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
            disabled={loading}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>

      <CardContent className="flex flex-col h-[calc(100%-120px)] p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? "" : "flex-row-reverse space-x-reverse"
                }`}
              >
                <div className={`p-2 rounded-full ${message.isBot ? "bg-primary/10" : "bg-muted"}`}>
                  {message.isBot ? (
                    <Bot className="h-4 w-4 text-primary" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.isBot ? "bg-muted" : "bg-primary text-primary-foreground"
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

        {showDownload && (
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
        )}

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Digite sua pergunta sobre o currículo..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onSend()}
              className="flex-1"
              disabled={loading}
            />
            <Button
              onClick={onSend}
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
  )
}
