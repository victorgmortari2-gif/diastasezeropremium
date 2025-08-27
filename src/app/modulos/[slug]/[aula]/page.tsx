import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Leaf, Droplets, Utensils, Bed, Sparkles, Coffee, Apple, Salad, Soup, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const DetoxContent = () => {
    const detoxData = [
        {
            day: 'Dia 1',
            meals: [
                { time: 'Ao acordar', icon: '☕', food: '1 copo (200 ml) de água morna com suco de ½ limão' },
                { time: 'Café da manhã', icon: '🍎', food: '1 fatia média de mamão (150 g) + 2 colheres de sopa de aveia + 1 colher de sopa de linhaça + 200 ml de água ou leite vegetal' },
                { time: 'Lanche da manhã', icon: '🍌', food: '1 banana prata + 1 colher de sopa de aveia' },
                { time: 'Almoço', icon: '🥗', food: '4 colheres de sopa de arroz integral + 1 concha pequena de feijão + 1 filé de frango grelhado (100 g) + salada (5 folhas de alface + 5 rodelas de tomate + 3 colheres de cenoura ralada) + 1 fio de azeite' },
                { time: 'Lanche da tarde', icon: '🍏', food: '1 maçã média + 1 xícara (200 ml) de chá de camomila' },
                { time: 'Jantar', icon: '🍲', food: '1 prato fundo de sopa de legumes (abobrinha, cenoura, batata, couve e cebola)' },
                { time: 'Ceia', icon: '🍵', food: '1 xícara (200 ml) de chá de erva-doce' }
            ]
        },
        {
            day: 'Dia 2',
            meals: [
                { time: 'Ao acordar', icon: '🥒', food: '1 copo (200 ml) de água com 3 rodelas de pepino' },
                { time: 'Café da manhã', icon: '🍞', food: '1 fatia de pão integral + 1 ovo mexido + 1 xícara (200 ml) de chá verde' },
                { time: 'Lanche da manhã', icon: '🍐', food: '1 pera média ou 1 maçã média' },
                { time: 'Almoço', icon: '🐟', food: '4 colheres de sopa de arroz integral + 1 concha pequena de lentilha + 1 filé de peixe assado (100 g) + salada (½ xícara de repolho cru + 3 colheres de beterraba ralada)' },
                { time: 'Lanche da tarde', icon: '🍊', food: '1 copo (200 ml) de suco de laranja natural (sem açúcar)' },
                { time: 'Jantar', icon: '🎃', food: '1 prato fundo de creme de abóbora (250 g de abóbora cozida batida com cheiro-verde)' },
                { time: 'Ceia', icon: '🍵', food: '1 xícara (200 ml) de chá de camomila' }
            ]
        },
        {
            day: 'Dia 3',
            meals: [
                { time: 'Ao acordar', icon: '🍋', food: '1 copo (200 ml) de água morna com suco de ½ limão' },
                { time: 'Café da manhã', icon: '🥣', food: '1 pote de iogurte natural (170 g) + 2 colheres de sopa de aveia + 1 banana média picada' },
                { time: 'Lanche da manhã', icon: '🥭', food: '1 fatia média de mamão (150 g) + 1 colher de sopa de chia' },
                { time: 'Almoço', icon: '🥩', food: '4 colheres de sopa de arroz integral + 1 concha pequena de feijão preto + 3 colheres de sopa de carne moída refogada (100 g) + salada (½ xícara de couve refogada com alho + 1 fio de azeite)' },
                { time: 'Lanche da tarde', icon: '🍍', food: '1 xícara (200 ml) de chá de hibisco + 2 fatias médias de abacaxi' },
                { time: 'Jantar', icon: '🍲', food: '1 prato fundo de sopa de legumes (batata, cenoura, abobrinha) + 2 colheres de sopa de frango desfiado' },
                { time: 'Ceia', icon: '🍃', food: '1 xícara (200 ml) de infusão de hortelã' }
            ]
        }
    ];

    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Desinflame e Recupere: Seu Detox de 3 Dias</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Este plano alimentar foi criado para reduzir a inflamação e o inchaço, preparando seu corpo para uma recuperação mais eficiente da diástase.
                </p>
            </div>

            <Card className="mb-8 bg-white shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-accent" />
                        Pontos-Chave para o Sucesso
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                        <li className="flex items-center gap-2"><Droplets className="h-5 w-5 text-primary" /> <strong>Hidratação:</strong> 2L a 2,5L de água por dia.</li>
                        <li className="flex items-center gap-2"><Leaf className="h-5 w-5 text-primary" /> <strong>Priorize:</strong> Alimentos naturais e anti-inflamatórios.</li>
                        <li className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" /> <strong>Mastigação:</strong> Coma devagar e mastigue bem.</li>
                        <li className="flex items-center gap-2"><Bed className="h-5 w-5 text-primary" /> <strong>Descanso:</strong> Um sono reparador é essencial.</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {detoxData.map((day) => (
                    <Card key={day.day} className="bg-white flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-center text-xl text-primary">{day.day}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow p-6">
                            <ul className="space-y-4">
                                {day.meals.map((meal) => (
                                    <li key={meal.time} className="flex items-start gap-3">
                                        <span className="text-2xl mt-[-2px]">{meal.icon}</span>
                                        <div>
                                            <p className="font-bold text-foreground">{meal.time}</p>
                                            <p className="text-sm text-muted-foreground">{meal.food}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg text-primary-foreground/90">
                 <h3 className="font-headline font-bold text-lg mb-2 text-primary">Melhores Práticas</h3>
                 <ul className="space-y-2 text-foreground">
                     <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Evite industrializados, açúcar refinado e frituras durante estes dias.</span></li>
                     <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Ouça seu corpo. Se sentir fome, pode adicionar uma porção extra de vegetais ou uma fruta.</span></li>
                     <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Os chás podem ser consumidos sem açúcar ou com um pingo de mel, se necessário.</span></li>
                 </ul>
            </div>

            <div className="text-center mt-8">
                <p className="font-headline text-xl font-semibold text-accent">Esse detox é o primeiro passo da sua recuperação! 🌸</p>
            </div>
        </div>
    );
}

export default function LessonPage({ params }: { params: { slug: string; aula: string } }) {
  const module = modules.find((m) => m.slug === params.slug);
  const lesson = module?.schedule.find((l) => l.slug === params.aula);

  if (!module || !lesson) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href={`/modulos/${module.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Módulo
            </Link>
          </Button>
          <Link href="/">
            <Image 
                src="https://i.imgur.com/VJtWx2S.png" 
                alt="Diástase Zero Logo" 
                width={110} 
                height={110}
                className='mx-auto'
            />
          </Link>
          <div className="font-headline text-lg font-bold text-primary">Diástase Zero</div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{lesson.title}</h1>
            <p className="mt-2 text-muted-foreground md:text-lg">{lesson.description}</p>
          </section>

          {lesson.videoUrl ? (
            <Card>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                    src={lesson.videoUrl}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ) : lesson.slug === 'cardapio-detox' ? (
            <DetoxContent />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">O conteúdo desta aula estará disponível em breve.</p>
              </CardContent>
            </Card>
          )}

          <section className="mt-8">
            <h2 className="font-headline text-2xl font-bold mb-4">Resumo da Aula</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Nesta aula, você aprenderá os pontos-chave sobre {lesson.title.toLowerCase()}. Abordaremos os conceitos fundamentais e as melhores práticas para garantir que você execute as técnicas corretamente e com segurança. Prepare-se para dar um passo importante na sua jornada de recuperação!
                </p>
              </CardContent>
            </Card>
          </section>
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
