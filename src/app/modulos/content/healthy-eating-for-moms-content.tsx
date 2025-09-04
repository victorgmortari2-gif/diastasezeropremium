import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Zap, Clock, ShoppingBasket, Heart, BookOpen, ChefHat, Package } from "lucide-react";

export function HealthyEatingForMomsContent() {
    const planningPillars = [
        {
            title: "O Cardápio Semanal (Método 30 Minutos)",
            description: "Tire 30 minutos no domingo para planejar as refeições da semana. Isso evita o estresse do 'o que fazer para o jantar?' e ajuda a fazer compras mais inteligentes e econômicas.",
            steps: [
                "Verifique a geladeira. Veja o que você já tem e o que precisa ser usado.",
                "Escolha as receitas. Pense em 2-3 receitas de jantar para a semana e escolha opções de almoço que possam ser variações delas.",
                "Escreva. Anote o cardápio de cada dia para ter uma visão clara da semana."
            ],
            icon: <ShoppingBasket className="h-8 w-8 text-primary" />
        },
        {
            title: "O Poder do \"Batch Cooking\"",
            description: "Cozinhar em lotes é a estratégia que salva a sua semana. Escolha um ou dois dias para preparar grandes quantidades de ingredientes básicos.",
            items: [
                "Grãos: Cozinhe uma grande quantidade de arroz integral, quinoa ou lentilha. Armazene em potes na geladeira.",
                "Proteínas: Asse ou cozinhe frango, carne moída ou ovos. Desfie o frango e guarde. Cozinhe alguns ovos para ter lanches rápidos.",
                "Vegetais: Lave, pique e guarde vegetais como cenoura, brócolis, pimentão e pepino em potes herméticos."
            ],
            icon: <Clock className="h-8 w-8 text-primary" />
        },
        {
            title: "A Lista de Compras Inteligente",
            description: "Com o seu cardápio e o que você já tem em mente, crie uma lista de compras detalhada. Isso garante que você não esqueça nada e evita compras por impulso.",
            icon: <Zap className="h-8 w-8 text-primary" />
        }
    ];
    
    const quickRecipes = [
        {
            title: "Prato 1: \"O Prato que Salva a Semana\"",
            items: {
                "Base": "1 xícara de quinoa (já cozida).",
                "Proteína": "1 xícara de frango desfiado ou 2 ovos cozidos e picados.",
                "Vegetais": "Tomate cereja, pepino e folhas verdes.",
                "Gordura Boa e Sabor": "Regue com 1 colher de sopa de azeite de oliva, adicione algumas azeitonas e tempere com sal e orégano."
            }
        },
        {
            title: "Prato 2: \"A Salada Poderosa para o Almoço\"",
            items: {
                "Base": "2 xícaras de folhas verdes variadas.",
                "Proteína": "1 lata de atum em água ou um filé de frango desfiado.",
                "Vegetais": "Brócolis cozido no vapor e cenoura ralada (já preparados do \"batch cooking\").",
                "Gordura Boa e Sabor": "1/2 abacate em cubos, suco de limão e uma pitada de sal."
            }
        },
        {
            title: "Prato 3: \"O Bowl de Grãos para o Jantar\"",
            items: {
                "Base": "1 xícara de lentilha (já cozida).",
                "Proteína": "Carne moída refogada ou fatias de ovo cozido.",
                "Vegetais": "Brócolis cozido no vapor e rodelas de tomate.",
                "Gordura Boa e Sabor": "Regue com azeite de oliva e tempere com páprica defumada e sal."
            }
        }
    ];

    const dailyStrategies = [
        {
            title: "Tenha Lanches Inteligentes à Mão",
            description: "A fome entre as refeições é a inimiga da dieta. O preparo antecipado garante que você tenha sempre uma opção saudável à mão.",
            items: [
                "Para a Bolsa: 1 punhado de castanhas, 1 maçã, saquinho de damascos.",
                "Na Geladeira: Iogurte natural, ovos cozidos, cenoura baby.",
                "Feito em Casa: Bolinhos de aveia com banana, chips de vegetais assados."
            ],
            icon: <Package className="h-8 w-8 text-primary" />
        },
        {
            title: "A Arte de Reutilizar as Sobras",
            description: "Transforme o que sobrou da noite anterior em um prato novo para o almoço.",
            items: [
                "Sobra de Frango Assado: Desfie e adicione a uma salada ou use como recheio para um wrap.",
                "Sobra de Quinoa: Sirva fria no dia seguinte com vegetais e um ovo cozido."
            ],
            icon: <ChefHat className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-8">
            <header className="text-center mb-10">
                <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
                <h1 className="font-headline text-3xl font-bold">Guia Prático de Alimentação para Mães: Comer Bem na Correria</h1>
                <p className="text-lg text-muted-foreground mt-2">Comer Bem na Correria: Missão Possível!</p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Introdução</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Ser mãe é um trabalho de tempo integral. Entre cuidar dos filhos, da casa e do trabalho, a sua alimentação muitas vezes fica por último. Este guia foi criado para ser o seu atalho. O objetivo não é a perfeição, mas o progresso, a energia e a praticidade. Vamos simplificar a alimentação saudável, transformando-a em uma estratégia de sobrevivência e, acima de tudo, de autocuidado.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 1: O Pilar do Planejamento Eficiente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {planningPillars.map(pillar => (
                        <div key={pillar.title} className="flex items-start gap-4 p-4 rounded-lg border">
                             <div className="flex-shrink-0 pt-1">{pillar.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{pillar.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
                                {pillar.steps && (
                                    <ol className="list-decimal list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                        {pillar.steps.map((step, i) => <li key={i}>{step}</li>)}
                                    </ol>
                                )}
                                {pillar.items && (
                                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                        {pillar.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 2: Receitas Rápidas e Versáteis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <p className="text-muted-foreground">O segredo de uma alimentação saudável e rápida está em dominar a fórmula do prato inteligente: <span className="font-bold">Base (carboidrato) + Proteína + Vegetal + Gordura Boa</span></p>
                    <div className="grid md:grid-cols-1 gap-6">
                        {quickRecipes.map(recipe => (
                            <Card key={recipe.title} className="bg-background">
                                 <CardHeader>
                                    <CardTitle className="text-lg text-primary">{recipe.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {Object.entries(recipe.items).map(([key, value]) => (
                                        <div key={key}>
                                            <h4 className="font-semibold">{key}:</h4>
                                            <p className="text-muted-foreground">{value}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 3: Estratégias para o Dia a Dia Real</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {dailyStrategies.map(strategy => (
                        <div key={strategy.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 pt-1">{strategy.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{strategy.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{strategy.description}</p>
                                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                                    {strategy.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-start gap-4">
                         <div className="flex-shrink-0 pt-1"><UtensilsCrossed className="h-8 w-8 text-primary" /></div>
                         <div>
                            <h3 className="font-bold text-lg">A Importância da Hidratação</h3>
                            <p className="text-sm text-muted-foreground mt-1">A desidratação muitas vezes é confundida com a fome. Mantenha uma garrafa de água sempre por perto para garantir que você beba ao longo do dia. Chás de ervas (sem açúcar) e água com frutas também são ótimas opções.</p>
                         </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/10 text-center">
                <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Considerações Finais
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground">
                    O seu corpo é a sua ferramenta mais importante para ser a mãe que você quer ser. Cuidar de si mesma através de uma alimentação inteligente e prática não é egoísmo, é uma necessidade. O objetivo não é a perfeição, mas a consistência. Celebre cada escolha saudável e sinta o aumento da sua energia e confiança.
                </p>
                </CardContent>
            </Card>
        </div>
    );
}

    