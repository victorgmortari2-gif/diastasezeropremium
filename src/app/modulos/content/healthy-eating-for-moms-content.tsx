import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Zap, Clock, ShoppingBasket } from "lucide-react";

export function HealthyEatingForMomsContent() {
    const practicalTips = [
        {
            title: "Planejamento é TUDO: O Cardápio Semanal",
            description: "Tire 30 minutos no domingo para planejar as refeições da semana. Isso evita o estresse do 'o que fazer para o jantar?' e ajuda a fazer compras mais inteligentes e econômicas.",
            icon: <ShoppingBasket className="h-8 w-8 text-primary" />
        },
        {
            title: "Cozinhe em Lotes (Batch Cooking)",
            description: "Cozinhe uma grande quantidade de grãos (arroz integral, quinoa), leguminosas (feijão, lentilha) e deixe legumes já picados. Assim, você monta pratos rápidos durante a semana.",
            icon: <Clock className="h-8 w-8 text-primary" />
        },
        {
            title: "Tenha Lanches Inteligentes à Mão",
            description: "A fome entre as refeições é inimiga da dieta. Tenha sempre castanhas, frutas, iogurte natural ou ovos cozidos prontos para consumir.",
            icon: <Zap className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Comer Bem na Correria: Missão Possível!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Ser mãe é um trabalho de tempo integral (ou mais!). Entre cuidar dos filhos, da casa e do trabalho, a sua alimentação muitas vezes fica por último. Este guia foi criado para ser o seu atalho: dicas práticas, realistas e que não exigem horas na cozinha. O objetivo não é a perfeição, mas o progresso. Vamos simplificar a alimentação saudável.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Dicas Práticas para o Dia a Dia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {practicalTips.map(tip => (
                        <div key={tip.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0">{tip.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{tip.title}</h3>
                                <p className="text-sm text-muted-foreground">{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Exemplo de Prato Rápido e Nutritivo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-center items-center mb-4">
                        <UtensilsCrossed className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-center text-muted-foreground italic">"O prato montado em 5 minutos que salva a sua semana."</p>
                    <div>
                        <h3 className="font-bold text-lg">Base:</h3>
                        <p className="text-muted-foreground">Quinoa (já cozida do seu 'batch cooking').</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Proteína:</h3>
                        <p className="text-muted-foreground">Frango desfiado (cozido e temperado no fim de semana) ou um ovo cozido picado.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Vegetais:</h3>
                        <p className="text-muted-foreground">Tomate cereja, pepino em rodelas e folhas verdes (já lavadas).</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg">Gordura Boa e Sabor:</h3>
                        <p className="text-muted-foreground">Regue com azeite de oliva, adicione algumas azeitonas e tempere com sal e orégano.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
