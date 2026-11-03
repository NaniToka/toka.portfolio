import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Download, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/site';
import { VIEWPORT_ONCE } from '../lib/animation';

interface ContactProps {
  onOpenResume: () => void;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [delivery, setDelivery] = useState<'formspree' | 'email'>('formspree');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    if (formData._gotcha) return;
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setFormState('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      setFormState('error');
      return;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Please add a little more detail to your message.');
      setFormState('error');
      return;
    }

    setFormState('submitting');
    if (!SITE_CONFIG.formspreeId) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setDelivery('email');
      setFormState('success');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${SITE_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'The message could not be sent. Please use direct email.');
      }
      setDelivery('formspree');
      setFormState('success');
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'The message could not be sent. Please use direct email.');
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="section section--forest">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div className="lg:col-span-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.6 }}>
            <span className="section-label">10 / Contact</span>
            <h2 className="mt-7 max-w-2xl font-serif text-[clamp(3.4rem,6.5vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.045em]">Let’s build something <em className="font-normal text-[#d8b18b]">useful.</em></h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--on-forest-muted)]">Open to Software Engineering, Cloud, and GenAI opportunities, technical collaborations, and thoughtful conversations about responsible AI.</p>
            <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-4"><Mail size={18} className="text-[#d8b18b]" /><div><span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--on-forest-muted)]">Direct email</span><span className="text-sm font-semibold text-[var(--on-forest)] transition-colors group-hover:text-[#d8b18b]">{PERSONAL_INFO.email}</span></div></a>
              <a href="tel:+919912832776" className="group flex items-center gap-4"><Phone size={18} className="text-[#d8b18b]" /><div><span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--on-forest-muted)]">Phone</span><span className="text-sm font-semibold text-[var(--on-forest)] transition-colors group-hover:text-[#d8b18b]">{PERSONAL_INFO.phone}</span></div></a>
              <div className="flex items-center gap-4"><MapPin size={18} className="text-[#d8b18b]" /><div><span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--on-forest-muted)]">Based in India · IST (UTC+5:30)</span><span className="text-sm font-semibold text-[var(--on-forest)]">Open to remote work & relocation worldwide</span></div></div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={onOpenResume} className="button button--light"><FileText size={16} /> View résumé</button>
              <a href={PERSONAL_INFO.resumePath} download="Toka_Nani_Resume.pdf" className="button button--light-outline"><Download size={16} /> Download PDF</a>
            </div>
          </motion.div>

          <motion.div className="panel p-6 text-[var(--ink)] sm:p-9 lg:col-span-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_ONCE} transition={{ duration: 0.6, delay: 0.1 }}>
            {formState === 'success' ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} strokeWidth={1.4} className="text-[var(--success)]" />
                <h3 className="mt-6 font-serif text-4xl font-medium">{delivery === 'email' ? 'Your email draft is ready.' : 'Thank you for reaching out.'}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">{delivery === 'email' ? 'Your email app has been opened with the message prepared. Review it and press send when ready.' : 'Your message has been sent successfully. Toka will respond as soon as possible.'}</p>
                <button className="button button--outline mt-7" onClick={() => setFormState('idle')}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <span className="eyebrow">Start a conversation</span>
                <h3 className="mt-3 font-serif text-4xl font-medium">Tell me what you’re working on.</h3>
                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">Share a role, project, or idea. Required fields are marked with an asterisk.</p>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={event => setFormData({ ...formData, _gotcha: event.target.value })} className="hidden" aria-hidden="true" />
                {formState === 'error' && <div role="alert" className="mt-5 border-l-2 border-[var(--danger)] bg-[var(--paper-subtle)] px-4 py-3 text-xs text-[var(--danger)]">{errorMessage}</div>}
                <div className="mt-7">
                  <label htmlFor="contact-name" className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Your name *</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} className="form-field" placeholder="Name or team" />
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-email" className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Email address *</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={event => setFormData({ ...formData, email: event.target.value })} className="form-field" placeholder="you@company.com" />
                </div>
                <div className="mt-5">
                  <label htmlFor="contact-message" className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Message *</label>
                  <textarea id="contact-message" name="message" required rows={4} value={formData.message} onChange={event => setFormData({ ...formData, message: event.target.value })} className="form-field resize-none" placeholder="A little about the opportunity, project, or idea…" />
                </div>
                <button type="submit" disabled={formState === 'submitting'} className="button button--primary mt-7 w-full disabled:cursor-wait disabled:opacity-60"><Send size={15} />{formState === 'submitting' ? 'Preparing message…' : 'Send message'}</button>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-link mt-5">Or write directly <ArrowUpRight size={13} /></a>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
