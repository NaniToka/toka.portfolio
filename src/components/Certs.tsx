import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certs: React.FC = () => {
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
            Official specializations, corporate engineering job simulations, and verified challenge certificates.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-xl p-6 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
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

                {cert.credentialId && (
                  <div className="font-mono text-xs text-slate-400">
                    ID: {cert.credentialId}
                  </div>
                )}

                {cert.status && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-800/40 text-indigo-300 font-mono text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </div>
                )}
              </div>

              {cert.verifyUrl ? (
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Official
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
