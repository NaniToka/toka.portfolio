import React from 'react';
import { ShieldAlert, FileText } from 'lucide-react';
import { SETBACKS } from '../data/portfolioData';

export const Setbacks: React.FC = () => {
  return (
    <section id="setbacks" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-[rgba(0,229,255,0.15)] flex-1" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-[#00E5FF]" />
            Failures & Rejections
          </h2>
          <div className="h-px bg-[rgba(0,229,255,0.15)] flex-1" />
        </div>

        <div className="grid grid-cols-1 gap-8">
          {SETBACKS.map((setback) => (
            <div
              key={setback.id}
              className="bg-[#050505] border border-[rgba(0,229,255,0.15)] rounded-xl p-6 md:p-8 hover:border-[rgba(0,229,255,0.3)] transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-[#00E5FF] transition-colors mb-2">
                    {setback.title}
                  </h3>
                  <div className="font-mono text-sm text-[#00E5FF] mb-4">{setback.date}</div>
                  <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line text-sm md:text-base">
                    {setback.description}
                  </p>
                  
                  <div className="bg-[rgba(59,10,107,0.4)] rounded-lg p-5 border border-[rgba(0,229,255,0.15)]">
                    <h4 className="text-sm font-semibold text-slate-200 mb-4 uppercase tracking-wider font-mono">What's Next:</h4>
                    <ul className="space-y-3">
                      {setback.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className="text-[#00E5FF] mt-1.5">•</span>
                          <span className="text-sm leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {setback.proofUrl && (
                    <div className="mt-6">
                      <a
                        href={setback.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium rounded-md text-slate-300 bg-[rgba(59,10,107,0.4)] border border-[rgba(0,229,255,0.15)] hover:border-[rgba(0,229,255,0.4)] hover:text-[#00E5FF] transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        Show Proof
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
