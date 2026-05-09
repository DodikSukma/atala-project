import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertTriangle, Home, X } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function MediaViewer() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const project = projectsData.find((p) => p.id === id);

  // 404 View
  if (!project) {
    return (
      <div className="min-h-screen bg-comic-cream flex items-center justify-center px-4">
        <div className="bg-white border-[3px] border-comic-dark shadow-brutal-lg p-8 sm:p-12 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-accent-red border-[3px] border-comic-dark shadow-brutal mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle size={32} strokeWidth={2.5} className="text-white" />
          </div>
          <h1 className="text-6xl font-extrabold text-comic-dark mb-2">404</h1>
          <p className="text-lg font-bold text-comic-dark/60 uppercase tracking-wide mb-6">
            Media Tidak Ditemukan
          </p>
          <p className="text-sm text-comic-dark/40 mb-8">
            Sepertinya URL yang kamu tuju tidak tersedia atau sudah dipindahkan.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-yellow border-[3px] border-comic-dark shadow-brutal font-bold uppercase tracking-wider text-sm text-comic-dark transition-all duration-200 hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <Home size={16} strokeWidth={2.5} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 bg-comic-cream flex flex-col items-center justify-center z-10 gap-4">
          <div className="w-12 h-12 border-[3px] border-comic-dark border-t-accent-blue spin-brutal" />
          <p className="text-sm font-bold text-comic-dark/50 uppercase tracking-wider">
            Memuat media...
          </p>
        </div>
      )}
      <iframe
        src={project.link || project.htmlPath}
        title={project.title}
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        className="w-full h-full border-none"
      />
      
      {/* Tombol Tutup Window */}
      <button 
        onClick={() => window.close()}
        className="absolute bottom-6 right-6 z-50 flex items-center gap-2 bg-accent-red hover:bg-comic-dark text-white px-5 py-3 border-[3px] border-comic-dark shadow-brutal font-black uppercase tracking-wider text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group"
      >
        <X size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform" />
        <span className="hidden sm:inline">Kembali ke Portofolio</span>
        <span className="inline sm:hidden">Tutup</span>
      </button>
    </div>
  );
}