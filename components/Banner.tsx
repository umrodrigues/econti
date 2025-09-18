export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gif de Fundo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/gif1.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Conteúdo do Banner */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Frase Principal */}
          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg">
              Está esperando o que para alavancar o seu negócio?
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-lg">
              CONTA COM A GENTE!
            </p>
          </div>

          {/* Botão CTA */}
          <div className="pt-8">
            <a 
              href="https://wa.me/5551997791996?text=Olá! Gostaria de saber mais sobre os serviços da &Conti."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Vamos Conversar!
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
