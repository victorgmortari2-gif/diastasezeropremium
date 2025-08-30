"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Droplets, Utensils, Bed, Sparkles, CheckCircle, Award, Power, BrainCircuit, Rocket, Check, Calendar, UtensilsIcon, Brain, Star, Sun, Moon, Droplet, Heart, Salad, CookingPot, Shell, ThumbsUp, Target, CalendarCheck, Lightbulb, Soup, Apple, AlertTriangle, ShieldCheck, ArrowRight, HelpCircle, BookCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


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
                        <CardContent className="flex-grow">
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
    const alimentacaoPillars = [
        {
            titulo_pilar: "1. Redução da Inflamação",
            descricao_pilar: "A inflamação crônica pode prejudicar a reparação dos tecidos. Alimentos ricos em ômega-3 e antioxidantes ajudam a combatê-la.",
            exemplos: ["**Ômega-3:** Salmão, sardinha, chia, linhaça, nozes.", "**Antioxidantes:** Frutas vermelhas, vegetais folhosos (couve, espinafre), cúrcuma e gengibre."]
        },
        {
            titulo_pilar: "2. Reparação de Tecidos e Colágeno",
            descricao_pilar: "O colágeno é a proteína principal do tecido conjuntivo (linha alba). A produção de colágeno depende de vitaminas e minerais específicos.",
            exemplos: ["**Proteínas Magras:** Frango, ovos, peixes, leguminosas.", "**Vitamina C:** Pimentão, brócolis, laranjas, morangos.", "**Zinco:** Sementes de abóbora, grão-de-bico, carne vermelha magra."]
        },
        {
            titulo_pilar: "3. Saúde Intestinal: O Eixo Intestino-Core",
            descricao_pilar: "Um intestino saudável é fundamental para a absorção de nutrientes e para a redução da inflamação sistêmica. O 'eixo intestino-core' sugere uma forte conexão entre a saúde intestinal e a força do seu centro.",
            exemplos: ["**Probióticos:** Iogurte natural, kefir, kombucha.", "**Fibras:** Aveia, batata-doce, feijão, vegetais e frutas."]
        }
    ];

    const suplementos = [
        { nome_suplemento: "Colágeno Hidrolisado", beneficios: "Pode ajudar a fornecer os aminoácidos necessários para a produção de colágeno e fortalecer os tecidos." },
        { nome_suplemento: "Ômega-3 (DHA/EPA)", beneficios: "Poderoso anti-inflamatório, pode auxiliar na redução da inflamação que impede a recuperação." },
        { nome_suplemento: "Vitamina D", beneficios: "Essencial para a saúde óssea e muscular, e tem papel importante na regulação de processos inflamatórios." },
        { nome_suplemento: "Proteína em Pó (Whey ou Vegetal)", beneficios: "Ajuda a atingir a ingestão diária de proteínas, vital para a reparação muscular e de tecidos." }
    ];
    
    const dicas = [
        "Priorize alimentos de verdade, sem rótulos ou com poucos ingredientes.",
        "Mantenha-se hidratada! A água é essencial para o transporte de nutrientes e a saúde dos tecidos.",
        "Inclua uma fonte de proteína em todas as refeições para sustentar seus músculos.",
        "Adicione sementes (chia, linhaça) e especiarias (cúrcuma, gengibre) aos seus pratos para um impulso anti-inflamatório."
    ];

    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <p className="mb-6 md:text-lg">
                A recuperação da diástase é um processo completo, e a nutrição é um dos pilares mais importantes. Os exercícios fortalecem o seu core, mas os alimentos são o combustível que seu corpo usa para reparar os tecidos, reduzir a inflamação e construir a força que você precisa. Pense na alimentação como a sua maior aliada.
            </p>

            <div className="space-y-8">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Utensils className="h-6 w-6 text-primary" />Alimentação Funcional: O Combustível para a Cura</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground">A alimentação funcional foca em alimentos que têm propriedades específicas para promover a saúde e prevenir doenças. Para a recuperação da diástase, nosso foco é em três áreas-chave:</p>
                        {alimentacaoPillars.map((pilar, index) => (
                            <div key={index} className="border-l-4 border-primary/20 pl-4">
                                <h4 className="font-bold text-lg mb-1">{pilar.titulo_pilar}</h4>
                                <p className="text-muted-foreground mb-2">{pilar.descricao_pilar}</p>
                                <ul className="space-y-1 text-sm">
                                    {pilar.exemplos.map((ex, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: ex.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Sparkles className="h-6 w-6 text-primary" />Suplementação Estratégica: Um Apoio Adicional</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-yellow-100/50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md mb-6">
                            <p className="flex items-start gap-2"><AlertTriangle className="h-6 w-6 mt-0.5 flex-shrink-0" /><strong>ATENÇÃO:</strong> A suplementação deve ser sempre orientada por um profissional de saúde (médico ou nutricionista). Este conteúdo é informativo e não substitui uma consulta individualizada.</p>
                        </div>
                        <div className="space-y-4">
                           {suplementos.map((sup, index) =>(
                               <div key={index}>
                                   <h4 className="font-bold">{sup.nome_suplemento}</h4>
                                   <p className="text-muted-foreground text-sm">{sup.beneficios}</p>
                               </div>
                           ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary" />Dicas Práticas para o Dia a Dia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                           {dicas.map((dica, index) => (
                               <li key={index} className="flex items-start gap-2">
                                   <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                   <span className="text-muted-foreground">{dica}</span>
                                </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            
            <div className="mt-10 bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
                 <h3 className="font-headline font-bold text-lg mb-2 text-primary flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Sua Escolha, Seu Resultado
                </h3>
                 <p className="text-foreground/90">
                    Lembre-se: não existe pílula mágica. A verdadeira recuperação vem da combinação de exercícios corretos e de uma alimentação inteligente. Você tem o poder de nutrir seu corpo para que ele possa se curar e se fortalecer de dentro para fora.
                 </p>
            </div>
        </div>
    );
};


const RemodelingPrepContent = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <p className="mb-6 md:text-lg">
                Nesta aula, vamos preparar você para entrar em uma das fases mais importantes do programa: a <strong>Remodelagem Corporal</strong>. Até aqui, você já fortaleceu sua base com exercícios de estabilidade, treinos hipopressivos e práticas integradas que ativaram o seu core, melhoraram sua postura e começaram a reduzir a diástase. Agora, é o momento de dar um passo além.
            </p>
            <p className="mb-8 md:text-lg">
                A preparação para a remodelagem envolve três pilares fundamentais: ajustes físicos, nutricionais e mentais.
            </p>
            
            <div className="space-y-8">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Power className="h-6 w-6 text-primary" />Ajustes Físicos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">Seu corpo já está mais forte e adaptado, mas para entrar em treinos mais avançados será essencial:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Manter a regularidade dos exercícios, mesmo nos dias de menor disposição.</li>
                            <li>Priorizar alongamentos antes e depois das práticas para evitar lesões.</li>
                            <li>Incluir pequenas caminhadas ou atividades aeróbicas leves que ajudam na circulação e recuperação muscular.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Salad className="h-6 w-6 text-primary" />Ajustes Nutricionais</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="mb-4 text-muted-foreground">Nesta etapa, sua alimentação vai desempenhar um papel ainda mais estratégico. Prefira alimentos naturais, de fácil acesso e que otimizam a recuperação:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li><strong>Proteínas magras:</strong> frango, ovos, peixe e feijão.</li>
                            <li><strong>Carboidratos integrais:</strong> arroz integral, batata-doce, aveia.</li>
                            <li><strong>Gorduras boas:</strong> azeite de oliva, abacate, castanhas.</li>
                            <li><strong>Hidratação:</strong> pelo menos 2 litros de água ao dia para manter músculos e articulações em bom funcionamento.</li>
                        </ul>
                        <p className="mt-4 bg-primary/10 p-3 rounded-md text-sm">
                            <strong>Dica extra:</strong> evite ultraprocessados, excesso de açúcar e bebidas alcoólicas. Eles podem atrasar sua evolução.
                        </p>
                    </CardContent>
                </Card>
                
                 <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><BrainCircuit className="h-6 w-6 text-primary" />Ajustes Mentais</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="mb-4 text-muted-foreground">A remodelagem corporal exige consistência e disciplina. Esteja preparado para treinos mais longos e desafiadores. Mantenha o foco nos resultados já conquistados e visualize o corpo que você deseja alcançar.</p>
                         <p className="text-muted-foreground">Lembre-se: cada etapa é um degrau que te aproxima do resultado final. Não pule fases e respeite o ritmo do seu corpo.</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="mt-10 bg-primary/10 border-l-4 border-primary p-6 rounded-lg text-center">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary flex items-center justify-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Pronta para o Próximo Nível?
                </h3>
                <p className="text-foreground/90 mb-4">
                    Agora que você está preparada, chegou a hora de avançar para o <strong>Módulo 3 – Remodelagem Corporal</strong>. Nessa nova fase, vamos consolidar seus resultados com um protocolo avançado e estratégias exclusivas para manter seu abdômen firme para sempre.
                </p>
                <p className="font-bold mb-6 text-accent">Você está pronta para transformar todo o esforço em resultados duradouros?</p>
                <Button asChild className="transition-transform duration-300 hover:scale-105">
                    <Link href="/modulos/remodelagem-corporal">
                        Avançar para o Módulo 3
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

const PostChallengePlanContent = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Plano de 60 Dias Pós-Desafio 🚀</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Parabéns! 🎉 Você concluiu uma das fases mais intensas do programa e já conquistou resultados incríveis. O verdadeiro segredo da transformação está em manter e evoluir seus ganhos ao longo do tempo. Por isso, criamos o Plano de 60 Dias Pós-Desafio, que será seu guia detalhado para fortalecer o abdômen, controlar a diástase, aumentar definição e melhorar sua qualidade de vida de forma sustentável.
                </p>
            </div>

            <Card className="mb-8 bg-white shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent">
                        <Calendar className="h-6 w-6" />
                        Estrutura Completa – Semana a Semana
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-primary">Semanas 1 e 2 – Consolidação</h4>
                        <p className="text-muted-foreground mb-3"><strong>Objetivo:</strong> manter resultados, reforçar base muscular e corrigir postura.</p>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong>Treinos:</strong> 4x por semana (2 sessões de abdômen profundo, 2 sessões de corpo todo).</li>
                            <li><strong>Dicas:</strong> Foque na execução correta, não na velocidade. Priorize respiração durante cada exercício.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-primary">Semanas 3 e 4 – Intensidade gradual</h4>
                        <p className="text-muted-foreground mb-3"><strong>Objetivo:</strong> fortalecer músculos estabilizadores e preparar corpo para desafios.</p>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong>Treinos:</strong> 4x por semana (1 treino de abdômen com variações, 2 treinos de corpo todo com resistência, 1 treino de mobilidade).</li>
                            <li><strong>Dicas:</strong> Observe sua postura durante os movimentos. Mantenha progressão gradual.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-primary">Semanas 5 e 6 – Introdução de desafios</h4>
                        <p className="text-muted-foreground mb-3"><strong>Objetivo:</strong> aumentar resistência, queimar gordura e elevar energia.</p>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong>Treinos:</strong> 5x por semana (1 sessão HIIT adaptada, 2 treinos de força + abdômen, 1 de mobilidade, 1 cardio leve).</li>
                            <li><strong>Dicas:</strong> Faça aquecimento antes do HIIT. Respeite seu limite e adapte.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg mb-2 text-primary">Semanas 7 e 8 – Manutenção e autonomia</h4>
                        <p className="text-muted-foreground mb-3"><strong>Objetivo:</strong> consolidar hábitos e treinar de forma independente.</p>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong>Treinos:</strong> 4–5x por semana (mescla de força, abdômen e aeróbicos).</li>
                            <li><strong>Dicas:</strong> Crie seu próprio cronograma adaptado. Mantenha diário de treino.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                 <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg flex items-center gap-2"><UtensilsIcon className="h-5 w-5 text-primary" />Nutrição nos 60 Dias</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                           <li><strong>Proteínas:</strong> 25–30g por refeição (frango, peixe, ovos, tofu).</li>
                           <li><strong>Carboidratos complexos:</strong> arroz integral, batata-doce, quinoa.</li>
                           <li><strong>Vegetais variados:</strong> metade do prato em cada refeição.</li>
                           <li><strong>Gorduras boas:</strong> abacate, azeite de oliva, castanhas.</li>
                           <li><strong>Hidratação:</strong> 2 a 2,5L de água/dia.</li>
                        </ul>
                    </CardContent>
                 </Card>
                  <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg flex items-center gap-2"><Brain className="h-5 w-5 text-primary" />Mentalidade e Motivação</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li><strong>Registre evolução:</strong> fotos, medidas, sensações.</li>
                            <li><strong>Celebre conquistas pequenas.</strong></li>
                            <li><strong>Consistência > perfeição.</strong></li>
                            <li><strong>Revise suas metas</strong> e ajuste se necessário.</li>
                         </ul>
                    </CardContent>
                 </Card>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-8">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary flex items-center gap-2"><Star className="h-5 w-5" />Dicas Extras</h3>
                <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Durma bem: 7–8h por noite para recuperação muscular.</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Respire profundamente durante os exercícios.</span></li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Adapte a intensidade, mas não pule treinos.</span></li>
                </ul>
            </div>

            <div className="text-center">
                <p className="font-headline text-lg italic text-accent">
                    Este plano é seu guia para manter o que você conquistou e evoluir ainda mais. Continue firme, cada passo conta! 🔥
                </p>
            </div>
        </div>
    );
};

const SelfCareContent = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Rituais de Autocuidado com Foco Estético 🌟</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    O autocuidado é um dos pilares da transformação. Nesta aula, vamos explorar rituais diários para manter a pele saudável, radiante e rejuvenescida, cuidando do maior órgão do seu corpo.
                </p>
            </div>

            <div className="space-y-8">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Droplet className="h-6 w-6 text-primary" />Cremes e Óleos Essenciais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2">Cremes Hidratantes:</h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li><strong>Para o rosto:</strong> busque por ácido hialurônico, niacinamida ou vitamina C para hidratação e firmeza.</li>
                                <li><strong>Para o corpo:</strong> opte por manteiga de karité, óleo de amêndoas ou glicerina para elasticidade.</li>
                                <li><strong>Dica:</strong> aplique após o banho para melhor absorção.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Óleos Corporais e Faciais:</h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li><strong>Óleo de rosa mosqueta:</strong> ideal para regeneração e redução de manchas.</li>
                                <li><strong>Óleo de jojoba:</strong> hidrata sem deixar a pele oleosa.</li>
                                <li><strong>Dica:</strong> use algumas gotas antes de dormir para nutrir a pele durante a noite.</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Sparkles className="h-6 w-6 text-primary" />Práticas Essenciais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p><strong>Limpeza diária:</strong> Manhã e noite para remover impurezas.</p>
                        <p><strong>Esfoliação semanal:</strong> Remove células mortas e estimula a renovação.</p>
                        <p><strong>Proteção solar:</strong> Diariamente, mesmo em dias nublados, para prevenir o envelhecimento.</p>
                        <p><strong>Massagem facial e corporal:</strong> Estimula a circulação e relaxa os músculos.</p>
                    </CardContent>
                </Card>

                <Card className="bg-primary/10 border border-primary/20">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3 text-primary"><Heart className="h-6 w-6" />Rituais Complementares</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-foreground">
                            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Banhos relaxantes com óleos.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Hidratação interna (2L de água/dia).</li>
                            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Alimentação equilibrada.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Sono de qualidade.</li>
                        </ul>
                    </CardContent>
                </Card>

                <div>
                    <h3 className="font-headline text-2xl font-bold text-center mb-6 text-primary">Sugestão de Rotina Diária</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-white">
                            <CardHeader><CardTitle className="font-headline text-lg flex items-center gap-2"><Sun className="text-accent" />Manhã</CardTitle></CardHeader>
                            <CardContent><ul className="list-decimal list-inside text-muted-foreground space-y-1">
                                <li>Limpeza facial</li>
                                <li>Hidratação com creme leve</li>
                                <li>Protetor solar</li>
                            </ul></CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardHeader><CardTitle className="font-headline text-lg flex items-center gap-2"><Moon className="text-accent" />Noite</CardTitle></CardHeader>
                            <CardContent><ul className="list-decimal list-inside text-muted-foreground space-y-1">
                                <li>Limpeza facial profunda</li>
                                <li>Aplicação de sérum ou óleo nutritivo</li>
                                <li>Massagem facial (5-10 min)</li>
                            </ul></CardContent>
                        </Card>
                    </div>
                </div>

            </div>

            <div className="text-center mt-10">
                <p className="font-headline text-lg italic text-accent">
                    O autocuidado não é um luxo, é um investimento em você. 💖 Incorpore essas práticas e sinta a diferença no seu bem-estar e autoestima.
                </p>
            </div>
        </div>
    )
}

const HealthyEatingForMomsContent = () => {
    const recipes = [
        {
            title: "Omelete Nutritiva de Legumes",
            icon: Shell,
            ingredients: ["2 ovos", "1/2 cenoura ralada", "1/2 abobrinha ralada", "1 colher de chá de azeite", "Sal e temperos a gosto"],
            instructions: "Bata os ovos e tempere com sal e ervas. Refogue os legumes rapidamente no azeite. Misture os ovos aos legumes e cozinhe em fogo baixo até firmar.",
            tip: "Ótimo para café da manhã ou lanche rápido."
        },
        {
            title: "Salada Colorida com Frango Grelhado",
            icon: Salad,
            ingredients: ["1 peito de frango grelhado fatiado", "Mix de folhas verdes (alface, rúcula, espinafre)", "Tomate cereja, cenoura ralada e pepino", "1 colher de sopa de azeite e limão para temperar"],
            instructions: "Monte a salada com todos os ingredientes. Tempere com azeite, limão, sal e pimenta.",
            tip: "Você pode preparar o frango no domingo e usar durante a semana."
        },
        {
            title: "Wrap Integral de Atum",
            icon: Rocket,
            ingredients: ["1 tortilla integral", "1 lata de atum em água", "1 colher de sopa de iogurte natural", "Folhas verdes e cenoura ralada"],
            instructions: "Misture o atum com o iogurte. Coloque a mistura sobre a tortilla, adicione folhas verdes e cenoura. Enrole como um wrap.",
            tip: "Excelente opção para almoço ou lanche rápido."
        },
        {
            title: "Bowl de Quinoa com Legumes e Ovo",
            icon: Soup,
            ingredients: ["1 xícara de quinoa cozida", "1/2 xícara de brócolis cozido", "1/2 cenoura cozida", "1 ovo cozido ou pochê", "1 colher de chá de azeite"],
            instructions: "Em uma tigela, monte a base com a quinoa. Adicione os legumes e finalize com o ovo e azeite.",
            tip: "Ótimo para almoço nutritivo que sacia e fornece energia."
        },
        {
            title: "Smoothie Energético de Frutas",
            icon: Apple,
            ingredients: ["1 banana", "1/2 xícara de morangos", "1 colher de sopa de aveia", "1 copo de leite vegetal ou leite desnatado"],
            instructions: "Bata todos os ingredientes no liquidificador até ficar homogêneo. Sirva imediatamente.",
            tip: "Ideal para café da manhã rápido ou lanche da tarde."
        },
        {
            title: "Panquecas de Aveia e Banana",
            icon: CookingPot,
            ingredients: ["1 banana madura", "2 ovos", "3 colheres de sopa de aveia em flocos", "Canela a gosto", "1 colher de chá de fermento em pó (opcional)"],
            instructions: "Amasse a banana em uma tigela e misture com os ovos. Acrescente a aveia, a canela e o fermento, misturando bem até formar uma massa homogênea. Aqueça uma frigideira antiaderente e coloque pequenas porções da massa. Cozinhe em fogo médio até dourar dos dois lados.",
            tip: "Sirva com frutas frescas ou iogurte natural para um café da manhã ou lanche rápido e nutritivo."
        }
    ];

    const tips = [
        "Planeje refeições da semana: organize cardápio e compras para evitar improvisos.",
        "Use alimentos práticos: ovos, atum, legumes pré-cortados e frutas fáceis de consumir.",
        "Prefira alimentos integrais: pães, arroz e massas integrais fornecem mais fibras.",
        "Marmiteiras são aliadas: prepare marmitas em quantidade e congele para a semana.",
        "Lanches rápidos: castanhas, frutas, iogurte ou barrinhas de proteína.",
        "Cozinhe em porções grandes: arroz, quinoa e legumes duram 3–4 dias na geladeira.",
        "Use temperos naturais: ervas, limão e azeite substituem molhos industrializados.",
        "Inclua proteínas em todas as refeições: ovos, frango, peixe, leguminosas ou iogurte.",
        "Hidrate-se constantemente: água, chás e água de coco ajudam na saciedade e bem-estar.",
        "Evite pular refeições: pequenas refeições equilibradas mantêm energia e ajudam na concentração."
    ];

    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Guia Prático de Alimentação para Mães 🌟</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Sabemos que a rotina é intensa! Aqui está um guia com receitas e dicas para uma alimentação saudável e rápida, garantindo sua energia e bem-estar.
                </p>
            </div>

            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-primary">Receitas Saudáveis e Rápidas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {recipes.map((recipe, index) => {
                    const Icon = recipe.icon;
                    return (
                        <Card key={index} className="bg-white flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-lg flex items-center gap-2"><Icon className="h-6 w-6 text-accent" />{recipe.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-3">
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Ingredientes:</h4>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                                        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Modo de Preparo:</h4>
                                    <p className="text-sm text-muted-foreground">{recipe.instructions}</p>
                                </div>
                                <p className="text-xs italic bg-primary/10 p-2 rounded-md text-primary/80"><strong>Dica:</strong> {recipe.tip}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <Card className="bg-white mb-8">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2 text-primary"><Sparkles className="h-6 w-6 text-accent" />Dicas para o Dia a Dia</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {tips.map((tip, index) => (
                             <li key={index} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="text-center mt-8 bg-primary/10 p-6 rounded-lg">
                <p className="font-headline text-lg italic text-accent">
                    Cuidar da sua alimentação não precisa ser complicado. Com planejamento, cada refeição se torna um ato de autocuidado que impulsiona sua jornada! 🕒
                </p>
            </div>
        </div>
    );
};

const RealisticRoutineContent = () => {
    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Montando Sua Rotina Realista 🌟</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    A consistência é um dos pilares para resultados duradouros. Nesta aula, você aprenderá a montar uma rotina que encaixe treinos e hábitos saudáveis na sua vida sem estresse.
                </p>
            </div>

            <div className="space-y-8">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><ThumbsUp className="h-6 w-6 text-primary" />Por que ter uma rotina realista?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Evita frustração e desânimo.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Garante consistência, que é mais importante que intensidade.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Equilibra vida pessoal e saúde de forma sustentável.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Promove resultados a longo prazo.</span></li>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Target className="h-6 w-6 text-primary" />Passo a Passo para Montar Sua Rotina</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 list-decimal list-inside text-muted-foreground">
                        <li><strong>Avalie seu tempo disponível:</strong> Identifique janelas de 20 a 60 minutos para treinos.</li>
                        <li><strong>Defina prioridades:</strong> Liste seus objetivos principais e os treinos essenciais.</li>
                        <li><strong>Escolha dias e horários fixos:</strong> Tente manter uma regularidade semanal.</li>
                        <li><strong>Planeje treinos curtos e eficazes:</strong> 20 a 40 minutos consistentes são muito eficazes.</li>
                        <li><strong>Combine treinos e descanso:</strong> Alterne dias de força, abdômen, aeróbicos e descanso.</li>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary" />Dicas Práticas para Sustentar a Rotina</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Prepare roupas e equipamentos na noite anterior.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Use alarmes para criar o hábito.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Divida treinos em blocos se necessário.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Associe o treino a uma rotina existente.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Faça ajustes semanais conforme imprevistos.</span></li>
                            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><span>Valorize cada pequena conquista.</span></li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3 text-primary"><CalendarCheck className="h-6 w-6" />Exemplo de Rotina Realista Semanal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-1 text-foreground/80">
                           <li><strong>Segunda:</strong> Treino de corpo todo – 30 min</li>
                           <li><strong>Terça:</strong> Abdômen profundo – 20 min + caminhada leve</li>
                           <li><strong>Quarta:</strong> Descanso ativo – alongamento ou yoga</li>
                           <li><strong>Quinta:</strong> Treino de força – 30 min</li>
                           <li><strong>Sexta:</strong> HIIT adaptado ou cardio – 25 min</li>
                           <li><strong>Sábado:</strong> Treino leve ou passeio ao ar livre</li>
                           <li><strong>Domingo:</strong> Descanso ou rotina de autocuidado</li>
                        </ul>
                        <p className="text-xs italic mt-3 text-muted-foreground">Ajuste os dias e horários conforme sua disponibilidade, mas tente manter a regularidade.</p>
                    </CardContent>
                </Card>

            </div>

            <div className="text-center mt-10 bg-primary/10 p-6 rounded-lg">
                <p className="font-headline text-lg italic text-accent">
                    Montar uma rotina realista é o segredo para treinar de forma consistente e sustentável. 🔑 Lembre-se: o importante é manter os hábitos no longo prazo e criar uma rotina que seja sua aliada, e não um peso.
                </p>
            </div>
        </div>
    );
};

const GeneralReviewContent = () => {
    const conceitos = [
        "A Respiração Diafragmática como a base de tudo.",
        "A ativação do Transverso do Abdômen em todos os movimentos.",
        "Saber identificar os sinais de alerta como o 'coning' e o 'doming'.",
        "A importância da progressão segura: de repetições, para dificuldade, para carga.",
        "O papel da nutrição e da hidratação na saúde dos tecidos.",
        "A prática de 'Ergonomia no Dia a Dia' para manter a postura e a ativação."
    ];

    const faq = [
        { 
            pergunta: "Sinto que meu progresso está em um platô. O que devo fazer?", 
            resposta: "Um platô é normal. Isso significa que seu corpo se adaptou. Tente variar os exercícios que você já domina, aumente as repetições ou as séries e, se for o caso, adicione uma pequena carga (como uma bola de pilates) para dar um novo estímulo aos músculos."
        },
        { 
            pergunta: "Quando posso começar a combinar meu treino do core com outros exercícios, como corrida ou musculação?", 
            resposta: "Você pode começar a introduzir essas atividades quando sentir total controle do seu core, sem 'coning' ou dor na lombar, mesmo em exercícios mais desafiadores. Comece devagar, com pouca carga ou intensidade, e observe a reação do seu corpo, focando sempre na ativação do seu transverso."
        },
        { 
            pergunta: "É necessário treinar o core todos os dias para manter os resultados?", 
            resposta: "Não, o excesso de treino pode ser tão prejudicial quanto a falta. O ideal é treinar de 3 a 5 vezes por semana, dando tempo para os músculos se recuperarem. Mais importante do que a frequência é a qualidade: manter a consciência e a ativação do core em todas as suas atividades diárias."
        },
        { 
            pergunta: "Devo ainda me preocupar com os sinais de 'coning' após o que aprendi no 'Protocolo de Treino Avançado'?", 
            resposta: "Sim, a consciência é para a vida. O 'coning' é um sinal de que a carga está maior do que o seu core consegue suportar naquele momento. Ele ainda pode aparecer em variações mais desafiadoras. Use-o como um feedback para voltar um passo e fortalecer ainda mais o seu core."
        },
        { 
            pergunta: "O que faço se eu ficar doente ou precisar viajar e perder alguns dias de treino?", 
            resposta: "A consistência é importante, mas a perfeição não. O mais importante é retomar a sua rotina assim que possível. Comece com uma revisão dos exercícios básicos de respiração e ativação e, em seguida, retome de onde parou."
        }
    ];

    return (
        <div className="bg-beige/50 p-6 sm:p-8 rounded-lg text-foreground">
            <div className="text-center mb-8">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-2">Parabéns por Concluir o Módulo 3!</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Você chegou a um ponto crucial do nosso plano premium, tendo dominado exercícios de estabilidade avançados e consolidado o seu abdômen. Esta aula é o nosso ponto de encontro para solidificar o que você aprendeu e garantir que não restem dúvidas. Vamos revisar os pontos mais importantes e responder às perguntas mais frequentes para te preparar para os próximos módulos.
                </p>
            </div>

            <div className="space-y-8">
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><BookCheck className="h-6 w-6 text-primary" />Revisão Rápida: O que Não Podemos Esquecer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {conceitos.map((conceito, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{conceito}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3"><HelpCircle className="h-6 w-6 text-primary" />Perguntas Frequentes (FAQ)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faq.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="font-bold text-left">{item.pergunta}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {item.resposta}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-10 bg-primary/10 border-l-4 border-primary p-6 rounded-lg text-center">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary flex items-center justify-center gap-2">
                    <Rocket className="h-5 w-5" />
                    A Base Está Firme. Agora, Vamos Além!
                </h3>
                <p className="text-foreground/90">
                    Você construiu uma fundação sólida, corrigiu os erros e superou os desafios. O que vem a seguir não é apenas mais do mesmo, mas um nível totalmente novo de força e confiança. No próximo módulo, vamos explorar como integrar todo o seu corpo, usando a força do seu core como ponto de partida para um poder e estabilidade sem precedentes.
                </p>
            </div>
        </div>
    );
};


export const LessonContent = ({ slug }: { slug: string }) => {
    switch (slug) {
        case 'cardapio-detox':
            return <DetoxContent />;
        case 'planejamento-semana-2':
            return <PlanningS2Content />;
        case 'suplementacao-alimentacao':
            return <FunctionalFoodContent />;
        case 'preparacao-remodelagem':
            return <RemodelingPrepContent />;
        case 'plano-pos-desafio':
            return <PostChallengePlanContent />;
        case 'rituais-autocuidado':
            return <SelfCareContent />;
        case 'guia-alimentacao-maes':
            return <HealthyEatingForMomsContent />;
        case 'montando-sua-rotina':
            return <RealisticRoutineContent />;
        case 'revisao-geral':
            return <GeneralReviewContent />;
        default:
            return (
                <Card>
                    <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">O conteúdo desta aula estará disponível em breve.</p>
                    </CardContent>
                </Card>
            );
    }
};
