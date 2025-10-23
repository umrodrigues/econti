'use client';

import { useState, useEffect } from 'react';
import { Proposta } from '@/types/proposal';
import ProposalPacotesView from './ProposalPacotesView';
import ProposalServicosAvulsosView from './ProposalServicosAvulsosView';
import InformacoesGerais from './InformacoesGerais';

interface ProposalPresentationProps {
  proposta: Proposta;
}

export default function ProposalPresentation({ proposta }: ProposalPresentationProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

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

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex flex-col z-50">
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
          
          body {
            overflow: hidden;
          }
        `}</style>

        {/* Exit Fullscreen Button */}
        <button
          onClick={handleFullscreen}
          className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105"
          title="Sair da tela cheia"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Sair (ESC)
        </button>

        {/* Step Indicator */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                {/* Step Circle */}
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 mb-2 ${
                    index === activeStep
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                      : index < activeStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600 hover:bg-gray-400 cursor-pointer'
                  }`}
                >
                  {index < activeStep ? '✓' : step.icon}
                </button>

                {/* Step Label */}
                <div className="text-center">
                  <p className={`font-semibold text-sm transition-colors ${
                    index === activeStep ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {step.titulo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {renderContent()}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-6 sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent">
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

      {/* Fullscreen Button */}
      <button
        onClick={handleFullscreen}
        className="fixed top-8 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-110"
        title="Ativar modo tela cheia"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4m-4 0l5 5m11-5v4m0-4h-4m4 0l-5 5M4 20v-4m0 4h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
        Tela Cheia
      </button>

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
