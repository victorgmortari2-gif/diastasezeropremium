

import { meditations } from '@/lib/meditations.tsx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Heart as HeartIcon, BarChart, Repeat, CheckCircle, Headphones, Wind, Smile, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Literata } from 'next/font/google';

const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-literata',
});

export default function MeditationDetailPage({ params }: { params: { slug: string } }) {
  const meditation = meditations.find((m) => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  const otherMeditations = meditations.filter((m) => m.slug !== params.slug);

  const tips = [
    {
      title: "Use fones de ouvido",
      description: "Para uma experiência mais imersiva",
      icon: <Headphones className="h-8 w-8 text-[#5DADE2]" />
    },
    {
      title: "Ambiente tranquilo",
      description: "Escolha um local sem distrações",
      icon: <Wind className="h-8 w-8 text-[#5DADE2]" />
    },
    {
      title: "Postura confortável",
      description: "Sentado ou deitado, como preferir",
      icon: <Smile className="h-8 w-8 text-[#5DADE2]" />
    }
  ];

  return (
    <div className={`bg-[#EBF5FB] min-h-screen ${literata.variable} font-serif`}>
       <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild className="bg-transparent hover:bg-white/80">
            <Link href="/meditacao">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Meditações
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

      <main className="container px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:gap-8 max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="flex-grow lg:w-2/3">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    style={{ aspectRatio: '16/9' }}
                    src={meditation.videoUrl}
                    title={meditation.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            {/* Content for mobile, hidden on lg screens */}
            <div className="lg:hidden mt-8 space-y-6">
              <Card style={{ backgroundColor: '#1B4F72' }}>
                  <CardHeader>
                      <CardTitle className="text-2xl text-white" style={{ fontFamily: 'var(--font-literata)' }}>{meditation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="flex items-center gap-2">
                          <span className="text-gray-300">{meditation.duration}</span>
                          <Badge style={{ backgroundColor: '#A9CCE3', color: '#1B4F72' }}>{meditation.type}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mt-6 mb-3 text-white">Benefícios Esperados</h3>
                      <div className="flex flex-wrap gap-2">
                          {meditation.benefits.map(benefit => (
                              <Badge key={benefit} variant="outline" className="font-normal border-gray-400 text-gray-200">{benefit}</Badge>
                          ))}
                      </div>
                  </CardContent>
              </Card>
              <Card className="bg-white/70">
                  <CardHeader>
                      <CardTitle className="text-xl text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>Informações da Sessão</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                      <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2 text-gray-600"><Clock className="h-4 w-4" /> Duração:</span>
                          <span className="font-semibold text-gray-800">{meditation.info.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2 text-gray-600"><HeartIcon className="h-4 w-4" /> Tipo:</span>
                          <span className="font-semibold text-gray-800">{meditation.info.type}</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2 text-gray-600"><BarChart className="h-4 w-4" /> Nível:</span>
                          <span className="font-semibold text-gray-800">{meditation.info.level}</span>
                      </div>
                       <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2 text-gray-600"><Repeat className="h-4 w-4" /> Frequência:</span>
                          <span className="font-semibold text-gray-800">{meditation.info.frequency}</span>
                      </div>
                  </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>Sobre Esta Meditação</h2>
              <p className="mt-2 text-gray-600 text-lg">{meditation.longDescription}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>O Que Você Vai Experimentar</h2>
              <ul className="mt-4 space-y-2">
                {meditation.whatYouWillExperience.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center" style={{ fontFamily: 'var(--font-literata)' }}>Dicas para a Prática</h2>
               <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {tips.map(tip => (
                  <Card key={tip.title} className="p-6 bg-white/70 shadow-sm">
                    <div className="flex justify-center mb-3">{tip.icon}</div>
                    <h3 className="font-bold text-lg text-gray-800">{tip.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
            
          {/* Sidebar Area - hidden on mobile, visible on lg screens */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <Card style={{ backgroundColor: '#1B4F72' }}>
                  <CardHeader>
                      <CardTitle className="text-2xl text-white" style={{ fontFamily: 'var(--font-literata)' }}>{meditation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <div className="flex items-center gap-2">
                          <span className="text-gray-300">{meditation.duration}</span>
                          <Badge style={{ backgroundColor: '#A9CCE3', color: '#1B4F72' }}>{meditation.type}</Badge>
                      </div>
                      <h3 className="font-semibold text-lg mt-6 mb-3 text-white">Benefícios Esperados</h3>
                      <div className="flex flex-wrap gap-2">
                          {meditation.benefits.map(benefit => (
                              <Badge key={benefit} variant="outline" className="font-normal border-gray-400 text-gray-200">{benefit}</Badge>
                          ))}
                      </div>
                  </CardContent>
              </Card>
              <Card className="bg-white/70">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>Informações da Sessão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-gray-600"><Clock className="h-4 w-4" /> Duração:</span>
                    <span className="font-semibold text-gray-800">{meditation.info.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-gray-600"><HeartIcon className="h-4 w-4" /> Tipo:</span>
                    <span className="font-semibold text-gray-800">{meditation.info.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-gray-600"><BarChart className="h-4 w-4" /> Nível:</span>
                    <span className="font-semibold text-gray-800">{meditation.info.level}</span>
                  </div>
                   <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-gray-600"><Repeat className="h-4 w-4" /> Frequência:</span>
                    <span className="font-semibold text-gray-800">{meditation.info.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>

       <section className="py-16 md:py-24 bg-white/50 mt-8">
          <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>Outras Meditações</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {otherMeditations.map((med) => (
                    <Link key={med.slug} href={`/meditacao/${med.slug}`} className="block group">
                      <Card className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full">
                        <div className="relative">
                          <Image
                            src={med.imageUrl}
                            alt={med.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            data-ai-hint={med.dataAiHint}
                          />
                          <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                            {med.icon}
                          </div>
                          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                            <h3 className="text-white text-xl font-bold">{med.title}</h3>
                            <p className="text-white/80 text-sm">{med.duration}</p>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <p className="text-gray-600">{med.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
          </div>
        </section>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 mt-auto">
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
