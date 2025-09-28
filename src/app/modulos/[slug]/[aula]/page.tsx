import { modules } from '@/lib/modules';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingComponent = () => (
    <div className="space-y-8">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
    </div>
);

const lessonComponentMap: Record<string, React.ComponentType> = {
    'cardapio-detox': dynamic(() => import('@/app/modulos/content/detox-content').then(mod => mod.DetoxContent), { loading: () => <LoadingComponent /> }),
    'planejamento-semana-2': dynamic(() => import('@/app/modulos/content/planning-s2-content').then(mod => mod.PlanningS2Content), { loading: () => <LoadingComponent /> }),
    'suplementacao-alimentacao': dynamic(() => import('@/app/modulos/content/functional-food-content').then(mod => mod.FunctionalFoodContent), { loading: () => <LoadingComponent /> }),
    'preparacao-remodelagem': dynamic(() => import('@/app/modulos/content/remodeling-prep-content').then(mod => mod.RemodelingPrepContent), { loading: () => <LoadingComponent /> }),
    'plano-pos-desafio': dynamic(() => import('@/app/modulos/content/post-challenge-plan-content').then(mod => mod.PostChallengePlanContent), { loading: () => <LoadingComponent /> }),
    'rituais-autocuidado': dynamic(() => import('@/app/modulos/content/self-care-content').then(mod => mod.SelfCareContent), { loading: () => <LoadingComponent /> }),
    'guia-alimentacao-maes': dynamic(() => import('@/app/modulos/content/healthy-eating-for-moms-content').then(mod => mod.HealthyEatingForMomsContent), { loading: () => <LoadingComponent /> }),
    'montando-sua-rotina': dynamic(() => import('@/app/modulos/content/realistic-routine-content').then(mod => mod.RealisticRoutineContent), { loading: () => <LoadingComponent /> }),
    'revisao-geral': dynamic(() => import('@/app/modulos/content/general-review-content').then(mod => mod.GeneralReviewContent), { loading: () => <LoadingComponent /> }),
    'celebracao-proximos-passos': dynamic(() => import('@/app/modulos/content/celebration-content').then(mod => mod.CelebrationContent), { loading: () => <LoadingComponent /> }),
    'postura-elegancia': dynamic(() => import('@/app/modulos/content/posture-and-elegance-content').then(mod => mod.PostureAndEleganceContent), { loading: () => <LoadingComponent /> }),
    'revisao-ajustes-1': dynamic(() => import('@/app/modulos/content/review-adjustments-1-content').then(mod => mod.ReviewAdjustments1Content), { loading: () => <LoadingComponent /> }),
    'aula-20-minutos': dynamic(() => import('@/app/modulos/content/twenty-min-day-content').then(mod => mod.TwentyMinDayContent), { loading: () => <LoadingComponent /> }),
};

export default function LessonPage({ params }: { params: { slug: string; aula: string } }) {
  const module = modules.find((m) => m.slug === params.slug);
  const lesson = module?.schedule.find((l) => l.slug === params.aula);

  if (!module || !lesson) {
    notFound();
  }
  
  const LessonContentComponent = lessonComponentMap[lesson.slug];

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href={`/modulos/${module.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Módulo
            </Link>
          </Button>
          <Link href="/">
            <Image 
                src="https://i.imgur.com/NfDtSSk.png" 
                alt="Diástase Zero Logo" 
                width={180} 
                height={180}
                className='mx-auto'
            />
          </Link>
          <div className="w-48"></div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{lesson.title}</h1>
            <p className="mt-2 text-muted-foreground md:text-lg">{lesson.description}</p>
          </section>

          {lesson.videoUrl ? (
            <Card>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                    src={lesson.videoUrl}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ) : LessonContentComponent ? (
            <LessonContentComponent />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">O conteúdo desta aula estará disponível em breve.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-12">
        <p className="text-xs text-muted-foreground">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
