import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DC Advisors - Consultoria Financeira Especializada',
  description: 'Consultoria financeira especializada para empresas, oferecendo soluções estratégicas e personalizadas para o crescimento do seu negócio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center h-20">
              <div className="text-2xl font-bold text-primary">DC Advisors</div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Início</a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Serviços</a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Contato</a>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Fale Conosco
              </Button>
            </nav>
          </div>
        </header>
        {children}
        <footer className="gradient-bg text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-6">DC Advisors</h3>
                <p className="text-blue-100 max-w-md">
                  Soluções financeiras especializadas que impulsionam o crescimento e 
                  a eficiência do seu negócio, com expertise e resultados comprovados.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <div className="space-y-2 text-blue-100">
                  <p>contato@dcadvisors.com.br</p>
                  <p>+55 (11) 1234-5678</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Endereço</h3>
                <div className="space-y-2 text-blue-100">
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 text-center text-blue-200">
              © {new Date().getFullYear()} DC Advisors. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}