'use client';

export default function MiniBanners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Portfolio Banner */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            {/* Elementos animados */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/40 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/50 rounded-full animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 h-48 flex items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-white">Portfólio</h3>
            </div>
          </div>

          {/* Cases Banner */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
            {/* Elementos animados */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute top-6 left-6 w-14 h-14 bg-white/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/30 rounded-full animate-bounce"></div>
              <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/50 rounded-full animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 h-48 flex items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-white">Cases</h3>
            </div>
          </div>

          {/* Serviços Banner */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900"></div>
            {/* Elementos animados */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute top-8 left-8 w-12 h-12 bg-white/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/30 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/50 rounded-full animate-ping"></div>
            </div>
            <div className="relative z-10 p-8 h-48 flex items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-white">Serviços</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
