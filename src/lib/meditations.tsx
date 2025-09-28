

import { Heart, Diamond, RefreshCw, Scale, Shield, Wind, Anchor, Zap, BedDouble, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

export interface Meditation {
    slug: string;
    category: 'journey' | 'bonus';
    title: string;
    duration: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    icon: ReactElement<LucideIcon>;
    dataAiHint: string;
    videoUrl: string;
    type: string;
    benefits: string[];
    whatYouWillExperience: string[];
    info: {
        duration: string;
        type: string;
        level: string;
        frequency: string;
    };
}


export const meditations: Meditation[] = [
  {
    slug: 'autoestima-radiante',
    category: 'journey',
    title: 'Autoestima Radiante',
    duration: '14 min',
    description: 'Cultive amor próprio e confiança interior.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation1/600/400',
    icon: <Heart className="h-5 w-5 text-white/80" />,
    dataAiHint: 'architecture confidence',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Maior autoconfiança', 'Redução da autocrítica', 'Amor próprio genuíno', 'Paz interior duradoura'],
    whatYouWillExperience: [
        'Reconexão com sua essência e valor pessoal.',
        'Dissolução de autocríticas e pensamentos limitantes.',
        'Cultivo de compaixão e aceitação própria.',
        'Fortalecimento da confiança interior.',
    ],
    info: {
        duration: '14 minutos',
        type: 'Autoestima',
        level: 'Iniciante',
        frequency: 'Diária',
    }
  },
  {
    slug: 'foco-diamante',
    category: 'journey',
    title: 'Foco Diamante',
    duration: '33 min',
    description: 'Desenvolva concentração laser e clareza mental.',
    longDescription: 'Esta meditação é desenhada para afiar sua mente como um diamante. Através de técnicas de visualização e concentração, você aprenderá a direcionar sua atenção, ignorar distrações e alcançar um estado de clareza mental profunda para realizar suas tarefas com mais eficiência e menos estresse.',
    imageUrl: 'https://picsum.photos/seed/meditation2/600/400',
    icon: <Diamond className="h-5 w-5 text-white/80" />,
    dataAiHint: 'desk workspace',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Melhora do foco', 'Clareza mental', 'Redução de distrações', 'Aumento da produtividade'],
    whatYouWillExperience: [
        'Técnicas de respiração para acalmar e centrar a mente.',
        'Exercícios práticos de foco para treinar sua atenção.',
        'Visualizações para fortalecer sua capacidade de concentração.',
        'Sensação de clareza e controle sobre seus pensamentos.',
    ],
    info: {
        duration: '33 minutos',
        type: 'Foco',
        level: 'Intermediário',
        frequency: '2-3x por semana',
    }
  },
  {
    slug: 'consistencia-solida',
    category: 'journey',
    title: 'Consistência Sólida',
    duration: '23 min',
    description: 'Fortaleça disciplina e perseverança diária.',
    longDescription: 'Desenvolva o poder da consistência para alcançar seus objetivos. Esta meditação ajuda a construir a disciplina e a perseverança necessárias para manter hábitos positivos e trabalhar em direção às suas metas de longo prazo. Com esta prática, você vai fortalecer sua força de vontade e criar um momentum para o sucesso.',
    imageUrl: 'https://picsum.photos/seed/meditation3/600/400',
    icon: <RefreshCw className="h-5 w-5 text-white/80" />,
    dataAiHint: 'waterfall nature',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Disciplina fortalecida', 'Criação de hábitos', 'Aumento da resiliência', 'Perseverança'],
    whatYouWillExperience: [
        'Técnicas de mindfulness para fortalecer a disciplina.',
        'Estratégias mentais para superar a procrastinação.',
        'Visualizações para reforçar seu compromisso com suas metas.',
        'Um senso de empoderamento e controle sobre suas ações.',
    ],
    info: {
        duration: '23 minutos',
        type: 'Disciplina',
        level: 'Intermediário',
        frequency: 'Diária',
    }
  },
  {
    slug: 'equilibrio-emocional',
    category: 'journey',
    title: 'Equilíbrio Emocional',
    duration: '14 min',
    description: 'Harmonize suas emoções com sabedoria.',
    longDescription: 'Aprenda a navegar pelas suas emoções com graça e sabedoria. Esta meditação guiada oferece ferramentas para observar seus sentimentos sem julgamento, promovendo uma maior harmonia interna e resiliência emocional.',
    imageUrl: 'https://picsum.photos/seed/meditation4/600/400',
    icon: <Scale className="h-5 w-5 text-white/80" />,
    dataAiHint: 'strawberry fruit',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Inteligência emocional', 'Redução do estresse', 'Melhora nos relacionamentos', 'Clareza mental'],
    whatYouWillExperience: [
        'Técnicas para identificar e acolher emoções sem julgamento.',
        'Desenvolvimento de uma perspectiva mais calma e equilibrada.',
        'Redução da reatividade emocional no dia a dia.',
        'Aumento da paz interior e da estabilidade emocional.',
    ],
    info: {
        duration: '14 minutos',
        type: 'Equilíbrio',
        level: 'Todos os níveis',
        frequency: 'Sempre que necessário',
    }
  },
  {
    slug: 'disciplina-interior',
    category: 'journey',
    title: 'Disciplina Interior',
    duration: '17 min',
    description: 'Construa força de vontade inabalável.',
    longDescription: 'Esta meditação é um treinamento para sua mente, focada em construir uma força de vontade de ferro. Com técnicas de visualização e foco, você aprenderá a superar a procrastinação e a manter-se firme em seus propósitos, independentemente dos desafios.',
    imageUrl: 'https://picsum.photos/seed/meditation5/600/400',
    icon: <Shield className="h-5 w-5 text-white/80" />,
    dataAiHint: 'diver ocean',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Força de vontade', 'Autocontrole', 'Fim da procrastinação', 'Resiliência mental'],
    whatYouWillExperience: [
        'Fortalecimento da sua resolução e determinação.',
        'Técnicas de visualização para manter o foco em suas metas.',
        'Construção de uma mentalidade resiliente e disciplinada.',
        'Um senso renovado de poder e controle sobre suas escolhas.',
    ],
    info: {
        duration: '17 minutos',
        type: 'Disciplina',
        level: 'Avançado',
        frequency: '3-4x por semana',
    }
  },
  {
    slug: 'serenidade-profunda',
    category: 'journey',
    title: 'Serenidade Profunda',
    duration: '12 min',
    description: 'Encontre paz interior duradoura.',
    longDescription: 'Esta meditação curta é um convite para uma pausa de serenidade no seu dia. Através de técnicas de respiração consciente e foco no momento presente, você será guiado a um estado de calma e paz interior, ideal para aliviar o estresse rapidamente.',
    imageUrl: 'https://picsum.photos/seed/meditation6/600/400',
    icon: <Wind className="h-5 w-5 text-white/80" />,
    dataAiHint: 'paint brushes',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Redução do estresse', 'Paz interior', 'Clareza mental', 'Relaxamento profundo'],
    whatYouWillExperience: [
        'Alívio rápido do estresse e da ansiedade.',
        'Técnicas de respiração para acalmar o sistema nervoso.',
        'Sensação de tranquilidade e bem-estar.',
        'Uma mente mais clara e centrada.',
    ],
    info: {
        duration: '12 minutos',
        type: 'Relaxamento',
        level: 'Iniciante',
        frequency: 'Diária ou sempre que necessário',
    }
  },
  {
    slug: 'calma-para-ansiedade',
    category: 'bonus',
    title: 'Calma para Ansiedade',
    duration: '10 min',
    description: 'Ancore sua mente e acalme a tempestade.',
    longDescription: 'Uma sessão desenvolvida para momentos de ansiedade e agitação. Aprenda a usar a respiração como uma âncora para o momento presente, observando os pensamentos ansiosos passarem sem se prender a eles. Encontre um porto seguro dentro de você.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus1/600/400',
    icon: <Anchor className="h-5 w-5 text-white/80" />,
    dataAiHint: 'dark calm',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Alívio da ansiedade', 'Clareza mental', 'Foco no presente', 'Regulação emocional'],
    whatYouWillExperience: [
        'Técnicas de respiração para acalmar o sistema nervoso.',
        'Exercícios de ancoragem no presente.',
        'Distanciamento saudável de pensamentos ansiosos.',
        'Sensação de controle e paz.',
    ],
    info: {
        duration: '10 minutos',
        type: 'Ansiedade',
        level: 'Todos os níveis',
        frequency: 'Sempre que necessário',
    }
  },
  {
    slug: 'alinhamento-chakras',
    category: 'bonus',
    title: 'Alinhamento dos Chakras',
    duration: '12 min',
    description: 'Equilibre seus centros de energia vital.',
    longDescription: 'Uma jornada guiada pelos sete principais chakras do corpo. Utilizando visualizações, cores e mantras, esta meditação ajuda a limpar bloqueios energéticos, promovendo um fluxo harmonioso da energia vital (prana) e um profundo bem-estar físico e emocional.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus2/600/400',
    icon: <Zap className="h-5 w-5 text-white/80" />,
    dataAiHint: 'night lights',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Equilíbrio energético', 'Vitalidade aumentada', 'Bem-estar emocional', 'Autoconhecimento'],
    whatYouWillExperience: [
        'Introdução aos sete chakras.',
        'Visualizações guiadas para cada centro de energia.',
        'Sensação de equilíbrio e vitalidade renovada.',
        'Conexão profunda com seu corpo energético.',
    ],
    info: {
        duration: '12 minutos',
        type: 'Energia',
        level: 'Intermediário',
        frequency: '1-2x por semana',
    }
  },
  {
    slug: 'relaxamento-noturno',
    category: 'bonus',
    title: 'Relaxamento Noturno',
    duration: '23 min',
    description: 'Prepare seu corpo e mente para um sono profundo.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus3/600/400',
    icon: <BedDouble className="h-5 w-5 text-white/80" />,
    dataAiHint: 'new york',
    videoUrl: 'https://www.youtube.com/embed/irZ304T3P8k',
    type: 'Meditação Guiada',
    benefits: ['Maior autoconfiança', 'Redução da autocrítica', 'Amor próprio genuíno', 'Paz interior duradoura'],
    whatYouWillExperience: [
        'Reconexão com sua essência e valor pessoal.',
        'Dissolução de autocríticas e pensamentos limitantes.',
        'Cultivo de compaixão e aceitação própria.',
        'Fortalecimento da confiança interior.',
    ],
    info: {
        duration: '23 minutos',
        type: 'Sono',
        level: 'Iniciante',
        frequency: 'Diária',
    }
  },
];
