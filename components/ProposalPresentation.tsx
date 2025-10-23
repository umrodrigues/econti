'use client';

import { useState } from 'react';
import { Proposta } from '@/types/proposal';
import ProposalPacotesView from './ProposalPacotesView';
import ProposalServicosAvulsosView from './ProposalServicosAvulsosView';
import InformacoesGerais from './InformacoesGerais';

interface ProposalPresentationProps {
  proposta: Proposta;
}

export default function ProposalPresentation({ proposta }: ProposalPresentationProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'intro',
      titulo: 'Bem-vindo',
      descricao: 'Proposta Comercial 2025',
      icon: '🎯'
    },
    {
      id: 'info',
      titulo: 'Informações Gerais',
      descricao: 'Validade e observações',
      icon: 'ℹ️'
    },
    {
      id: 'pacotes',
      titulo: 'Pacotes de Serviços',
      descricao: 'Social Media e Audiovisual',
      icon: '📦'
    },
    {
      id: 'servicos',
      titulo: 'Serviços Avulsos',
      descricao: 'Tráfego, Artes e Audiovisual',
      icon: '🔧'
    }
  ];

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="min-h-[600px] flex flex-col items-center justify-center text-center animate-fadeIn">
            <div className="mb-8 animate-bounce">
              <div className="text-8xl">🎯</div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Proposta Comercial
            </h1>
            <p className="text-2xl text-gray-600 mb-8">2025 &CONTI Marketing Digital</p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Descubra as melhores soluções em marketing digital para transformar seu negócio. Explore nossos pacotes e serviços cuidadosamente desenvolvidos para suas necessidades.
              </p>
            </div>
            <button
              onClick={() => setActiveStep(1)}
              className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Começar Apresentação →
            </button>
          </div>
        );

      case 1:
        return (
          <div className="animate-fadeIn">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Informações Gerais</h2>
              <InformacoesGerais informacoes={proposta.informacoes_gerais} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Nossos Pacotes</h2>
            <ProposalPacotesView pacotes={proposta.pacotes} />
          </div>
        );

      case 3:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Serviços Adicionais</h2>
            <ProposalServicosAvulsosView servicos={proposta.servicos_avulsos} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Step Indicator */}
      <div className="mb-12 sticky top-0 bg-gradient-to-b from-gray-100 to-transparent pt-8 pb-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <button
                onClick={() => setActiveStep(index)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 mb-2 ${
                  index === activeStep
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-110'
                    : index < activeStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600 hover:bg-gray-400 cursor-pointer'
                }`}
              >
                {index < activeStep ? '✓' : step.icon}
              </button>

              {/* Step Label */}
              <div className="text-center hidden md:block">
                <p className={`font-semibold transition-colors ${
                  index === activeStep ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {step.titulo}
                </p>
                <p className="text-xs text-gray-500">{step.descricao}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute h-1 w-12 top-8 left-0 -translate-x-1/2 transition-all duration-300 ${
                  index < activeStep ? 'bg-green-500' : 'bg-gray-300'
                }`} style={{ marginLeft: `${16 * (index + 1) + 32}px` }} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Step Indicator */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm font-semibold text-gray-700">
            Etapa {activeStep + 1} de {steps.length}
          </p>
          <p className="text-xs text-gray-600">{steps[activeStep].titulo}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-8 sticky bottom-0 bg-gradient-to-t from-white to-transparent pt-8">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          ← Anterior
        </button>

        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
