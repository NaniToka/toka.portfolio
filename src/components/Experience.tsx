import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { VIEWPORT_ONCE } from '../lib/animation';

export const Experience: React.FC = () => (
  <section id="experience" className="section section--tinted">
    <div className="shell">
      <SectionHeading label="03 / Experience" title="Experience shaped by building." subtitle="A chronological view of engineering, data analytics, leadership, and the independent work behind the deployed portfolio." />
      <div className="border-t border-[var(--line)]">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <motion.article
            key={item.id}
            className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-12 md:py-12"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <div className="md:col-span-3">
              <span className="eyebrow">{item.period}</span>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--muted)]"><MapPin size={13} /> {item.location}</p>
              <span className="tag mt-5">{item.badgeLabel || item.type}</span>
            </div>
            <div className="md:col-span-9 lg:pl-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-serif text-[clamp(2rem,3.3vw,3rem)] font-medium leading-[1.03] tracking-[-0.025em]">{item.role}</h3>
                  <p className="mt-2 text-sm font-bold text-[var(--accent)]">{item.organization}</p>
                </div>
                {(item.proofUrl || item.verifyUrl) && (
                  <a href={item.proofUrl || item.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-link shrink-0">{item.proofUrl ? 'View offer letter' : 'Verify experience'} <ArrowUpRight size={14} /></a>
                )}
              </div>
              {item.offerId && <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Offer ID · {item.offerId}</p>}
              {item.description && <p className="mt-5 max-w-4xl text-sm leading-7 text-[var(--ink-soft)]">{item.description}</p>}
              <ul className="mt-5 grid gap-3 lg:grid-cols-2">
                {item.bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-3 text-xs leading-6 text-[var(--muted)]"><Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" /> <span>{bullet}</span></li>
                ))}
              </ul>
              {(item.eventsRun !== undefined || item.attendeesCount !== undefined || item.workshopsCount !== undefined) && (
                <div className="mt-6 flex flex-wrap gap-6 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)]">
                  {item.eventsRun !== undefined && <span><strong className="mr-2 font-serif text-2xl text-[var(--ink)]">{item.eventsRun}</strong> Events</span>}
                  {item.workshopsCount !== undefined && <span><strong className="mr-2 font-serif text-2xl text-[var(--ink)]">{item.workshopsCount}</strong> Workshops</span>}
                  {item.attendeesCount !== undefined && <span><strong className="mr-2 font-serif text-2xl text-[var(--ink)]">{item.attendeesCount}+</strong> Attendees</span>}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
