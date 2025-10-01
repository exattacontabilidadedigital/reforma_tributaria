"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Sparkles, Loader2, AlertCircle, Lightbulb } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function RegistrationForm() {
  const [showQuestionsForm, setShowQuestionsForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    companySize: "",
    attendance: "presencial",
    newsletter: true,
  })
  const [questionsData, setQuestionsData] = useState({
    mainConcerns: "",
    selectedTopics: [] as string[],
    specificQuestions: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

      if (!scriptUrl) {
        throw new Error("URL do Google Apps Script não configurada")
      }

      const payload = {
        type: "registration",
        timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        companySize: formData.companySize,
        attendance: formData.attendance,
        newsletter: formData.newsletter,
      }

      console.log("[v0] Enviando dados:", payload)

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      console.log("[v0] Resposta recebida")
      setShowQuestionsForm(true)
    } catch (err) {
      console.error("[v0] Erro ao enviar formulário:", err)
      setError("Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleQuestionsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

      if (!scriptUrl) {
        throw new Error("URL do Google Apps Script não configurada")
      }

      const payload = {
        type: "questions",
        timestamp: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        email: formData.email,
        mainConcerns: questionsData.mainConcerns,
        selectedTopics: questionsData.selectedTopics.join(", "),
        specificQuestions: questionsData.specificQuestions,
      }

      console.log("[v0] Enviando dúvidas:", payload)

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      console.log("[v0] Dúvidas enviadas com sucesso")
      setSubmitted(true)
    } catch (err) {
      console.error("[v0] Erro ao enviar dúvidas:", err)
      setError("Ocorreu um erro ao enviar suas dúvidas. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleSkipQuestions = () => {
    setSubmitted(true)
  }

  const handleTopicToggle = (topic: string) => {
    setQuestionsData((prev) => ({
      ...prev,
      selectedTopics: prev.selectedTopics.includes(topic)
        ? prev.selectedTopics.filter((t) => t !== topic)
        : [...prev.selectedTopics, topic],
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  if (submitted) {
    return (
      <div className="gradient-border animate-scale-in">
        <Card className="border-0 glow-effect">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 gradient-text">Sua vaga está garantida!</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Enviamos uma confirmação para o seu e-mail.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/20">
              <p className="text-lg font-semibold text-foreground">
                Nos vemos dia 21/10/2025, às 19h, na ACIA - Associação Comercial de Açailândia.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showQuestionsForm) {
    return (
      <div className="gradient-border animate-scale-in">
        <Card className="border-0 glow-effect">
          <CardContent className="p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3 gradient-text">Suas Dúvidas Moldam a Palestra</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Compartilhe suas principais dúvidas sobre a Reforma Tributária. Isso nos ajudará a focar nos pontos mais
                importantes para você e outros empresários!
              </p>
            </div>

            <form onSubmit={handleQuestionsSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <div className="space-y-3">
                <Label htmlFor="mainConcerns" className="text-base font-semibold">
                  Quais são suas principais preocupações sobre a Reforma Tributária?
                </Label>
                <p className="text-sm text-muted-foreground">(Opcional, mas muito valioso)</p>
                <Textarea
                  id="mainConcerns"
                  value={questionsData.mainConcerns}
                  onChange={(e) => setQuestionsData({ ...questionsData, mainConcerns: e.target.value })}
                  className="min-h-[120px] text-base border-2 focus:border-accent transition-all duration-300"
                  placeholder="Ex: Como isso vai afetar meu fluxo de caixa? Preciso trocar meu sistema? Quando devo começar a me preparar?"
                  disabled={loading}
                />
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  Que aspectos específicos você gostaria que fossem abordados na palestra?
                </Label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-financial"
                      checked={questionsData.selectedTopics.includes("Impacto financeiro na empresa")}
                      onCheckedChange={() => handleTopicToggle("Impacto financeiro na empresa")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-financial"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      💰 Impacto financeiro na empresa
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-systems"
                      checked={questionsData.selectedTopics.includes("Sistemas e tecnologia")}
                      onCheckedChange={() => handleTopicToggle("Sistemas e tecnologia")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-systems"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      💻 Sistemas e tecnologia
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-timeline"
                      checked={questionsData.selectedTopics.includes("Cronograma de implementação")}
                      onCheckedChange={() => handleTopicToggle("Cronograma de implementação")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-timeline"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      📅 Cronograma de implementação
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-training"
                      checked={questionsData.selectedTopics.includes("Treinamento da equipe")}
                      onCheckedChange={() => handleTopicToggle("Treinamento da equipe")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-training"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      👥 Treinamento da equipe
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-compliance"
                      checked={questionsData.selectedTopics.includes("Compliance e obrigações")}
                      onCheckedChange={() => handleTopicToggle("Compliance e obrigações")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-compliance"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      📋 Compliance e obrigações
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <Checkbox
                      id="topic-planning"
                      checked={questionsData.selectedTopics.includes("Planejamento tributário")}
                      onCheckedChange={() => handleTopicToggle("Planejamento tributário")}
                      disabled={loading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="topic-planning"
                      className="text-sm font-medium cursor-pointer flex items-center gap-2"
                    >
                      📊 Planejamento tributário
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="specificQuestions" className="text-base font-semibold">
                  Alguma dúvida específica que você gostaria de ver respondida?
                </Label>
                <Textarea
                  id="specificQuestions"
                  value={questionsData.specificQuestions}
                  onChange={(e) => setQuestionsData({ ...questionsData, specificQuestions: e.target.value })}
                  className="min-h-[120px] text-base border-2 focus:border-accent transition-all duration-300"
                  placeholder="Ex: Minha empresa do Simples Nacional será afetada? Como calcular o novo imposto? Preciso contratar consultoria?"
                  disabled={loading}
                />
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800 text-sm">
                  <strong>Dica:</strong> Suas dúvidas são anônimas e nos ajudam a preparar uma palestra mais útil para
                  todos os participantes!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg h-14 font-bold shadow-lg hover-lift hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>📋 Enviar Minhas Dúvidas</>
                  )}
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={handleSkipQuestions}
                  disabled={loading}
                  className="sm:w-32 h-14 text-base border-2 hover:bg-muted transition-all duration-300 bg-transparent"
                >
                  Pular
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="gradient-border hover-glow">
      <Card className="border-0">
        <CardContent className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-base font-semibold flex items-center gap-2">
                Nome Completo *
                {focusedField === "fullName" && <Sparkles className="w-4 h-4 text-accent animate-pulse" />}
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField(null)}
                className="h-14 text-base border-2 focus:border-accent transition-all duration-300"
                placeholder="Seu nome completo"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                E-mail *{focusedField === "email" && <Sparkles className="w-4 h-4 text-accent animate-pulse" />}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="h-14 text-base border-2 focus:border-accent transition-all duration-300"
                placeholder="seu@email.com"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-semibold flex items-center gap-2">
                Telefone/WhatsApp *
                {focusedField === "phone" && <Sparkles className="w-4 h-4 text-accent animate-pulse" />}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className="h-14 text-base border-2 focus:border-accent transition-all duration-300"
                placeholder="(99) 99999-9999"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="company" className="text-base font-semibold flex items-center gap-2">
                Empresa *{focusedField === "company" && <Sparkles className="w-4 h-4 text-accent animate-pulse" />}
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className="h-14 text-base border-2 focus:border-accent transition-all duration-300"
                placeholder="Nome da sua empresa"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="position" className="text-base font-semibold flex items-center gap-2">
                Cargo *{focusedField === "position" && <Sparkles className="w-4 h-4 text-accent animate-pulse" />}
              </Label>
              <Input
                id="position"
                name="position"
                type="text"
                required
                value={formData.position}
                onChange={handleChange}
                onFocus={() => setFocusedField("position")}
                onBlur={() => setFocusedField(null)}
                className="h-14 text-base border-2 focus:border-accent transition-all duration-300"
                placeholder="Seu cargo na empresa"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="companySize" className="text-base font-semibold">
                Porte da Empresa *
              </Label>
              <Select
                name="companySize"
                value={formData.companySize}
                onValueChange={(value) => handleSelectChange("companySize", value)}
                required
                disabled={loading}
              >
                <SelectTrigger className="h-14 text-base border-2 focus:border-accent transition-all duration-300">
                  <SelectValue placeholder="Selecione o porte da empresa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MEI">MEI (Microempreendedor Individual)</SelectItem>
                  <SelectItem value="Microempresa">Microempresa</SelectItem>
                  <SelectItem value="Pequena">Pequena Empresa</SelectItem>
                  <SelectItem value="Média">Média Empresa</SelectItem>
                  <SelectItem value="Grande">Grande Empresa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="attendance" className="text-base font-semibold">
                Modalidade de Participação *
              </Label>
              <Select
                name="attendance"
                value={formData.attendance}
                onValueChange={(value) => handleSelectChange("attendance", value)}
                required
                disabled={loading}
              >
                <SelectTrigger className="h-14 text-base border-2 focus:border-accent transition-all duration-300">
                  <SelectValue placeholder="Como você vai participar?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presencial">Presencial (ACIA - Açailândia)</SelectItem>
                  <SelectItem value="online">Online (Transmissão ao vivo)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                disabled={loading}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  Quero receber atualizações e conteúdos sobre a Reforma Tributária
                </Label>
                <p className="text-xs text-muted-foreground">
                  Enviaremos materiais exclusivos e informações relevantes para sua empresa.
                </p>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg h-16 font-bold shadow-lg hover-lift hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Enviando inscrição...
                </>
              ) : (
                "Quero Participar da Palestra Gratuitamente"
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Ao se inscrever, você concorda em receber informações sobre o evento.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
