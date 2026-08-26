import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SETBACKS } from '../data/portfolioData';

export const Setbacks: React.FC = () => {
  return (
    <section id="setbacks" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-slate-800 flex-1" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-indigo-400" />
            Failures & Rejections
          </h2>
          <div className="h-px bg-slate-800 flex-1" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {SETBACKS.map((setback) => (
            <div
              key={setback.id}
              className="bg-[#0f111a] border border-slate-800 rounded-xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2">
                    {setback.title}
                  </h3>
                  <div className="font-mono text-sm text-indigo-400 mb-4">{setback.date}</div>
                  <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line text-sm md:text-base">
                    {setback.description}
                  </p>
                  
                  <div className="bg-[#1a1d2d] rounded-lg p-5 border border-slate-800/50">
                    <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider font-mono">What's Next:</h4>
                    <ul className="space-y-3">
                      {setback.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className="text-indigo-400 mt-1.5">•</span>
                          <span className="text-sm leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
