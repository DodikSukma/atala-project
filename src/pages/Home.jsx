import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projectsData, categories } from '../data/projects';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">

        {/* Alert Informasi Contact */}
        <div className="mb-10 bg-white border-[3px] border-comic-dark shadow-brutal p-5 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:-translate-y-1 transition-transform relative z-20 group">
          <div className="flex flex-col sm:flex-row items-center sm:text-left text-center gap-4 w-full lg:w-auto">
            <div className="w-14 h-14 bg-accent-yellow border-[3px] border-comic-dark flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
              <span className="text-2xl">📢</span>
            </div>
            <div>
              <p className="font-black text-lg text-comic-dark leading-tight uppercase tracking-tight">
                Lihat Semua Portofolio!
              </p>
              <p className="font-semibold text-sm text-comic-dark/60 mt-1">
                Silakan hubungi Developer kami untuk akses ke proyek lengkap lainnya.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
            <a href="https://instagram.com/dodik_sukma" target="_blank" rel="noreferrer" className="bg-comic-cream hover:bg-accent-yellow text-comic-dark px-5 py-3 border-[3px] border-comic-dark shadow-[4px_4px_0_0_#1a1a1a] text-sm font-black uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#1a1a1a] transition-all flex items-center justify-center">
              IG: @dodik_sukma
            </a>
            <a href="https://wa.me/6282236460396" target="_blank" rel="noreferrer" className="bg-accent-teal hover:bg-comic-dark text-white px-5 py-3 border-[3px] border-comic-dark shadow-[4px_4px_0_0_#1a1a1a] text-sm font-black uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#1a1a1a] transition-all flex items-center justify-center">
              WA: 082236460396
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-8 w-16 h-16 border-[3px] border-comic-dark/10 rotate-12 hidden lg:block" />
        <div className="absolute top-40 right-24 w-6 h-6 bg-accent-yellow border-[2px] border-comic-dark/20 rotate-45 hidden lg:block" />

        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-accent-yellow border-[2px] border-comic-dark shadow-brutal-sm flex items-center justify-center">
            <Sparkles size={16} strokeWidth={2.5} className="text-comic-dark" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-comic-dark/50">
            Koleksi Terbaru
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-comic-dark leading-[1.05] tracking-tight mb-4">
          Kumpulan Fortopholio
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Atala Project</span>
            <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-accent-yellow/60 -z-0 -skew-x-2" />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-comic-dark/60 max-w-xl font-medium leading-relaxed mb-8">
          Eksplorasi modul pembelajaran interaktif dengan tampilan modern.
          Klik salah satu kartu di bawah untuk memulai.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 text-sm font-bold uppercase tracking-wider
                  border-[3px] border-comic-dark
                  transition-all duration-200
                  ${isActive
                    ? 'bg-comic-dark text-comic-cream shadow-none translate-x-[2px] translate-y-[2px]'
                    : 'bg-white text-comic-dark shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]'
                  }
                `}
              >
                {cat === 'All' ? 'Semua' : cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[3px] flex-1 bg-comic-dark/10" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-comic-dark/30 shrink-0">
            {filtered.length} Media Tersedia
          </span>
          <div className="h-[3px] flex-1 bg-comic-dark/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-bold text-comic-dark/40 uppercase">
              Belum ada media di kategori ini.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t-[3px] border-comic-dark bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm font-bold text-comic-dark">
            EDU<span className="text-accent-blue">.MEDIA</span>
          </span>
          <span className="text-xs text-comic-dark/40 font-medium">
            © {new Date().getFullYear()} — Portfolio Media Interaktif
          </span>
        </div>
      </footer>
    </div>
  );
}
