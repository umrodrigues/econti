'use client';

import { ItemOrcamento, Pacote, ServicoAvulso } from '@/types/proposal';
import { useState } from 'react';

interface CarrinhoOrcamentoProps {
  itens: ItemOrcamento[];
  pacotesRef: Pacote[];
  servicosRef: ServicoAvulso[];
  onRemoverItem: (index: number) => void;
  onSalvarOrcamento: (anotacoes: string) => void;
}

export default function CarrinhoOrcamento({
  itens,
  pacotesRef,
  servicosRef,
  onRemoverItem,
  onSalvarOrcamento
}: CarrinhoOrcamentoProps) {
  const [anotacoes, setAnotacoes] = useState('');
  const [salvando, setSalvando] = useState(false);

  const calcularTotal = () => {
    return itens.reduce((total, item) => {
      return total + (item.preco_unitario * item.quantidade);
    }, 0);
  };

  const handleSalvar = async () => {
    setSalvando(true);
    try {
      await onSalvarOrcamento(anotacoes);
      setAnotacoes('');
    } finally {
      setSalvando(false);
    }
  };

  const total = calcularTotal();

  return (
    <div className="fixed right-0 top-0 h-screen w-full md:w-96 bg-white shadow-lg overflow-y-auto z-40 border-l border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          <svg className="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1h7.586a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.587l-.22-.894A1 1 0 005.589 4H3a1 1 0 000 2h1.356l3.08 12.32a1 1 0 00.968.68h8.596a1 1 0 100-2H12.96l.305-1.222a.997.997 0 00.01-.042L15.34 9H17a1 1 0 000-2H6.587l1.22-4.88A1 1 0 009 2H3z" />
          </svg>
          Orçamento
        </h2>

        {itens.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-500">Seu orçamento está vazio</p>
            <p className="text-sm text-gray-400 mt-2">Selecione pacotes e serviços para começar</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {itens.map((item, index) => {
                let nome = '';
                if (item.tipo === 'pacote') {
                  const pac = pacotesRef.find(p => p.id === item.pacoteId);
                  nome = pac?.nome || 'Pacote Desconhecido';
                } else {
                  const serv = servicosRef.find(s => s.id === item.servicoId);
                  nome = serv?.nome || 'Serviço Desconhecido';
                }

                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{nome}</h4>
                        {item.quantidade > 1 && (
                          <p className="text-xs text-gray-600">Quantidade: {item.quantidade}x</p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoverItem(index)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        ✕
                      </button>
                    </div>

                    {item.anotacao && (
                      <p className="text-xs text-gray-600 italic mb-2 p-2 bg-white rounded">
                        &quot;{item.anotacao}&quot;
                      </p>
                    )}

                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">
                        R$ {(item.preco_unitario * item.quantidade).toLocaleString('pt-BR')}
                      </p>
                      {item.quantidade > 1 && (
                        <p className="text-xs text-gray-500">
                          R$ {item.preco_unitario.toLocaleString('pt-BR')} × {item.quantidade}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-6 pb-6 border-t-2 border-gray-200">
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-3xl font-bold text-blue-600">
                  R$ {total.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anotações Gerais:
              </label>
              <textarea
                value={anotacoes}
                onChange={(e) => setAnotacoes(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                placeholder="Adicione observações sobre o orçamento..."
              />
            </div>

            <button
              onClick={handleSalvar}
              disabled={salvando}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              {salvando ? 'Salvando...' : 'Salvar Orçamento'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
