'use client';

import { useEffect, useState } from 'react';
import { withAuth } from '@/lib/auth-middleware';
import { Proposta, ItemOrcamento, Pacote, ServicoAvulso, Orcamento } from '@/types/proposal';
import ProposalPacotes from '../../../components/ProposalPacotes';
import ProposalServicosAvulsos from '../../../components/ProposalServicosAvulsos';
import CarrinhoOrcamento from '../../../components/CarrinhoOrcamento';
import InformacoesGerais from '../../../components/InformacoesGerais';

export default function AdminPage() {
  const [proposta, setProposta] = useState<Proposta | null>(null);
  const [itensOrcamento, setItensOrcamento] = useState<ItemOrcamento[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const carregarProposta = async () => {
      try {
        const response = await fetch('/api/proposal');
        const data = await response.json();
        if (data.success) {
          setProposta(data.data);
        } else {
          setError('Erro ao carregar proposta');
        }
      } catch (err) {
        console.error('Error loading proposal:', err);
        setError('Erro ao conectar com o servidor');
      } finally {
        setLoading(false);
      }
    };

    carregarProposta();
  }, []);

  const adicionarPacoteAoOrcamento = (pacote: Pacote, anotacao: string) => {
    const novoItem: ItemOrcamento = {
      id: `item-${Date.now()}`,
      tipo: 'pacote',
      pacoteId: pacote.id,
      quantidade: 1,
      preco_unitario: pacote.preco,
      anotacao: anotacao || undefined
    };

    setItensOrcamento([...itensOrcamento, novoItem]);
    setCarrinhoAberto(true);
  };

  const adicionarServicoAoOrcamento = (servico: ServicoAvulso, quantidade: number, anotacao: string) => {
    const novoItem: ItemOrcamento = {
      id: `item-${Date.now()}`,
      tipo: 'servico_avulso',
      servicoId: servico.id,
      quantidade,
      preco_unitario: servico.preco_unitario,
      anotacao: anotacao || undefined
    };

    setItensOrcamento([...itensOrcamento, novoItem]);
    setCarrinhoAberto(true);
  };

  const removerItemOrcamento = (index: number) => {
    setItensOrcamento(itensOrcamento.filter((_, i) => i !== index));
  };

  const salvarOrcamento = async (anotacoes: string) => {
    if (itensOrcamento.length === 0) {
      alert('Adicione pelo menos um item ao orçamento');
      return;
    }

    const total = itensOrcamento.reduce((sum, item) => sum + (item.preco_unitario * item.quantidade), 0);

    const orcamento: Orcamento = {
      id: '',
      itens: itensOrcamento,
      anotacoes,
      valor_total: total,
      data_criacao: ''
    };

    try {
      const response = await fetch('/api/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orcamento)
      });

      const data = await response.json();

      if (data.success) {
        alert('Orçamento salvo com sucesso! ID: ' + data.data.id);
        setItensOrcamento([]);
      } else {
        alert('Erro ao salvar orçamento: ' + data.message);
      }
    } catch (err) {
      console.error('Error saving orcamento:', err);
      alert('Erro ao conectar com o servidor');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Carregando proposta comercial...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!proposta) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Nenhuma proposta disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-16">
      <div className={`${carrinhoAberto ? 'mr-0 md:mr-96' : ''} transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Proposta Comercial 2025</h1>
            <p className="text-gray-600">Simule seu orçamento personalizado com os pacotes e serviços da &Conti</p>
          </div>

          <InformacoesGerais informacoes={proposta.informacoes_gerais} />

          <ProposalPacotes
            pacotes={proposta.pacotes}
            onAdicionarAoOrcamento={adicionarPacoteAoOrcamento}
          />

          <ProposalServicosAvulsos
            servicos={proposta.servicos_avulsos}
            onAdicionarAoOrcamento={adicionarServicoAoOrcamento}
          />
        </div>
      </div>

      {carrinhoAberto && (
        <>
          <button
            onClick={() => setCarrinhoAberto(false)}
            className="fixed left-4 bottom-4 md:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors z-30"
          >
            ← Voltar
          </button>

          <CarrinhoOrcamento
            itens={itensOrcamento}
            pacotesRef={proposta.pacotes}
            servicosRef={proposta.servicos_avulsos}
            onRemoverItem={removerItemOrcamento}
            onSalvarOrcamento={salvarOrcamento}
          />
        </>
      )}

      {!carrinhoAberto && itensOrcamento.length > 0 && (
        <button
          onClick={() => setCarrinhoAberto(true)}
          className="fixed right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors z-30 flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1h7.586a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.587l-.22-.894A1 1 0 005.589 4H3a1 1 0 000 2h1.356l3.08 12.32a1 1 0 00.968.68h8.596a1 1 0 100-2H12.96l.305-1.222a.997.997 0 00.01-.042L15.34 9H17a1 1 0 000-2H6.587l1.22-4.88A1 1 0 009 2H3z" />
          </svg>
          {itensOrcamento.length}
        </button>
      )}
    </div>
  );
}
