import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Leaf, Droplets, Utensils, Bed, Sparkles, CheckCircle, Award, ShieldCheck, Power, BrainCircuit, HeartHandshake, Flame, Apple, Salad, Soup, Fish, Beef } from 'lucide-react';
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

const PlanningS2Content = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Parabéns por ter concluído a primeira semana! 🎉</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Você deu um passo muito importante na sua jornada de recuperação da diástase, aprendeu a se conectar com o seu corpo e a executar técnicas fundamentais. Agora, na Semana 2, vamos entrar em uma fase de fortalecimento intensivo. Isso significa que você vai aumentar o desafio dos exercícios, explorar novas posturas e começar a sentir resultados ainda mais evidentes na sua força, estabilidade e consciência corporal.
                </p>
            </div>

            <Card className="mb-8 bg-white shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2">
                        <Award className="h-6 w-6 text-accent" />
                        Objetivos da Semana
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Progredir nos treinos hipopressivos com novas variações</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Ampliar a estabilidade e força do core</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Aprender sobre alimentação funcional que ajuda na recuperação</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Consolidar técnicas em treinos integrados</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Medir evolução e corrigir postura no dia a dia</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Preparar o corpo para a remodelagem corporal</span></li>
                    </ul>
                </CardContent>
            </Card>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg text-primary-foreground/90 mb-8">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary">Melhores Práticas</h3>
                <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Organize seu tempo: reserve 25 a 45 minutos por dia para as aulas</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Escolha um ambiente tranquilo e confortável</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>A constância é mais importante que a intensidade</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Anote dúvidas e percepções para revisão</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Respeite os limites do seu corpo: cada mulher tem seu ritmo</span></li>
                </ul>
            </div>

            <div className="text-center">
                <p className="font-headline text-lg italic text-accent">
                    A Semana 2 é um marco no seu processo: aqui você começa a sentir o fortalecimento real da sua base e ganha confiança para seguir firme rumo à recuperação total. Cada exercício é um investimento no seu corpo, na sua autoestima e na sua saúde. 🌸
                </p>
            </div>
        </div>
    );
}

const FunctionalFoodContent = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Alimentação: Sua Aliada na Recuperação</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                   A alimentação é uma das peças-chave no processo de recuperação da diástase. O que você coloca no prato pode acelerar sua cicatrização, reduzir inflamação, dar mais energia e até potencializar os resultados dos exercícios. Nesta aula você vai aprender como usar alimentos simples do dia a dia para fortalecer seu corpo de dentro para fora.
                </p>
            </div>

            <Card className="mb-8 bg-white shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent">
                        Pontos-Chave da Alimentação Funcional
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Alimentos anti-inflamatórios reduzem o inchaço abdominal</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Proteínas magras regeneram músculos e tecidos</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Fibras melhoram o intestino e reduzem estufamento</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Vitaminas e minerais equilibram energia e imunidade</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><span>Suplementação é um complemento, não substitui alimentação</span></li>
                    </ul>
                </CardContent>
            </Card>
            
            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-primary">Guia de Alimentos Funcionais</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-white">
                    <CardHeader><CardTitle className="font-headline text-lg">Anti-inflamatórios</CardTitle></CardHeader>
                    <CardContent><ul className="list-disc list-inside text-muted-foreground"><li>Cúrcuma (1 colher de café/dia)</li><li>Gengibre fresco (2 cm/dia)</li><li>Abacaxi (2 fatias/dia)</li><li>Chá verde ou hibisco (1 xícara/dia)</li></ul></CardContent>
                </Card>
                 <Card className="bg-white">
                    <CardHeader><CardTitle className="font-headline text-lg">Proteínas Magras</CardTitle></CardHeader>
                    <CardContent><ul className="list-disc list-inside text-muted-foreground"><li>Frango grelhado (100 g)</li><li>Peixe assado (100–120 g)</li><li>Ovos (2 unidades)</li><li>Feijão ou lentilha (½ xícara)</li></ul></CardContent>
                </Card>
                 <Card className="bg-white">
                    <CardHeader><CardTitle className="font-headline text-lg">Fibras e Energia Boa</CardTitle></CardHeader>
                    <CardContent><ul className="list-disc list-inside text-muted-foreground"><li>Arroz integral (4 colheres de sopa)</li><li>Aveia (2 colheres de sopa)</li><li>Frutas com casca (1 un/dia)</li><li>Vegetais variados (½ prato/refeição)</li></ul></CardContent>
                </Card>
                 <Card className="bg-white">
                    <CardHeader><CardTitle className="font-headline text-lg">Gorduras Boas</CardTitle></CardHeader>
                    <CardContent><ul className="list-disc list-inside text-muted-foreground"><li>Azeite (1 colher de sobremesa)</li><li>Abacate (2 colheres de sopa)</li><li>Castanhas/nozes (3 a 5 un/dia)</li></ul></CardContent>
                </Card>
            </div>
            
            <Card className="mb-8 bg-primary/10 border border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-lg text-primary">Suplementação (Opcional)</CardTitle>
                    <p className="text-sm text-foreground/80">Lembre-se: suplementos complementam, não substituem uma boa alimentação. Avalie com um profissional.</p>
                </CardHeader>
                 <CardContent>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm">
                        <li className="bg-white/60 p-2 rounded">Vitamina D</li>
                        <li className="bg-white/60 p-2 rounded">Ômega-3</li>
                        <li className="bg-white/60 p-2 rounded">Colágeno</li>
                        <li className="bg-white/60 p-2 rounded">Creatina</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary">Melhores Práticas</h3>
                <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Faça 3 refeições principais + 2 lanches saudáveis</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Beba 2 a 2,5 litros de água por dia</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Evite açúcar, frituras e ultraprocessados</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Respeite a saciedade</span></li>
                </ul>
            </div>

            <div className="text-center">
                <p className="font-headline text-lg italic text-accent">
                    Com pequenos ajustes no dia a dia, sua alimentação se torna uma aliada poderosa contra a inflamação e a favor da sua recuperação. Cada refeição é uma oportunidade de nutrir e fortalecer o seu corpo! 🌸
                </p>
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
          ) : lesson.slug === 'planejamento-semana-2' ? (
            <PlanningS2Content />
          ) : lesson.slug === 'suplementacao-alimentacao' ? (
            <FunctionalFoodContent />
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
