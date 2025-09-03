import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mountain, PersonStanding, Wind } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PostureAndEleganceContent() {
    const postureTips = [
        {
            title: "O Fio Invisível no Topo da Cabeça",
            description: "Imagine um fio puxando suavemente o topo da sua cabeça para o céu. Isso alonga sua coluna, abre o peito e posiciona seus ombros para trás naturalmente, sem esforço.",
            icon: <Wind className="h-8 w-8 text-primary" />
        },
        {
            title: "Ancore Seus Pés no Chão",
            description: "Sinta seus pés firmes no chão, distribuindo o peso por igual. Uma base sólida é o segredo para um alinhamento corporal que se sustenta de baixo para cima.",
            icon: <Mountain className="h-8 w-8 text-primary" />
        },
        {
            title: "Core Ativo, Postura Presente",
            description: "Lembre-se da ativação do seu core que você treinou. Uma leve contração do transverso abdominal (como se fosse fechar o zíper de uma calça justa) sustenta sua lombar e projeta elegância.",
            icon: <PersonStanding className="h-8 w-8 text-primary" />
        }
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">A Postura como Cartão de Visita</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Sua postura diz muito sobre você antes mesmo de você falar. Ela reflete confiança, saúde e energia. Uma boa postura não é apenas sobre ficar 'reta', mas sobre encontrar um alinhamento corporal que seja sustentável, confortável e que transmita elegância. Com o core fortalecido, você já tem 80% do caminho andado. Agora, vamos refinar os detalhes.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Dicas Práticas para uma Postura Elegante</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {postureTips.map(tip => (
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

            <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Exercício Rápido: O Reset Postural</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Pode ser feito em qualquer lugar, a qualquer hora.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Fique de pé e feche os olhos.</li>
                        <li>Respire fundo 3 vezes, focando no ar que entra e sai.</li>
                        <li>Aplique a dica do 'fio invisível', sentindo sua coluna crescer.</li>
                        <li>Gire os ombros para trás e para baixo, abrindo o peito.</li>
                        <li>Ative seu core suavemente.</li>
                        <li>Abra os olhos e mantenha essa sensação pelo máximo de tempo que conseguir.</li>
                    </ol>
                </CardContent>
            </Card>
             <Card className="bg-primary/10 text-center">
                <CardContent className="p-6">
                    <p className="text-foreground font-semibold mb-4">
                        Você completou o módulo extra! Agora está pronta para aplicar esses conhecimentos no seu dia a dia e avançar na sua jornada.
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
