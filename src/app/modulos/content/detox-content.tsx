import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Fish, Droplets, Egg, Apple, Carrot, Citrus } from "lucide-react";

export function DetoxContent() {
  const foods = [
    { name: "Folhas Verdes", description: "Ricas em fibras e clorofila, ajudam a limpar o sistema digestivo.", icon: <Leaf className="h-8 w-8 text-primary" /> },
    { name: "Peixes (Salmão, Sardinha)", description: "Fonte de ômega-3, um poderoso anti-inflamatório natural.", icon: <Fish className="h-8 w-8 text-primary" /> },
    { name: "Ovos", description: "Proteína de alta qualidade que promove saciedade e reparo muscular.", icon: <Egg className="h-8 w-8 text-primary" /> },
    { name: "Frutas Vermelhas", description: "Carregadas de antioxidantes que combatem os radicais livres.", icon: <Apple className="h-8 w-8 text-primary" /> },
    { name: "Gengibre e Cúrcuma", description: "Especiarias com forte ação anti-inflamatória e digestiva.", icon: <Carrot className="h-8 w-8 text-primary" /> },
    { name: "Água com Limão", description: "Alcaliniza o corpo e estimula a digestão pela manhã.", icon: <Citrus className="h-8 w-8 text-primary" /> },
  ];
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
          <CardTitle className="font-headline text-2xl">Exemplo de Cardápio para 1 Dia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Manhã (em jejum)</h3>
            <p className="text-muted-foreground">1 copo de água com suco de 1/2 limão.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Café da Manhã</h3>
            <p className="text-muted-foreground">Ovos mexidos com cúrcuma + 1/2 abacate com azeite e sal.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Almoço</h3>
            <p className="text-muted-foreground">Salmão grelhado + salada de folhas verdes à vontade com cenoura ralada, temperada com azeite, limão e pouco sal.</p>
          </div>
           <div>
            <h3 className="font-bold text-lg">Lanche da Tarde</h3>
            <p className="text-muted-foreground">Shake de frutas vermelhas com água ou leite vegetal + 1 colher de chia.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Jantar</h3>
            <p className="text-muted-foreground">Sopa de legumes (abobrinha, chuchu, cenoura) com frango desfiado e gengibre ralado.</p>
          </div>
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
