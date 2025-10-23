'use client';

import { useState } from 'react';
import AdminSidebar from '../../../../components/AdminSidebar';

export default function ConfiguracoesPage() {
  const [empresa, setEmpresa] = useState({
    nome: '&CONTI Marketing Digital',
    email: 'contato@econti.com',
    telefone: '(55) 99779-1996',
    website: 'www.econti.com',
    endereco: 'Rio Grande do Sul, Brasil'
  });

  const [notificacoes, setNotificacoes] = useState({
    emailNovoOrcamento: true,
    emailOrcamentoAceito: true,
    emailRelatorioMensal: true,
    smsNotificacoes: false
  });

  const handleSave = () => {
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AdminSidebar activeModule="configuracoes" />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">⚙️ Configurações</h1>
            <p className="text-gray-600">Gerencie as configurações da sua conta</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Settings Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8 animate-fadeIn">
                <h3 className="font-bold text-gray-900 mb-4">Seções</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg">
                    📋 Dados da Empresa
                  </button>
                  <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    🔔 Notificações
                  </button>
                  <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    🔐 Segurança
                  </button>
                  <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    👤 Minha Conta
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Company Info */}
              <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  📋 Dados da Empresa
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome da Empresa</label>
                    <input
                      type="text"
                      value={empresa.nome}
                      onChange={(e) => setEmpresa({ ...empresa, nome: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={empresa.email}
                        onChange={(e) => setEmpresa({ ...empresa, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={empresa.telefone}
                        onChange={(e) => setEmpresa({ ...empresa, telefone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={empresa.website}
                        onChange={(e) => setEmpresa({ ...empresa, website: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço</label>
                      <input
                        type="text"
                        value={empresa.endereco}
                        onChange={(e) => setEmpresa({ ...empresa, endereco: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💾 Salvar Alterações
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  🔔 Notificações
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Email ao receber novo orçamento</p>
                      <p className="text-sm text-gray-600">Receba notificações quando um orçamento for enviado</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificacoes.emailNovoOrcamento}
                      onChange={(e) => setNotificacoes({ ...notificacoes, emailNovoOrcamento: e.target.checked })}
                      className="w-6 h-6 text-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Email ao aceitar orçamento</p>
                      <p className="text-sm text-gray-600">Notificação quando um cliente aceita um orçamento</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificacoes.emailOrcamentoAceito}
                      onChange={(e) => setNotificacoes({ ...notificacoes, emailOrcamentoAceito: e.target.checked })}
                      className="w-6 h-6 text-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Relatório mensal</p>
                      <p className="text-sm text-gray-600">Receba relatórios mensais de desempenho</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificacoes.emailRelatorioMensal}
                      onChange={(e) => setNotificacoes({ ...notificacoes, emailRelatorioMensal: e.target.checked })}
                      className="w-6 h-6 text-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">Notificações por SMS</p>
                      <p className="text-sm text-gray-600">Ative notificações por mensagem de texto</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificacoes.smsNotificacoes}
                      onChange={(e) => setNotificacoes({ ...notificacoes, smsNotificacoes: e.target.checked })}
                      className="w-6 h-6 text-blue-600 cursor-pointer"
                    />
                  </div>
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
