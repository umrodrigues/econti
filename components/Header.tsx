import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-6 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center py-6">
          <nav className="flex flex-1 items-center justify-end gap-7 text-xl font-semibold">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-200">
              Início
            </Link>
            <Link href="/sobre" className="text-white hover:text-blue-300 transition-colors duration-200">
              Sobre
            </Link>
            <a
              href="#portfolio"
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Portfólio
            </a>
          </nav>

          <div className="flex flex-1 justify-center">
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

          <nav className="flex flex-1 items-center justify-start gap-7 text-xl font-semibold">
            <Link href="/contato" className="text-white hover:text-blue-300 transition-colors duration-200">
              Contato
            </Link>
            
            <a 
              href="https://wa.me/5551997791996?text=Olá! Gostaria de saber mais sobre os serviços da &Conti."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-semibold"
            >
              Orçamento
            </a>
          </nav>

        </div>

        <div className="flex md:hidden items-center justify-between py-4">
          <div className="flex items-center justify-center w-12">
            <button className="text-white hover:text-blue-300 transition-colors duration-200" aria-label="Abrir menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <Link href="/" className="flex-1 flex justify-center">
            <Image
              src="/logo2.png"
              alt="&Conti Logo"
              width={180}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="w-12" />
        </div>
      </div>
    </header>
  );
}
