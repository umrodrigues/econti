'use client';

import AdminSidebar from '../../../../components/AdminSidebar';

export default function OrcamentosPage() {
  const orcamentos = [
    { id: 1, cliente: 'Tech Solutions', pacote: 'Pacote 05', valor: 2200, data: '2025-01-15', status: 'Aceito' },
    { id: 2, cliente: 'Restaurante Gourmet', pacote: 'Pacote 03', valor: 1200, data: '2025-01-14', status: 'Pendente' },
    { id: 3, cliente: 'E-commerce Brasil', pacote: 'Pacote 06', valor: 3000, data: '2025-01-13', status: 'Aceito' },
  ];

  const stats = [
    { label: 'Total de Orçamentos', valor: '12', cor: 'blue' },
    { label: 'Aceitos', valor: '8', cor: 'green' },
    { label: 'Pendentes', valor: '3', cor: 'yellow' },
    { label: 'Rejeitados', valor: '1', cor: 'red' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AdminSidebar activeModule="orcamentos" />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">💰 Orçamentos</h1>
            <p className="text-gray-600">Gerencie todos os orçamentos enviados</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p style={{ color: stat.cor === 'blue' ? '#2563eb' : stat.cor === 'green' ? '#16a34a' : stat.cor === 'yellow' ? '#ca8a04' : '#dc2626', fontSize: '1.875rem', fontWeight: 'bold' }}>{stat.valor}</p>
                <div style={{ 
                  width: '100%', 
                  height: '4px', 
                  backgroundColor: stat.cor === 'blue' ? '#dbeafe' : stat.cor === 'green' ? '#dcfce7' : stat.cor === 'yellow' ? '#fef08a' : '#fee2e2',
                  borderRadius: '9999px',
                  marginTop: '1rem'
                }} />
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Últimos Orçamentos</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cliente</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pacote</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Valor</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Data</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {orcamentos.map((orcamento, i) => (
                    <tr 
                      key={orcamento.id}
                      className="border-t border-gray-200 hover:bg-blue-50 transition-colors animate-fadeIn"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{orcamento.cliente}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{orcamento.pacote}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">R$ {orcamento.valor.toLocaleString('pt-BR')}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{new Date(orcamento.data).toLocaleDateString('pt-BR')}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          orcamento.status === 'Aceito' ? 'bg-green-100 text-green-800' :
                          orcamento.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {orcamento.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold">Ver</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
