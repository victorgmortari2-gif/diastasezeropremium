import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';
// REMOVA ESTA LINHA: import Head from 'next/head'; 
import Script from 'next/script'; // Mantenha o import

export const metadata: Metadata = {
  title: 'Diástase ZERO',
  description: 'Programa de 21 dias para recuperação da diástase abdominal.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // O componente React Fragment (<>) permite que injetemos scripts fora do <html>.
  return (
    <>
      {/* ========================================================== */}
      {/* === CÓDIGO 1: META PIXEL (FORA DO <html>, INJETADO NO <head>) === */}
      {/* Usamos o componente Script com 'beforeInteractive' para ir para o <head>. */}
      <Script
        id="meta-pixel-script"
        strategy="beforeInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25178922585075542');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* ========================================================== */}

      <html lang="pt-BR" className={`${poppins.variable} ${ptSans.variable}`}>
        <body className="font-body antialiased">
          
          {/* === <noscript> DENTRO DO <body> (Sintaxe JSX corrigida) === */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=25178922585075542&ev=PageView&noscript=1"
              />`,
            }}
          />
          {/* O style no <noscript> deve ser uma string HTML simples, não um objeto React Style. */}
          {/* Se quiser usar o style React, a sintaxe seria style={{display: 'none'}} mas isso */}
          {/* só funciona para elementos React, e <noscript> usa HTML puro. Manter o dangerouslySetInnerHTML é mais seguro. */}
          
          {children}
          <Toaster />
          
          {/* === CÓDIGO 2: UTMIFY (No final do <body>) === */}
          <Script
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            data-utmify-prevent-xcod-sck
            data-utmify-prevent-subids
            strategy="lazyOnload" // Garante carregamento assíncrono.
          />
        </body>
      </html>
    </>
  );
}