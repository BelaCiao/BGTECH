
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Electronics Circuit" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Atendendo Rio Grande - RS e Região
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight drop-shadow-2xl">
            REPARO DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">ELETRÔNICOS</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Assistência técnica especializada em <strong>TVs, Áudio e Microondas</strong>. 
            Diagnóstico preciso e serviço com garantia. Recupere seu equipamento com quem entende.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5553999335369"
              target="_blank" 
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/30 flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a 
              href="#services" 
              className="bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Tech Elements */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0000" d="M42.7,-72.4C55.3,-66.1,65.5,-55.7,73.8,-43.6C82.1,-31.5,88.5,-17.7,87.4,-4.4C86.3,8.9,77.7,21.8,68.4,33.2C59.1,44.6,49.1,54.5,37.8,61.3C26.5,68.1,13.9,71.8,0.6,70.8C-12.7,69.8,-24.8,64.1,-36.6,57.6C-48.4,51.1,-59.9,43.8,-68.8,33.3C-77.7,22.8,-84,9.1,-82.3,-3.8C-80.6,-16.7,-70.9,-28.8,-60.9,-38.9C-50.9,-49,-40.6,-57.1,-29.3,-64.2C-18,-71.3,-5.7,-77.4,4.8,-85.7L15.3,-94.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};
