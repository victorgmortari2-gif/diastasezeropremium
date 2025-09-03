import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flower, Droplets } from "lucide-react";

export function SelfCareContent() {
    const rituals = [
        {
            title: "Massagem Modeladora com Óleos Essenciais",
            description: "Após o banho, com a pele ainda úmida, aplique um óleo carreador (como amêndoas ou semente de uva) com gotas de óleo essencial de alecrim ou gerânio. Faça movimentos circulares no abdômen, sempre no sentido horário, para estimular a circulação e a firmeza da pele.",
            icon: <Droplets className="h-8 w-8 text-primary" />
        },
        {
            title: "Escalda-pés Relaxante para o Inchaço",
            description: "Mergulhe os pés em água morna com sal grosso e algumas rodelas de laranja ou folhas de hortelã. Este simples ritual ajuda a reduzir o inchaço nas pernas e proporciona um relaxamento profundo que reflete em todo o corpo.",
            icon: <Flower className="h-8 w-8 text-primary" />
        },
        {
            title: "Dry Brushing (Escovação a Seco)",
            description: "Antes do banho, use uma escova de cerdas naturais para escovar o corpo a seco, com movimentos leves e em direção ao coração. Isso estimula o sistema linfático, ajuda a eliminar toxinas e melhora a aparência da pele.",
            icon: <Sparkles className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Autocuidado: O Toque Final na Sua Beleza</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        A recuperação da diástase vai além dos exercícios. Ela envolve reconectar-se com seu corpo e cuidar dele com carinho. Os rituais de autocuidado com foco estético não são sobre vaidade, mas sobre bem-estar. Eles ajudam a melhorar a qualidade da pele, reduzir o inchaço e, o mais importante, te lembram de reservar um tempo para si mesma.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Rituais Simples e Poderosos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {rituals.map(ritual => (
                        <div key={ritual.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0">{ritual.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{ritual.title}</h3>
                                <p className="text-sm text-muted-foreground">{ritual.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-primary/10 text-center">
                <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold mb-2">Crie o Seu Momento</h3>
                    <p className="text-muted-foreground">
                        Não precisa fazer tudo todos os dias. Escolha um ritual para começar. O importante é a intenção e a constância. Transforme esses momentos em um compromisso de amor com você mesma.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
