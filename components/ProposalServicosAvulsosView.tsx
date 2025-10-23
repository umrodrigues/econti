'use client';

import { ServicoAvulso } from '@/types/proposal';
import { useState, useMemo } from 'react';

interface ProposalServicosAvulsosViewProps {
  servicos: ServicoAvulso[];
}

export default function ProposalServicosAvulsosView({ servicos }: ProposalServicosAvulsosViewProps) {
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todos');

  const servicosFiltrados = useMemo(() => {
    return servicos.filter(servico => {
      const matchBusca = servico.nome.toLowerCase().includes(busca.toLowerCase());
      const matchCategoria = filtroCategoria === 'todos' || servico.categoria === filtroCategoria;
      return matchBusca && matchCategoria;
    });
  }, [servicos, busca, filtroCategoria]);

  const agrupadosPorCategoria = useMemo(() => {
    const agrupado: { [key: string]: ServicoAvulso[] } = {
      trafego_pago: [],
      artes_adicionais: [],
      audiovisual: []
    };

    servicosFiltrados.forEach(servico => {
      agrupado[servico.categoria].push(servico);
    });

    return agrupado;
  }, [servicosFiltrados]);

  const categoriasComServicos = Object.entries(agrupadosPorCategoria)
    .filter(([_, items]) => items.length > 0)
    .map(([cat]) => cat);

  const renderCategoria = (categoria: string, servicos: ServicoAvulso[]) => {
    const titulos: { [key: string]: string } = {
      trafego_pago: 'Tráfego Pago Avulso',
      artes_adicionais: 'Artes Adicionais',
      audiovisual: 'Audiovisual (Fotos/Vídeos)'
    };

    if (servicos.length === 0) return null;

    return (
      <div key={categoria} className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
          {titulos[categoria]}
        </h3>

        <div className="space-y-3">
          {servicos.map((servico) => (
            <div key={servico.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{servico.nome}</h4>
                {servico.observacao && (
                  <p className="text-xs text-gray-600 mt-1">
                    <em>({servico.observacao})</em>
                  </p>
                )}
              </div>
              <p className="text-lg font-bold text-blue-600 whitespace-nowrap ml-4">
                R$ {servico.preco_unitario.toLocaleString('pt-BR')}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços Avulsos</h2>

      <div className="mb-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Buscar serviço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroCategoria('todos')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroCategoria === 'todos'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltroCategoria('trafego_pago')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroCategoria === 'trafego_pago'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tráfego Pago
          </button>
          <button
            onClick={() => setFiltroCategoria('artes_adicionais')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroCategoria === 'artes_adicionais'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Artes
          </button>
          <button
            onClick={() => setFiltroCategoria('audiovisual')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroCategoria === 'audiovisual'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Audiovisual
          </button>
        </div>
      </div>

      <div>
        {categoriasComServicos.length > 0 ? (
          categoriasComServicos.map(categoria =>
            renderCategoria(categoria, agrupadosPorCategoria[categoria])
          )
        ) : (
          <p className="text-center text-gray-500 py-8">Nenhum serviço encontrado.</p>
        )}
      </div>
    </div>
  );
}
