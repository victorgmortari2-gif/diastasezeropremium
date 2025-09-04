import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Target, ShieldCheck, Heart, Leaf, Star } from "lucide-react";

export function PostChallengePlanContent() {
  const phase1Schedule = [
    { day: "Segunda", activity: "Treino de Core 1" },
    { day: "Terça", activity: "Atividade Aeróbica (Caminhada ou Bike Leve)" },
    { day: "Quarta", activity: "Treino de Core 2" },
    { day: "Quinta", activity: "Alongamento e Mobilidade (Yoga ou Pilates Básico)" },
    { day: "Sexta", activity: "Treino de Força (3 séries de 10 Agachamentos e Pontes)" },
    { day: "Sábado", activity: "Descanso Ativo (Caminhada em ritmo suave)" },
    { day: "Domingo", activity: "Descanso Completo" },
  ];

  const phase2Schedule = [
    { day: "Segunda", activity: "Treino de Core 3" },
    { day: "Terça", activity: "Atividade Aeróbica Moderada (Corrida ou Natação)" },
    { day: "Quarta", activity: "Treino de Core 4" },
    { day: "Quinta", activity: "Alongamento e Mobilidade" },
    { day: "Sexta", activity: "Treino de Força (Adicione halteres leves ou elásticos)" },
    { day: "Sábado", activity: "Descanso Ativo" },
    { day: "Domingo", activity: "Descanso Completo" },
  ];

  return (
    <div className="space-y-8">
      <header className="text-center mb-10">
        <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="font-headline text-3xl font-bold">E-book: Guia de Manutenção de 60 Dias</h1>
        <p className="text-lg text-muted-foreground mt-2">Seu Guia Completo para Consolidar os Resultados e Manter a Força para a Vida Toda.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Introdução: A Jornada Continua</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Parabéns! Você concluiu uma etapa significativa, mas a verdadeira transformação se consolida agora. Os próximos 60 dias são cruciais para que seu corpo assimile e integre os novos padrões de movimento e força que você desenvolveu. Este guia é seu mapa para essa jornada, oferecendo um caminho estruturado para aprimorar a força do seu core, avançar com segurança e solidificar a prática de exercícios como um pilar da sua saúde para a vida toda. O Desafio Diástase ZERO foi o alicerce; agora, vamos erguer a estrutura!
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 1: Recapitulando os Fundamentos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Antes de avançar, é primordial que os fundamentos estejam sólidos. Dominar a ativação correta do core é a base para a segurança e eficácia de cada exercício, garantindo que você maximize seus resultados e previna lesões.</p>
          <div>
            <h3 className="font-bold text-lg text-primary">A Mágica da Respiração 360</h3>
            <p className="text-muted-foreground">A respiração diafragmática é mais do que um exercício; é o seu ponto de partida para uma ativação profunda e correta do core. Como Dominar: Deite-se de barriga para cima, mãos sobre as costelas. Inspire pelo nariz, sentindo suas costelas se expandirem lateralmente. Ao expirar, perceba as costelas se fechando e o abdômen contraindo em direção à coluna.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary">Ativação do Transverso Abdominal (TVA)</h3>
            <p className="text-muted-foreground">Teste de Ativação: Deitada, posicione os dedos cerca de 2cm abaixo dos ossos do quadril. Ao expirar, contraia o abdômen como se estivesse "fechando um zíper" do púbis ao umbigo. Se você sentir uma leve firmeza sob os dedos, o TVA está sendo ativado corretamente.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 2: O Plano de Manutenção de 60 Dias</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-2">Fase 1: Consolidando os Ganhos (Semanas 1-4)</h3>
            <p className="text-muted-foreground mb-4">Nesta fase, o foco principal é a perfeição da forma. A qualidade do movimento supera a quantidade.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dia da Semana</TableHead>
                  <TableHead>Atividade Sugerida</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phase1Schedule.map((item) => (
                  <TableRow key={item.day}>
                    <TableCell className="font-medium">{item.day}</TableCell>
                    <TableCell>{item.activity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Fase 2: Progressão e Fortalecimento (Semanas 5-8)</h3>
            <p className="text-muted-foreground mb-4">Com a base consolidada, é hora de ir além! Adicione mais intensidade e introduza novos movimentos.</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dia da Semana</TableHead>
                  <TableHead>Atividade Sugerida</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phase2Schedule.map((item) => (
                  <TableRow key={item.day}>
                    <TableCell className="font-medium">{item.day}</TableCell>
                    <TableCell>{item.activity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 3: Novas Rotinas de Treino</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Treino de Core 1 (Consolidação)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Elevação Pélvica:</strong> Deitada, joelhos flexionados, pés no chão. Expire e eleve o quadril.</p>
                        <p className="mt-2"><strong>Dead Bug:</strong> Deitada, braços para cima, pernas a 90°. Ao expirar, estenda braço e perna opostos.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Treino de Core 2 (Consolidação)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Prancha com Joelhos:</strong> Mantenha joelhos no chão. Corpo em linha reta dos ombros aos joelhos.</p>
                        <p className="mt-2"><strong>Bird-Dog:</strong> De quatro apoios. Ao expirar, estenda braço e perna opostos.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Treino de Core 3 (Progressão)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Prancha Completa:</strong> Mantenha pés no chão. Corpo em linha reta. Não deixe o quadril cair.</p>
                        <p className="mt-2"><strong>Dead Bug com Peso Leve:</strong> Segure um haltere leve ou garrafa de água.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Treino de Core 4 (Progressão)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p><strong>Prancha Lateral:</strong> Apoie-se no antebraço e eleve o quadril.</p>
                        <p className="mt-2"><strong>Bird-Dog com Faixa Elástica:</strong> Coloque uma faixa nos tornozelos.</p>
                    </CardContent>
                </Card>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 4: Estratégias para um Estilo de Vida Duradouro</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-primary mt-1" />
                <div>
                    <h3 className="font-bold">A Recuperação é Tão Importante Quanto o Exercício</h3>
                    <p className="text-muted-foreground">Priorize de 7 a 9 horas de sono por noite e respeite os dias de descanso para a reparação muscular.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <Leaf className="h-6 w-6 text-primary mt-1" />
                <div>
                    <h3 className="font-bold">Combustível para o Seu Corpo</h3>
                    <p className="text-muted-foreground">Foque em proteínas, colágeno e hidratação. Inclua frango, peixe, ovos e beba muita água.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-primary mt-1" />
                <div>
                    <h3 className="font-bold">Mantenha o Foco e a Consistência</h3>
                    <p className="text-muted-foreground">Ouça seu corpo, trace micro-metas e celebre cada progresso para manter a motivação em alta.</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/10 text-center">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
            <Star className="h-6 w-6 text-gold" />
            Considerações Finais: A Força que Você Construiu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Parabéns, guerreira! Você não apenas recuperou seu corpo, você construiu um alicerce sólido de hábitos que irão te sustentar e empoderar para sempre. Este guia de 60 dias é a prova de que a disciplina, quando aplicada com propósito e carinho, se transforma em liberdade e bem-estar duradouros. Siga em frente e celebre a força que você construiu!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
