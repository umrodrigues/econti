import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <h1 className="text-xl font-bold text-blue-600">&CONTI</h1>
              <span className="text-xs text-gray-500">Admin - Proposta Comercial 2025</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                ← Voltar ao site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">&CONTI Marketing Digital</h3>
              <p className="text-sm text-gray-600">Transformando negócios através de estratégias digitais inovadoras.</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Serviços</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Social Media</li>
                <li>Audiovisual</li>
                <li>Tráfego Pago</li>
                <li>Artes Adicionais</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="tel:+5551997791996" className="hover:text-blue-600 transition-colors">(55) 99779-1996</a></li>
                <li><a href="mailto:contato@econti.com" className="hover:text-blue-600 transition-colors">contato@econti.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-xs text-gray-500">
              &copy; 2025 &CONTI Marketing Digital. Todos os direitos reservados. | Proposta válida por 30 dias
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
