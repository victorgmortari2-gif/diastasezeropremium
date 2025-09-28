

import { meditations } from '@/lib/meditations.tsx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Heart as HeartIcon, BarChart, Repeat, CheckCircle, Headphones, Wind, Smile, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MeditationDetailPage({ params }: { params: { slug: string } }) {
  const meditation = meditations.find((m) => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  const tips = [
    {
      title: "Use fones de ouvido",
      description: "Para uma experiência mais imersiva",
      icon: <Headphones className="h-8 w-8 text-primary" />
    },
    {
      title: "Ambiente tranquilo",
      description: "Escolha um local sem distrações",
      icon: <Wind className="h-8 w-8 text-primary" />
    },
    {
      title: "Postura confortável",
      description: "Sentado ou deitado, como preferir",
      icon: <Smile className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="bg-background min-h-screen">
       <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
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
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
                <Card className="overflow-hidden">
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

                <div className="mt-8">
                    <h2 className="font-headline text-2xl font-bold">Sobre Esta Meditação</h2>
                    <p className="mt-2 text-muted-foreground">{meditation.longDescription}</p>
                </div>

                <div className="mt-8">
                    <h2 className="font-headline text-2xl font-bold">O Que Você Vai Experimentar</h2>
                    <ul className="mt-4 space-y-2">
                        {meditation.whatYouWillExperience.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-12">
                    <h2 className="font-headline text-2xl font-bold text-center">Dicas para a Prática</h2>
                     <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        {tips.map(tip => (
                            <Card key={tip.title} className="p-6">
                                <div className="flex justify-center mb-3">{tip.icon}</div>
                                <h3 className="font-semibold">{tip.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            
            <aside>
                <div className="sticky top-24 space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{meditation.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">{meditation.duration}</span>
                                <Badge variant="secondary">{meditation.type}</Badge>
                            </div>
                            <h3 className="font-semibold mt-6 mb-3">Benefícios Esperados</h3>
                            <div className="flex flex-wrap gap-2">
                                {meditation.benefits.map(benefit => (
                                    <Badge key={benefit} variant="outline" className="font-normal">{benefit}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">Informações da Sessão</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> Duração:</span>
                                <span className="font-semibold">{meditation.info.duration}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-muted-foreground"><HeartIcon className="h-4 w-4" /> Tipo:</span>
                                <span className="font-semibold">{meditation.info.type}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-muted-foreground"><BarChart className="h-4 w-4" /> Nível:</span>
                                <span className="font-semibold">{meditation.info.level}</span>
                            </div>
                             <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-muted-foreground"><Repeat className="h-4 w-4" /> Frequência:</span>
                                <span className="font-semibold">{meditation.info.frequency}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </aside>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-12">
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
