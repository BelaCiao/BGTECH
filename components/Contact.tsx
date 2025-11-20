import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Temos laboratório próprio no centro de Rio Grande. Traga seu equipamento ou agende uma busca.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Location Map / Info */}
          <div className="lg:w-5/12 bg-gray-900 text-white p-10 relative overflow-hidden flex flex-col justify-between">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8">Onde Estamos</h2>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg text-red-500 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">Endereço</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Centro, Rio Grande<br/>Rio Grande do Sul, 96212-160</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg text-green-500 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">Contato</h4>
                        <a href="https://wa.me/5553999335369" className="text-gray-400 hover:text-white transition-colors text-sm block">(53) 99933-5369</a>
                        <a href="mailto:maicongn@hotmail.com" className="text-gray-400 hover:text-white transition-colors text-sm block">maicongn@hotmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 h-48 w-full bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer border border-gray-700 hover:border-red-600/50 transition-all">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/40 p-4 text-center backdrop-blur-[1px]">
                    <p className="text-white font-bold mb-3 text-sm tracking-wider uppercase">Ver no mapa</p>
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Centro,Rio+Grande,Rio+Grande+do+Sul,96212-160"
                        target="_blank"
                        rel="noreferrer" 
                        className="bg-white text-gray-900 px-6 py-2.5 text-sm font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
                        </svg>
                        Google Maps
                    </a>
                </div>
            </div>
          </div>

          {/* Standard Form */}
          <div className="lg:w-7/12 p-10 lg:p-14 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Direta</h3>
            <p className="text-gray-500 mb-8">Se preferir, envie um e-mail direto para nossa equipe.</p>
            
            <form action="mailto:maicongn@hotmail.com" method="post" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nome</label>
                    <input type="text" name="nome" className="w-full border border-gray-300 rounded-lg px-4 py-3.5 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="Seu nome" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                    <input type="email" name="email" className="w-full border border-gray-300 rounded-lg px-4 py-3.5 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm" placeholder="seu@email.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Mensagem</label>
                <textarea name="mensagem" rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none shadow-sm" placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                Enviar Email
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};