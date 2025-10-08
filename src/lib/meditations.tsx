import { Heart, Diamond, RefreshCw, Scale, Shield, Wind, Anchor, Zap, BedDouble, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

export interface MeditationSummary {
    slug: string;
    category: 'journey' | 'bonus';
    title: string;
    duration: string;
    description: string;
    imageUrl: string;
    icon: ReactElement<LucideIcon>;
    dataAiHint: string;
}

export interface MeditationDetails extends MeditationSummary {
    longDescription: string;
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


export const meditations: MeditationSummary[] = [
  {
    slug: 'autoestima-radiante',
    category: 'journey',
    title: 'Autoestima Radiante',
    duration: '14 min',
    description: 'Cultive amor próprio e confiança interior.',
    imageUrl: 'https://picsum.photos/seed/meditation1/600/400',
    icon: <Heart className="h-5 w-5 text-white/80" />,
    dataAiHint: 'architecture confidence',
  },
  {
    slug: 'foco-diamante',
    category: 'journey',
    title: 'Foco Diamante',
    duration: '33 min',
    description: 'Desenvolva concentração laser e clareza mental.',
    imageUrl: 'https://picsum.photos/seed/meditation2/600/400',
    icon: <Diamond className="h-5 w-5 text-white/80" />,
    dataAiHint: 'desk workspace',
  },
  {
    slug: 'consistencia-solida',
    category: 'journey',
    title: 'Consistência Sólida',
    duration: '23 min',
    description: 'Fortaleça disciplina e perseverança diária.',
    imageUrl: 'https://picsum.photos/seed/meditation3/600/400',
    icon: <RefreshCw className="h-5 w-5 text-white/80" />,
    dataAiHint: 'waterfall nature',
  },
  {
    slug: 'equilibrio-emocional',
    category: 'journey',
    title: 'Equilíbrio Emocional',
    duration: '14 min',
    description: 'Harmonize suas emoções com sabedoria.',
    imageUrl: 'https://picsum.photos/seed/meditation4/600/400',
    icon: <Scale className="h-5 w-5 text-white/80" />,
    dataAiHint: 'strawberry fruit',
  },
  {
    slug: 'disciplina-interior',
    category: 'journey',
    title: 'Disciplina Interior',
    duration: '17 min',
    description: 'Construa força de vontade inabalável.',
    imageUrl: 'https://picsum.photos/seed/meditation5/600/400',
    icon: <Shield className="h-5 w-5 text-white/80" />,
    dataAiHint: 'diver ocean',
  },
  {
    slug: 'serenidade-profunda',
    category: 'journey',
    title: 'Serenidade Profunda',
    duration: '12 min',
    description: 'Encontre paz interior duradoura.',
    imageUrl: 'https://picsum.photos/seed/meditation6/600/400',
    icon: <Wind className="h-5 w-5 text-white/80" />,
    dataAiHint: 'paint brushes',
  },
  {
    slug: 'calma-para-ansiedade',
    category: 'bonus',
    title: 'Calma para Ansiedade',
    duration: '10 min',
    description: 'Ancore sua mente e acalme a tempestade.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus1/600/400',
    icon: <Anchor className="h-5 w-5 text-white/80" />,
    dataAiHint: 'dark calm',
  },
  {
    slug: 'alinhamento-chakras',
    category: 'bonus',
    title: 'Alinhamento dos Chakras',
    duration: '12 min',
    description: 'Equilibre seus centros de energia vital.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus2/600/400',
    icon: <Zap className="h-5 w-5 text-white/80" />,
    dataAiHint: 'night lights',
  },
  {
    slug: 'relaxamento-noturno',
    category: 'bonus',
    title: 'Relaxamento Noturno',
    duration: '23 min',
    description: 'Prepare seu corpo e mente para um sono profundo.',
    imageUrl: 'https://picsum.photos/seed/meditation_bonus3/600/400',
    icon: <BedDouble className="h-5 w-5 text-white/80" />,
    dataAiHint: 'new york',
  },
];

export const getMeditationDetails = async (slug: string): Promise<MeditationDetails | undefined> => {
    try {
        const meditationData = await import(`@/lib/data/meditations/${slug}.json`);
        // Find the summary to get the icon component
        const summary = meditations.find(m => m.slug === slug);
        if (summary) {
            return {
                ...(meditationData.default as Omit<MeditationDetails, 'icon'>),
                icon: summary.icon,
            };
        }
        return undefined;
    } catch (error) {
        console.error(`Error loading meditation details for slug: ${slug}`, error);
        return undefined;
    }
}
