import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function EbookPage() {
  return (
    <div className="bg-background min-h-screen">
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
                width={110} 
                height={110}
                className='mx-auto'
            />
          </Link>
          <div className="font-headline text-lg font-bold text-primary">Diástase Zero</div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <section className="mb-8 text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">E-book: Diástase ZERO o Ano Todo</h1>
            <p className="mt-2 text-muted-foreground md:text-lg">Seu guia completo para manter os resultados e continuar evoluindo.</p>
          </section>

          <section className="flex justify-center">
            <iframe 
              src="https://gamma.app/embed/r15ntxl0h3vw0hl" 
              style={{ width: '900px', maxWidth: '100%', height: '650px', border: 'none' }} 
              allow="fullscreen" 
              title="Diástase ZERO o Ano Todo:">
            </iframe>
          </section>
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
