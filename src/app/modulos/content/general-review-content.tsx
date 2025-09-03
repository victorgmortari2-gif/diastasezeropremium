import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GeneralReviewContent() {
    const keyConcepts = [
        "A Respiração Diafragmática como a base de tudo.",
        "A ativação do Transverso do Abdômen em todos os movimentos.",
        "Saber identificar os sinais de alerta como o 'coning' e o 'doming'.",
        "A importância da progressão segura: de repetições, para dificuldade, para carga.",
        "O papel da nutrição e da hidratação na saúde dos tecidos.",
        "A prática de 'Ergonomia no Dia a Dia' para manter a postura e a ativação."
    ];

    const faq = [
        {
            question: "Sinto que meu progresso está em um platô. O que devo fazer?",
            answer: "Um platô é normal. Isso significa que seu corpo se adaptou. Tente variar os exercícios que você já domina, aumente as repetições ou as séries e, se for o caso, adicione uma pequena carga (como uma bola de pilates) para dar um novo estímulo aos músculos."
        },
        {
            question: "Quando posso começar a combinar meu treino do core com outros exercícios, como corrida ou musculação?",
            answer: "Você pode começar a introduzir essas atividades quando sentir total controle do seu core, sem 'coning' ou dor na lombar, mesmo em exercícios mais desafiadores. Comece devagar, com pouca carga ou intensidade, e observe a reação do seu corpo, focando sempre na ativação do seu transverso."
        },
        {
            question: "É necessário treinar o core todos os dias para manter os resultados?",
            answer: "Não, o excesso de treino pode ser tão prejudicial quanto a falta. O ideal é treinar de 3 a 5 vezes por semana, dando tempo para os músculos se recuperarem. Mais importante do que a frequência é a qualidade: manter a consciência e a ativação do core em todas as suas atividades diárias."
        },
        {
            question: "Devo ainda me preocupar com os sinais de 'coning' após o que aprendi no 'Protocolo de Treino Avançado'?",
            answer: "Sim, a consciência é para a vida. O 'coning' é um sinal de que a carga está maior do que o seu core consegue suportar naquele momento. Ele ainda pode aparecer em variações mais desafiadoras. Use-o como um feedback para voltar um passo e fortalecer ainda mais o seu core."
        },
        {
            question: "O que faço se eu ficar doente ou precisar viajar e perder alguns dias de treino?",
            answer: "A consistência é importante, mas a perfeição não. O mais importante é retomar a sua rotina assim que possível. Comece com uma revisão dos exercícios básicos de respiração e ativação e, em seguida, retome de onde parou."
        }
    ];

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Parabéns por Concluir o Módulo 3!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Você chegou a um ponto crucial do nosso plano premium, tendo dominado exercícios de estabilidade avançados e consolidado o seu abdômen. Esta aula é o nosso ponto de encontro para solidificar o que você aprendeu e garantir que não restem dúvidas. Vamos revisar os pontos mais importantes e responder às perguntas mais frequentes para te preparar para os próximos módulos.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Revisão Rápida: O que Não Podemos Esquecer</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {keyConcepts.map((concept, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{concept}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Perguntas Frequentes (FAQ)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faq.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="font-semibold text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
             <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">A Base Está Firme. Agora, Vamos Além!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Você construiu uma fundação sólida, corrigiu os erros e superou os desafios. O que vem a seguir não é apenas mais do mesmo, mas um nível totalmente novo de força e confiança. No próximo módulo, vamos explorar como integrar todo o seu corpo, usando a força do seu core como ponto de partida para um poder e estabilidade sem precedentes.
                    </p>
                    <Button asChild>
                        <Link href="/modulos/estetica-postura">
                            Avançar para o Módulo de Estética e Postura <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

        </div>
    );
}
