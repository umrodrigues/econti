import { Proposta } from '@/types/proposal';

export const proposalData: Proposta = {
  id: 'proposta-2025',
  pacotes: [
    {
      id: 'pac-sm-01',
      nome: 'Pacote 01',
      preco: 500,
      tipo: 'sm',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '4 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Copyright' }
      ]
    },
    {
      id: 'pac-sm-02',
      nome: 'Pacote 02',
      preco: 800,
      tipo: 'sm',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '8 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Copyright' },
        { id: '4', nome: 'Stories' }
      ]
    },
    {
      id: 'pac-sm-03',
      nome: 'Pacote 03',
      preco: 1200,
      tipo: 'sm',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '12 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Copyright' },
        { id: '4', nome: 'Stories' },
        { id: '5', nome: 'Reels' }
      ]
    },
    {
      id: 'pac-smav-04',
      nome: 'Pacote 04',
      preco: 1500,
      tipo: 'sm_av',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '4 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Fotografias', descricao: '2 sessions/mês' },
        { id: '4', nome: 'Copyright' }
      ],
      diferenciais: ['Fotografias', 'Vídeos', 'Google Meu Negócio']
    },
    {
      id: 'pac-smav-05',
      nome: 'Pacote 05',
      preco: 2200,
      tipo: 'sm_av',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '8 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Fotografias', descricao: '4 sessions/mês' },
        { id: '4', nome: 'Vídeos', descricao: '2 vídeos/mês' },
        { id: '5', nome: 'Copyright' }
      ],
      diferenciais: ['Fotografias', 'Vídeos', 'Drone', 'Google Meu Negócio']
    },
    {
      id: 'pac-smav-06',
      nome: 'Pacote 06',
      preco: 3000,
      tipo: 'sm_av',
      servicos_inclusos: [
        { id: '1', nome: 'Postagens Facebook e Instagram', descricao: '12 postagens/mês' },
        { id: '2', nome: 'Análise de Mercado' },
        { id: '3', nome: 'Fotografias', descricao: '6 sessions/mês' },
        { id: '4', nome: 'Vídeos', descricao: '4 vídeos/mês' },
        { id: '5', nome: 'Reels', descricao: '2 reels/mês' },
        { id: '6', nome: 'Copyright' }
      ],
      diferenciais: ['Fotografias', 'Vídeos', 'Drone', 'Google Meu Negócio']
    }
  ],
  servicos_avulsos: [
    {
      id: 'traf-01',
      categoria: 'trafego_pago',
      nome: 'Google Ads',
      preco_unitario: 1000,
      observacao: 'gestão + estratégia, sem verba'
    },
    {
      id: 'traf-02',
      categoria: 'trafego_pago',
      nome: 'Meta Ads',
      preco_unitario: 1000,
      observacao: 'gestão + estratégia, sem verba'
    },
    {
      id: 'traf-03',
      categoria: 'trafego_pago',
      nome: 'Combo Google + Meta',
      preco_unitario: 1500,
      observacao: 'gestão + estratégia, sem verba'
    },
    {
      id: 'arte-01',
      categoria: 'artes_adicionais',
      nome: 'Criação de Logo',
      preco_unitario: 150
    },
    {
      id: 'arte-02',
      categoria: 'artes_adicionais',
      nome: 'Cardápio',
      preco_unitario: 80
    },
    {
      id: 'arte-03',
      categoria: 'artes_adicionais',
      nome: 'Arte Avulsa Redes Sociais',
      preco_unitario: 50,
      observacao: 'por unidade'
    },
    {
      id: 'arte-04',
      categoria: 'artes_adicionais',
      nome: 'Foto Extra Editada',
      preco_unitario: 20,
      observacao: 'cada'
    },
    {
      id: 'aud-01',
      categoria: 'audiovisual',
      nome: 'Fotografia - Session',
      preco_unitario: 300
    },
    {
      id: 'aud-02',
      categoria: 'audiovisual',
      nome: 'Vídeo Comercial',
      preco_unitario: 500
    },
    {
      id: 'aud-03',
      categoria: 'audiovisual',
      nome: 'Drone - Session',
      preco_unitario: 400
    }
  ],
  informacoes_gerais: {
    observacoes: 'Validade: 30 dias. Preços sujeitos a alterações. Prazos de entrega a combinar conforme demanda.',
    validade_dias: 30
  },
  orcamentos: []
};
