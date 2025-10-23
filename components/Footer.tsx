import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">&CONTI</h3>
            <p className="text-gray-400 text-sm">
              Marketing digital estratégico para transformar seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Social Media</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Audiovisual</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Tráfego Pago</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Artes Adicionais</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Acesso</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://wa.me/5551997791996?text=Olá! Gostaria de saber mais sobre os serviços da &Conti."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link 
                  href="/login" 
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  📋 Área Administrativa
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 &CONTI Marketing Digital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
