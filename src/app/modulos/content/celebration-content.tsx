import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function CelebrationContent() {
  const celebrationPoints = [
    "Tire um tempo para si. Faça um alongamento suave, uma meditação guiada ou simplesmente sente-se em silêncio e sinta a força do seu corpo que foi reativado.",
    "Use roupas que te façam sentir bem e celebre o progresso do seu corpo de forma positiva e sem julgamentos.",
    "Compartilhe sua jornada com alguém de confiança. Falar sobre o que você superou e conquistou torna a vitória ainda mais real."
  ];

  const pillars = [
    {
      title: "Pilar 1: A Consciência é a Nova Meta",
      text: "Você aprendeu a ativar o seu core nos exercícios. O próximo passo é tornar essa ativação inconsciente e instintiva. Comece a se 'pegar' ativando o seu transverso ao sentar na cadeira, ao levantar da cama, ao carregar as compras. Isso é a verdadeira força funcional."
    },
    {
      title: "Pilar 2: A Progressão é o Novo Hábito",
      text: "Seu corpo precisa de novos desafios para continuar evoluindo. Continue com a mentalidade da 'Progressão Segura'. Explore novas variações dos exercícios que você domina. Adicione um pouco de peso, ou aumente o tempo de isometria. Nunca fique estagnada. O crescimento é contínuo."
    },
    {
      title: "Pilar 3: A Paciência é a Nova Força",
      text: "A jornada não é linear. Haverá dias que você se sentirá mais forte e dias que não. Abrace essa realidade. Seja paciente e gentil com seu corpo. A força a longo prazo vem do respeito, da consistência e da capacidade de se adaptar."
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-white">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed text-foreground">
            Parabéns, Guerreira! Você chegou a um marco impressionante em sua jornada de recuperação. Esta não é apenas mais uma aula, mas um momento para respirar fundo, reconhecer o quão longe você chegou e absorver a magnitude de sua conquista. Você não apenas seguiu um plano, você transformou seu corpo e sua mentalidade. O trabalho que você dedicou a cada exercício e a cada aula não é só sobre o seu abdômen; é sobre a sua força, sua disciplina e o seu compromisso com você mesma.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Celebre de Forma Significativa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">A celebração é uma parte fundamental do processo. Ela solidifica a sua conquista e reforça o seu cérebro de que o esforço valeu a pena. Não pule este passo! Sugestões para sua celebração:</p>
          <ul className="space-y-3">
            {celebrationPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Os Próximos Passos: Da Meta ao Estilo de Vida</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">O plano que você seguiu foi a rampa de lançamento. Agora, a meta é transformar o que você aprendeu em um estilo de vida sustentável. Sua jornada não termina aqui; ela evolui. Para isso, incorpore estes três pilares:</p>
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div key={index}>
                <h3 className="font-headline text-lg font-bold mb-2 text-primary">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-primary/10">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">O Convite para a Continuidade</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
            Você já provou que pode se comprometer e transformar sua saúde. Agora que você tem a base, a jornada está pronta para um próximo nível de aprofundamento e desafios. Se você está pronta para explorar um novo nível de força e potencial, o próximo módulo está à sua espera para continuar a sua evolução.
            </p>
        </CardContent>
      </Card>
      
      <Card className="text-center">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Sua Jornada Acaba de Começar de Verdade!</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-lg">
            Sua força vai muito além dos seus músculos. É a sua dedicação e disciplina que a trouxeram até aqui. O futuro da sua saúde está em suas mãos. Confie na sua capacidade e continue a brilhar.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
