import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Repeat, Dumbbell, NotebookText, ShieldCheck } from "lucide-react";

export function PostChallengePlanContent() {
  const maintenancePlan = [
    {
      title: "Frequência: 3 a 4 Vezes por Semana",
      description: "Seu core não precisa mais de estímulo diário intenso. Escolha de 3 a 4 dias na semana para realizar um treino focado. Nos outros dias, mantenha-se ativa com caminhadas ou outras atividades que você goste.",
      icon: <CalendarDays className="h-8 w-8 text-primary" />
    },
    {
      title: "O Mix Ideal: Hipopressivos + Funcionais",
      description: "Comece sempre com 5-10 minutos de hipopressivos para 'acordar' o core. Em seguida, faça 15-20 minutos de exercícios funcionais que integrem o corpo todo (agachamentos, pranchas com variação, etc.), sempre com foco na ativação abdominal.",
      icon: <Repeat className="h-8 w-8 text-primary" />
    },
    {
      title: "Varie para Evoluir",
      description: "Não faça sempre os mesmos exercícios. A cada 2 semanas, troque uma ou duas variações para continuar desafiando seus músculos e evitar o platô.",
      icon: <Dumbbell className="h-8 w-8 text-primary" />
    },
    {
      title: "Escute seu Corpo",
      description: "Se sentir dor ou notar o 'coning' (estufamento da barriga), dê um passo para trás. Aquele exercício pode ser avançado demais. Adapte ou volte para uma versão mais simples. A consciência corporal que você desenvolveu é sua maior ferramenta.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">O Desafio Acabou, a Jornada Continua</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Parabéns! Concluir o desafio de 21 dias é uma conquista imensa. Você fortaleceu seu corpo, recuperou a função do seu abdômen e, o mais importante, criou um novo relacionamento com seu corpo. Agora, a pergunta é: como manter esses resultados para sempre? Este plano de 60 dias é o seu mapa para transformar a conquista em um estilo de vida.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">O Plano de Manutenção de 60 Dias</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {maintenancePlan.map(item => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card className="bg-primary/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <NotebookText className="h-10 w-10 text-primary" />
            <div>
              <h3 className="font-headline text-xl font-bold">Diário de Bordo</h3>
              <p className="text-muted-foreground">
                Considere manter um pequeno diário de treinos. Anote o que você fez e como se sentiu. Isso helps a visualizar seu progresso e a se manter motivada.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
