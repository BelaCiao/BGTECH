
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all">
      {/* Top Bar Info */}
      <div className="bg-gray-900 text-white text-[10px] sm:text-xs py-2 px-4 flex justify-between items-center">
        <div className="hidden md:flex items-center gap-4">
          <span className="font-bold text-red-500 tracking-wider">ATENDIMENTO EM RIO GRANDE E REGIÃO</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">ELETRÔNICA ESPECIALIZADA</span>
        </div>
        {/* Mobile specific top bar text */}
        <div className="md:hidden font-bold text-red-500 tracking-wider">
            RIO GRANDE - RS
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <a href="https://wa.me/5553999335369" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            (53) 99933-5369
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 group" onClick={() => setIsMenuOpen(false)}>
             <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center rounded-xl text-white font-black italic text-xl md:text-2xl shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform">
               BG
             </div>
             <div className="flex flex-col">
               <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-gray-900">BGTECH</span>
               <span className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.2em] text-red-600">ELETRÔNICA</span>
             </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 uppercase tracking-wide">
            <a href="#services" className="hover:text-red-600 transition-colors relative group py-2">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="hover:text-red-600 transition-colors relative group py-2">
              Avaliações
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-red-600 transition-colors relative group py-2">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a 
              href="https://wa.me/5553999335369" 
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col bg-gray-50 rounded-xl p-4 shadow-inner space-y-2">
            <a 
              href="#services" 
              className="block px-4 py-3 text-gray-800 font-bold hover:bg-white hover:text-red-600 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVIÇOS
            </a>
            <a 
              href="#reviews" 
              className="block px-4 py-3 text-gray-800 font-bold hover:bg-white hover:text-red-600 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AVALIAÇÕES
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-3 text-gray-800 font-bold hover:bg-white hover:text-red-600 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTATO
            </a>
            <div className="pt-2 border-t border-gray-200">
                <a 
                href="https://wa.me/5553999335369" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-bold mt-2 hover:bg-green-600 active:scale-95 transition-all"
                >
                    WhatsApp
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
