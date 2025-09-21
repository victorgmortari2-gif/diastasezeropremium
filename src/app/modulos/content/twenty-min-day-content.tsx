import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TwentyMinDayContent() {
    const pillars = [
        {
            title: "Prepare-se na Noite Anterior",
            description: "Sua jornada de 20 minutos começa antes mesmo de você dormir.",
            points: [
                "Decida a hora: Escolha o momento mais tranquilo do seu dia. Para muitas pessoas, a manhã funciona melhor, antes que as demandas do dia comecem. Para outras, a hora do almoço ou o final da tarde são mais viáveis. O importante é escolher um horário que você realmente consiga cumprir.",
                "Arrume o ambiente: Deixe seu colchonete, uma toalha ou o que você usa para as aulas já no lugar. Se for usar música, deixe a playlist pronta. Prepare sua garrafa de água. Quando você acorda (ou chega em casa) e tudo já está à espera, a chance de você desistir é quase zero.",
            ],
        },
        {
            title: "Faça o Compromisso com Você Mesma",
            description: "Veja esses 20 minutos como um encontro inadiável com a pessoa mais importante da sua vida: você.",
            points: [
                "Anote na agenda: Trate esse tempo como uma reunião de trabalho ou uma consulta médica. Anote na sua agenda, no celular ou em um planner. Quando está escrito, tem mais peso.",
                "Foque na qualidade, não na quantidade: Lembre-se, 20 minutos de foco total valem muito mais do que uma hora de prática dispersa. Use cada minuto para se conectar com sua respiração, sua postura e seu corpo.",
            ],
        },
    ];

    const tips = [
        "Aproveite os momentos livres: O trânsito parou? A água do café está esquentando? Você pode usar esses pequenos intervalos para praticar a respiração hipopressiva básica. Um minuto aqui, dois minutos ali. Tudo soma!",
        "Crie um 'ritual': Sua prática pode ser um momento para você recarregar as energias. Coloque uma música relaxante, acenda uma vela, faça um alongamento leve antes de começar. Isso transforma a atividade em algo prazeroso e não em uma tarefa."
    ]

    return (
        <div className="space-y-8">
            <header className="text-center mb-10">
                <h1 className="font-headline text-3xl font-bold">Aula: O Segredo para Otimizar Seu Tempo e Ter Resultados em 20 Minutos por Dia</h1>
            </header>

            <Card>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">
                        Parabéns! Você chegou a um ponto crucial da sua jornada com o Diastase Zero. A esta altura, você já domina as técnicas, entende a importância de cada movimento e está pronta para aplicar o que aprendeu de forma consistente na sua rotina.
                    </p>
                    <p className="text-muted-foreground mt-4">
                        Muitas vezes, a maior dificuldade não é aprender a técnica, mas encontrar tempo para praticar. A boa notícia é que o segredo para ter resultados duradouros não está em passar horas e horas se exercitando, mas sim em ser consistente. E é exatamente isso que vamos te ensinar nesta aula: como fazer tudo o que precisa com apenas 20 minutos por dia.
                    </p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">A Realidade da Rotina e a Solução Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">
                        Sabemos que a vida é corrida. Entre trabalho, casa, filhos e mil outras tarefas, parece impossível encaixar mais uma atividade na agenda. A ideia de "ter tempo livre" muitas vezes parece um luxo. Mas e se a gente te dissesse que você não precisa de tempo livre, e sim de estratégia?
                    </p>
                     <p className="text-muted-foreground mt-4">
                        O sucesso do seu processo de recuperação não depende de longas sessões, mas de um compromisso diário com você mesma. 20 minutos é o tempo de uma série de TV, de uma conversa no celular ou de rolar a tela nas redes sociais. É um tempo que, quando bem usado, pode transformar seu corpo e sua autoestima.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Os Pilares para Manter a Consistência em 20 Minutos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">A chave é a organização. Quando você planeja e se prepara, a prática se torna um hábito natural e não uma obrigação.</p>
                    {pillars.map(pillar => (
                        <div key={pillar.title}>
                            <h3 className="font-bold text-lg text-primary">{pillar.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1 mb-2">{pillar.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {pillar.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Dicas de Ouro para a Prática Diária</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {tips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Seu Maior Aliado: A Mentalidade de Progresso</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">
                       Não se cobre por dias em que a prática não saiu perfeita. O importante é não pular a prática. Mesmo que você faça apenas 10 minutos, já é uma vitória. O objetivo é criar o hábito. A perfeição virá com o tempo, mas a consistência é o que te leva lá.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-primary/10">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Resumo da Aula</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Nesta aula, você aprendeu que a consistência é mais importante que a intensidade. Ao se preparar com antecedência e focar em 20 minutos de prática diária, você garante que sua jornada com o Diastase Zero continue fluindo, independentemente da correria do dia a dia. Lembre-se: você é capaz de fazer isso!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
