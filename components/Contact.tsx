
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'nome') {
      if (value.length < 3) error = 'Nome muito curto (mínimo 3 caracteres)';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = 'Digite um email válido';
    }
    if (name === 'mensagem') {
      if (value.length < 10) error = 'Mensagem muito curta (mínimo 10 caracteres)';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
      if (!(formData as any)[key]) newErrors[key] = 'Este campo é obrigatório';
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');

    // Simulate processing time for better UX then open mailto
    setTimeout(() => {
      const subject = encodeURIComponent(`Contato via Site: ${formData.nome}`);
      const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`);
      window.location.href = `mailto:maicongn@hotmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ nome: '', email: '', mensagem: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Pronto para consertar seu eletrônico? Fale conosco por WhatsApp, Email ou visite nossa loja em Rio Grande.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          {/* Contact Info & Map */}
          <div className="lg:w-5/12 bg-gray-950 text-white p-8 md:p-12 relative flex flex-col justify-between min-h-[500px]">
             {/* Decoration */}
             <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-br from-red-600 to-red-900 rounded-full opacity-30 blur-2xl"></div>
             <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-blue-900 rounded-full opacity-30 blur-2xl"></div>

            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Informações</h3>

                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 p-3.5 rounded-xl text-red-500 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">Endereço</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Centro, Rio Grande<br/>Rio Grande do Sul, 96212-160</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 p-3.5 rounded-xl text-green-500 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                        <a href="https://wa.me/5553999335369" className="text-gray-400 hover:text-white transition-colors text-sm">(53) 99933-5369</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 p-3.5 rounded-xl text-blue-400 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <a href="mailto:maicongn@hotmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">maicongn@hotmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 relative z-10">
                <div className="h-40 w-full bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer border border-gray-700 hover:border-red-600/50 transition-all">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity transform group-hover:scale-105 duration-700"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/40 p-4 text-center backdrop-blur-[1px]">
                        <p className="text-white font-bold mb-3 text-sm tracking-wider uppercase">Encontre nossa loja</p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Centro,Rio+Grande,Rio+Grande+do+Sul,96212-160"
                            target="_blank"
                            rel="noreferrer" 
                            className="bg-white text-gray-900 px-5 py-2 text-xs md:text-sm font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
                            </svg>
                            Ver no Mapa
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-7/12 p-8 md:p-12 bg-white">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Tudo Pronto!</h3>
                <p className="text-gray-600 max-w-md mb-8">
                  Seu aplicativo de e-mail padrão foi aberto com a mensagem preenchida. Basta clicar em <strong>Enviar</strong> no seu programa de e-mail para concluir.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-red-600 font-bold hover:text-red-800 underline decoration-2 underline-offset-4"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h3>
                  <p className="text-gray-500">Preencha os campos abaixo para solicitar um orçamento.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                        <input 
                          type="text" 
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`peer w-full border-2 ${errors.nome ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-red-500'} rounded-xl px-4 pt-5 pb-2 bg-gray-50 focus:bg-white outline-none transition-all placeholder-transparent`}
                          placeholder="Nome"
                        />
                        <label className={`absolute left-4 top-3.5 text-gray-400 text-xs uppercase font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-red-500 ${formData.nome ? 'top-1.5 text-xs font-bold text-red-500' : ''}`}>
                          Seu Nome
                        </label>
                        {errors.nome && <span className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                          {errors.nome}
                        </span>}
                    </div>

                    <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`peer w-full border-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-red-500'} rounded-xl px-4 pt-5 pb-2 bg-gray-50 focus:bg-white outline-none transition-all placeholder-transparent`}
                          placeholder="Email"
                        />
                        <label className={`absolute left-4 top-3.5 text-gray-400 text-xs uppercase font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-focus:top-1.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-red-500 ${formData.email ? 'top-1.5 text-xs font-bold text-red-500' : ''}`}>
                          Seu Email
                        </label>
                        {errors.email && <span className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                          {errors.email}
                        </span>}
                    </div>
                  </div>

                  <div className="relative">
                    <textarea 
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`peer w-full border-2 ${errors.mensagem ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-red-500'} rounded-xl px-4 pt-6 pb-2 bg-gray-50 focus:bg-white outline-none transition-all resize-none placeholder-transparent`}
                      placeholder="Mensagem"
                    ></textarea>
                    <label className={`absolute left-4 top-4 text-gray-400 text-xs uppercase font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-red-500 ${formData.mensagem ? 'top-2 text-xs font-bold text-red-500' : ''}`}>
                      Descreva o problema...
                    </label>
                    {errors.mensagem && <span className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                      {errors.mensagem}
                    </span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-500/30 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processando...
                      </>
                    ) : (
                      <>
                        Enviar Email Agora
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Ao enviar, seu aplicativo de e-mail padrão será aberto.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
