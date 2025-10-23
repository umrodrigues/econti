import { NextResponse } from 'next/server';
import { proposalData } from '@/lib/proposal-data';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: proposalData
    });
  } catch (error) {
    console.error('Error fetching proposal:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao obter proposta' },
      { status: 500 }
    );
  }
}
