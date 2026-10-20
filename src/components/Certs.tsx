import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, FileText, CheckCircle, Clock, ExternalLink,
  Download, X, Linkedin, Cloud, Cpu, Zap, Trophy, Briefcase
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types/portfolio';

/* ─── Category definitions ─────────────────────────────────── */
type CategoryKey = 'all' | 'cloud' | 'bootcamp' | 'google' | 'hackathon' | 'simulation';

interface Category {
  key: CategoryKey;
  label: string;
  Icon: React.FC<{ className?: string }>;
  accent: string;         // tailwind text colour
  border: string;         // tailwind border colour
  bg: string;             // tailwind bg colour (pill)
  ids: string[];
}

const CATEGORIES: Category[] = [
  {
    key: 'all',
    label: 'All',
    Icon: Award,
    accent: 'text-slate-300',
    border: 'border-slate-700',
    bg: 'bg-slate-800',
    ids: [],
  },
  {
    key: 'cloud',
    label: 'Cloud & Industry',
    Icon: Cloud,
    accent: 'text-sky-400',
    border: 'border-sky-800/60',
    bg: 'bg-sky-950/70',
    ids: ['azure-ai-developer', 'aws-saa'],
  },
  {
    key: 'bootcamp',
    label: 'Bootcamps',
    Icon: Cpu,
    accent: 'text-violet-400',
    border: 'border-violet-800/60',
    bg: 'bg-violet-950/70',
    ids: ['amrita-agentic-leap-2026', 'genai-academy-apac-2026', 'iict-ai-readiness'],
  },
  {
    key: 'google',
    label: 'Google AI',
    Icon: Zap,
    accent: 'text-blue-400',
    border: 'border-blue-800/60',
    bg: 'bg-blue-950/70',
    ids: ['google-ai-essentials', 'promptwars-ch1', 'promptwars-ch3', 'build-with-ai-chennai', 'gsc-2026'],
  },
  {
    key: 'hackathon',
    label: 'Hackathons',
    Icon: Trophy,
    accent: 'text-amber-400',
    border: 'border-amber-800/60',
    bg: 'bg-amber-950/70',
    ids: ['hackace-2026', 'anvil-ascent-2026'],
  },
  {
    key: 'simulation',
    label: 'Simulations',
    Icon: Briefcase,
    accent: 'text-emerald-400',
    border: 'border-emerald-800/60',
    bg: 'bg-emerald-950/70',
    ids: ['jpmorgan-forage', 'walmart-forage', 'tata-iq-forage'],
  },
];

function getCategoryFor(id: string): Category {
  return CATEGORIES.find(c => c.ids.includes(id)) ?? CATEGORIES[0];
}

/* ─── Component ─────────────────────────────────────────────── */
export const Certs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('all');
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    pdfUrl?: string;
    imgUrl?: string;
    credentialId?: string;
    issuer: string;
  } | null>(null);
  const [expandedSubs, setExpandedSubs] = useState<string | null>(null);

  /* lock scroll when modal open */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedCert(null); };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [selectedCert]);

  const visible: Certification[] =
    activeTab === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter(c => CATEGORIES.find(cat => cat.key === activeTab)?.ids.includes(c.id));

  return (
    <section id="certifications" className="py-12 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-10">
          <span className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider block mb-1">
            05. Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Cloud certifications, bootcamp completions, Google AI programs, hackathon recognitions, and industry simulations.
          </p>
        </div>

        {/* ── Category Tabs — horizontally scrollable on mobile ── */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORIES.map(cat => {
            const active = activeTab === cat.key;
            const count = cat.key === 'all' ? CERTIFICATIONS.length : cat.ids.length;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border transition-all whitespace-nowrap min-h-[36px] ${
                  active
                    ? `${cat.bg} ${cat.border} ${cat.accent}`
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                }`}
              >
                <cat.Icon className="w-3.5 h-3.5" />
                {cat.label}
                <span className={`ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  active ? 'bg-white/10' : 'bg-slate-800'
                }`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* ── Certificate List ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {visible.map((cert, idx) => {
              const cat = getCategoryFor(cert.id);
              const isCertified = cert.status?.toLowerCase().includes('active') || cert.status?.toLowerCase().includes('certified');
              const isExpanded = expandedSubs === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className={`relative flex gap-0 rounded-xl overflow-hidden border border-slate-800/70 bg-[#0e1120] hover:border-slate-700 transition-all group`}
                >
                  {/* Left accent bar */}
                  <div className={`w-1 shrink-0 ${cat.bg} opacity-80`} />

                  <div className="flex-1 px-5 py-4">
                    {/* Top row: issuer + category pill + status */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${cat.accent}`}>
                        {cert.issuer}
                      </span>
                      {/* category chip */}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${cat.bg} ${cat.border} ${cat.accent} opacity-80`}>
                        <cat.Icon className="w-2.5 h-2.5" />
                        {cat.label}
                      </span>
                      {/* status pill */}
                      {cert.status && (
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                          isCertified
                            ? 'bg-emerald-950/80 border-emerald-800/40 text-emerald-300'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400'
                        }`}>
                          {isCertified ? <CheckCircle className="w-2.5 h-2.5" /> : <Clock className="w-2.5 h-2.5" />}
                          {cert.status}
                        </span>
                      )}
                      {/* date */}
                      {cert.date && (
                        <span className="font-mono text-[10px] text-slate-500 ml-auto">{cert.date}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-100 leading-snug mb-1">
                      {cert.title}
                    </h3>

                    {/* Description — truncated, no full paragraph dump */}
                    {cert.description && (
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-2">
                        {cert.description}
                      </p>
                    )}

                    {/* Credential ID — break long IDs */}
                    {cert.credentialId && (
                      <div className="font-mono text-[10px] text-slate-500 mb-3 break-all">
                        ID: {cert.credentialId}
                      </div>
                    )}

                    {/* Action row */}
                    <div className="flex flex-wrap items-center gap-2">
                      {(cert.certificateUrl || cert.certificateImgUrl) && (
                        <button
                          onClick={() => setSelectedCert({
                            title: cert.title,
                            pdfUrl: cert.certificateUrl,
                            imgUrl: cert.certificateImgUrl,
                            credentialId: cert.credentialId,
                            issuer: cert.issuer,
                          })}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-all ${cat.bg} ${cat.border} ${cat.accent} hover:opacity-90`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          View
                        </button>
                      )}
                      {cert.certificateUrl && (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all"
                          title="Open PDF in new tab"
                        >
                          <ExternalLink className="w-3 h-3" /> PDF
                        </a>
                      )}
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-800 transition-all"
                        >
                          <FileText className="w-3 h-3" /> Verify
                        </a>
                      )}
                      {cert.linkedinUrl && (
                        <a
                          href={cert.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#4d9fda] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all"
                        >
                          <Linkedin className="w-3 h-3" /> Post
                        </a>
                      )}
                      {!cert.certificateUrl && !cert.verifyUrl && !cert.linkedinUrl && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                          <CheckCircle className="w-3 h-3" /> Verified Official
                        </span>
                      )}

                      {/* Sub-certs toggle */}
                      {cert.subCertifications && cert.subCertifications.length > 0 && (
                        <button
                          onClick={() => setExpandedSubs(isExpanded ? null : cert.id)}
                          className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all"
                        >
                          {isExpanded ? '↑ Hide' : `↓ ${cert.subCertifications.length} courses`}
                        </button>
                      )}
                    </div>

                    {/* Sub-certifications expandable */}
                    <AnimatePresence>
                      {isExpanded && cert.subCertifications && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-slate-800 flex flex-col gap-1.5">
                            {cert.subCertifications.map(sub => (
                              <div
                                key={sub.id}
                                className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60"
                              >
                                <span className="text-xs text-slate-300 font-medium">{sub.title}</span>
                                <div className="flex gap-1.5 shrink-0">
                                  {sub.certificateUrl && (
                                    <button
                                      onClick={() => setSelectedCert({ title: sub.title, pdfUrl: sub.certificateUrl!, issuer: cert.title })}
                                      className="p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded transition-colors"
                                      title="View Certificate"
                                    >
                                      <Award className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  {sub.verifyUrl && (
                                    <a
                                      href={sub.verifyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
                                      title="Verify"
                                    >
                                      <FileText className="w-3.5 h-3.5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* cert count */}
        <p className="mt-6 font-mono text-xs text-slate-600 text-right">
          {visible.length} of {CERTIFICATIONS.length} credentials
        </p>
      </div>

      {/* ── PDF Modal ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-16 pb-4 px-3 sm:px-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[calc(100dvh-5rem)] h-[calc(100vh-5rem)] bg-[#171A21] border border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2.5 min-w-0">
                <Award className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-mono text-sm font-semibold text-slate-100 truncate">
                    {selectedCert.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-400 block truncate">
                    {selectedCert.issuer}{selectedCert.credentialId ? ` · ID: ${selectedCert.credentialId}` : ''}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <a
                  href={selectedCert.pdfUrl ?? selectedCert.imgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Fullscreen
                </a>
                <a
                  href={selectedCert.pdfUrl ?? selectedCert.imgUrl}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-100 rounded-md hover:bg-slate-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body — image or iframe for PDF */}
            <div className="flex-1 bg-[#1E222B] relative flex flex-col overflow-hidden">

              {/* Image certificate (jpg/png/webp) */}
              {selectedCert.imgUrl && !selectedCert.pdfUrl && (
                <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
                  <img
                    src={selectedCert.imgUrl}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}

              {/* PDF — desktop iframe */}
              {selectedCert.pdfUrl && (
                <>
                  <iframe
                    src={`${selectedCert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title="Certificate Preview"
                    className="hidden sm:block w-full h-full border-none"
                  />
                  {/* Mobile: action buttons */}
                  <div className="flex sm:hidden flex-col items-center justify-center h-full gap-5 p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center">
                      <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 mb-1">{selectedCert.title}</h4>
                      <p className="text-xs text-slate-400">{selectedCert.issuer}</p>
                      {selectedCert.credentialId && (
                        <p className="font-mono text-[10px] text-slate-500 mt-1">ID: {selectedCert.credentialId}</p>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 max-w-xs">
                      PDF preview isn't supported on mobile. Open or download directly.
                    </p>
                    <div className="flex flex-col w-full max-w-xs gap-3">
                      <a href={selectedCert.pdfUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-mono font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors">
                        <ExternalLink className="w-4 h-4" /> Open PDF in Browser
                      </a>
                      <a href={selectedCert.pdfUrl} download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.pdf`}
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-mono font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
