
import React, { useState } from 'react';

// Quiz Data Constants
type DeviceType = 'PC' | 'NOTEBOOK' | 'TV' | 'MICROONDAS' | 'AUDIO' | 'OUTROS';

interface QuizData {
  device: DeviceType | null;
  brand: string;
  issue: string;
  details: string;
  name: string;
  phone: string;
}

const DEVICE_OPTIONS = [
  { id: 'PC', label: 'PC Gamer / Montagem', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5Zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z"/>
    </svg>
  )},
  { id: 'NOTEBOOK', label: 'Notebook / Laptop', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
    </svg>
  )},
  { id: 'TV', label: 'TV / Smart TV', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M6 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6zm0 1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M11 13H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"/></svg>
  )},
  { id: 'MICROONDAS', label: 'Microondas', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z"/><path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-6Zm8 1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/></svg>
  )},
  { id: 'AUDIO', label: 'Som / Áudio', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5zM7.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5zM3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/></svg>
  )},
  { id: 'OUTROS', label: 'Outros', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg>
  )}
] as const;

const BRANDS_BY_DEVICE: Record<string, string[]> = {
  PC: ['Montado/Gamer', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Outra'],
  NOTEBOOK: ['Dell', 'Acer', 'Lenovo', 'Samsung', 'HP', 'Asus', 'MacBook/Apple', 'Positivo/Multilaser'],
  TV: ['Samsung', 'LG', 'TCL', 'Philips', 'Sony', 'Panasonic', 'AOC', 'Outra'],
  MICROONDAS: ['Brastemp', 'Electrolux', 'Consul', 'Philco', 'Panasonic', 'Midea', 'Outra'],
  AUDIO: ['JBL', 'Sony', 'LG', 'Philips', 'Pioneer', 'Outra'],
  OUTROS: ['Não sei a marca', 'Outra']
};

const ISSUES_BY_DEVICE: Record<string, string[]> = {
  PC: ['Orçamento Montagem Gamer', 'Não Liga', 'Liga sem Vídeo', 'Lentidão / Travando', 'Limpeza / Formatação', 'Outro Defeito'],
  NOTEBOOK: ['Tela Quebrada', 'Não Liga', 'Bateria viciada', 'Teclado com defeito', 'Lentidão / Formatação', 'Dobradiça Quebrada', 'Outro'],
  TV: ['Tela Escura (Sem Imagem)', 'Não Liga', 'Tela Quebrada', 'Imagem Azulada', 'Liga e desliga', 'Outro defeito'],
  MICROONDAS: ['Não esquenta', 'Não liga', 'Prato não gira', 'Teclas não funcionam', 'Saiu Faísca', 'Outro defeito'],
  AUDIO: ['Não liga', 'Sem som', 'Som Chiando', 'Não carrega / Bateria', 'Botões ruins', 'Outro defeito'],
  OUTROS: ['Não funciona', 'Cabo ruim', 'Manutenção', 'Outro']
};

export const Hero: React.FC = () => {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({
    device: null,
    brand: '',
    issue: '',
    details: '',
    name: '',
    phone: ''
  });

  const progress = (step / 5) * 100;

  const handleDeviceSelect = (device: DeviceType) => {
    setQuizData(prev => ({ ...prev, device, brand: '', issue: '' }));
    setStep(2);
  };

  const handleBrandSelect = (brand: string) => {
    setQuizData(prev => ({ ...prev, brand }));
    setStep(3);
  };

  const handleIssueSelect = (issue: string) => {
    setQuizData(prev => ({ ...prev, issue }));
    setStep(4);
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quizData.name.trim() && quizData.phone.trim()) {
      setStep(5);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `*Olá BGTECH! Solicito orçamento.*
    
*Aparelho:* ${quizData.device}
*Marca:* ${quizData.brand}
*Defeito:* ${quizData.issue}
*Obs:* ${quizData.details || '-'}

*Cliente:* ${quizData.name}
*Contato:* ${quizData.phone}`;
    
    return `https://wa.me/5553999335369?text=${encodeURIComponent(text)}`;
  };

  const generateEmailLink = () => {
    const subject = "Novo orçamento - BGTECH";
    const body = `Olá BGTECH! Solicito orçamento.
    
Aparelho: ${quizData.device}
Marca: ${quizData.brand}
Defeito: ${quizData.issue}
Obs: ${quizData.details || '-'}

Cliente: ${quizData.name}
Contato: ${quizData.phone}`;
    
    return `mailto:maicongn@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 bg-gray-900 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Electronics Circuit" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-900/40"></div>
        {/* Decorative glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 text-red-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Atendendo Rio Grande - RS
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              ESPECIALISTAS EM<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">PC GAMER E NOTEBOOK</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Montagem, manutenção e reparo de <strong>Computadores, Notebooks e Eletrônicos</strong>. Selecione seu aparelho e receba um pré-orçamento agora mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm font-bold text-gray-400">
               <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-green-500" viewBox="0 0 16 16"><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
                  Garantia de Serviço
               </div>
               <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-green-500" viewBox="0 0 16 16"><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
                  Orçamento Gratuito
               </div>
               <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-green-500" viewBox="0 0 16 16"><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
                  Busca e Entrega
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: QUIZ CARD */}
          <div className="order-1 lg:order-2 w-full">
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-gray-700 md:min-h-[550px] flex flex-col relative">
               
               {/* Header Bar */}
               <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Orçamento Inteligente
                  </h3>
                  {step < 5 && (
                    <div className="text-xs font-bold text-gray-400 uppercase">Passo {step}/4</div>
                  )}
               </div>

               {/* Progress Line */}
               {step < 5 && (
                 <div className="w-full bg-gray-100 h-1 shrink-0">
                   <div className="bg-red-600 h-1 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                 </div>
               )}

               <div className="p-6 md:p-8 flex-1 flex flex-col overflow-y-auto">
                 
                 {/* STEP 1: DEVICE */}
                 {step === 1 && (
                   <div className="animate-fade-in">
                     <h4 className="text-xl font-black text-gray-900 mb-6 text-center">O que vamos consertar hoje?</h4>
                     <div className="grid grid-cols-2 gap-3 md:gap-4">
                       {DEVICE_OPTIONS.map((opt) => (
                         <button
                           key={opt.id}
                           onClick={() => handleDeviceSelect(opt.id)}
                           className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all group gap-3 touch-manipulation active:scale-95 ${
                             opt.id === 'PC' || opt.id === 'NOTEBOOK' 
                             ? 'border-red-100 bg-red-50 hover:bg-red-100 hover:border-red-400' 
                             : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                           }`}
                         >
                           <div className={`transition-colors transform group-hover:scale-110 ${
                             opt.id === 'PC' || opt.id === 'NOTEBOOK' ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'
                           }`}>
                             {opt.icon}
                           </div>
                           <span className={`font-bold text-xs md:text-sm text-center leading-tight ${
                              opt.id === 'PC' || opt.id === 'NOTEBOOK' ? 'text-red-700' : 'text-gray-700'
                           }`}>{opt.label}</span>
                         </button>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* STEP 2: BRAND */}
                 {step === 2 && quizData.device && (
                   <div className="animate-fade-in">
                     <h4 className="text-xl font-black text-gray-900 mb-6 text-center">Qual a marca do {quizData.device === 'PC' ? 'PC' : 'aparelho'}?</h4>
                     <div className="grid grid-cols-2 gap-3">
                       {BRANDS_BY_DEVICE[quizData.device].map((brand) => (
                         <button
                           key={brand}
                           onClick={() => handleBrandSelect(brand)}
                           className="p-3 border border-gray-200 rounded-lg font-bold text-sm text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all active:scale-95 touch-manipulation"
                         >
                           {brand}
                         </button>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* STEP 3: ISSUE */}
                 {step === 3 && quizData.device && (
                   <div className="animate-fade-in">
                     <h4 className="text-xl font-black text-gray-900 mb-6 text-center">Qual o defeito principal?</h4>
                     <div className="flex flex-col gap-3">
                       {ISSUES_BY_DEVICE[quizData.device].map((issue) => (
                         <button
                           key={issue}
                           onClick={() => handleIssueSelect(issue)}
                           className="p-4 border border-gray-200 rounded-lg font-semibold text-sm text-left text-gray-700 hover:border-red-500 hover:bg-red-50 transition-all flex justify-between items-center group active:scale-95 touch-manipulation"
                         >
                           {issue}
                           <span className="text-gray-300 group-hover:text-red-500">➜</span>
                         </button>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* STEP 4: DETAILS & CONTACT */}
                 {step === 4 && (
                    <form onSubmit={handleDetailsSubmit} className="animate-fade-in flex flex-col h-full">
                      <h4 className="text-xl font-black text-gray-900 mb-4 text-center">Seus dados de contato</h4>
                      <div className="space-y-3 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Seu Nome</label>
                          <input
                            type="text"
                            required
                            autoFocus
                            value={quizData.name}
                            onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-red-500 outline-none font-bold text-gray-800 placeholder-gray-300 transition-all"
                            placeholder="Ex: João Silva"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">WhatsApp / Telefone</label>
                          <input
                            type="tel"
                            required
                            value={quizData.phone}
                            onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-red-500 outline-none font-bold text-gray-800 placeholder-gray-300 transition-all"
                            placeholder="(53) 99999-9999"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Detalhes (Opcional)</label>
                          <textarea
                            value={quizData.details}
                            onChange={(e) => setQuizData({ ...quizData, details: e.target.value })}
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-red-500 outline-none h-20 resize-none text-sm text-gray-800 transition-all"
                            placeholder={quizData.device === 'PC' ? "Ex: Quero rodar GTA V, preciso de 16GB RAM..." : "Ex: O aparelho liga mas não funciona..."}
                          ></textarea>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-red-600/30 mt-auto active:scale-95"
                      >
                        Finalizar e Enviar
                      </button>
                    </form>
                 )}

                 {/* STEP 5: SUCCESS */}
                 {step === 5 && (
                   <div className="animate-fade-in text-center h-full flex flex-col justify-center items-center">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-100/50">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                      </div>
                      <h4 className="text-2xl font-black text-gray-800 mb-2">Tudo Pronto!</h4>
                      <p className="text-gray-500 text-sm mb-6">
                        Solicitação gerada. Escolha como deseja enviar para o técnico:
                      </p>
                      
                      <a 
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-green-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-3 active:scale-95"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                         </svg>
                         Enviar por WhatsApp
                      </a>

                      <a 
                        href={generateEmailLink()}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-4 active:scale-95"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        Enviar por E-mail
                      </a>

                      <button
                        onClick={() => {setStep(1); setQuizData({device: null, brand: '', issue: '', details: '', name: '', phone: ''})}}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors p-2"
                      >
                        Reiniciar Orçamento
                      </button>
                   </div>
                 )}

                 {/* Navigation Back */}
                 {step > 1 && step < 5 && (
                   <div className="mt-4 pt-4 border-t border-gray-50 shrink-0">
                     <button 
                        onClick={goBack}
                        className="text-gray-400 hover:text-gray-600 text-xs font-bold flex items-center gap-1 p-2"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
                        VOLTAR
                     </button>
                   </div>
                 )}

               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Tech Elements - Background */}
      <div className="absolute right-0 bottom-0 hidden xl:block opacity-10 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 200 200">
            <path fill="#DC2626" d="M45,-76.5C58.9,-69.8,71.2,-59.1,79.9,-46.4C88.6,-33.7,93.6,-19,92.1,-4.9C90.6,9.2,82.6,22.8,73.2,34.8C63.8,46.8,53.1,57.3,40.9,65.4C28.7,73.5,15.1,79.2,1.1,77.3C-12.9,75.4,-27.2,65.9,-40.5,57.3C-53.8,48.6,-66.1,40.8,-74.7,29.3C-83.3,17.9,-88.2,2.8,-86,-11.4C-83.7,-25.6,-74.3,-38.9,-63,-49.8C-51.7,-60.7,-38.5,-69.2,-25.2,-76.3C-11.9,-83.4,1.5,-89,15.5,-89.5C29.5,-90.1,44.2,-85.6,45,-76.5Z" transform="translate(100 100)" />
         </svg>
      </div>
    </section>
  );
};
