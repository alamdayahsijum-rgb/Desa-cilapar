import { motion } from 'motion/react';
import { 
  ShoppingBag, Store, Phone, MapPin, 
  ExternalLink, Star, Tag, Filter,
  Search, ArrowRight, Briefcase, TrendingUp
} from 'lucide-react';
import { cn } from '../utils/cn';

const umkmData = [
  {
    id: 1,
    name: "Kopi Luwak Desa",
    category: "Makanan & Minuman",
    owner: "Pak Slamet",
    desc: "Kopi luwak asli dari perkebunan desa dengan proses tradisional.",
    image: "https://picsum.photos/seed/coffee/600/400",
    rating: 4.8,
    price: "Rp 50.000 - Rp 250.000"
  },
  {
    id: 2,
    name: "Batik Tulis Maju",
    category: "Fashion",
    owner: "Ibu Ratna",
    desc: "Batik tulis dengan motif khas desa yang elegan dan berkualitas.",
    image: "https://picsum.photos/seed/batik/600/400",
    rating: 4.9,
    price: "Rp 150.000 - Rp 1.500.000"
  },
  {
    id: 3,
    name: "Kerajinan Bambu Jaya",
    category: "Kerajinan",
    owner: "Mas Budi",
    desc: "Berbagai macam perabotan rumah tangga dari bambu pilihan.",
    image: "https://picsum.photos/seed/bamboo/600/400",
    rating: 4.7,
    price: "Rp 25.000 - Rp 500.000"
  },
  {
    id: 4,
    name: "Madu Hutan Asli",
    category: "Kesehatan",
    owner: "Pak Jono",
    desc: "Madu murni dari hutan sekitar desa tanpa bahan pengawet.",
    image: "https://picsum.photos/seed/honey/600/400",
    rating: 5.0,
    price: "Rp 80.000 - Rp 200.000"
  }
];

export default function UMKM() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Ekonomi Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Mendukung pertumbuhan ekonomi lokal melalui pemberdayaan UMKM dan pengelolaan BUMDes yang profesional.
          </p>
        </div>

        {/* BUMDes Section */}
        <section className="mb-24">
          <div className="bg-primary text-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Badan Usaha Milik Desa</span>
              <h2 className="text-4xl font-bold mb-6">BUMDes Maju Sejahtera</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Unit usaha desa yang mengelola potensi lokal untuk meningkatkan pendapatan asli desa (PADes) dan kesejahteraan masyarakat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Store size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unit Perdagangan</h4>
                    <p className="text-xs text-slate-500">Distribusi sarana produksi pertanian.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingUp size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Unit Jasa Keuangan</h4>
                    <p className="text-xs text-slate-500">Simpan pinjam untuk modal usaha warga.</p>
                  </div>
                </div>
              </div>

              <Link to="/bumdes" className="inline-flex items-center space-x-2 text-accent font-bold hover:translate-x-2 transition-transform">
                <span>Selengkapnya tentang BUMDes</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/bumdes/1200/800" 
                alt="BUMDes Activity" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent lg:block hidden"></div>
            </div>
          </div>
        </section>

        {/* UMKM Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Lapak UMKM Desa</h2>
              <p className="text-slate-500">Produk-produk unggulan karya warga Desa Maju Jaya.</p>
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari produk..." 
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all text-sm"
                />
              </div>
              <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors">
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {umkmData.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center space-x-1 shadow-sm">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="text-[10px] font-bold text-primary">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">{item.category}</span>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">{item.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Mulai dari</p>
                      <p className="text-sm font-bold text-primary">{item.price.split(' - ')[0]}</p>
                    </div>
                    <button className="w-10 h-10 bg-slate-50 text-slate-400 hover:text-white hover:bg-accent rounded-xl flex items-center justify-center transition-all">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-xl font-bold hover:bg-slate-100 transition-all">
              Tampilkan Lebih Banyak
            </button>
          </div>
        </section>

        {/* Promotion CTA */}
        <div className="mt-24 p-12 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center shrink-0">
            <Tag size={40} />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Daftarkan Usaha Anda!</h3>
            <p className="text-emerald-700">
              Warga Desa Maju Jaya yang memiliki usaha dapat mendaftarkan produknya di portal ini secara gratis untuk meningkatkan jangkauan pasar.
            </p>
          </div>
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all whitespace-nowrap">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
