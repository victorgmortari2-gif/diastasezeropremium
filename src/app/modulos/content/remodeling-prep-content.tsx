import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Utensils, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RemodelingPrepContent() {
    const pillars = [
        {
            title: "Ajustes Físicos",
            description: "Seu corpo já está mais forte e adaptado, mas para entrar em treinos mais avançados será essencial manter a regularidade, priorizar alongamentos e incluir atividades aeróbicas leves para ajudar na recuperação.",
            icon: <Dumbbell className="h-8 w-8 text-primary" />
        },
        {
            title: "Ajustes Nutricionais",
            description: "Sua alimentação se torna ainda mais estratégica. Foco em proteínas magras, carboidratos integrais, gorduras boas e hidratação intensa. Evitar ultraprocessados e açúcar é crucial.",
            icon: <Utensils className="h-8 w-8 text-primary" />
        },
        {
            title: "Ajustes Mentais",
            description: "A remodelagem exige consistência. Prepare-se para treinos mais desafiadores, mantendo o foco nos resultados já conquistados e visualizando o corpo que você deseja alcançar.",
            icon: <BrainCircuit className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Preparando o Terreno para a Transformação</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Nesta aula, vamos preparar você para entrar em uma das fases mais importantes do programa: a Remodelagem Corporal. Até aqui, você já fortaleceu sua base com exercícios de estabilidade, treinos hipopressivos e práticas integradas que ativaram o seu core, melhoraram sua postura e começaram a reduzir a diástase. Agora, é o momento de dar um passo além.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Os 3 Pilares da Preparação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {pillars.map(pillar => (
                        <div key={pillar.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0">{pillar.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{pillar.title}</h3>
                                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Pronta para o Próximo Nível?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Agora que você está preparada, chegou a hora de avançar para o Módulo 3 – Remodelagem Corporal. Nessa nova fase, vamos consolidar seus resultados com um protocolo avançado e estratégias exclusivas para manter seu abdômen firme para sempre. Você está pronta para transformar todo o esforço em resultados duradouros?
                    </p>
                    <Button asChild>
                        <Link href="/modulos/remodelagem-corporal">
                            Avançar para o Módulo 3 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
