import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Award, BookOpen, Gift, Zap } from "lucide-react";

export function RealisticRoutineContent() {
    const routineKeys = [
        "Defina um horário 'innegociável' para o seu treino, mesmo que sejam apenas 15 minutos. Pode ser ao acordar, enquanto o bebê dorme, ou antes de dormir.",
        "Deixe tudo preparado na noite anterior: sua roupa, a garrafa de água, o vídeo da aula já aberto. Reduza ao máximo as barreiras para começar.",
        "Use a 'Regra dos 5 Minutos': se não estiver com vontade, prometa a si mesma que fará apenas 5 minutos. Na maioria das vezes, você continuará.",
        "Envolva a família. Peça ajuda ao parceiro ou transforme o momento do treino em uma brincadeira com os filhos."
    ];

    const exclusiveOffers = [
        {
            title: "Plano Alimentar (Secreto) para Desinchar",
            description: "Descubra o poder do Plano Alimentar Secreto, seu guia de 30 dias para uma vida sem inchaço e inflamação, com lista de compras e substituições..",
            price: "R$ 14,90",
            originalPrice: "R$ 27,90",
            icon: <Gift className="h-10 w-10 text-primary" />,
            buttonText: "Adicionar ao meu acesso"
        },
        {
            title: "Guia Definitivo Para Vestir o que Você Ama",
            description: "Técnicas de Automassagem para um corpo leve, os segredos de postura que alongam a silhueta, e dicas de looks que te fazem sentir imparável. Sua confiança é o melhor acessório.",
            price: "R$ 14,90",
            originalPrice: "R$ 27,90",
            icon: <BookOpen className="h-10 w-10 text-primary" />,
            buttonText: "Quero este guia"
        },
        {
            title: "Protocolo Zero Celulite",
            description: "Chegou o momento de encerrar o ciclo das inseguranças. O PROTOCOLO ZERO CELULITE oferece o caminho mais rápido e eficaz para conquistar a pele que você sempre desejou.",
            price: "R$ 14,90",
            originalPrice: "R$ 27,90",
            icon: <Award className="h-10 w-10 text-primary" />,
            buttonText: "Continuar minha evolução"
        },
        {
            title: "Meditações Guiadas \"Mente em Foco, Corpo em Harmonia\"",
            description: "Sua transformação começa de dentro. Áudios de 10-25 min para construir disciplina inabalável e blindar sua autoestima. É o equilíbrio emocional que garante sua constância e os seus resultados.",
            price: "R$ 14,90",
            originalPrice: "R$ 27,90",
            icon: <Zap className="h-10 w-10 text-primary" />,
            buttonText: "Adicionar meditações"
        }
    ];

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">O Desafio da Vida Real</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Você aprendeu os exercícios, entendeu a técnica, mas agora vem o maior desafio: como encaixar tudo isso na sua rotina real, que já é cheia de imprevistos e demandas? Esta aula é sobre estratégia. Não se trata de ter mais tempo, mas de usar o tempo que você tem de forma mais inteligente. O objetivo é criar uma rotina tão natural quanto escovar os dentes.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Clock className="h-6 w-6 text-primary" />
                        As 4 Chaves para uma Rotina Blindada
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {routineKeys.map((key, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{key}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            
            <section className="py-12 bg-beige rounded-lg">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Ofertas Exclusivas para Você</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                            Potencialize sua jornada com ferramentas e guias que vão acelerar seus resultados.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {exclusiveOffers.map((offer, index) => (
                             <Card key={index} className="bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                                <CardHeader className="items-center">
                                    {offer.icon}
                                    <CardTitle className="text-center font-headline text-xl">{offer.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center flex flex-col flex-grow">
                                    <p className="text-muted-foreground text-sm flex-grow">{offer.description}</p>
                                    <p className="text-sm line-through text-muted-foreground mt-4">De {offer.originalPrice}</p>
                                    <p className="text-2xl font-bold text-primary">por apenas {offer.price}</p>
                                    <Button className="mt-4 w-full transition-transform duration-300 hover:scale-105">{offer.buttonText}</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Button size="lg" className="font-bold text-xl p-6">
                            Adquira todas as ofertas por apenas R$ 39,90
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
