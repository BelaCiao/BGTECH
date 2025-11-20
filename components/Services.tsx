
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'pc-gamer',
    title: 'PC Gamer & Montagem',
    description: 'Especialistas em montagem de setups, upgrades de hardware, cable management e otimização de sistema para jogos e alta performance.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'notebook',
    title: 'Manutenção de Notebooks',
    description: 'Troca de telas, teclados e baterias. Reparo avançado em placas mãe, dobradiças e formatação completa para todas as marcas.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'tv',
    title: 'TVs Smart & 4K',
    description: 'Diagnóstico preciso em TVs LED e QLED. Conserto de barramento de LED (imagem escura), fontes e placas principais.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'eletronicos',
    title: 'Microondas e Áudio',
    description: 'Manutenção em fornos microondas, caixas de som JBL, amplificadores e outros equipamentos eletrônicos domésticos.',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Foco total em <strong>Computadores de Alto Desempenho</strong> e <strong>Notebooks</strong>, além de eletrônicos em geral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Especializado
                    </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href="https://wa.me/5553999335369" 
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 text-sm font-extrabold uppercase tracking-wide hover:text-red-800 flex items-center gap-2"
                  >
                    Orçar Agora
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Banner */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">Orçamento Rápido</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">Montagem Gamer</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/></svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">Aceitamos Cartões</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
                </div>
                <span className="font-bold text-gray-800 text-lg">Garantia no Serviço</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
