
import React, { useState, useRef, useEffect } from 'react';
import { getTechAdvice } from '../services/gemini';
import { ChatRole, ChatMessage } from '../types';

export const AiChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: 'Olá! Sou o assistente virtual da BGTECH. Descreva o problema do seu aparelho para um pré-diagnóstico.' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setLoading(true);

    try {
      const response = await getTechAdvice(userMsg);
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "Desculpe, tive um problema técnico. Tente novamente mais tarde." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col animate-fade-in-up" style={{height: '500px', maxHeight: '70vh'}}>
          {/* Header */}
          <div className="bg-gray-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                AI
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Assistente BGTECH</h3>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === ChatRole.USER 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none text-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite seu problema..."
              className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 outline-none text-gray-700"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors disabled:opacity-50 flex items-center justify-center w-10 h-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-8 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-transform hover:scale-110 animate-bounce-slow"
        aria-label="Abrir assistente virtual"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        ) : (
          <div className="relative">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm12.354 6.968a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L11.5 11.793l2.646-2.647z"/>
             </svg>
             <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-red-600"></span>
          </div>
        )}
      </button>
    </>
  );
};
