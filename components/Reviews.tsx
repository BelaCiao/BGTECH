import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '5 Estrelas', count: 95 },
  { name: '4 Estrelas', count: 4 },
  { name: '3 Estrelas', count: 1 },
  { name: '2 Estrelas', count: 0 },
  { name: '1 Estrela', count: 0 },
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-2">O QUE DIZEM NOSSOS CLIENTES</h2>
          <div className="flex justify-center items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 font-bold text-lg">4.8/5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Reviews Grid */}
          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900">Cine Up</span>
                <span className="text-gray-500 text-sm">há 2 meses</span>
              </div>
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-600 italic">"Muito bom. Atendimento rápido e resolveram o problema do projetor."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900">Murilo Rockemback</span>
                <span className="text-gray-500 text-sm">há 5 meses</span>
              </div>
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-600 italic">"Ótimo atendimento! Profissionais corretos!"</p>
            </div>
          </div>

          {/* Chart Area */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Índice de Satisfação</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    cursor={{fill: 'transparent'}}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#DC2626' : '#9CA3AF'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
