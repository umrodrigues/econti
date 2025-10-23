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
        className="fixed top-20 left-4 z-50 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
        title={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col fixed h-screen z-40 md:relative`}>
        <div className="p-4 border-b border-gray-800">
          <div className={`flex items-center gap-3 ${!isOpen && 'justify-center'}`}>
            <span className="text-2xl">🎯</span>
            {isOpen && <h2 className="font-bold text-lg">Admin</h2>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {modulos.map((modulo) => (
            <Link
              key={modulo.id}
              href={modulo.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeModule === modulo.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              } ${!isOpen && 'justify-center'}`}
              title={!isOpen ? modulo.nome : undefined}
            >
              <span className="text-xl">{modulo.icon}</span>
              {isOpen && <span className="font-medium">{modulo.nome}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white transition-colors w-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
            {isOpen && <span className="text-sm">{isOpen ? 'Minimizar' : 'Expandir'}</span>}
          </button>
        </div>
      </aside>

      {isOpen && <div className="hidden md:block w-64" />}
    </>
  );
}
