import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AtualizacoesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar à Página Inicial
            </Link>
          </Button>
          <Link href="/">
            <Image 
                src="https://i.imgur.com/VJtWx2S.png" 
                alt="Diástase Zero Logo" 
                width={180} 
                height={180}
                className='mx-auto'
            />
          </Link>
          <div className="w-48"></div>
        </div>
      </header>

      <main className="flex-grow container px-4 md:px-6 py-12 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
            <Card className="bg-accent/10">
                <CardContent className="p-8 text-center flex flex-col items-center">
                    <Info className="h-12 w-12 text-primary mb-4" />
                    <p className="text-lg text-muted-foreground">
                        No momento, todas as aulas do Diástase Zero estão completas e atualizadas. Assim que novos conteúdos ou módulos forem adicionados, você será o(a) primeiro(a) a saber e notificaremos você por e-mail.
                    </p>
                </CardContent>
            </Card>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-auto">
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
