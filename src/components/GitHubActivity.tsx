import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitCommit, Star, Play, Grid } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GITHUB_USERNAME = 'NaniToka';

export const GitHubActivity: React.FC = () => {
  const { theme } = useTheme();
  const [activeView, setActiveView] = useState<'snake' | 'grid'>('snake');
  const [snakeLoaded, setSnakeLoaded] = useState(false);
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [snakeFallback, setSnakeFallback] = useState(false);

  const localSnakeSrc = theme === 'light' ? '/github-snake.svg' : '/github-snake-dark.svg';
  const remoteSnakeSrc = theme === 'light'
    ? `https://raw.githubusercontent.com/${GITHUB_USERNAME}/toka.portfolio/output/github-snake.svg`
    : `https://raw.githubusercontent.com/${GITHUB_USERNAME}/toka.portfolio/output/github-snake-dark.svg`;

  const currentSnakeUrl = snakeFallback ? remoteSnakeSrc : localSnakeSrc;
  const calendarGridUrl = `https://ghchart.rshah.org/1a7f37/${GITHUB_USERNAME}`;

  return (
    <section id="github" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
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
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-[#00E5FF] hover:bg-[#33EEFF] text-[#050505] transition-colors focus-visible:outline-[#00E5FF]"
          >
            <Github className="w-3.5 h-3.5" /> View Full Profile <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Contribution Showcase with Real Snake and Grid View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-5 sm:p-7 relative overflow-hidden"
        >
          {/* Header row with Mode Selector */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-mono text-sm font-semibold text-slate-100">Contribution Activity</span>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                473 contributions · 2026
              </span>
            </div>

            {/* View Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[rgba(5,5,5,0.7)] border border-[rgba(0,229,255,0.15)]">
              <button
                type="button"
                onClick={() => setActiveView('snake')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold transition-all ${
                  activeView === 'snake'
                    ? 'bg-[#00E5FF] text-[#050505] shadow-sm'
                    : 'text-[rgba(255,255,255,0.65)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                }`}
                aria-pressed={activeView === 'snake'}
              >
                <Play className="w-3 h-3" />
                <span>Snake Animation</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-xs font-semibold transition-all ${
                  activeView === 'grid'
                    ? 'bg-[#00E5FF] text-[#050505] shadow-sm'
                    : 'text-[rgba(255,255,255,0.65)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                }`}
                aria-pressed={activeView === 'grid'}
              >
                <Grid className="w-3 h-3" />
                <span>Heatmap Grid</span>
              </button>
            </div>
          </div>

          {/* Active Canvas / Image Container */}
          <div className="relative rounded-xl overflow-hidden bg-[#050505] p-3 sm:p-4 min-h-[160px] flex items-center justify-center border border-[rgba(0,229,255,0.1)]">
            
            {activeView === 'snake' ? (
              <div className="w-full relative">
                {!snakeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#050505] rounded-xl z-10 py-12">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-[rgba(0,229,255,0.3)] border-t-[#00E5FF] rounded-full animate-spin" />
                      <span className="font-mono text-xs text-slate-400">Loading contribution snake...</span>
                    </div>
                  </div>
                )}
                <img
                  src={currentSnakeUrl}
                  alt={`GitHub Contribution Grid Snake animation for ${GITHUB_USERNAME}`}
                  className="w-full h-auto rounded-lg mx-auto block"
                  onLoad={() => setSnakeLoaded(true)}
                  onError={() => {
                    if (!snakeFallback) {
                      setSnakeFallback(true);
                    } else {
                      // If both local and remote snake SVGs fail, automatically switch to grid
                      setActiveView('grid');
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-full relative">
                {!calendarLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#050505] rounded-xl z-10 py-12">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-[rgba(0,229,255,0.3)] border-t-[#00E5FF] rounded-full animate-spin" />
                      <span className="font-mono text-xs text-slate-400">Loading contribution graph...</span>
                    </div>
                  </div>
                )}
                <img
                  src={calendarGridUrl}
                  alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
                  className="w-full h-auto rounded-lg mx-auto block"
                  onLoad={() => setCalendarLoaded(true)}
                />
              </div>
            )}
          </div>

          {/* Subtitle / Legend Row */}
          <div className="flex items-center justify-between flex-wrap gap-2 mt-3 text-slate-500 font-mono text-[10px]">
            <span>
              {activeView === 'snake'
                ? 'Automated contribution snake generated via Platane/snk'
                : 'Live contribution heatmap via GitHub API'}
            </span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {['#161b22', '#3B0A6B', '#5E17A8', '#00B8D4', '#00E5FF'].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c, border: '1px solid rgba(255,255,255,0.06)' }} />
              ))}
              <span>More</span>
            </div>
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
    </section>
  );
};
