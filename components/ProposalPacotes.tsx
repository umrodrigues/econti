'use client';

import { Pacote } from '@/types/proposal';
import { useState } from 'react';

interface ProposalPacotesProps {
  pacotes: Pacote[];
  onAdicionarAoOrcamento: (pacote: Pacote, anotacao: string) => void;
}

export default function ProposalPacotes({ pacotes, onAdicionarAoOrcamento }: ProposalPacotesProps) {
  const [anotacoes, setAnotacoes] = useState<{ [key: string]: string }>({});

  const pacotesSM = pacotes.filter(p => p.tipo === 'sm');
  const pacotesAV = pacotes.filter(p => p.tipo === 'sm_av');

  const renderPacotes = (pacotesArray: Pacote[], titulo: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{titulo}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pacotesArray.map((pacote) => (
          <div
            key={pacote.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{pacote.nome}</h3>
              <div className="text-4xl font-bold">R$ {pacote.preco.toLocaleString('pt-BR')}</div>
              <p className="text-sm text-blue-100 mt-2">Valor do Investimento</p>
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Serviços Inclusos:</h4>
              <ul className="space-y-2 mb-4">
                {pacote.servicos_inclusos.map((servico) => (
                  <li key={servico.id} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>
                      <strong>{servico.nome}</strong>
                      {servico.descricao && <span className="text-gray-500"> - {servico.descricao}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              {pacote.diferenciais && pacote.diferenciais.length > 0 && (
                <div className="mb-4 p-3 bg-blue-50 rounded">
                  <p className="text-xs font-semibold text-blue-900 mb-2">✨ Diferenciais:</p>
                  <div className="flex flex-wrap gap-2">
                    {pacote.diferenciais.map((dif) => (
                      <span key={dif} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                        {dif}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Anotações:</label>
                <textarea
                  value={anotacoes[pacote.id] || ''}
                  onChange={(e) => setAnotacoes({ ...anotacoes, [pacote.id]: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows={3}
                  placeholder="Adicione observações sobre este pacote..."
                />
              </div>

              <button
                onClick={() => onAdicionarAoOrcamento(pacote, anotacoes[pacote.id] || '')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Selecionar para Orçamento
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderPacotes(pacotesSM, 'Pacotes Social Media (SM)')}
      {renderPacotes(pacotesAV, 'Pacotes Social Media + Audiovisual (SM+AV)')}
    </div>
  );
}
