'use client';

import AdminSidebar from '../../../../components/AdminSidebar';

export default function ClientesPage() {
  const clientes = [
    { 
      id: 1, 
      nome: 'Tech Solutions', 
      email: 'contato@techsolutions.com',
      telefone: '(11) 98765-4321',
      status: 'Ativo',
      orcamentos: 3,
      gasto: 'R$ 6.400'
    },
    { 
      id: 2, 
      nome: 'Restaurante Gourmet', 
      email: 'info@restaurante.com',
      telefone: '(21) 99876-5432',
      status: 'Ativo',
      orcamentos: 2,
      gasto: 'R$ 3.200'
    },
    { 
      id: 3, 
      nome: 'E-commerce Brasil', 
      email: 'suporte@ecommerce.com',
      telefone: '(31) 97654-3210',
      status: 'Ativo',
      orcamentos: 5,
      gasto: 'R$ 12.800'
    },
    { 
      id: 4, 
      nome: 'Agência Digital', 
      email: 'contato@agencia.com',
      telefone: '(41) 96543-2109',
      status: 'Inativo',
      orcamentos: 1,
      gasto: 'R$ 1.200'
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AdminSidebar activeModule="clientes" />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">👥 Clientes</h1>
            <p className="text-gray-600">Gerencie seus clientes e relacionamento</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg animate-fadeIn">
              <p className="text-blue-100 text-sm font-medium mb-2">Total de Clientes</p>
              <p className="text-4xl font-bold">4</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <p className="text-green-100 text-sm font-medium mb-2">Clientes Ativos</p>
              <p className="text-4xl font-bold">3</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <p className="text-purple-100 text-sm font-medium mb-2">Total Gasto</p>
              <p className="text-4xl font-bold">R$ 23.6k</p>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientes.map((cliente, i) => (
              <div 
                key={cliente.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 animate-fadeIn transform hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cliente.nome}</h3>
                    <p className="text-sm text-gray-500">{cliente.email}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cliente.status === 'Ativo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {cliente.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Telefone:</strong> {cliente.telefone}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Orçamentos:</strong> {cliente.orcamentos}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">{cliente.gasto}</p>
                  <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold rounded-lg transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out;
            }
          `}</style>
        </div>
      </main>
    </div>
  );
}
