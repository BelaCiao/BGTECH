
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiChatWidget } from './components/TechAssistant'; // Importing the renamed/refactored component
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      
      {/* Floating Elements */}
      <AiChatWidget />

      <footer className="bg-gray-950 text-white py-12 border-t border-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-center md:text-left">
             <h3 className="font-bold text-xl mb-2">BGTECH</h3>
             <p className="text-sm text-gray-400">Eletrônica especializada em Rio Grande - RS</p>
           </div>
           
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} BGTECH Eletrônica. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
