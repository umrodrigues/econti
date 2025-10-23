'use client';

import { useEffect, useState } from 'react';
import { Proposta } from '@/types/proposal';
import AdminSidebar from '../../../components/AdminSidebar';
import ProposalPresentation from '../../../components/ProposalPresentation';

export default function AdminPage() {
  const [proposta, setProposta] = useState<Proposta | null>(null);
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

  if (loading) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <AdminSidebar activeModule="proposta" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Carregando proposta comercial...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <AdminSidebar activeModule="proposta" />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!proposta) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <AdminSidebar activeModule="proposta" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Nenhuma proposta disponível</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <AdminSidebar activeModule="proposta" />

      <main className="flex-1 overflow-y-auto">
        <ProposalPresentation proposta={proposta} />
      </main>
    </div>
  );
}
