import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitCommit, Star } from 'lucide-react';

const GITHUB_USERNAME = 'NaniToka';

export const GitHubActivity: React.FC = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  return (
    <section id="github" className="py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <span className="font-mono text-xs text-[#00E5FF] font-semibold uppercase tracking-wider block mb-1">
              Live · github.com/{GITHUB_USERNAME}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
              <Github className="w-8 h-8 text-[#00E5FF]" />
              GitHub Activity
            </h2>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-[#00E5FF] hover:bg-[#33EEFF] text-[#050505] transition-colors"
          >
            <Github className="w-3.5 h-3.5" /> View Full Profile <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Contribution Calendar with Snake */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-5 sm:p-7 relative overflow-hidden"
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-mono text-sm font-semibold text-slate-100">Contribution Graph</span>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                473 contributions · 2026
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">Live via ghchart.rshah.org</span>
          </div>

          {/* Calendar image — dark green theme */}
          <div className="relative rounded-xl overflow-hidden bg-[#050505] p-3 sm:p-4">
            {!calendarLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#050505] rounded-xl z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-[rgba(0,229,255,0.3)] border-t-[#00E5FF] rounded-full animate-spin" />
                  <span className="font-mono text-xs text-slate-500">Loading contribution graph...</span>
                </div>
              </div>
            )}
            <img
              src={`https://ghchart.rshah.org/1a7f37/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph for NaniToka"
              className="w-full h-auto"
              onLoad={() => setCalendarLoaded(true)}
            />

            {/* Snake overlay — pure CSS animated snake crawling across the grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl" aria-hidden="true">
              <div className="snake-container">
                {/* Snake body — series of dots that animate along a path */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="snake-segment"
                    style={{
                      animationDelay: `${i * 0.12}s`,
                      width: i === 0 ? '10px' : '8px',
                      height: i === 0 ? '10px' : '8px',
                      borderRadius: i === 0 ? '3px' : '50%',
                      background: i === 0
                        ? '#39d353'
                        : `rgba(57, 211, 83, ${1 - i * 0.07})`,
                      boxShadow: i === 0 ? '0 0 8px #39d353, 0 0 16px rgba(57,211,83,0.4)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="font-mono text-[10px] text-slate-500">Less</span>
            {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c, border: '1px solid rgba(255,255,255,0.06)' }} />
            ))}
            <span className="font-mono text-[10px] text-slate-500">More</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-2xl p-4 overflow-hidden flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">GitHub Stats</span>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=github_dark&bg_color=171A21&border_color=1E222B&title_color=4285F4&icon_color=34A853&text_color=9AA0A6&hide_border=false&rank_icon=github&count_private=true`}
              alt="GitHub Stats"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card rounded-2xl p-4 overflow-hidden flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 mb-1">
              <Github className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">Top Languages</span>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=github_dark&bg_color=171A21&border_color=1E222B&title_color=4285F4&text_color=9AA0A6&hide_border=false&langs_count=8`}
              alt="Top Languages"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

      </div>

      {/* Snake animation styles */}
      <style>{`
        .snake-container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-start;
        }

        .snake-segment {
          position: absolute;
          animation: snake-crawl 8s linear infinite;
        }

        @keyframes snake-crawl {
          0%   { transform: translate(0px,   28px); opacity: 0; }
          2%   { opacity: 1; }
          /* row 1 left → right */
          12%  { transform: translate(96%, 28px); }
          /* bend down */
          14%  { transform: translate(96%, 42px); }
          /* row 2 right → left */
          24%  { transform: translate(0px,  42px); }
          /* bend down */
          26%  { transform: translate(0px,  56px); }
          /* row 3 left → right */
          36%  { transform: translate(96%, 56px); }
          /* bend down */
          38%  { transform: translate(96%, 70px); }
          /* row 4 right → left */
          48%  { transform: translate(0px,  70px); }
          /* bend down */
          50%  { transform: translate(0px,  84px); }
          /* row 5 left → right */
          60%  { transform: translate(96%, 84px); }
          /* bend down */
          62%  { transform: translate(96%, 98px); }
          /* row 6 right → left */
          72%  { transform: translate(0px,  98px); }
          /* bend down */
          74%  { transform: translate(0px,  112px); }
          /* row 7 left → right */
          84%  { transform: translate(96%, 112px); }
          90%  { opacity: 1; }
          95%  { transform: translate(96%, 120px); opacity: 0; }
          100% { transform: translate(0px, 28px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
