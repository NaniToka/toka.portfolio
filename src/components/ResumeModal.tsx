import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, AlertTriangle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-[#0C0F17] border border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="font-mono text-sm sm:text-base font-semibold text-slate-100">
              {PERSONAL_INFO.name} — Resume (PDF)
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Open Fullscreen
            </a>
            
            <a
              href={PERSONAL_INFO.resumePath}
              download="Toka_Nani_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Embed & Mobile Fallback */}
        <div className="flex-1 w-full h-full bg-[#181B24] relative">
          <object
            data={PERSONAL_INFO.resumePath}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            <iframe
              src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
              title="Toka Nani Resume Preview"
              className="w-full h-full border-none"
            >
              {/* Fallback container for mobile clients restricting embedded PDFs */}
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#0C0F17]">
                <AlertTriangle className="w-12 h-12 text-indigo-400 mb-3" />
                <h4 className="text-lg font-semibold text-slate-100 mb-2">
                  Resume Preview Unavailable Inline
                </h4>
                <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                  Mobile browsers and restricted web clients may not render embedded PDF documents directly in the page. You can view or download the file directly below.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={PERSONAL_INFO.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> View PDF in New Tab
                  </a>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Toka_Nani_Resume.pdf"
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
  );
};
