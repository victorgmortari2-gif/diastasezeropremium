import { HeartPulse, Dumbbell, Anchor, LucideIcon, Award, Gift } from 'lucide-react';

export interface ModuleSummary {
  slug: string;
  title: string;
  days: string;
  icon: LucideIcon;
  shortPoints: string[];
}

export interface ModuleDetails {
  slug: string;
  title: string;
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


export const modules: ModuleSummary[] = [
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
  }
];

export const getModuleDetails = async (slug: string): Promise<ModuleDetails | undefined> => {
    try {
        const moduleData = await import(`@/lib/data/modules/${slug}.json`);
        return moduleData.default as ModuleDetails;
    } catch (error) {
        console.error(`Error loading module details for slug: ${slug}`, error);
        return undefined;
    }
}
