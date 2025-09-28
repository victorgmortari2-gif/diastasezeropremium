

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Diamond, RefreshCw, Scale, Shield, Wind } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Literata } from 'next/font/google';
import { Card, CardContent } from '@/components/ui/card';

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
        
        <section>
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
