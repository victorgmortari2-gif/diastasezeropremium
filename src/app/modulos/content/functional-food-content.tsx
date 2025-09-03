import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Bone, Brain, Carrot } from "lucide-react";

export function FunctionalFoodContent() {
  const functionalFoods = [
    { 
      name: "Colágeno Hidrolisado", 
      description: "Essencial para a saúde da pele, articulações e tecidos conectivos. Ajuda na cicatrização da linha alba (o tecido que se estica na diástase).",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    { 
      name: "Ômega-3", 
      description: "Potente anti-inflamatório. Reduz a inflamação sistêmica, o que pode acelerar a recuperação muscular e a redução do inchaço abdominal.",
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    { 
      name: "Magnésio", 
      description: "Participa de mais de 300 reações no corpo, incluindo a contração e relaxamento muscular. Ajuda a prevenir cãibras e a melhorar a qualidade do sono.",
      icon: <Bone className="h-8 w-8 text-primary" />
    },
    { 
      name: "Probióticos", 
      description: "Bactérias benéficas que equilibram a flora intestinal. Um intestino saudável está diretamente ligado à redução da inflamação e do inchaço na região da barriga.",
      icon: <Brain className="h-8 w-8 text-primary" />
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">O que são Alimentos e Suplementos Funcionais?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Pense neles como "super alimentos". Além de suas funções nutricionais básicas (como fornecer energia e proteínas), eles contêm compostos bioativos que oferecem benefícios extras à saúde, como reduzir a inflamação, melhorar a saúde intestinal e acelerar a recuperação de tecidos. Na nossa jornada para zerar a diástase, eles são nossos maiores aliados.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Suplementos-Chave para Acelerar a Recuperação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functionalFoods.map(food => (
              <div key={food.name} className="flex items-start gap-4">
                <div className="flex-shrink-0">{food.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{food.name}</h3>
                  <p className="text-sm text-muted-foreground">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="mt-6 bg-accent/10">
              <CardContent className="p-4 flex items-center gap-4">
                <Carrot className="h-8 w-8 text-accent" />
                <p className="text-sm text-muted-foreground font-semibold">
                    Lembre-se: sempre consulte um médico ou nutricionista antes de iniciar qualquer suplementação.
                </p>
              </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Como Integrar na Alimentação Diária</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Colágeno:</h3>
            <p className="text-muted-foreground">Adicione o pó em sucos, vitaminas ou até mesmo no café. Pode ser consumido pela manhã ou antes de dormir.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Ômega-3:</h3>
            <p className="text-muted-foreground">Além das cápsulas, aumente o consumo de peixes como salmão e sardinha, e sementes como chia e linhaça.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Magnésio:</h3>
            <p className="text-muted-foreground">Encontrado em folhas verdes escuras (couve, espinafre), sementes de abóbora, abacate e chocolate amargo.</p>
          </div>
           <div>
            <h3 className="font-bold text-lg">Probióticos:</h3>
            <p className="text-muted-foreground">Iogurte natural, kefir, kombucha e outros alimentos fermentados são excelentes fontes naturais.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
