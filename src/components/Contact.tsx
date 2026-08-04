import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Download, Send, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-[#05060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
                07. Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Let's Build Together
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              Actively seeking Software Engineering, Backend, and DevOps internships. Based in India — no visa sponsorship needed. Open to technical discussions, production project collaborations, and hiring inquiries.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-md bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase">Direct Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-100 font-semibold hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-md bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase">Work Eligibility</div>
                  <div className="text-slate-100 font-semibold">India-based • No Visa Needed</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium transition-colors min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-indigo-400" /> View Resume
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-medium transition-colors min-h-[44px]"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 glass-card rounded-xl p-6 sm:p-8"
          >
            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-slate-100">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400 font-mono max-w-sm mx-auto">
                  Thank you for reaching out. Toka Nani will get back to you directly via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-mono text-sm font-semibold text-slate-100 uppercase tracking-wider mb-2">
                  Send a Direct Message
                </h3>

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Hi Toka, I'd like to discuss an opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-colors shadow-md shadow-indigo-950 min-h-[44px]"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
