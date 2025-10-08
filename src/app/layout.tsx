import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

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
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${ptSans.variable}`}>
      <Head>
        {/* Meta Pixel Script */}
        <script
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
      </Head>
      <body className="font-body antialiased">
        
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=25178922585075542&ev=PageView&noscript=1"
          />
        </noscript>
        
        {children}
        <Toaster />
        
        {/* UTMify Script */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
