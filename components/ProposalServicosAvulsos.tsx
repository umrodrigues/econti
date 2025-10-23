'use client';

import { ServicoAvulso } from '@/types/proposal';
import { useState, useMemo } from 'react';

interface ProposalServicosAvulsosProps {
  servicos: ServicoAvulso[];
  onAdicionarAoOrcamento: (servico: ServicoAvulso, quantidade: number, anotacao: string) => void;
}

export default function ProposalServicosAvulsos({ servicos, onAdicionarAoOrcamento }: ProposalServicosAvulsosProps) {
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todos');
  const [quantidades, setQuantidades] = useState<{ [key: string]: number }>({});
  const [anotacoes, setAnotacoes] = useState<{ [key: string]: string }>({});

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

        <div className="space-y-4">
          {servicos.map((servico) => (
            <div key={servico.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{servico.nome}</h4>
                  <p className="text-lg font-bold text-blue-600 mt-1">R$ {servico.preco_unitario.toLocaleString('pt-BR')}</p>
                  {servico.observacao && (
                    <p className="text-xs text-gray-600 mt-1">
                      <em>({servico.observacao})</em>
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <label htmlFor={`qty-${servico.id}`} className="text-sm font-medium text-gray-700">Qtd:</label>
                    <input
                      id={`qty-${servico.id}`}
                      type="number"
                      min="1"
                      value={quantidades[servico.id] || 1}
                      onChange={(e) => setQuantidades({ ...quantidades, [servico.id]: parseInt(e.target.value) || 1 })}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    onClick={() => {
                      onAdicionarAoOrcamento(
                        servico,
                        quantidades[servico.id] || 1,
                        anotacoes[servico.id] || ''
                      );
                      setQuantidades({ ...quantidades, [servico.id]: 1 });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded transition-colors"
                  >
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <textarea
                  value={anotacoes[servico.id] || ''}
                  onChange={(e) => setAnotacoes({ ...anotacoes, [servico.id]: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows={2}
                  placeholder="Adicione anotações sobre este serviço..."
                />
              </div>
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
