import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle, Clock, ExternalLink, Download, X } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certs: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; pdfUrl: string; credentialId?: string; issuer: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
            05. Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Official specializations, government & industry AI readiness credentials, corporate engineering simulations, and verified challenge certificates.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card card-hover rounded-xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-indigo-400 font-semibold uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                  <Award className="w-5 h-5 text-indigo-400 shrink-0" />
                </div>

                <h3 className="text-base font-bold text-slate-100 leading-snug">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {cert.credentialId && (
                  <div className="font-mono text-xs text-slate-400">
                    ID: {cert.credentialId}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {cert.status && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-800/40 text-indigo-300 font-mono text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{cert.status}</span>
                    </div>
                  )}

                  {cert.date && (
                    <span className="font-mono text-[11px] text-slate-400">
                      Dated: {cert.date}
                    </span>
                  )}
                </div>
              </div>

              {(cert.verifyUrl || cert.certificateUrl) ? (
                <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap gap-2.5">
                  {cert.certificateUrl && (
                    <button
                      onClick={() => setSelectedCert({
                        title: cert.title,
                        pdfUrl: cert.certificateUrl!,
                        credentialId: cert.credentialId,
                        issuer: cert.issuer
                      })}
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold rounded-md text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 hover:bg-indigo-900/60 hover:text-indigo-200 transition-all min-h-[38px]"
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-mono font-medium rounded-md text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all min-h-[38px]"
                      title="Open PDF directly in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> PDF
                    </a>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-md text-slate-300 bg-[#1a1d2d] border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 transition-all min-h-[38px]"
                    >
                      <FileText className="w-4 h-4" />
                      Verify Link
                    </a>
                  )}
                </div>
              ) : (
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Official
                  </span>
                </div>
              )}

              {cert.subCertifications && cert.subCertifications.length > 0 && (
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Courses Completed</h4>
                  <div className="flex flex-col gap-2">
                    {cert.subCertifications.map(sub => (
                      <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-[#1a1d2d]/50 border border-slate-800/50 gap-2">
                        <span className="text-sm text-slate-300 font-medium">{sub.title}</span>
                        <div className="flex gap-2">
                          {sub.certificateUrl && (
                            <button
                              onClick={() => setSelectedCert({
                                title: sub.title,
                                pdfUrl: sub.certificateUrl!,
                                issuer: cert.title
                              })}
                              className="p-1.5 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded transition-colors"
                              title="View Certificate"
                            >
                              <Award className="w-4 h-4" />
                            </button>
                          )}
                          {sub.verifyUrl && (
                            <a href={sub.verifyUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded transition-colors" title="Show Proof">
                              <FileText className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-[#0C0F17] border border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="font-mono text-sm sm:text-base font-semibold text-slate-100">
                    {selectedCert.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-400 block">
                    {selectedCert.issuer} {selectedCert.credentialId ? `• ID: ${selectedCert.credentialId}` : ''}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open Fullscreen
                </a>
                
                <a
                  href={selectedCert.pdfUrl}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.pdf`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
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
                data={selectedCert.pdfUrl}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                <iframe
                  src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                  title="Certificate Preview"
                  className="w-full h-full border-none"
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#0C0F17]">
                    <Award className="w-12 h-12 text-indigo-400 mb-3" />
                    <h4 className="text-lg font-semibold text-slate-100 mb-2">
                      Certificate Document Preview
                    </h4>
                    <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                      You can view or download the certificate PDF directly below.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> View PDF in New Tab
                      </a>
                      <a
                        href={selectedCert.pdfUrl}
                        download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.pdf`}
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

