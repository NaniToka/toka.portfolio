import React, { useEffect, useRef } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="resume-title" onClick={onClose}>
      <div className="document-modal" onClick={event => event.stopPropagation()}>
        <div className="document-modal__header">
          <div className="flex min-w-0 items-center gap-3"><FileText size={20} className="shrink-0 text-[var(--accent)]" /><div className="min-w-0"><h2 id="resume-title" className="truncate font-serif text-xl font-semibold">{PERSONAL_INFO.name} · Résumé</h2><p className="text-[0.65rem] text-[var(--muted)]">Cloud & Generative AI Engineer</p></div></div>
          <div className="flex shrink-0 items-center gap-2">
            <a href={PERSONAL_INFO.resumePath} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="Open résumé in a new tab"><ExternalLink size={16} /></a>
            <a href={PERSONAL_INFO.resumePath} download="Toka_Nani_Resume.pdf" className="icon-button" aria-label="Download résumé"><Download size={16} /></a>
            <button ref={closeRef} onClick={onClose} className="icon-button" aria-label="Close résumé"><X size={17} /></button>
          </div>
        </div>
        <div className="document-modal__body">
          <iframe src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`} title="Toka Nani résumé preview" className="hidden h-full w-full border-0 sm:block" />
          <div className="flex h-full flex-col items-center justify-center p-8 text-center sm:hidden">
            <FileText size={44} className="text-[var(--accent)]" />
            <h3 className="mt-5 font-serif text-3xl font-medium">Your next chapter starts here.</h3>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">Open or download the PDF for the best mobile reading experience.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3"><a href={PERSONAL_INFO.resumePath} target="_blank" rel="noopener noreferrer" className="button button--primary">Open résumé <ExternalLink size={15} /></a><a href={PERSONAL_INFO.resumePath} download="Toka_Nani_Resume.pdf" className="button button--outline">Download <Download size={15} /></a></div>
          </div>
        </div>
      </div>
    </div>
  );
};
