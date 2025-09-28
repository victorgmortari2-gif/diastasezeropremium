
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Literata } from 'next/font/google';

const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-literata',
});

export default function MeditacaoPage() {
  return (
    <div className={`bg-[#EBF5FB] min-h-screen flex flex-col ${literata.variable} font-serif`}>
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild className="bg-transparent hover:bg-white/80">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar à Página Inicial
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

      <main className="flex-grow container px-4 md:px-6 py-12 flex items-center justify-center">
        <section className="text-center max-w-2xl mx-auto">
            <Badge className="mb-4 text-base" style={{ backgroundColor: '#A9CCE3', color: '#1B4F72' }}>
              Pack de Meditações Guiadas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-literata)' }}>
              Transforme sua mente em 10-30 minutos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Desenvolva autoestima, foco e disciplina com práticas cientificamente validadas.
            </p>
            <Button size="lg" className="mt-8 font-bold text-lg" style={{ backgroundColor: '#5DADE2' }}>
              Começar a Jornada
            </Button>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-auto border-gray-200">
        <p className="text-xs text-gray-500">&copy; 2024 Diástase ZERO. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&display=swap');
        
        .font-serif {
            font-family: 'Literata', serif;
        }
      `}</style>
    </div>
  );
}
