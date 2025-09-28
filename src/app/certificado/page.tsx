
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Award, Download, Medal } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formSchema = z.object({
  name: z.string().min(3, { message: 'O nome completo é obrigatório.' }),
  cpf: z.string().length(14, { message: 'O CPF deve ter 11 dígitos.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function CertificadoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
    },
  });
  
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    form.setValue('cpf', value);
  };

  const onSubmit = (data: FormData) => {
    setFormData(data);
    setSubmitted(true);
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const currentDate = format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="bg-background min-h-screen">
       <header className="bg-white shadow-sm sticky top-0 z-10 print:hidden">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Button variant="outline" asChild>
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

      <main className="container px-4 md:px-6 py-12">
        {!submitted ? (
            <div className="max-w-xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl md:text-3xl text-center">Gerar Certificado de Conclusão</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground mb-6">Insira seus dados para gerar seu certificado do programa Diástase Zero.</p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Seu nome como aparecerá no certificado" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cpf"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CPF</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="000.000.000-00" 
                                                    {...field} 
                                                    onChange={handleCpfChange}
                                                    maxLength={14}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full font-bold" size="lg">
                                    <Award className="mr-2 h-5 w-5" />
                                    Gerar meu Certificado
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="print:hidden flex justify-between items-center mb-8">
              <h2 className="font-headline text-2xl font-bold">Seu certificado está pronto!</h2>
              <Button onClick={handlePrint}><Download className="mr-2 h-4 w-4" /> Baixar / Imprimir</Button>
            </div>
            
            {/* Certificado para impressão */}
            <div className="border-4 border-primary p-8 rounded-lg bg-white shadow-lg relative printable-area">
                <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-gold rounded-md"></div>
                 <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-[500px]">
                    <Image 
                        src="https://i.imgur.com/NfDtSSk.png" 
                        alt="Diástase Zero Logo" 
                        width={150} 
                        height={150}
                        className='mx-auto'
                    />
                    <Medal className="h-16 w-16 text-gold my-4" />
                    <h1 className="font-headline text-4xl font-bold text-gray-800">Certificado de Conclusão</h1>
                    <p className="text-muted-foreground text-lg mt-8">Certificamos que</p>
                    <p className="font-headline text-3xl text-primary font-semibold my-4">{formData?.name}</p>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        concluiu com sucesso o programa <span className="font-bold">Diástase Zero - Premium</span>, demonstrando dedicação e compromisso com sua saúde e bem-estar.
                    </p>
                    <div className="mt-16 w-full flex justify-center">
                      <div className="text-center">
                        <p className="text-4xl text-gray-700" style={{ fontFamily: "'Dancing Script', cursive" }}>Stephanie Medeiros</p>
                        <p className="text-muted-foreground text-xs mt-1">Idealizadora do Diástase Zero</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground absolute bottom-12 right-12">{currentDate}</p>
                 </div>
            </div>
            <Button variant="link" onClick={() => setSubmitted(false)} className="mt-4 print:hidden">Gerar outro certificado</Button>
          </div>
        )}
      </main>

       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-12 print:hidden">
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
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
