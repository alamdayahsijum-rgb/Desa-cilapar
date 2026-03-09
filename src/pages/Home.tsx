import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Users, UserCheck, Home as HomeIcon, Map as MapIcon, 
  ArrowRight, Calendar, Bell, Image as ImageIcon,
  TrendingUp, Activity, ShieldAlert
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { newsData, statistics, villageOfficials, agendaData, budgetData } from '../data/mockData';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title
);

export default function Home() {
  const pieData = {
    labels: budgetData.categories.map(c => c.name),
    datasets: [
      {
        data: budgetData.categories.map(c => c.amount),
        backgroundColor: [
          '#0f172a',
          '#10b981',
          '#3b82f6',
          '#f59e0b',
          '#ef4444',
        ],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ['Pendapatan', 'Belanja'],
    datasets: [
      {
        label: 'Anggaran (Rp)',
        data: [budgetData.income, budgetData.expense],
        backgroundColor: ['#10b981', '#ef4444'],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/village-hero/1920/1080" 
            alt="Village Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-accent text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Selamat Datang di Portal Resmi
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Membangun Desa <br />
              <span className="text-accent">Maju & Mandiri</span>
            </h1>
            <p className="text-lg text-slate-200 mb-10 leading-relaxed max-w-xl">
              Pusat informasi dan layanan digital Pemerintah Desa Maju Jaya. Wujudkan tata kelola desa yang transparan, akuntabel, dan melayani.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/layanan" className="px-8 py-4 bg-accent hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-accent/20 flex items-center space-x-2">
                <span>Layanan Online</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/profil" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold transition-all">
                Jelajahi Desa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{statistics.population}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Penduduk</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <HomeIcon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{statistics.households}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Kepala Keluarga</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                <MapIcon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{statistics.area}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Luas Wilayah</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">IDM</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Mandiri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Berita & Pengumuman</h2>
              <p className="text-slate-500">Informasi terbaru seputar kegiatan dan kebijakan desa.</p>
            </div>
            <Link to="/berita" className="text-accent font-bold flex items-center space-x-1 hover:underline">
              <span>Lihat Semua</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <motion.div 
                key={news.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-xs mb-3 space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link to={`/berita/${news.id}`} className="text-sm font-bold text-primary flex items-center space-x-1 group-hover:translate-x-2 transition-transform">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Government */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Pemerintah Desa</h2>
            <p className="text-slate-500">Pelayan masyarakat yang berdedikasi untuk kemajuan Desa Maju Jaya.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {villageOfficials.map((official, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-accent transition-colors duration-300">
                    <img 
                      src={official.image} 
                      alt={official.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary">{official.name}</h3>
                <p className="text-sm text-slate-500 font-medium">{official.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Budget */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Transparansi Dana Desa</span>
              <h2 className="text-4xl font-bold mb-6">Anggaran Pendapatan & Belanja Desa (APBDes)</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Wujud komitmen kami dalam keterbukaan informasi publik. Seluruh anggaran dikelola secara profesional untuk kepentingan pembangunan dan kesejahteraan warga.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Total Pendapatan</span>
                    <span className="text-lg font-bold text-emerald-400">Rp 1.500.000.000</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Total Belanja</span>
                    <span className="text-lg font-bold text-red-400">Rp 1.450.000.000</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full w-[96%]"></div>
                  </div>
                </div>
              </div>

              <Link to="/transparansi" className="mt-10 inline-flex items-center space-x-2 text-accent font-bold hover:translate-x-2 transition-transform">
                <span>Detail Transparansi</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-primary font-bold text-center mb-8">Proporsi Belanja Desa 2024</h3>
              <div className="h-80 flex items-center justify-center">
                <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Agenda */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary">Peta Wilayah Desa</h2>
                <Link to="/peta" className="text-sm font-bold text-accent">Buka Peta Digital</Link>
              </div>
              <div className="h-[450px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <MapContainer center={[-6.2088, 106.8456]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[-6.2088, 106.8456]}>
                    <Popup>
                      Kantor Desa Maju Jaya
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Agenda */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary">Agenda Desa</h2>
                <Link to="/agenda" className="text-sm font-bold text-accent">Lihat Kalender</Link>
              </div>
              <div className="space-y-4">
                {agendaData.map((item, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent transition-colors group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm shrink-0">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Mar</span>
                        <span className="text-lg font-bold text-primary leading-none">{item.date.split('-')[2]}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                        <div className="flex flex-col space-y-1 text-xs text-slate-500">
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{item.date} • {item.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapIcon size={12} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contacts Card */}
              <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldAlert className="text-red-500" />
                  <h3 className="font-bold text-red-900">Kontak Darurat</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-700">Ambulans Desa</span>
                    <span className="font-bold text-red-900">0812-3456-7890</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-700">Bidan Desa</span>
                    <span className="font-bold text-red-900">0812-9876-5432</span>
                  </div>
                </div>
                <Link to="/darurat" className="mt-4 block text-center py-2 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors">
                  Lihat Semua Kontak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Galeri Kegiatan</h2>
            <p className="text-slate-500">Dokumentasi momen-momen kebersamaan warga Desa Maju Jaya.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/gallery-${i}/600/600`} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/galeri" className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-xl font-bold hover:bg-slate-100 transition-all inline-block">
              Lihat Seluruh Galeri
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
