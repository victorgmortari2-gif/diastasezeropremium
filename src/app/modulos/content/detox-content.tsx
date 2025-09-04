import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Fish, Droplets, Egg, Apple, Carrot, Citrus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function DetoxContent() {
  const foods = [
    { name: "Folhas Verdes", description: "Ricas em fibras e clorofila, ajudam a limpar o sistema digestivo.", icon: <Leaf className="h-8 w-8 text-primary" /> },
    { name: "Peixes (Salmão, Sardinha)", description: "Fonte de ômega-3, um poderoso anti-inflamatório natural.", icon: <Fish className="h-8 w-8 text-primary" /> },
    { name: "Ovos", description: "Proteína de alta qualidade que promove saciedade e reparo muscular.", icon: <Egg className="h-8 w-8 text-primary" /> },
    { name: "Frutas Vermelhas", description: "Carregadas de antioxidantes que combatem os radicais livres.", icon: <Apple className="h-8 w-8 text-primary" /> },
    { name: "Gengibre e Cúrcuma", description: "Especiarias com forte ação anti-inflamatória e digestiva.", icon: <Carrot className="h-8 w-8 text-primary" /> },
    { name: "Água com Limão", description: "Alcaliniza o corpo e estimula a digestão pela manhã.", icon: <Citrus className="h-8 w-8 text-primary" /> },
  ];

  const detoxPlan = [
      {
          day: "Dia 1",
          meals: {
              "Manhã (em jejum)": "1 copo de água morna com suco de ½ limão.",
              "Café da Manhã": "Ovos mexidos (2 ovos) com cúrcuma + ½ abacate pequeno amassado com um fio de azeite e sal.",
              "Almoço": "Salmão grelhado (1 filé médio, cerca de 150g) + salada de folhas verdes à vontade (alface, rúcula) com cenoura ralada e pepino em rodelas. Tempere com azeite, limão e pouco sal.",
              "Lanche da Tarde": "Shake de frutas vermelhas (1 xícara de mirtilos e morangos) com água ou leite de amêndoas sem açúcar + 1 colher de sopa de chia.",
              "Jantar": "Sopa cremosa de legumes (abobrinha, chuchu e cenoura) batida no liquidificador com gengibre ralado (1 colher de chá) e frango desfiado (100g).",
          }
      },
      {
          day: "Dia 2",
          meals: {
              "Manhã (em jejum)": "1 copo de água morna com suco de ½ limão.",
              "Café da Manhã": "Mingau de aveia (3 colheres de sopa de aveia) com água ou leite de coco + 1 banana fatiada e canela em pó.",
              "Almoço": "Salada colorida de atum (1 lata de atum em água) com vegetais picados (brócolis cozido no vapor, pimentão e tomate). Tempere com azeite de oliva e uma pitada de açafrão-da-terra.",
              "Lanche da Tarde": "1 punhado de amêndoas ou nozes (cerca de 10 unidades) + 1 xícara de chá de hortelã.",
              "Jantar": "Sopa de lentilha (½ xícara de lentilha cozida) com vegetais (cenoura, aipo e alho-poró) e um fio de azeite.",
          }
      },
      {
          day: "Dia 3",
          meals: {
              "Manhã (em jejum)": "1 copo de água morna com suco de ½ limão.",
              "Café da Manhã": "Smoothie verde (1 folha de couve, ½ pepino, ½ maçã verde e 200ml de água de coco) + 1 colher de sopa de sementes de abóbora.",
              "Almoço": "Filé de frango grelhado (1 filé médio, cerca de 150g) + ½ xícara de quinoa cozida + salada de folhas à vontade com beterraba ralada. Tempere com azeite e limão.",
              "Lanche da Tarde": "1 xícara de frutas vermelhas ou 1 maçã + 1 colher de sopa de sementes de girassol.",
              "Jantar": "Peixe cozido no vapor (tilápia ou pescada, 1 filé médio) com legumes (brócolis e cenoura) e um pouco de gengibre ralado.",
          }
      }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">O Poder do Cardápio Detox</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Um plano alimentar detox não é sobre restrição, mas sim sobre nutrição inteligente. O objetivo é reduzir a carga de toxinas e a inflamação no corpo, permitindo que seus músculos, incluindo os do abdômen, se recuperem de forma mais eficiente. Ao desinflamar, você também combate o inchaço, o que já proporciona uma aparência mais "sequinha" e definida.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Alimentos-Chave para Incluir</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map(food => (
              <div key={food.name} className="flex items-start gap-4">
                <div className="flex-shrink-0">{food.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{food.name}</h3>
                  <p className="text-sm text-muted-foreground">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Exemplo de Cardápio para 3 Dias</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="item-0">
            {detoxPlan.map((dayPlan, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-bold text-primary">{dayPlan.day}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {Object.entries(dayPlan.meals).map(([meal, description]) => (
                      <div key={meal}>
                        <h3 className="font-bold text-lg">{meal}</h3>
                        <p className="text-muted-foreground">{description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

       <Card className="bg-primary/10 text-center">
        <CardContent className="p-6">
          <div className="flex justify-center items-center mb-4">
            <Droplets className="h-10 w-10 text-primary" />
          </div>
          <h3 className="font-headline text-xl font-bold mb-2">Lembrete de Hidratação</h3>
          <p className="text-muted-foreground">
            Beba pelo menos 2 litros de água ao longo do dia. Chás como de hortelã, gengibre e camomila também são ótimas opções (sem açúcar!). A hidratação é fundamental para o processo de detox.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
