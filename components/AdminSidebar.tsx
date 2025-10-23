'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeModule?: string;
}

export default function AdminSidebar({ activeModule = 'proposta' }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const modulos = [
    { id: 'proposta', nome: 'Proposta Comercial', icon: '📄', href: '/admin' },
    { id: 'orcamentos', nome: 'Orçamentos', icon: '💰', href: '/admin/orcamentos' },
    { id: 'clientes', nome: 'Clientes', icon: '👥', href: '/admin/clientes' },
    { id: 'relatorios', nome: 'Relatórios', icon: '📊', href: '/admin/relatorios' },
    { id: 'configuracoes', nome: 'Configurações', icon: '⚙️', href: '/admin/configuracoes' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 shadow-lg"
        title={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      <aside className={`${isOpen ? 'w-72' : 'w-24'} bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 flex flex-col fixed h-screen z-40 md:relative border-r border-gray-700 shadow-2xl`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700 flex flex-col items-center justify-center">
          <div className={`flex items-center justify-center ${isOpen ? 'gap-3' : 'gap-0'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold">🎯</span>
            </div>
            {isOpen && (
              <div className="flex flex-col">
                <h2 className="font-bold text-lg">&CONTI</h2>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {modulos.map((modulo, index) => (
            <Link
              key={modulo.id}
              href={modulo.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                activeModule === modulo.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              } ${!isOpen && 'justify-center px-3'}`}
              title={!isOpen ? modulo.nome : undefined}
              style={{
                animation: `slideIn 0.3s ease-out ${index * 0.05}s backwards`
              }}
            >
              <style>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateX(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>
              
              {activeModule === modulo.id && (
                <div className="absolute inset-0 bg-white/20 blur-xl" />
              )}
              
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{modulo.icon}</span>
              
              {isOpen && (
                <>
                  <span className="font-medium flex-1">{modulo.nome}</span>
                  {activeModule === modulo.id && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/50 backdrop-blur">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-blue-400 transition-all duration-300 w-full rounded-lg hover:bg-gray-700/50"
          >
            <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
            {isOpen && <span className="text-sm">{isOpen ? 'Minimizar' : 'Expandir'}</span>}
          </button>

          {isOpen && (
            <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500 text-center">
              <p>v1.0.0</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
