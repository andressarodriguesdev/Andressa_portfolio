import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Chatbot } from "@/components/Chatbot"
import { ChatbotFixed } from "@/components/ChatbotFixed"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="andressa-portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />         
        </main>
        <Chatbot />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
