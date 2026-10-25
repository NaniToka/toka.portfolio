import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, ExternalLink, Sparkles, Award, Trophy, Code2, Briefcase, FileText, Download, X, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { ExperienceItem } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { VIEWPORT_ONCE, EASE_OUT } from '../lib/animation';

const getTypeIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'internship':
      return <Briefcase className="w-4 h-4 text-emerald-400" />;
    case 'ambassadorship':
      return <Sparkles className="w-4 h-4 text-[#00E5FF]" />;
    case 'virtual':
      return <Award className="w-4 h-4 text-[#00E5FF]" />;
    case 'hackathon':
      return <Trophy className="w-4 h-4 text-amber-400" />;
    default:
      return <Code2 className="w-4 h-4 text-[#00E5FF]" />;
  }
};

const getBadgeStyle = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'internship':
      return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50';
    case 'ambassadorship':
      return 'bg-[rgba(59,10,107,0.8)] text-[#00E5FF] border-[rgba(0,229,255,0.2)]';
    case 'virtual':
      return 'bg-[rgba(59,10,107,0.8)] text-[#00E5FF] border-[rgba(0,229,255,0.2)]';
    case 'hackathon':
      return 'bg-amber-950/80 text-amber-300 border-amber-800/50';
    default:
      return 'bg-slate-900 text-slate-300 border-slate-800';
  }
};

export const Experience: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<{ title: string; pdfUrl: string; offerId?: string } | null>(null);
  const reduced = useReducedMotion();
  // Ref wrapping the entire timeline for scroll-driven line draw
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

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
    <section id="experience" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
      {/* Background Soft Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(0,229,255,0.05)] blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <SectionHeading
            label="02. Engineering Path & Simulations"
            title="Experience & Virtual Engineering Simulations"
            subtitle="Chronological narrative covering corporate internships, ambassadorship, corporate job simulations, hackathon platforms, and engineering focus."
          />
        </div>

        {/* Timeline Container — scroll-driven line draw */}
        <div ref={timelineRef} className="relative space-y-8 sm:space-y-10">
          {/* Animated timeline line (replaces CSS before: pseudo-element) */}
          <div className="absolute left-3.5 lg:left-1/2 top-0 bottom-0 -translate-x-px w-0.5 overflow-hidden pointer-events-none">
            {reduced ? (
              <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF] to-transparent" />
            ) : (
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#00E5FF] via-[#3B0A6B] to-transparent origin-top"
                style={{ scaleY: lineScaleY }}
              />
            )}
          </div>
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: idx * 0.06 }}
                className={`relative flex flex-col lg:flex-row items-start ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot — left on mobile, center on lg */}
                <motion.div
                  initial={reduced ? {} : { scale: 0.8 }}
                  whileInView={reduced ? {} : { scale: [0.8, 1.15, 1] }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.4 }}
                  className="absolute left-3.5 lg:left-1/2 -translate-x-1/2 top-2 w-8 h-8 rounded-full bg-[#3B0A6B] border-2 border-[#00E5FF] flex items-center justify-center z-10 shadow-lg shadow-[rgba(0,229,255,0.25)]"
                >
                  {getTypeIcon(item.type)}
                </motion.div>

                {/* Card — full width on mobile, half on lg */}
                <div className="w-full lg:w-[calc(50%-2.25rem)] pl-12 lg:pl-0 min-w-0">
                  <TiltCard maxTilt={2} className="rounded-xl">
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
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-[#00E5FF] transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#00E5FF] font-semibold mt-0.5">
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
                      <p className="text-xs text-slate-300 leading-relaxed bg-[rgba(59,10,107,0.4)] p-3 rounded-lg border border-[rgba(0,229,255,0.15)]">
                        {item.description}
                      </p>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ambassador Structured Metrics Panel (Task 9 - Hidden when empty) */}
                    {(item.eventsRun !== undefined || item.attendeesCount !== undefined || item.workshopsCount !== undefined || item.programLink) && (
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[rgba(0,229,255,0.15)] font-mono text-xs">
                        {item.eventsRun !== undefined && (
                          <div className="p-2 bg-[rgba(59,10,107,0.5)] rounded border border-[rgba(0,229,255,0.15)] text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Events</span>
                            <span className="text-[#00E5FF] font-bold">{item.eventsRun}</span>
                          </div>
                        )}
                        {item.workshopsCount !== undefined && (
                          <div className="p-2 bg-[rgba(59,10,107,0.5)] rounded border border-[rgba(0,229,255,0.15)] text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Workshops</span>
                            <span className="text-[#00E5FF] font-bold">{item.workshopsCount}</span>
                          </div>
                        )}
                        {item.attendeesCount !== undefined && (
                          <div className="p-2 bg-[rgba(59,10,107,0.5)] rounded border border-[rgba(0,229,255,0.15)] text-center">
                            <span className="text-slate-500 text-[10px] block uppercase">Attendees</span>
                            <span className="text-[#00E5FF] font-bold">{item.attendeesCount}+</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Proof & Verification Buttons */}
                    {(item.proofUrl || item.verifyUrl) && (
                      <div className="pt-3 border-t border-[rgba(0,229,255,0.15)] flex flex-wrap items-center gap-2.5">
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
                            className="btn-hover inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-slate-100 font-mono text-xs font-medium min-h-[38px]"
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
                            className="btn-hover inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[#00E5FF] font-mono text-xs font-semibold min-h-[38px]"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                          </a>
                        )}
                      </div>
                    )}

                    </div>
                  </TiltCard>
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
            className="relative w-full max-w-5xl h-[90dvh] h-[90vh] bg-[#3B0A6B] border border-[rgba(0,229,255,0.2)] rounded-xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[rgba(59,10,107,0.9)] border-b border-[rgba(0,229,255,0.15)]">
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
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-[rgba(59,10,107,0.8)] hover:bg-[rgba(59,10,107,0.95)] text-slate-200 border border-[rgba(0,229,255,0.2)] transition-colors"
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
                  className="p-1.5 text-slate-400 hover:text-slate-100 rounded-md hover:bg-[rgba(0,229,255,0.1)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body with Embed & Mobile Fallback */}
            <div className="flex-1 w-full h-full bg-[rgba(59,10,107,0.85)] relative">
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
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#3B0A6B]">
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
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-[rgba(59,10,107,0.8)] hover:bg-[rgba(59,10,107,0.95)] text-slate-200 border border-[rgba(0,229,255,0.2)] transition-colors"
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
