import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, CheckCircle } from "lucide-react";

export function ReviewAdjustments1Content() {
  const pillars = [
    {
      title: "Postura (Alinhamento Corporal)",
      content: [
        "Pelve Neutra: Um dos erros mais comuns é a inclinação pélvica, seja para a frente (anteversão) ou para trás (retroversão). Para encontrar a posição neutra, imagine que sua pelve é uma tigela cheia de água. O objetivo é mantê-la nivelada para que a água não derrame nem para a frente nem para trás. Na prática, isso significa evitar arquear demais a lombar ou 'esmagar' a coluna contra o chão.",
        "Costelas e Tronco: As costelas devem estar suavemente relaxadas, sem serem projetadas para a frente. O tronco deve estar alongado, como se houvesse um fio puxando o topo da sua cabeça para o teto. Sinta a expansão da caixa torácica em 360 graus na inspiração, e o suave retorno na expiração, sem forçar.",
        "Cabeça e Pescoço: Mantenha o pescoço relaxado e alinhado com a coluna. Evite tensionar a mandíbula ou projetar o queixo para cima. O olhar deve estar sempre à frente ou para o teto, dependendo da posição do exercício."
      ]
    },
    {
      title: "Ritmo Respiratório (O Ritmo da Redução)",
      content: [
        "Inspiração: Sempre pelo nariz. A inspiração deve ser profunda, lenta e controlada. A principal sensação deve ser de expansão das costelas para os lados e para trás, e não de elevação do peito.",
        "Expiração: Expirar pela boca, de forma longa e controlada, como se estivesse soprando uma vela. O objetivo é esvaziar completamente os pulmões. Esta é a etapa que prepara o corpo para a apnéia.",
        "Apnéia (O Vácuo Abdominal): Este é o momento crucial. Após a expiração completa, prenda a respiração (em apnéia). Mantenha a glote fechada para que o ar não entre. O movimento de abertura das costelas (o vácuo) deve vir naturalmente, sem esforço. Se você está 'sugando' o ar, está fazendo a técnica errada. O vácuo acontece como resultado da pressão interna negativa."
      ]
    },
    {
      title: "Ativação Muscular Consciente (A Conexão Mente-Corpo)",
      content: [
        "Transverso do Abdômen: Esse músculo, que funciona como um 'cinturão natural', é ativado passivamente durante o vácuo abdominal. Você não precisa 'contraí-lo'. A sensação deve ser de um suave 'recuo' do umbigo em direção à coluna, como se estivesse fechando um zíper de baixo para cima.",
        "Assoalho Pélvico: O assoalho pélvico trabalha em sinergia com o transverso. A mesma pressão negativa que 'suga' o abdômen também 'suga' a pelve. Isso ajuda a fortalecer os músculos que dão sustentação aos órgãos e previne problemas como incontinência urinária."
      ]
    }
  ];

  const commonErrors = [
    {
      error: "Tensão no pescoço ou nos ombros durante o exercício.",
      correction: "Relaxe os ombros e mantenha o pescoço em uma posição neutra. Use um travesseiro pequeno ou uma toalha enrolada sob a cabeça, se necessário. Se a tensão persistir, diminua a intensidade do vácuo."
    },
    {
      error: "Não conseguir fazer o vácuo abdominal ou sentir que está 'sugando' o ar.",
      correction: "Concentre-se em expirar todo o ar antes da apnéia. A expiração deve ser a mais longa e completa possível. Lembre-se, o vácuo não é uma sucção, é um reflexo natural da pressão interna. Volte a praticar a respiração hipopressiva básica, sem o vácuo, até dominar a expiração."
    },
    {
      error: "Dificuldade em manter a pelve neutra.",
      correction: "Pratique o exercício deitado de costas, com os joelhos dobrados e os pés apoiados no chão. Coloque as mãos nos ossos da pelve para sentir o alinhamento. Tente 'balançar' suavemente a pelve para frente e para trás para encontrar a posição neutra."
    },
    {
      error: "Sentir falta de ar ou tontura após o exercício.",
      correction: "Diminua o tempo de apnéia. A apnéia não precisa ser longa para ser eficaz. Comece com 3 a 5 segundos e aumente gradualmente, conforme se sentir confortável. É normal ter uma leve sensação de formigamento, mas a tontura é um sinal de que você está forçando demais."
    }
  ];

  const faq = [
    {
      question: "Com que frequência devo praticar?",
      answer: "Para resultados efetivos, o ideal é praticar pelo menos 3 a 5 vezes por semana. A consistência é a chave. Sessões curtas de 10-15 minutos feitas regularmente são mais eficazes do que uma única sessão longa e esporádica."
    },
    {
      question: "Posso fazer o exercício grávida?",
      answer: "Não. O método hipopressivo é contraindicado durante a gravidez. A prática só pode ser iniciada após o período de quarentena pós-parto, com liberação médica e, preferencialmente, com acompanhamento profissional."
    },
    {
      question: "É normal sentir o abdômen 'tremer' durante o exercício?",
      answer: "Sim, é totalmente normal. Isso é um sinal de que os músculos do seu core profundo, que não estão acostumados a trabalhar de forma isolada, estão sendo ativados e fortalecidos. Com a prática, esse tremor diminuirá."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa, mas muitas alunas relatam uma redução significativa do inchaço e melhora na postura já nas primeiras semanas. Para uma redução visível da diástase e fortalecimento muscular, o tempo médio é de 3 a 6 meses de prática consistente."
    },
    {
      question: "Posso fazer os exercícios se tiver dor nas costas?",
      answer: "Sim, e na maioria dos casos, a técnica hipopressiva pode ajudar! O fortalecimento do core profundo oferece um suporte natural para a coluna, aliviando a dor. No entanto, se a dor for intensa ou persistente, procure um médico ou fisioterapeuta antes de continuar a prática."
    }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Revisão e Ajustes da Técnica: Refine Sua Execução e Tire Suas Dúvidas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Parabéns por chegar a esta etapa do curso Diastase ZERO! Se você chegou até aqui, significa que já dominou as bases essenciais para a sua recuperação, como o diagnóstico preciso e as técnicas fundamentais de respiração hipopressiva. Esta aula é o ponto de virada, onde consolidamos o que foi aprendido e garantimos que sua prática seja não apenas eficaz, mas também segura a longo prazo.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nosso objetivo hoje é claro: revisar cada movimento, entender o porquê de cada detalhe e fazer os ajustes necessários para que você execute as técnicas com perfeição, maximizando os resultados e evitando compensações ou lesões. Lembre-se, a qualidade da execução é muito mais importante do que a quantidade. Um movimento bem feito é a base de um abdômen forte e saudável.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Os Pilares da Técnica Hipopressiva</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground mb-6">A técnica hipopressiva, que forma a espinha dorsal do nosso método, não se resume apenas a "segurar a respiração". É um sistema complexo que envolve a postura, o ritmo respiratório e a ativação muscular consciente. Quando um desses pilares não está alinhado, os resultados podem ser comprometidos.</p>
            <div className="space-y-6">
                {pillars.map((pillar, index) => (
                <div key={index}>
                    <h3 className="font-headline text-lg font-bold mb-2 text-primary">{`${index + 1}. ${pillar.title}`}</h3>
                    <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                       {pillar.content.map((item, i) => <li key={i}><p>{item}</p></li>)}
                    </ul>
                </div>
                ))}
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Ajustes Comuns e Como Corrigi-los</CardTitle>
        </CardHeader>
        <CardContent>
             <p className="text-muted-foreground mb-6">Muitas vezes, a diferença entre um exercício ineficaz e um exercício transformador está em um pequeno ajuste. Identifique onde você pode estar errando e use estas dicas para corrigir.</p>
            <ul className="space-y-4">
                {commonErrors.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">{item.error}</p>
                            <p className="text-muted-foreground">{item.correction}</p>
                        </div>
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
          <p className="text-muted-foreground mb-4">Aproveite este momento para tirar suas últimas dúvidas antes de avançarmos para as próximas fases do curso.</p>
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
            <CardTitle className="font-headline text-2xl">Onde Estamos e Para Onde Vamos</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                Você acaba de concluir a primeira fase do Módulo 1: Diagnóstico e Respiração. Agora que sua técnica está afiada e você dominou o vácuo abdominal, você está pronta para a próxima fase de sua jornada: o fortalecimento intensivo. Na próxima semana, começaremos a introduzir exercícios mais desafiadores que irão consolidar os ganhos obtidos até agora e acelerar a sua recuperação.
            </p>
             <p className="mt-4 text-muted-foreground">
                Seu comprometimento é a sua maior ferramenta. Continue praticando, seja paciente com o seu corpo e celebre cada pequeno avanço. Lembre-se, você está construindo uma base sólida para uma saúde duradoura.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
