import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './packages/ui/styles/globals.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { GoToWhatsapp } from './packages/components/go-to-whatsapp/go-to-whatsapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '&Conti Marketing Digital - Soluções em Marketing Digital e Offline',
  description: 'A &Conti Marketing Digital é uma empresa dedicada a impulsionar o crescimento do seu negócio com soluções abrangentes em imagem, design, performance e audiovisual. Mais de 70 empresas parceiras atendidas.',
  keywords: 'marketing digital, gerenciamento collab, design, audiovisual, redes sociais, &conti',
  authors: [{ name: '&Conti Marketing Digital' }],
  openGraph: {
    title: '&Conti Marketing Digital',
    description: 'Soluções completas em marketing digital e offline',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <GoToWhatsapp />
      </body>
    </html>
  );
}
