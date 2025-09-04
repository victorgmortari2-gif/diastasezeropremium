import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flower, Droplets, BookOpen, Heart } from "lucide-react";

export function SelfCareContent() {
  const rituals = [
    {
      title: "Massagem Modeladora com Óleos Essenciais",
      description: "Esta massagem estimula a circulação, promove a firmeza e nutre a pele profundamente.",
      materials: [
        "Óleo Carreador: Óleo de amêndoas, semente de uva ou coco.",
        "Óleos Essenciais: Alecrim, Gerânio, Cipreste, ou Lavanda."
      ],
      howTo: [
        "Após o banho, com a pele ainda úmida, aplique a mistura do óleo nas mãos.",
        "Comece com movimentos circulares e firmes no abdômen, sempre no sentido horário.",
        "Deslize as mãos da lateral da cintura em direção ao centro.",
        "Faça movimentos ascendentes das pernas para o abdômen.",
        "Continue por 5 a 10 minutos, respirando profundamente."
      ],
      icon: <Droplets className="h-8 w-8 text-primary" />
    },
    {
      title: "Dry Brushing (Escovação a Seco)",
      description: "Esta técnica ancestral esfolia a pele e estimula o sistema linfático.",
      materials: ["Uma escova de cerdas naturais."],
      howTo: [
        "Faça a escovação antes do banho, com a pele seca.",
        "Comece pelos pés, com movimentos longos e leves em direção ao coração.",
        "Suba pelas pernas, coxas, glúteos e barriga (movimentos circulares).",
        "Passe para os braços, das mãos em direção aos ombros.",
        "Tome seu banho normalmente."
      ],
      icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
      title: "Escalda-pés Relaxante para o Inchaço",
      description: "Um ritual simples que proporciona um alívio imediato para a sensação de inchaço.",
      materials: [
        "Uma bacia com água morna.",
        "Sal grosso (uma xícara).",
        "Opcional: Sal de Epsom, óleo essencial de lavanda, folhas de chá de camomila."
      ],
      howTo: [
        "Encha a bacia com água morna para cobrir os pés e tornozelos.",
        "Adicione o sal grosso e os ingredientes opcionais.",
        "Mergulhe os pés por 15 a 20 minutos."
      ],
      icon: <Flower className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="space-y-8">
      <header className="text-center mb-10">
        <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="font-headline text-3xl font-bold">Rituais de Autocuidado: O Toque Final na Sua Beleza</h1>
        <p className="text-lg text-muted-foreground mt-2">Dicas de cremes, óleos e práticas para a pele que complementam sua jornada de recuperação.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Introdução: O Autocuidado como Ativo na Sua Recuperação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A jornada de recuperação da diástase vai muito além dos exercícios. Ela envolve reconectar-se com seu corpo e cuidar dele com carinho e intenção. Os rituais de autocuidado com foco estético não são sobre vaidade, mas sobre bem-estar e cura. Ao integrar essas práticas na sua rotina, você não só acelera a cicatrização dos tecidos, como também nutre a sua autoestima.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 1: O Poder dos Rituais Estéticos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Benefícios para a Pele</h3>
            <p className="text-muted-foreground">A massagem e a esfoliação estimulam a produção de colágeno e elastina, essenciais para a firmeza da pele. A hidratação profunda ajuda a nutrir o tecido, melhorando a aparência de estrias.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Benefícios para o Corpo</h3>
            <p className="text-muted-foreground">A massagem e a escovação a seco ativam o sistema linfático, o que é crucial para eliminar o excesso de líquido e toxinas que causam inchaço e inflamação.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Benefícios para a Mente</h3>
            <p className="text-muted-foreground">Dedicar um tempo para si mesma reduz o estresse. O toque e o aroma dos óleos ativam hormônios do bem-estar, criando um momento de paz.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 2: Os Rituais Detalhados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {rituals.map(ritual => (
            <div key={ritual.title} className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">{ritual.icon}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-xl mb-2">{ritual.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ritual.description}</p>
                
                <h4 className="font-semibold mb-2">Materiais:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                  {ritual.materials.map((item, i) => <li key={i}>{item}</li>)}
                </ul>

                <h4 className="font-semibold mb-2">Como Fazer:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground">
                  {ritual.howTo.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Capítulo 3: Criando a Sua Rotina de Autocuidado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
             <p className="text-muted-foreground">Não precisa fazer tudo todos os dias. O segredo é a consistência e a intenção.</p>
            <div>
                <h3 className="font-bold">Comece Pequeno</h3>
                <p className="text-muted-foreground">Escolha um ritual para começar e adicione outros à medida que se sentir mais confortável.</p>
            </div>
             <div>
                <h3 className="font-bold">Habit Stacking</h3>
                <p className="text-muted-foreground">Vincule seu ritual a uma rotina que você já tem. Ex: "Depois de escovar os dentes à noite, vou fazer a massagem modeladora."</p>
            </div>
             <div>
                <h3 className="font-bold">A Importância da Intenção</h3>
                <p className="text-muted-foreground">Use esse tempo para se conectar com seu corpo e agradecer por tudo que ele faz por você.</p>
            </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/10 text-center">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Considerações Finais: O Amor que Transforma
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            O autocuidado estético é um ato de amor-próprio. Ao cuidar da sua pele e do seu corpo com carinho, você não apenas melhora a sua aparência, mas também fortalece a sua saúde e a sua mente. A sua beleza é única, e a sua força é inabalável.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
