import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, TrendingUp, Shield, Zap } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-br from-primary via-primary to-accent animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5" />
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent via-red-600 to-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-scale-in border border-red-400/30 shadow-lg backdrop-blur-sm animate-pulse-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-red-500/80 to-accent/80 animate-gradient-x"></div>
              <AlertCircle className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Evento Gratuito • Vagas Limitadas</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white text-balance leading-tight animate-fade-in">
              Reforma Tributária já começa em 2026
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/95 text-balance leading-relaxed animate-slide-up max-w-3xl mx-auto">
              O que muda para sua empresa e como se preparar para a maior transformação tributária do Brasil
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
              <div className="flex items-center gap-2 text-white bg-gradient-to-r from-accent via-red-600 to-accent px-4 py-2 rounded-lg backdrop-blur-sm animate-pulse-glow border border-red-400/30 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-red-500/80 to-accent/80 animate-gradient-x"></div>
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="font-semibold relative z-10">21 de Outubro de 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2 text-white/95 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">19h00</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2 text-white/95 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">ACIA - Açailândia</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white hover:bg-gradient-to-r hover:from-primary hover:to-accent text-primary hover:text-white text-lg px-10 py-7 h-auto font-bold shadow-2xl hover-lift animate-scale-in transition-all duration-300 hover:shadow-primary/25 hover:scale-105"
              asChild
            >
              <a href="#inscricao">Garantir Minha Vaga Gratuita</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="oklch(0.99 0 0)"
            />
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance animate-fade-in">
              Por que você precisa participar?
            </h2>

            <p className="text-xl text-center mb-16 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up">
              A Reforma Tributária é considerada a maior mudança no sistema de impostos do Brasil nas últimas décadas. A
              partir de 2026, novos tributos entram em vigor e as empresas precisarão se adaptar.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="gradient-border hover-lift hover-glow group cursor-pointer animate-slide-up">
                <Card className="border-0 h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Simplificação</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Entenda como múltiplos tributos serão unificados em IBS e CBS, reduzindo a burocracia.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                className="gradient-border hover-lift hover-glow group cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Card className="border-0 h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <AlertCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Impactos Reais</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Descubra como sua empresa será afetada e quais setores terão maior impacto.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                className="gradient-border hover-lift hover-glow group cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Card className="border-0 h-full">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Preparação</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Aprenda estratégias práticas para se adaptar e manter a competitividade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">Programação da Palestra</h2>

            <div className="space-y-6 relative">
              <div className="absolute left-[52px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

              {[
                { time: "5 min", title: "Boas-vindas e abertura", icon: Zap },
                {
                  time: "15 min",
                  title: "O que é a Reforma Tributária e por que ela começa em 2026",
                  icon: AlertCircle,
                },
                { time: "20 min", title: "Como as empresas de Açailândia serão impactadas", icon: TrendingUp },
                {
                  time: "15 min",
                  title: "O que muda no dia a dia: preços, notas fiscais e impostos",
                  icon: CheckCircle2,
                },
                { time: "20 min", title: "Estratégias para se preparar e não perder competitividade", icon: Shield },
                { time: "15 min", title: "Perguntas e respostas", icon: CheckCircle2 },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="relative animate-slide-in-left hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="flex items-start gap-6 p-6 md:p-8">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center relative z-10">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                              {item.time}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg leading-relaxed">{item.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance animate-fade-in">
              Quem Conduz a Palestra
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="gradient-border hover-lift animate-scale-in">
                <Card className="border-0 h-full">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 items-center text-center">
                      <div className="flex-shrink-0">
                        <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20">
                          <img
                            src="/romario-oliveira.jpg"
                            alt="Romário Oliveira - Contador e Administrador de Empresas"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 gradient-text">Romário Oliveira</h3>
                        <p className="text-base text-muted-foreground mb-4 leading-relaxed font-medium">
                          Contador e Administrador de Empresas
                        </p>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          Especialista em Contabilidade e Direito Tributário com vasta experiência ajudando empresas a
                          crescerem com segurança tributária.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Contabilidade
                          </span>
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Direito Tributário
                          </span>
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Consultoria
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="gradient-border hover-lift animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <Card className="border-0 h-full">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6 items-center text-center">
                      <div className="flex-shrink-0">
                        <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20">
                          <img 
                            src="/genilson-rodrigues.jpeg" 
                            alt="Dr. Genilson Rodrigues - Advogado Especialista em Direito Tributário"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 gradient-text">Dr. Genilson Rodrigues</h3>
                        <p className="text-base text-muted-foreground mb-4 leading-relaxed font-medium">
                          Advogado Especialista
                        </p>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          Especialista em Direito Tributário pela PUC/Minas e em Holding e Planejamento Societário pela
                          EBPOS, com ampla experiência em consultoria empresarial.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Direito Tributário
                          </span>
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Holding
                          </span>
                          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Planejamento Societário
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inscricao" className="py-20 md:py-28 scroll-mt-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-fade-in">
                Garanta Sua Vaga Gratuita
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                Preencha o formulário abaixo e receba a confirmação por e-mail
              </p>
            </div>

            <RegistrationForm />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary via-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              ACIA - Associação Comercial de Açailândia
            </h3>
            <p className="text-lg mb-6 leading-relaxed animate-slide-up">
              Evento gratuito e presencial • Vagas limitadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm animate-slide-up">
              <span>📍 Açailândia, Maranhão</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <span>📅 21 de Outubro de 2025</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <span>⏰ 19h00</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
