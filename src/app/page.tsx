import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Gift, Zap, Users, ArrowRight, Star, Heart, TrendingUp, Monitor } from "lucide-react";
import { modules } from "@/lib/modules";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-24 text-center">
            <div className="container px-4 md:px-6">
                <div className="flex justify-center mb-6">
                    <Image 
                        src="https://i.imgur.com/VJtWx2S.png" 
                        alt="Diástase Zero Logo" 
                        width={180} 
                        height={180}
                        className='mx-auto'
                    />
                </div>
                <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
                    Bem-vinda ao Desafio <span className="text-gold">Premium</span> do <span className="text-primary">Diástase Zero</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Zere Sua Diástase com Acompanhamento Completo. Mais estrutura, mais suporte, mais resultados.
                </p>
                <Button size="lg" className="mt-8 font-bold text-lg py-7 px-10 transition-transform duration-300 hover:scale-105" asChild>
                    <Link href="#modulos">ACESSAR MÓDULOS <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </section>
        
        {/* Journey Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="container px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Sua Jornada de Transformação</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Durante 21 dias, você terá acesso a módulos exclusivos que vão te guiar passo a passo para acabar com a diástase e conquistar um abdômen firme e saudável.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-5 font-bold text-xl font-headline">Progressivo</h3>
                <p className="mt-2 text-muted-foreground">Cada módulo evolui com você</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Monitor className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-5 font-bold text-xl font-headline">Acessível</h3>
                <p className="mt-2 text-muted-foreground">Em qualquer dispositivo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-5 font-bold text-xl font-headline">Prático</h3>
                <p className="mt-2 text-muted-foreground">Exercícios rápidos e eficientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modulos" className="py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Módulos do Programa Premium
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                        Um guia completo para você fortalecer seu abdômen e recuperar a confiança.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    {modules.map((module) => {
                      const Icon = module.icon;
                      return (
                        <Link href={`/modulos/${module.slug}`} key={module.slug} className="group block">
                          <Card className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full bg-card">
                              <CardHeader>
                                <div className="mb-4">
                                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                      <Icon className="h-7 w-7 text-primary" />
                                  </div>
                                </div>
                                  <CardTitle className="font-headline text-2xl">
                                      {module.title}
                                  </CardTitle>
                                  <CardDescription>{module.days}</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                                      {module.shortPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                      ))}
                                  </ul>
                              </CardContent>
                              <div className="p-6 pt-0 mt-4">
                                  <span className="font-bold text-primary flex items-center gap-2">
                                      Acessar módulo
                                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                                  </span>
                              </div>
                          </Card>
                        </Link>
                      )
                    })}
                </div>
            </div>
        </section>
        
        {/* Super Bonus Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-foreground">
                <Gift className="h-10 w-10 text-gold" /> Super Bônus do Premium
              </h2>
              <p className="mt-4 max-w-2xl mx-auto md:text-lg text-muted-foreground">
                Além de todo o conteúdo dos módulos, você também recebe acesso a bônus exclusivos para acelerar seus resultados.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="#" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <Star className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">Todo conteúdo do Desafio Básico</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Para você começar com a base perfeita e revisar sempre que precisar.</p>
                  <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Acessar
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="/ebook" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <BookOpen className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">E-book "Diástase Zero o Ano Todo"</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Seu guia completo para manter os resultados e continuar evoluindo.</p>
                  <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Baixar agora
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="#" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <Heart className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">Meditação guiada</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Áudios para manter o foco, a motivação e a constância na sua jornada.</p>
                   <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Ouvir agora
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="https://chat.whatsapp.com/BBK8G1MZsYGIJZLSieF9tC" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <Users className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">Grupo EXCLUSIVO no WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Suporte, motivação e uma comunidade de mulheres com o mesmo objetivo que você.</p>
                   <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Entrar no grupo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="#" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <Award className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">Certificado digital de conclusão</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Celebre sua conquista e seu comprometimento com sua saúde e bem-estar.</p>
                   <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Receber certificado
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
              <Link href="/atualizacoes" className="group">
                <Card className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full bg-card">
                  <Zap className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-headline text-xl font-bold">Acesso a todas as atualizações</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">Receba novos módulos, aulas e materiais que forem adicionados no futuro.</p>
                   <span className="font-bold text-primary flex items-center gap-2 mt-4">
                    Saber mais
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="py-16 md:py-24 bg-beige text-foreground">
            <div className="container px-4 md:px-6">
                <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">Ofertas Exclusivas para Você</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-center md:text-lg text-muted-foreground">
                    Potencialize sua jornada com ferramentas e guias que vão acelerar seus resultados.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col bg-card text-foreground">
                        <CardHeader className="items-center text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Gift className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl pt-2">Plano Alimentar (Secreto) para Desinchar</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow flex flex-col">
                            <p className="text-muted-foreground text-sm mb-4">Descubra o poder do Plano Alimentar Secreto, seu guia de 30 dias para uma vida sem inchaço e inflamação, com lista de compras e substituições..</p>
                            <div className="mt-auto">
                                <p className="text-sm line-through text-muted-foreground">De R$ 27,90</p>
                                <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                                <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                                  <Link href="https://go.tribopay.com.br/xxzyjsqss3" target="_blank" rel="noopener noreferrer">Adicionar ao meu acesso</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col bg-card text-foreground">
                        <CardHeader className="items-center text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl pt-2">Guia Definitivo Para Vestir o que Você Ama</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow flex flex-col">
                            <p className="text-muted-foreground text-sm mb-4">Técnicas de Automassagem para um corpo leve, os segredos de postura que alongam a silhueta, e dicas de looks que te fazem sentir imparável. Sua confiança é o melhor acessório.</p>
                             <div className="mt-auto">
                                <p className="text-sm line-through text-muted-foreground">De R$ 27,90</p>
                                <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                                <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                                  <Link href="https://go.tribopay.com.br/b0qxhlcuaf" target="_blank" rel="noopener noreferrer">Quero este guia</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col bg-card text-foreground">
                        <CardHeader className="items-center text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Award className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl pt-2">Protocolo Zero Celulite</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow flex flex-col">
                            <p className="text-muted-foreground text-sm mb-4">Chegou o momento de encerrar o ciclo das inseguranças. O PROTOCOLO ZERO CELULITE oferece o caminho mais rápido e eficaz para conquistar a pele que você sempre desejou.</p>
                             <div className="mt-auto">
                                <p className="text-sm line-through text-muted-foreground">De R$ 27,90</p>
                                <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                                <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                                  <Link href="https://go.tribopay.com.br/nasud6qmbv" target="_blank" rel="noopener noreferrer">Continuar minha evolução</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col bg-card text-foreground">
                        <CardHeader className="items-center text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-xl pt-2">Meditações Guiadas "Mente em Foco, Corpo em Harmonia"</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center flex-grow flex flex-col">
                            <p className="text-muted-foreground text-sm mb-4">Sua transformação começa de dentro. Áudios de 10-25 min para construir disciplina inabalável e blindar sua autoestima. É o equilíbrio emocional que garante sua constância e os seus resultados.</p>
                             <div className="mt-auto">
                                <p className="text-sm line-through text-muted-foreground">De R$ 27,90</p>
                                <p className="text-2xl font-bold text-primary">por apenas R$ 14,90</p>
                                <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105" asChild>
                                  <Link href="https://go.tribopay.com.br/prbluqfcdj" target="_blank" rel="noopener noreferrer">Adicionar meditações</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-12 text-center">
                    <Button size="lg" className="font-bold text-base md:text-lg p-6 px-4 md:px-8 md:py-8 animate-pulse-scale bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                         <Link href="https://go.tribopay.com.br/bvyaujeoan" target="_blank" rel="noopener noreferrer">
                            Adquira todas as ofertas por apenas R$ 39,90
                         </Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
