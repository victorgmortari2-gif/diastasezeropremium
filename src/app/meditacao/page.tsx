
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Diamond, RefreshCw, Scale, Shield, Wind, Anchor, Zap, BedDouble, CheckCircle, Smile, BrainCircuit, Award, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Literata } from 'next/font/google';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-literata',
});

const meditationJourneys = [
  {
    title: 'Autoestima Radiante',
    duration: '14 min',
    description: 'Cultive amor próprio e confiança interior.',
    imageUrl: 'https://picsum.photos/seed/meditation1/600/400',
    icon: <Heart className="h-5 w-5 text-white/80" />,
    dataAiHint: 'architecture confidence'
  },
  {
    title: 'Foco Diamante',
    duration: '33 min',
    description: 'Desenvolva concentração laser e clareza mental.',
    imageUrl: 'https://picsum.photos/seed/meditation2/600/400',
    icon: <Diamond className="h-5 w-5 text-white/80" />,
    dataAiHint: 'desk workspace'
  },
  {
    title: 'Consistência Sólida',
    duration: '23 min',
    description: 'Fortaleça disciplina e perseverança diária.',
    imageUrl: 'https://picsum.photos/seed/meditation3/600/400',
    icon: <RefreshCw className="h-5 w-5 text-white/80" />,
    dataAiHint: 'waterfall nature'
  },
  {
    title: 'Equilíbrio Emocional',
    duration: '14 min',
    description: 'Harmonize suas emoções com sabedoria.',
    imageUrl: 'https://picsum.photos/seed/meditation4/600/400',
    icon: <Scale className="h-5 w-5 text-white/80" />,
    dataAiHint: 'strawberry fruit'
  },
  {
    title: 'Disciplina Interior',
    duration: '17 min',
    description: 'Construa força de vontade inabalável.',
    imageUrl: 'https://picsum.photos/seed/meditation5/600/400',
    icon: <Shield className="h-5 w-5 text-white/80" />,
    dataAiHint: 'diver ocean'
  },
  {
    title: 'Serenidade Profunda',
    duration: '12 min',
    description: 'Encontre paz interior duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation6/600/400',
    icon: <Wind className="h-5 w-5 text-white/80" />,
    dataAiHint: 'paint brushes'
  },
];

const bonusSessions = [
  {
    title: 'Calma para Ansiedade',
    duration: '10 min',
    description: 'Ancore sua mente e acalme a tempestade.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus1/600/400',
    icon: <Anchor className="h-5 w-5 text-white/80" />,
    dataAiHint: 'dark calm'
  },
  {
    title: 'Alinhamento dos Chakras',
    duration: '12 min',
    description: 'Equilibre seus centros de energia vital.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus2/600/400',
    icon: <Zap className="h-5 w-5 text-white/80" />,
    dataAiHint: 'night lights'
  },
  {
    title: 'Relaxamento Noturno',
    duration: '23 min',
    description: 'Prepare seu corpo e mente para um sono profundo.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus3/600/400',
    icon: <BedDouble className="h-5 w-5 text-white/80" />,
    dataAiHint: 'new york'
  },
];

const transformations = [
    {
        title: "Autoestima Fortalecida",
        description: "Desenvolva uma relação saudável consigo mesmo e cultive amor próprio genuíno.",
        icon: <Smile className="h-8 w-8 text-[#5DADE2]" />
    },
    {
        title: "Foco Laser",
        description: "Melhore sua capacidade de concentração e elimine distrações mentais.",
        icon: <BrainCircuit className="h-8 w-8 text-[#5DADE2]" />
    },
    {
        title: "Consistência Diária",
        description: "Construa hábitos sólidos e mantenha disciplina em suas metas.",
        icon: <Award className="h-8 w-8 text-[#5DADE2]" />
    },
    {
        title: "Equilíbrio Emocional",
        description: "Gerencie suas emoções com sabedoria e encontre estabilidade interior.",
        icon: <Leaf className="h-8 w-8 text-[#5DADE2]" />
    }
];

const testimonials = [
  {
    quote: "Essas meditações mudaram completamente minha rotina. Sinto mais confiança e foco no dia a dia.",
    name: "Ana Silva",
    role: "Empresária",
    avatarUrl: "https://picsum.photos/seed/testimonial1/100/100",
    dataAiHint: "woman smiling"
  },
  {
    quote: "Em apenas 2 semanas consegui criar consistência nos meus estudos. Incrível!",
    name: "Carlos Santos",
    role: "Estudante",
    avatarUrl: "https://picsum.photos/seed/testimonial2/100/100",
    dataAiHint: "man thinking"
  },
  {
    quote: "O equilíbrio emocional que encontrei foi transformador. Recomendo para todos.",
    name: "Marina Costa",
    role: "Psicóloga",
    avatarUrl: "https://picsum.photos/seed/testimonial3/100/100",
    dataAiHint: "woman nature"
  }
];

export default function MeditacaoPage() {
  return (
    <div className={`bg-[#EBF5FB] min-h-screen flex flex-col ${literata.variable} font-serif`}>
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild className="bg-transparent hover:bg-white/80">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar à Página Inicial
            </Link>
          </Button>
          <Link href="/">
            <Image 
                src="https://i.imgur.com/NfDtSSk.png" 
                alt="Diástase Zero Logo" 
                width={180} 
                height={180}
                className='mx-auto'
            />
          </Link>
          <div className="w-48"></div>
        </div>
      </header>

      <main className="flex-grow container px-4 md:px-6 py-12">
        <section className="text-center max-w-2xl mx-auto mb-20">
            <Badge className="mb-4 text-base" style={{ backgroundColor: '#A9CCE3', color: '#1B4F72' }}>
              Pack de Meditações Guiadas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
              Transforme sua mente em 10-30 minutos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Desenvolva autoestima, foco e disciplina com práticas cientificamente validadas.
            </p>
            <Button size="lg" className="mt-8 font-bold text-lg" style={{ backgroundColor: '#5DADE2' }}>
              Começar a Jornada
            </Button>
        </section>
        
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
              Suas 6 Jornadas de Transformação
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada meditação foi cuidadosamente criada para desenvolver uma área específica da sua vida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {meditationJourneys.map((journey) => (
              <Card key={journey.title} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <Image
                    src={journey.imageUrl}
                    alt={journey.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={journey.dataAiHint}
                  />
                  <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                    {journey.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <h3 className="text-white text-xl font-bold">{journey.title}</h3>
                    <p className="text-white/80 text-sm">{journey.duration}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-gray-600">{journey.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
                Aulas Bônus
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                Explore outras áreas do seu bem-estar com estas sessões especiais.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {bonusSessions.map((session) => (
                <Card key={session.title} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="relative">
                    <Image
                        src={session.imageUrl}
                        alt={session.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={session.dataAiHint}
                    />
                    <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        {session.icon}
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                        <h3 className="text-white text-xl font-bold">{session.title}</h3>
                        <p className="text-white/80 text-sm">{session.duration}</p>
                    </div>
                    </div>
                    <CardContent className="p-5">
                    <p className="text-gray-600">{session.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </section>

        <section className="py-20 bg-white/50 rounded-lg mb-20">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: '#5DADE2', fontFamily: 'var(--font-literata)' }}>
              Libere seu Potencial de Autoestima com Meditações Guiadas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Você está gostando das nossas meditações?
            </p>
            <p className="mt-2 text-md text-gray-500 max-w-2xl mx-auto">
              Se você busca fortalecer sua autoconfiança, aprender a se valorizar e sentir-se mais segura e merecedora, esta é a sua chance!
            </p>
            <div className="mt-12">
              <Card className="bg-white shadow-xl max-w-2xl mx-auto text-left">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-6" style={{ fontFamily: 'var(--font-literata)' }}>
                    Libere o acesso ao nosso Pacote Exclusivo com mais de 50 Meditações Guiadas!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Este pacote premium foi desenhado especialmente para mulheres que querem transformar a visão que têm de si mesmas. Ele vai te ajudar a:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#5DADE2] mr-3 mt-1 flex-shrink-0" />
                      <span>Redescobrir seu valor e silenciar a autocrítica.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#5DADE2] mr-3 mt-1 flex-shrink-0" />
                      <span>Construir o amor-próprio dia após dia, com gentileza.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#5DADE2] mr-3 mt-1 flex-shrink-0" />
                      <span>Aliviar o estresse e as preocupações que minam sua energia.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#5DADE2] mr-3 mt-1 flex-shrink-0" />
                      <span>Despertar a força e a segurança para viver a vida que você merece.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-8">
                    Dê o primeiro passo para uma vida mais leve, confiante e feliz. Toque aqui e descubra como destravar o acesso e comece a jornada para a sua melhor versão!
                  </p>
                  <Button size="lg" className="w-full font-bold text-lg" style={{ backgroundColor: '#5DADE2' }}>
                    LIBERAR MEU ACESSO ÀS +50 MEDITAÇÕES
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
                Transformações que Você Vai Experimentar
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Baseadas em neurociência e práticas milenares, essas meditações criam mudanças reais e duradouras.
            </p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {transformations.map((item) => (
                    <div key={item.title} className="flex flex-col items-center">
                        <div className="bg-white/70 p-4 rounded-full shadow-md mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm max-w-xs">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
                Transformações Reais
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Pessoas como você já experimentaram mudanças profundas.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <CardContent className="p-0 flex flex-col h-full">
                    <p className="text-gray-600 text-base mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-auto border-gray-200">
        <p className="text-xs text-gray-500">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}

    