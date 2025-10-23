'use client';

import { InformacaoGeral } from '@/types/proposal';

interface InformacoesGeraisProps {
  informacoes: InformacaoGeral;
}

export default function InformacoesGerais({ informacoes }: InformacoesGeraisProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações Gerais</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 8a1 1 0 000 2h6a1 1 0 000-2H8zm1 5a1 1 0 11-2 0 1 1 0 012 0zm5-1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Observações
          </h3>
          <p className="text-gray-700 leading-relaxed">{informacoes.observacoes}</p>
        </div>

        <div className="mt-4 p-3 bg-white rounded border border-blue-200">
          <p className="text-sm text-gray-600">
            <strong>Validade da Proposta:</strong> {informacoes.validade_dias} dias
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Válida até: <strong>{new Date(Date.now() + informacoes.validade_dias * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
