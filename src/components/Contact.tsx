import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Download, Send, CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/site';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam check
    if (formData._gotcha) {
      setFormState('success');
      return;
    }

    if (!validateForm()) {
      setFormState('error');
      return;
    }

    setFormState('submitting');

    try {
      const formspreeEndpoint = SITE_CONFIG.formspreeId
        ? `https://formspree.io/f/${SITE_CONFIG.formspreeId}`
        : null;

      if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (res.ok) {
          setFormState('success');
          setFormData({ name: '', email: '', message: '', _gotcha: '' });
        } else {
          const data = await res.json();
          setErrorMessage(data.error || 'Failed to submit form. Please try emailing directly.');
          setFormState('error');
        }
      } else {
        // Fallback simulated submission when Formspree ID is not configured
        await new Promise((resolve) => setTimeout(resolve, 800));
        setFormState('success');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please send an email directly to tokananiy@gmail.com');
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#05060A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
                07. Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Let's Build Together
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              Actively seeking Software Engineering, Cloud, and GenAI roles. Based in India (IST, UTC+5:30) • Open to remote & relocation. Open to technical discussions, production project collaborations, and hiring inquiries.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-md bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase">Direct Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 dark:text-slate-100 font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-md bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 uppercase">Location & Availability</div>
                  <div className="text-slate-900 dark:text-slate-100 font-semibold">Based in India (IST, UTC+5:30) • Remote & Relocation</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-mono text-xs font-medium transition-colors min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-indigo-500" /> View Resume
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Toka_Nani_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-mono text-xs font-medium transition-colors min-h-[44px]"
              >
                <Download className="w-4 h-4 text-indigo-500" /> Download PDF
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-300 dark:border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-300 dark:border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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
            {formState === 'success' ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono max-w-sm mx-auto">
                  Thank you for reaching out. Toka Nani will respond to your inquiry promptly.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 px-4 py-2 text-xs font-mono font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
                  Send a Direct Message
                </h3>

                {/* Spam Protection Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                {formState === 'error' && errorMessage && (
                  <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Hi Toka, I'd like to discuss an opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white font-mono text-xs font-semibold transition-colors shadow-md shadow-indigo-950 min-h-[44px]"
                >
                  <Send className="w-4 h-4" /> {formState === 'submitting' ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
