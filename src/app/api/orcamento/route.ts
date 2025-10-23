import { NextRequest, NextResponse } from 'next/server';
import { Orcamento } from '@/types/proposal';

const orcamentos: Orcamento[] = [];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: orcamentos
    });
  } catch (error) {
    console.error('Error fetching orcamentos:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao obter orçamentos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const orcamento = await request.json() as Orcamento;

    const novoOrcamento: Orcamento = {
      ...orcamento,
      id: `orcamento-${Date.now()}`,
      data_criacao: new Date().toISOString()
    };

    orcamentos.push(novoOrcamento);

    return NextResponse.json({
      success: true,
      message: 'Orçamento salvo com sucesso',
      data: novoOrcamento
    });
  } catch (error) {
    console.error('Error saving orcamento:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao salvar orçamento' },
      { status: 500 }
    );
  }
}
