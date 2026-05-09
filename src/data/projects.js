const categoryColors = {
  'Company Profile': { bg: 'bg-accent-red', hex: '#ef4444', text: 'text-white' },
  'Media pembelajaran': { bg: 'bg-accent-blue', hex: '#3b82f6', text: 'text-white' },
  SAAS: { bg: 'bg-purple-500', hex: '#a855f7', text: 'text-white' },
  'AI and Automation': { bg: 'bg-accent-teal', hex: '#14b8a6', text: 'text-white' },
  'Machine Learning': { bg: 'bg-orange-500', hex: '#f97316', text: 'text-white' },
};

export const projectsData = [

  {
    id: "lumina-saas-dashboard",
    title: "Lumina: AI Content Scheduler",
    category: "SAAS",
    htmlPath: "/LUMINA-SAAS/index.html",
  },
  {
    id: "bioexplore-interaktif",
    title: "BioExplore: Sel Hewan 3D",
    category: "Media pembelajaran",
    htmlPath: "/BIO-EDU-INTERACTIVE/index.html",
  },
  {
    id: "poster-generator",
    title: "Poster Generator",
    category: "SAAS",
    htmlPath: "/poster-generator/index.html",
  },
  {
    id: "company-profile-jeep-sunrise",
    title: "Company Profile Tour Jeep Sunrise",
    category: "Company Profile",
    htmlPath: null,
    link: "https://jeepsunrisebali.com/",
  },
  {
    id: "sentiment-analysis-pemerintah",
    title: "Sistem Analisis Keluhan App Pemerintah",
    category: "Machine Learning",
    htmlPath: "/SENTIMENT-APLIKASI-PEMERINTAH/index.html",
  },
  {
    id: "sentiment-analysis-pura",
    title: "Analisis Sentimen Ulasan Wisata Pura",
    category: "Machine Learning",
    htmlPath: "/SENTIMENT-ANALISYS-PURA/index.html",
  },
  {
    id: "e-lkpd-bangun-ruang-sisi-datar",
    title: "E-LKPD Bangun Ruang Sisi Datar",
    category: "Media pembelajaran",
    htmlPath: "/LKPD-BANGUN-RUANG-SISI-DATAR/index.html",
  },
  {
    id: "e-lkpd-aljabar",
    title: "E-LKPD Aljabar",
    category: "Media pembelajaran",
    htmlPath: "/E-LKPD-ALJABAR/Aljabar-1/index.html",
  },
  {
    id: "ayo-memahami-energi",
    title: "Ayo Memahami Energi",
    category: "Media pembelajaran",
    htmlPath: "/BentukEnergi/index.html",
  },
  {
    id: "komik-rantai-makanan-subak",
    title: "Komik Digital Rantai Makanan di Subak",
    category: "Media pembelajaran",
    htmlPath: null,
    link: "https://educationmedia.online/KOMIK-DIGITAL-RANTAI-MAKANAN-SUBAK/index.html",
  },
  {
    id: "e-modul-tik",
    title: "E-Modul TIK",
    category: "Media pembelajaran",
    htmlPath: null,
    link: "https://educationmedia.online/E-MODUL-TIK/My-Modul-TIK-Microlearning%20-%20Update%20-2/index.html",
  },
  {
    id: "database-media-ms-nicel",
    title: "Belajar Basis Data",
    category: "Media pembelajaran",
    htmlPath: "/MS-NICEL-BASIS-DATA/index.html",
    link: "",
  },
  {
    id: "video-pembelajaran-bentuk-energi",
    title: "Video Pembelajaran Bentuk Energi",
    category: "Media pembelajaran",
    htmlPath: "/VIDEO-GAMES-PERUBAHAN-ZAT/index.html",
  },
  {
    id: "video-animasi-siap-selem",
    title: "Video Animasi Siap Selem",
    category: "Media pembelajaran",
    htmlPath: "/VIDEO-PEMEBELAJARAN-SIAP-SELEM/index.html",
  },
  {
    id: "harmoni-dalam-keberagaman",
    title: "Pancasila: Harmoni dalam Keberagaman",
    category: "Media pembelajaran",
    htmlPath: null,
    link: "https://educationmedia.online/PANCASILA-DAN-THK/HARMONI-KEBERAGAMAN/index.html",
  }

].map((project) => ({
  ...project,
  accent: categoryColors[project.category] || categoryColors['Media pembelajaran'],
}));

export const categories = ['All', ...Object.keys(categoryColors)];
