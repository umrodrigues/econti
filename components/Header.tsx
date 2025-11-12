import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 md:py-6">
          {/* Menu Esquerdo */}
          <nav className="hidden md:flex flex-1 items-center justify-start gap-10">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium">
              Sobre
            </Link>
            <a href="#portfolio" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium">
              Portfólio
            </a>
          </nav>

          {/* Logo Central */}
          <div className="flex flex-1 justify-center md:flex-none">
            <Link href="/">
              <Image
                src="/logo2.png"
                alt="&Conti Logo"
                width={220}
                height={100}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menu Direito */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-10">
            <Link href="/contato" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium">
              Contato
            </Link>
            
            <a 
              href="https://wa.me/5551997791996?text=Olá! Gostaria de saber mais sobre os serviços da &Conti."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              Orçamento
            </a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden flex flex-1 justify-end">
            <button className="text-white hover:text-blue-300 transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
