import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PlanningS2Content() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">O que Esperar da Semana 2: Fortalecimento Intensivo</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Se na primeira semana construímos a base e a consciência corporal, agora é hora de colocar essa fundação à prova. A Semana 2 é focada em intensificar o trabalho do core, introduzindo exercícios que desafiam sua estabilidade e força de maneira progressiva e segura. O objetivo é começar a "costurar" a diástase de dentro para fora, fortalecendo os músculos profundos para que eles voltem a dar suporte ao seu tronco.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Pilares da Semana 2</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0"><Dumbbell className="h-8 w-8 text-primary" /></div>
                        <div>
                            <h3 className="font-bold text-lg">Progressão nos Hipopressivos</h3>
                            <p className="text-sm text-muted-foreground">Vamos introduzir novas posturas e aumentar o tempo de apneia nos exercícios hipopressivos, potencializando a ativação do transverso abdominal e do assoalho pélvico.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0"><Target className="h-8 w-8 text-primary" /></div>'
                        <div>
                            <h3 className="font-bold text-lg">Foco na Estabilidade</h3>
                            <p className="text-sm text-muted-foreground">Você aprenderá exercícios isométricos e de estabilização que ensinam seu core a se manter contraído e firme durante movimentos, prevenindo a pressão excessiva na linha alba.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0"><Zap className="h-8 w-8 text-primary" /></div>
                        <div>
                            <h3 className="font-bold text-lg">Alimentação Funcional</h3>
                            <p className="text-sm text-muted-foreground">A nutrição continua sendo nossa aliada. Vamos focar em alimentos que ajudam na produção de colágeno e na recuperação tecidual, essenciais para fechar a diástase.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Sua Mentalidade para Esta Semana</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Desafio e Consistência. Alguns exercícios podem parecer difíceis no início. Não desanime! Respeite seus limites, mas não tenha medo de sair da zona de conforto. A consistência é mais importante que a perfeição. Fazer um pouco todos os dias trará resultados muito maiores do que fazer muito em um dia só.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 text-center">
                <CardContent className="p-6">
                     <p className="text-foreground font-semibold mb-4">
                        Você concluiu a primeira semana! Está pronta para intensificar seu treino e acelerar ainda mais seus resultados?
                    </p>
                    <Button asChild>
                        <Link href="/modulos/treino-intensivo">
                            Ir para a Semana 2 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
