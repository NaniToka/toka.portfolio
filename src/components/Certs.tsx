import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Award, CheckCircle2, ChevronDown, Download, ExternalLink, FileText, Linkedin, Minus, Plus, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type CategoryKey = 'all' | 'cloud' | 'bootcamp' | 'google' | 'hackathon' | 'simulation';

const categories: { key: CategoryKey; label: string; ids: string[] }[] = [
  { key: 'all', label: 'All credentials', ids: [] },
  { key: 'cloud', label: 'Cloud & industry', ids: ['azure-ai-developer', 'aws-saa'] },
  { key: 'bootcamp', label: 'Bootcamps', ids: ['amrita-agentic-leap-2026', 'genai-academy-apac-2026', 'iict-ai-readiness'] },
  { key: 'google', label: 'Google AI', ids: ['google-ai-essentials', 'promptwars-ch1', 'promptwars-ch3', 'build-with-ai-chennai', 'gsc-2026'] },
  { key: 'hackathon', label: 'Hackathons', ids: ['hackace-2026', 'anvil-ascent-2026'] },
  { key: 'simulation', label: 'Simulations', ids: ['jpmorgan-forage', 'walmart-forage', 'tata-iq-forage'] },
];

type SelectedCertificate = { title: string; issuer: string; pdfUrl?: string; imgUrl?: string; credentialId?: string };

export const Certs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [expanded, setExpanded] = useState<string | null>('azure-ai-developer');
  const [selected, setSelected] = useState<SelectedCertificate | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const visible = activeCategory === 'all' ? CERTIFICATIONS : CERTIFICATIONS.filter(cert => categories.find(category => category.key === activeCategory)?.ids.includes(cert.id));

  useEffect(() => {
    if (!selected) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 50);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key !== 'Tab' || !modalRef.current) return;
      const items = modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [selected]);

  const openCertificate = (cert: Certification, title = cert.title, pdfUrl = cert.certificateUrl) => {
    setSelected({ title, issuer: cert.issuer, pdfUrl, imgUrl: cert.certificateImgUrl, credentialId: cert.credentialId });
  };

  return (
    <section id="certifications" className="section section--tinted">
      <div className="shell">
        <SectionHeading label="05 / Credentials" title="Verified learning. Demonstrated commitment." subtitle="Cloud certifications, Google AI programs, hackathon recognition, and industry simulations—with source documents and verification links." />
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide" role="group" aria-label="Filter credentials">
          {categories.map(category => {
            const count = category.key === 'all' ? CERTIFICATIONS.length : category.ids.length;
            const active = activeCategory === category.key;
            return (
              <button key={category.key} onClick={() => { setActiveCategory(category.key); setExpanded(null); }} aria-pressed={active} className={`flex min-h-11 shrink-0 items-center gap-2 border px-4 text-[0.67rem] font-bold transition-colors ${active ? 'border-[var(--forest)] bg-[var(--forest)] text-[var(--on-forest)]' : 'border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
                {category.label}<span className="opacity-60">{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="border-t border-[var(--line)]">
            {visible.map(cert => {
              const isExpanded = expanded === cert.id;
              const active = cert.status?.toLowerCase().includes('active');
              return (
                <article key={cert.id} className="border-b border-[var(--line)]">
                  <button className="grid w-full gap-4 py-6 text-left sm:grid-cols-12 sm:items-center" onClick={() => setExpanded(isExpanded ? null : cert.id)} aria-expanded={isExpanded} aria-controls={`credential-${cert.id}`}>
                    <div className="sm:col-span-3">
                      <span className="text-[0.62rem] font-bold uppercase leading-5 tracking-[0.12em] text-[var(--accent)]">{cert.issuer}</span>
                      {cert.status && <span className={`mt-2 flex items-center gap-1.5 text-[0.62rem] font-semibold ${active ? 'text-[var(--success)]' : 'text-[var(--muted)]'}`}>{active ? <CheckCircle2 size={12} /> : <Award size={12} />}{cert.status}</span>}
                    </div>
                    <h3 className="font-serif text-[1.65rem] font-medium leading-[1.08] sm:col-span-7">{cert.title}</h3>
                    <div className="flex items-center justify-between gap-3 sm:col-span-2 sm:justify-end">
                      {cert.date && <span className="text-[0.62rem] font-semibold text-[var(--muted)]">{cert.date}</span>}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--accent)]">{isExpanded ? <Minus size={15} /> : <Plus size={15} />}</span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div id={`credential-${cert.id}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="grid gap-6 pb-8 sm:grid-cols-12">
                          <div className="sm:col-span-3"><span className="font-serif text-2xl italic text-[var(--accent)]"><ChevronDown size={22} /></span></div>
                          <div className="sm:col-span-9">
                            {cert.description && <p className="max-w-3xl text-sm leading-7 text-[var(--muted)]">{cert.description}</p>}
                            {cert.credentialId && <p className="break-anywhere mt-3 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">Credential ID · {cert.credentialId}</p>}
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                              {(cert.certificateUrl || cert.certificateImgUrl) && <button className="text-link" onClick={() => openCertificate(cert)}><Award size={14} /> View certificate</button>}
                              {cert.verifyUrl && <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-link"><FileText size={14} /> Verify credential</a>}
                              {cert.certificateUrl && <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-link"><ExternalLink size={14} /> Open PDF</a>}
                              {cert.linkedinUrl && <a href={cert.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={14} /> LinkedIn post</a>}
                            </div>
                            {cert.subCertifications && (
                              <div className="mt-7 border-t border-[var(--line)] pt-5">
                                <h4 className="eyebrow">Included courses · {cert.subCertifications.length}</h4>
                                <div className="mt-4 grid gap-3 md:grid-cols-2">
                                  {cert.subCertifications.map(sub => (
                                    <div key={sub.id} className="border border-[var(--line)] p-4">
                                      <p className="text-xs font-semibold leading-6">{sub.title}</p>
                                      <div className="mt-2 flex gap-4">
                                        {sub.certificateUrl && <button onClick={() => openCertificate(cert, sub.title, sub.certificateUrl)} className="text-link !text-[0.68rem]">View <ArrowUpRight size={12} /></button>}
                                        {sub.verifyUrl && <a href={sub.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-link !text-[0.68rem]">Verify <ArrowUpRight size={12} /></a>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <p className="mt-5 text-right text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Showing {visible.length} of {CERTIFICATIONS.length} credentials</p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div ref={modalRef} className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${selected.title} certificate`} onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="document-modal" onClick={event => event.stopPropagation()}>
              <div className="document-modal__header">
                <div className="min-w-0"><h3 className="truncate font-serif text-xl font-semibold">{selected.title}</h3><p className="truncate text-[0.65rem] text-[var(--muted)]">{selected.issuer}{selected.credentialId ? ` · ${selected.credentialId}` : ''}</p></div>
                <div className="flex shrink-0 items-center gap-2">
                  <a href={selected.pdfUrl || selected.imgUrl} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="Open certificate in a new tab"><ExternalLink size={16} /></a>
                  <a href={selected.pdfUrl || selected.imgUrl} download className="icon-button" aria-label="Download certificate"><Download size={16} /></a>
                  <button ref={closeButtonRef} className="icon-button" onClick={() => setSelected(null)} aria-label="Close certificate"><X size={17} /></button>
                </div>
              </div>
              <div className="document-modal__body">
                {selected.imgUrl && !selected.pdfUrl ? <div className="flex h-full items-center justify-center overflow-auto p-4"><img src={selected.imgUrl} alt={selected.title} className="max-h-full object-contain" /></div> : (
                  <>
                    <iframe src={`${selected.pdfUrl}#toolbar=1&navpanes=0`} title={`${selected.title} preview`} className="hidden h-full w-full border-0 sm:block" />
                    <div className="flex h-full flex-col items-center justify-center p-8 text-center sm:hidden"><Award size={42} className="text-[var(--accent)]" /><p className="mt-5 max-w-xs text-sm text-[var(--muted)]">Open the certificate in your browser for the best mobile viewing experience.</p><a href={selected.pdfUrl} target="_blank" rel="noopener noreferrer" className="button button--primary mt-6">Open certificate <ArrowUpRight size={15} /></a></div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
