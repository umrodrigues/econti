export interface ServicoIncluido {
  id: string;
  nome: string;
  descricao?: string;
}

export interface Pacote {
  id: string;
  nome: string;
  preco: number;
  servicos_inclusos: ServicoIncluido[];
  tipo: 'sm' | 'sm_av';
  diferenciais?: string[];
}

export interface ServicoAvulso {
  id: string;
  categoria: 'trafego_pago' | 'artes_adicionais' | 'audiovisual';
  nome: string;
  preco_unitario: number;
  observacao?: string;
}

export interface ItemOrcamento {
  id: string;
  tipo: 'pacote' | 'servico_avulso';
  pacoteId?: string;
  servicoId?: string;
  quantidade: number;
  preco_unitario: number;
  anotacao?: string;
}

export interface Orcamento {
  id: string;
  itens: ItemOrcamento[];
  anotacoes: string;
  valor_total: number;
  data_criacao: string;
}

export interface InformacaoGeral {
  observacoes: string;
  validade_dias: number;
}

export interface Proposta {
  id: string;
  pacotes: Pacote[];
  servicos_avulsos: ServicoAvulso[];
  informacoes_gerais: InformacaoGeral;
  orcamentos: Orcamento[];
}
