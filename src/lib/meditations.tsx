
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
    benefits: ['Foco aprimorado', 'Redução da procrastinação', 'Clareza nos objetivos', 'Produtividade elevada'],
    whatYouWillExperience: [
        'Técnicas de respiração para acalmar a mente.',
        'Exercícios de foco para aumentar a concentração.',
        'Visualizações para fortalecer a clareza mental.',
        'Sensação de estar no controle de seus pensamentos.',
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
    benefits: ['Disciplina fortalecida', 'Realização de metas', 'Aumento da resiliência', 'Perseverança diária'],
    whatYouWillExperience: [
        'Fortalecimento da força de vontade',
        'Técnicas para superar a procrastinação',
        'Criação de um momentum para o sucesso',
        'Desenvolvimento de uma mentalidade resiliente',
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
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation4/600/400',
    icon: <Scale className="h-5 w-5 text-white/80" />,
    dataAiHint: 'strawberry fruit',
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
        type: 'Equilíbrio',
        level: 'Iniciante',
        frequency: 'Diária',
    }
  },
  {
    slug: 'disciplina-interior',
    category: 'journey',
    title: 'Disciplina Interior',
    duration: '17 min',
    description: 'Construa força de vontade inabalável.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation5/600/400',
    icon: <Shield className="h-5 w-5 text-white/80" />,
    dataAiHint: 'diver ocean',
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
        duration: '17 minutos',
        type: 'Disciplina',
        level: 'Iniciante',
        frequency: 'Diária',
    }
  },
  {
    slug: 'serenidade-profunda',
    category: 'journey',
    title: 'Serenidade Profunda',
    duration: '12 min',
    description: 'Encontre paz interior duradoura.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation6/600/400',
    icon: <Wind className="h-5 w-5 text-white/80" />,
    dataAiHint: 'paint brushes',
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
        duration: '12 minutos',
        type: 'Serenidade',
        level: 'Iniciante',
        frequency: 'Diária',
    }
  },
  {
    slug: 'calma-para-ansiedade',
    category: 'bonus',
    title: 'Calma para Ansiedade',
    duration: '10 min',
    description: 'Ancore sua mente e acalme a tempestade.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus1/600/400',
    icon: <Anchor className="h-5 w-5 text-white/80" />,
    dataAiHint: 'dark calm',
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
        duration: '10 minutos',
        type: 'Ansiedade',
        level: 'Iniciante',
        frequency: 'Quando necessário',
    }
  },
  {
    slug: 'alinhamento-chakras',
    category: 'bonus',
    title: 'Alinhamento dos Chakras',
    duration: '12 min',
    description: 'Equilibre seus centros de energia vital.',
    longDescription: 'Uma jornada interior profunda para cultivar amor próprio genuíno e confiança inabalável. Esta prática combina técnicas de mindfulness com afirmações positivas, ajudando você a reconhecer seu valor intrínseco e desenvolver uma autoestima saudável e duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus2/600/400',
    icon: <Zap className="h-5 w-5 text-white/80" />,
    dataAiHint: 'night lights',
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
        duration: '12 minutos',
        type: 'Energia',
        level: 'Intermediário',
        frequency: 'Semanal',
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
