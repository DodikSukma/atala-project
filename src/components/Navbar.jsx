import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-comic-cream border-b-[3px] border-comic-dark">
      {/* Accent stripe */}
      <div className="h-1.5 bg-accent-yellow w-full overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap flex absolute">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="mx-3 text-[8px] font-extrabold text-comic-dark/60 tracking-widest select-none">
              ★ MEDIA INTERAKTIF
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-accent-yellow border-[3px] border-comic-dark shadow-brutal-sm flex items-center justify-center transition-all duration-200 group-hover:shadow-[1px_1px_0px_0px_rgba(26,26,26,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px]">
            <BookOpen size={18} strokeWidth={2.5} className="text-comic-dark" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-comic-dark">
            EDU<span className="text-accent-blue">.MEDIA</span>
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-comic-dark/50 tracking-wider uppercase">
          <span className="w-2 h-2 bg-accent-teal rounded-full inline-block" />
          Portfolio Interaktif
        </div>
      </div>
    </nav>
  );
}
