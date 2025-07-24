import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { ChatWindow } from "./ChatWindow";
import { Card, CardContent } from "@/components/ui/card";
import { baseContext } from "@/data/laura-context";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
});

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatbotFixed() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Olá! Sou a Laura, assistente virtual da Andressa. Como posso ajudá-lo a saber mais sobre a Andressa e seu currículo? 😊",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    const hoje = new Date().toLocaleDateString("pt-BR");

    const prompt = `
Você é Laura, assistente virtual da Andressa Rodrigues.

Hoje é ${hoje}.

Regras:
- Se a pergunta for uma saudação (ex: olá, oi, tudo bem, bom dia), responda com educação e simpatia.
- Se a pergunta for sobre o currículo ou experiências da Andressa, responda exclusivamente com base nas informações abaixo.
- Se a pergunta estiver fora dessas regras, diga educadamente que não pode responder.

Informações da Andressa:
${baseContext}

Pergunta do usuário: ${inputMessage}

Resposta:
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.text || "Desculpe, não entendi sua pergunta.",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao chamar Gemini:", error);
      const fallbackMessage: Message = {
        id: (Date.now() + 2).toString(),
        content:
          "Ops, tive um problema para responder. Pode tentar novamente em alguns instantes?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-soft-lg flex flex-col">
      <CardContent className="flex-1 p-0">
        <ChatWindow
          messages={messages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          loading={loading}
          onSend={handleSendMessage}
          showDownload={false}
        />
      </CardContent>
    </Card>
  );
}
