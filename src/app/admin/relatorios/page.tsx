'use client';

import AdminSidebar from '../../../../components/AdminSidebar';

export default function RelatoriosPage() {
  const metrics = [
    { titulo: 'Receita Total', valor: 'R$ 23.6k', crescimento: '+15%', cor: 'from-blue-500 to-blue-600' },
    { titulo: 'Novos Clientes', valor: '8', crescimento: '+25%', cor: 'from-green-500 to-green-600' },
    { titulo: 'Taxa Conversão', valor: '42%', crescimento: '+8%', cor: 'from-purple-500 to-purple-600' },
    { titulo: 'Satisfação', valor: '4.8/5', crescimento: '+12%', cor: 'from-yellow-500 to-yellow-600' },
  ];

  const servicosMaisVendidos = [
    { nome: 'Pacote 05 (SM+AV)', vendas: 12, percentual: 35 },
    { nome: 'Pacote 03 (SM)', vendas: 9, percentual: 26 },
    { nome: 'Pacote 06 (SM+AV)', vendas: 8, percentual: 23 },
    { nome: 'Tráfego Pago', vendas: 6, percentual: 16 },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AdminSidebar activeModule="relatorios" />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Relatórios</h1>
            <p className="text-gray-600">Análise de desempenho e métricas</p>
          </div>

          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${metric.cor} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-opacity-90 text-sm font-medium mb-2">{metric.titulo}</p>
                <p className="text-3xl font-bold mb-4">{metric.valor}</p>
                <p className="text-sm text-opacity-75 flex items-center gap-1">
                  <span>📈</span> {metric.crescimento} este mês
                </p>
              </div>
            ))}
          </div>

          {/* Services and Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Services */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🏆 Serviços Mais Vendidos</h2>
              <div className="space-y-4">
                {servicosMaisVendidos.map((servico, i) => (
                  <div key={i} className="animate-fadeIn" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold text-gray-900">{servico.nome}</p>
                      <span className="text-sm font-bold text-blue-600">{servico.vendas} vendas</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${servico.percentual}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{servico.percentual}% do total</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-bold text-gray-900 mb-6">📈 Resumo Mensal</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Orçamentos Enviados</p>
                  <p className="text-2xl font-bold text-blue-600">34</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Taxa de Aceição</p>
                  <p className="text-2xl font-bold text-green-600">68%</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">Ticket Médio</p>
                  <p className="text-2xl font-bold text-purple-600">R$ 695</p>
                </div>
              </div>
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
