import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mountain, PersonStanding, Wind, ShieldCheck, Zap, TrendingUp, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PostureAndEleganceContent() {
    const postureBenefits = [
        {
            title: "Projeção de Confiança",
            description: "Uma coluna alinhada e um peito aberto projetam segurança e autoconfiança. Sua presença se torna mais notável e sua comunicação, mais impactante.",
            icon: <ShieldCheck className="h-8 w-8 text-primary" />
        },
        {
            title: "Mais Energia e Vitalidade",
            description: "Uma boa postura permite que você respire de forma mais profunda e eficiente, oxigenando melhor o seu corpo. Isso aumenta sua energia e reduz a sensação de cansaço.",
            icon: <Zap className="h-8 w-8 text-primary" />
        },
        {
            title: "Corpo Mais Esbelto",
            description: "Apenas corrigindo sua postura, você imediatamente parece mais alta, alongada e até mais magra. É um truque de mágica que não precisa de dietas ou exercícios.",
            icon: <TrendingUp className="h-8 w-8 text-primary" />
        },
        {
            title: "Prevenção de Dores",
            description: "O alinhamento corporal correto reduz a pressão sobre a coluna vertebral, o pescoço e os ombros, ajudando a prevenir e aliviar dores crônicas.",
            icon: <Eye className="h-8 w-8 text-primary" />
        }
    ];
    
    const posturePillars = [
        {
            title: "Pilar 1: O Fio Invisível no Topo da Cabeça",
            description: "Imagine um fio puxando suavemente o topo da sua cabeça para o céu. Isso alonga sua coluna e seu pescoço, abrindo o peito e posicionando seus ombros para trás de forma natural, sem esforço. É o ponto de partida para todo o seu alinhamento.",
            practice: "Como praticar: Encoste-se em uma parede, garantindo que sua cabeça, ombros e glúteos estejam em contato com ela. Sinta o alinhamento. Depois, afaste-se e tente manter essa mesma sensação.",
            icon: <Wind className="h-8 w-8 text-primary" />
        },
        {
            title: "Pilar 2: Os Pés Ancorados no Chão",
            description: "Uma base sólida é o segredo para um alinhamento corporal que se sustenta de baixo para cima. Sinta seus pés firmes no chão, distribuindo o peso por igual entre a parte da frente e o calcanhar.",
             practice: "Por que é importante: Quando seu peso não está equilibrado, você tende a se inclinar para frente ou para trás, comprometendo todo o seu alinhamento. Sentir os pés no chão ajuda a ativar os músculos da perna e do core, preparando o corpo para o movimento.",
            icon: <Mountain className="h-8 w-8 text-primary" />
        },
        {
            title: "Pilar 3: A Força do Core Sempre Presente",
            description: "Você treinou o seu core para ser a sua cinta de força interna. Lembre-se da ativação que você praticou: uma leve contração do transverso abdominal (como se fosse fechar o zíper de uma calça justa). Isso sustenta sua lombar e projeta uma postura de poder.",
            practice: "Como aplicar: Seja sentada, em pé ou caminhando, lembre-se de ativar suavemente o seu core. Essa pequena contração já faz uma enorme diferença em como você se sente e se move.",
            icon: <PersonStanding className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">A Postura da Confiança: Sua Jornada para a Elegância e o Poder Pessoal</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg">
                       Sua postura diz muito sobre você antes mesmo de você falar. Ela reflete sua saúde, sua energia e, acima de tudo, sua confiança interior. Uma boa postura não é apenas sobre ficar 'reta', mas sobre encontrar um alinhamento corporal que seja sustentável, confortável e que transmita uma elegância natural. Com o seu core já fortalecido pelo desafio, você tem o alicerce necessário para construir uma postura impecável. Agora, vamos refinar os detalhes e aprender a projetar essa nova força em cada movimento do seu dia a dia.
                    </p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 1: O Que a Sua Postura Diz Sobre Você</CardTitle>
                </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground mb-6">A elegância vai além de roupas e acessórios. Ela começa com a maneira como você se move pelo mundo. Uma postura correta tem um impacto profundo que você talvez nem perceba.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {postureBenefits.map(benefit => (
                             <div key={benefit.title} className="flex items-start gap-4">
                                <div className="flex-shrink-0">{benefit.icon}</div>
                                <div>
                                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 2: Os 3 Pilares da Postura Perfeita</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {posturePillars.map(pillar => (
                        <div key={pillar.title} className="flex items-start gap-4 p-4 rounded-lg border bg-background">
                            <div className="flex-shrink-0 pt-1">{pillar.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg text-primary">{pillar.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
                                <p className="text-sm text-muted-foreground mt-2 italic">{pillar.practice}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Capítulo 3: O Ritual do "Reset Postural"</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Este é um exercício rápido e poderoso que pode ser feito em qualquer lugar e a qualquer hora. Ele serve como um lembrete para seu corpo e sua mente, ajudando a quebrar os padrões de má postura.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li><strong>Encontre um espaço:</strong> Pode ser de pé no elevador, enquanto espera em uma fila ou durante uma pausa no trabalho.</li>
                        <li><strong>Feche os olhos e respire:</strong> Respire fundo 3 vezes. Sinta o ar preenchendo o seu corpo e o estresse saindo.</li>
                        <li><strong>Lembre-se do "fio invisível":</strong> Aplique a dica do fio, alongando sua coluna e sentindo-se crescer.</li>
                        <li><strong>Ajuste os ombros:</strong> Gire os ombros para trás e para baixo, abrindo o peito.</li>
                        <li><strong>Ative o core:</strong> Faça aquela leve contração abdominal que você já conhece.</li>
                        <li><strong>Abra os olhos:</strong> Mantenha essa sensação pelo máximo de tempo que conseguir. Repita o ritual sempre que sentir necessidade.</li>
                    </ol>
                </CardContent>
            </Card>

            <Card className="text-center">
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl">Considerações Finais</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-lg mb-6">
                       Você completou o módulo extra! Agora está pronta para aplicar esses conhecimentos no seu dia a dia e avançar na sua jornada de recuperação. Lembre-se, a postura da confiança não é um destino, mas uma prática diária. Cuide do seu corpo, sinta sua força e deixe sua postura falar por você.
                    </p>
                    <Button asChild>
                        <Link href="/modulos/vida-real-corpo-forte">
                            Ir para o próximo módulo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
