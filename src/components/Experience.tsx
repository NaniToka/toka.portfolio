import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, ExternalLink, Sparkles, Award, Trophy, Code2, Briefcase, FileText, Download, X, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { ExperienceItem } from '../types/portfolio';

const getTypeIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'internship':
      return <Briefcase className="w-4 h-4 text-emerald-400" />;
    case 'ambassadorship':
      return <Sparkles className="w-4 h-4 text-indigo-400" />;
    case 'virtual':
      return <Award className="w-4 h-4 text-indigo-400" />;
    case 'hackathon':
      return <Trophy className="w-4 h-4 text-amber-400" />;
    default:
      return <Code2 className="w-4 h-4 text-indigo-400" />;
  }
};

const getBadgeStyle = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'internship':
      return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50';
    case 'ambassadorship':
      return 'bg-indigo-950/80 text-indigo-300 border-indigo-800/50';
    case 'virtual':
      return 'bg-blue-950/80 text-blue-300 border-blue-800/50';
    case 'hackathon':
      return 'bg-amber-950/80 text-amber-300 border-amber-800/50';
    default:
      return 'bg-slate-900 text-slate-300 border-slate-800';
  }
};

export const Experience: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<{ title: string; pdfUrl: string; offerId?: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProof) {
        setSelectedProof(null);
      }
    };
    if (selectedProof) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProof]);

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Soft Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            02. Engineering Path & Simulations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experience & Virtual Engineering Simulations
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Chronological narrative covering corporate internships, ambassadorship, corporate job simulations, hackathon platforms, and engineering focus.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-10 before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/60 before:via-indigo-500/20 before:to-slate-800">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 top-2 w-8 h-8 rounded-full bg-[#07080D] border-2 border-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-950/60">
                  {getTypeIcon(item.type)}
                </div>

                {/* Card Container */}
                <div className="w-full sm:w-[calc(50%-2.25rem)] pl-10 sm:pl-0">
                  <div className="glass-card card-hover rounded-xl p-6 space-y-4 relative overflow-hidden group">
                    
                    {/* Top Badge & Duration */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold border uppercase tracking-wider ${getBadgeStyle(item.type)}`}>
                        {item.badgeLabel || item.organization}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-indigo-400 font-semibold mt-0.5">
                        <span>{item.organization}</span>
                        <span className="text-slate-500 font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" /> {item.location}
                        </span>
                      </div>
                      {item.offerId && (
                        <div className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                          <ShieldCheck className="w-3 h-3" /> Offer ID: {item.offerId}
                        </div>
                      )}
                    </div>

                    {/* Summary Description */}
                    {item.description && (
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                        {item.description}
                      </p>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ambassador Structured Metrics Panel (Task 9 - Hidden when empty) */}
                    {(item.eventsRun !== undefined || item.attendeesCount !== undefined || item.workshopsCount !== undefined || item.programLink) && (
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 font-mono text-xs">
                        {item.eventsRun !== undefined && (
                          <div className="p-2 bg-slate-950/60 rounded border border-slate-800 text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Events</span>
                            <span className="text-indigo-400 font-bold">{item.eventsRun}</span>
                          </div>
                        )}
                        {item.workshopsCount !== undefined && (
                          <div className="p-2 bg-slate-950/60 rounded border border-slate-800 text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Workshops</span>
                            <span className="text-indigo-400 font-bold">{item.workshopsCount}</span>
                          </div>
                        )}
                        {item.attendeesCount !== undefined && (
                          <div className="p-2 bg-slate-950/60 rounded border border-slate-800 text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Attendees</span>
                            <span className="text-indigo-400 font-bold">{item.attendeesCount}+</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Proof & Verification Buttons */}
                    {(item.proofUrl || item.verifyUrl) && (
                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
                        {item.proofUrl && (
                          <button
                            onClick={() => setSelectedProof({
                              title: `${item.role} Offer Letter — ${item.organization}`,
                              pdfUrl: item.proofUrl!,
                              offerId: item.offerId
                            })}
                            className="btn-hover inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-800/60 text-emerald-300 font-mono text-xs font-semibold min-h-[38px] transition-all"
                          >
                            <FileText className="w-3.5 h-3.5" /> View Proof (Offer Letter)
                          </button>
                        )}
                        {item.proofUrl && (
                          <a
                            href={item.proofUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hover inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs font-medium min-h-[38px]"
                            title="Open PDF directly in new window"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> PDF
                          </a>
                        )}
                        {item.verifyUrl && (
                          <a
                            href={item.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hover inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-indigo-400 font-mono text-xs font-semibold min-h-[38px]"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                          </a>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Proof Modal Viewer Overlay */}
      {selectedProof && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProof(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-[#0C0F17] border border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-semibold text-slate-100">
                    {selectedProof.title}
                  </h3>
                  {selectedProof.offerId && (
                    <span className="font-mono text-xs text-emerald-400 block">
                      Offer ID: {selectedProof.offerId} • Digitally Signed Document
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedProof.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Fullscreen
                </a>
                
                <a
                  href={selectedProof.pdfUrl}
                  download="Bluestock_Fintech_Offer_Letter.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>

                <button
                  onClick={() => setSelectedProof(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body with Embed & Mobile Fallback */}
            <div className="flex-1 w-full h-full bg-[#181B24] relative">
              <object
                data={selectedProof.pdfUrl}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                <iframe
                  src={`${selectedProof.pdfUrl}#toolbar=1&navpanes=0`}
                  title="Proof Document Preview"
                  className="w-full h-full border-none"
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#0C0F17]">
                    <FileText className="w-12 h-12 text-emerald-400 mb-3" />
                    <h4 className="text-lg font-semibold text-slate-100 mb-2">
                      Proof Document Preview
                    </h4>
                    <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                      You can view or download the offer letter PDF directly below.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={selectedProof.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> View PDF in New Tab
                      </a>
                      <a
                        href={selectedProof.pdfUrl}
                        download="Bluestock_Fintech_Offer_Letter.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download PDF Directly
                      </a>
                    </div>
                  </div>
                </iframe>
              </object>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

