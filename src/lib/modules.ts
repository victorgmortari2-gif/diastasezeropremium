import { HeartPulse, Dumbbell, Anchor, LucideIcon, Award, Gift } from 'lucide-react';

export interface Module {
  slug: string;
  title: string;
  days: string;
  icon: LucideIcon;
  shortPoints: string[];
  longDescription: string;
  objectives: string[];
  schedule: {
    day: number;
    slug: string;
    title: string;
    type: 'Vídeo Aula' | 'Exercício' | 'Material' | 'Avaliação' | 'Workshop' | 'Mentoria';
    duration: string;
    description: string;
    videoUrl?: string;
  }[];
}

export const modules: Module[] = [
  {
    slug: 'diagnostico-respiracao',
    title: 'Módulo 1 – Diagnóstico e Respiração',
    days: 'Dias 1 a 7',
    icon: HeartPulse,
    shortPoints: [
        'Autoteste com vídeo explicativo',
        'Sessão guiada de respiração hipopressiva',
        'Ativação do core profundo e pelve',
        'Cardápio detox de 3 dias',
    ],
    longDescription: 'Comece com o pé direito. Aprenda a diagnosticar sua diástase com precisão e domine as técnicas avançadas de respiração hipopressiva que formam a base para um abdômen forte e recuperado.',
    objectives: [
        'Realizar o autoteste de diástase corretamente.',
        'Dominar a respiração hipopressiva para ativação do core.',
        'Conectar-se com os músculos do assoalho pélvico.',
        'Iniciar um processo de desintoxicação alimentar para potencializar resultados.',
    ],
    schedule: [
        { day: 1, slug: 'autoteste-diastase', title: 'Autoteste com Vídeo Explicativo', type: 'Vídeo Aula', duration: '15 min', description: 'Aprenda a medir sua diástase de forma precisa e segura.', videoUrl: 'https://www.youtube.com/embed/7fityACAWWk' },
        { day: 2, slug: 'respiracao-hipopressiva', title: 'Sessão Guiada de Respiração Hipopressiva', type: 'Exercício', duration: '14 min', description: 'Técnica fundamental para reduzir a pressão abdominal.', videoUrl: 'https://www.youtube.com/embed/CsvaIIraFQE' },
        { day: 3, slug: 'ativacao-core-pelve', title: 'Ativação do Core Profundo e Pelve', type: 'Vídeo Aula', duration: '11 min', description: 'Sinta e ative os músculos que sustentam seu tronco.', videoUrl: 'https://www.youtube.com/embed/3Pz2LxtOoPU' },
        { day: 4, slug: 'cardapio-detox', title: 'Cardápio Detox de 3 Dias', type: 'Material', duration: '10 min', description: 'Um plano alimentar para reduzir a inflamação e o inchaço.' },
        { day: 5, slug: 'pratica-integrada-1', title: 'Prática Integrada de Respiração', type: 'Exercício', duration: '25 min', description: 'Combine as técnicas aprendidas para uma prática fluida.', videoUrl: 'https://www.youtube.com/embed/Z4qzwrP3JA8' },
        { day: 6, slug: 'revisao-ajustes-1', title: 'Revisão e Ajustes da Técnica', type: 'Avaliação', duration: '15 min', description: 'Tire suas dúvidas e refine sua execução.' },
        { day: 7, slug: 'planejamento-semana-2', title: 'Planejamento para a Semana 2', type: 'Material', duration: '10 min', description: 'Prepare-se para a fase de fortalecimento intensivo.' },
    ]
  },
  {
    slug: 'treino-intensivo',
    title: 'Módulo 2 – Treino Intensivo e Estabilidade',
    days: 'Dias 8 a 14',
    icon: Dumbbell,
    shortPoints: [
        'Treinos hipopressivos com progressão',
        'Workshop: "Zere sua diástase sem cirurgia"',
        'Suplementação e alimentação funcional',
    ],
    longDescription: 'É hora de intensificar. Neste módulo, você avançará nos treinos hipopressivos, aprenderá sobre estratégias de alimentação e suplementação que aceleram a cicatrização e participará de um workshop transformador.',
    objectives: [
        'Progredir nos exercícios hipopressivos com segurança.',
        'Aprender estratégias práticas para zerar a diástase sem cirurgia.',
        'Entender como a alimentação e suplementos podem acelerar seus resultados.',
        'Aumentar a estabilidade e força do seu core.',
    ],
     schedule: [
        { day: 8, slug: 'hipopressivos-progressao', title: 'Treinos Hipopressivos com Progressão', type: 'Exercício', duration: '25 min', description: 'Novas posturas e desafios para seu treino.', videoUrl: 'https://www.youtube.com/embed/z4CvXcK7XJ4' },
        { day: 9, slug: 'workshop-zere-diastase', title: 'Workshop: "Zere sua diástase sem cirurgia"', type: 'Workshop', duration: '45 min', description: 'Uma aula completa com o passo a passo para a recuperação.', videoUrl: 'https://www.youtube.com/embed/9TIYq-9XQUQ' },
        { day: 10, slug: 'suplementacao-alimentacao', title: 'Suplementação e Alimentação Funcional', type: 'Material', duration: '14 min', description: 'O que comer para ajudar seu corpo a se recuperar mais rápido.' },
        { day: 11, slug: 'treino-estabilidade', title: 'Treino de Estabilidade com Foco no Core', type: 'Exercício', duration: '30 min', description: 'Exercícios que desafiam e fortalecem seu centro.', videoUrl: 'https://www.youtube.com/embed/SSctsslEj0E' },
        { day: 12, slug: 'pratica-integrada-2', title: 'Prática Integrada - Semana 2', type: 'Exercício', duration: '30 min', description: 'Um treino completo unindo todos os aprendizados.', videoUrl: 'https://www.youtube.com/embed/LkTHczGwU50' },
        { day: 13, slug: 'autoavaliacao-2', title: 'Autoavaliação e Correção de Postura', type: 'Avaliação', duration: '15 min', description: 'Verifique seu progresso e ajuste sua postura no dia a dia.', videoUrl: 'https://www.youtube.com/embed/7PQ2IHTQ7Wg' },
        { day: 14, slug: 'preparacao-remodelagem', title: 'Preparação para a Remodelagem Corporal', type: 'Material', duration: '10 min', description: 'Entenda a próxima fase e prepare seu corpo.' },
    ]
  },
  {
    slug: 'remodelagem-corporal',
    title: 'Módulo 3 – Remodelagem Corporal',
    days: 'Dias 15 a 21',
    icon: Anchor,
    shortPoints: [
        'Protocolo de treino avançado',
        'Mentoria: como manter o abdômen firme',
        'Plano de 60 dias pós-desafio',
    ],
    longDescription: 'Na reta final, vamos consolidar seus resultados e ir além. Com um protocolo avançado e uma mentoria exclusiva, você aprenderá não só a atingir seu objetivo, mas a manter um abdômen firme para sempre.',
    objectives: [
        'Executar um protocolo de treino avançado para máxima definição.',
        'Receber mentoria sobre como manter os resultados a longo prazo.',
        'Estruturar um plano de manutenção de 60 dias.',
        'Sentir-se confiante e com total controle sobre seu corpo.',
    ],
    schedule: [
        { day: 15, slug: 'protocolo-avancado', title: 'Protocolo de Treino Avançado', type: 'Exercício', duration: '35 min', description: 'A sequência definitiva para remodelar seu abdômen.', videoUrl: 'https://www.youtube.com/embed/RlqzJY5vi38' },
        { day: 16, slug: 'mentoria-abdomen-firme', title: 'Mentoria: Como Manter o Abdômen Firme', type: 'Mentoria', duration: '40 min', description: 'Segredos e estratégias para resultados duradouros.' },
        { day: 17, slug: 'plano-pos-desafio', title: 'Plano de 60 Dias Pós-Desafio', type: 'Material', duration: '15 min', description: 'Seu guia para continuar evoluindo após o programa.' },
        { day: 18, slug: 'treino-final', title: 'Treino Final de Consolidação', type: 'Exercício', duration: '30 min', description: 'O último treino do desafio para celebrar sua jornada.' },
        { day: 19, slug: 'celebracao-proximos-passos', title: 'Celebração e Próximos Passos', type: 'Mentoria', duration: '20 min', description: 'Comemore sua conquista e saiba como continuar.' },
        { day: 20, slug: 'avaliacao-final', title: 'Mitos e Verdades Sobre a Diástase', type: 'Avaliação', duration: '15 min', description: 'Meça novamente sua diástase e veja sua evolução.', videoUrl: 'https://www.youtube.com/embed/6uZmNSvbMqo'},
        { day: 21, slug: 'revisao-geral', title: 'Revisão Geral e Dúvidas Finais', type: 'Workshop', duration: '30 min', description: 'Uma última chance para tirar todas as suas dúvidas.' },
    ]
  },
  {
    slug: 'estetica-postura',
    title: 'Módulo Extra 4 – Estética e Postura',
    days: 'Bônus',
    icon: Award,
    shortPoints: [
        'Exercícios para afinar cintura',
        'Técnicas de escultura abdominal leve',
        'Rituais de autocuidado com foco estético',
    ],
    longDescription: 'Um módulo bônus focado em realçar sua beleza natural. Aprenda exercícios específicos para a cintura, técnicas de massagem e rituais que melhoram não só a aparência, mas também a sua relação com seu corpo.',
    objectives: [
        'Aprender exercícios que ajudam a afinar a cintura.',
        'Praticar técnicas de automassagem para esculpir o abdômen.',
        'Incorporar rituais de autocuidado na sua rotina.',
        'Melhorar a postura e a elegância dos movimentos.',
    ],
    schedule: [
        { day: 1, slug: 'exercicios-cintura', title: 'Exercícios para Afinar Cintura', type: 'Exercício', duration: '15 min', description: 'Movimentos que tonificam os oblíquos e modelam a cintura.' },
        { day: 2, slug: 'escultura-abdominal', title: 'Técnicas de Escultura Abdominal Leve', type: 'Vídeo Aula', duration: '20 min', description: 'Automassagem para melhorar o contorno corporal.' },
        { day: 3, slug: 'rituais-autocuidado', title: 'Rituais de Autocuidado com Foco Estético', type: 'Material', duration: '10 min', description: 'Dicas de cremes, óleos e práticas para a pele.' },
        { day: 4, slug: 'postura-elegancia', title: 'Postura e Elegância no Dia a Dia', type: 'Workshop', duration: '25 min', description: 'Como manter uma postura que valoriza seu corpo.' },
    ]
  },
  {
    slug: 'vida-real-corpo-forte',
    title: 'Módulo Extra 5 – Vida Real, Corpo Forte',
    days: 'Bônus',
    icon: Gift,
    shortPoints: [
        'Como manter constância na rotina',
        'Guia de alimentação para mães',
        'Aula: "20 minutos por dia"',
    ],
    longDescription: 'Este módulo é para a mulher real. Dicas práticas para manter a constância mesmo na correria, um guia de alimentação pensado para mães e mulheres ocupadas, e a prova de que 20 minutos por dia são suficientes.',
    objectives: [
        'Desenvolver estratégias para manter a constância nos treinos.',
        'Aprender a fazer escolhas alimentares inteligentes e práticas.',
        'Estruturar uma rotina de 20 minutos diários que funciona.',
        'Integrar o cuidado com o corpo à sua vida real e agitada.',
    ],
    schedule: [
        { day: 1, slug: 'manter-constancia', title: 'Como Manter Constância na Rotina', type: 'Workshop', duration: '30 min', description: 'Estratégias mentais e práticas para não desistir.' },
        { day: 2, slug: 'guia-alimentacao-maes', title: 'Guia Prático de Alimentação para Mães', type: 'Material', duration: '15 min', description: 'Receitas e dicas para uma alimentação saudável e rápida.' },
        { day: 3, slug: 'aula-20-minutos', title: 'Aula: "Como Manter Tudo com 20 Minutos por Dia"', type: 'Vídeo Aula', duration: '20 min', description: 'O segredo para otimizar seu tempo e ter resultados.' },
        { day: 4, slug: 'montando-sua-rotina', title: 'Montando Sua Rotina Realista', type: 'Exercício', duration: '15 min', description: 'Planejamento prático para encaixar os treinos na sua vida.' },
    ]
  }
];
