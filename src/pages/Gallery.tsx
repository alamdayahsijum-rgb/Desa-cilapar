import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Video, X, Maximize2, Calendar, MapPin } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', title: 'Kerja Bakti Desa', date: '2024-03-01', location: 'Dusun Krajan', url: 'https://picsum.photos/seed/gb1/800/600' },
  { id: 2, type: 'image', title: 'Penyaluran BLT', date: '2024-02-25', location: 'Kantor Desa', url: 'https://picsum.photos/seed/gb2/800/600' },
  { id: 3, type: 'image', title: 'Lomba Desa Sehat', date: '2024-02-20', location: 'Lapangan Desa', url: 'https://picsum.photos/seed/gb3/800/600' },
  { id: 4, type: 'image', title: 'Pelatihan UMKM', date: '2024-02-15', location: 'Aula BUMDes', url: 'https://picsum.photos/seed/gb4/800/600' },
  { id: 5, type: 'image', title: 'Posyandu Balita', date: '2024-02-10', location: 'Posyandu Melati', url: 'https://picsum.photos/seed/gb5/800/600' },
  { id: 6, type: 'image', title: 'Rapat Musrenbang', date: '2024-02-05', location: 'Kantor Desa', url: 'https://picsum.photos/seed/gb6/800/600' },
  { id: 7, type: 'image', title: 'Panen Raya Padi', date: '2024-01-25', location: 'Sawah Blok A', url: 'https://picsum.photos/seed/gb7/800/600' },
  { id: 8, type: 'image', title: 'Senam Sehat Lansia', date: '2024-01-20', location: 'Halaman Kantor', url: 'https://picsum.photos/seed/gb8/800/600' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Galeri Kegiatan Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Dokumentasi visual berbagai kegiatan pembangunan, sosial, dan kemasyarakatan di Desa Maju Jaya.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-2xl shadow-sm border border-slate-100 flex">
            <button 
              onClick={() => setFilter('all')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all",
                filter === 'all' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              Semua
            </button>
            <button 
              onClick={() => setFilter('image')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center space-x-2",
                filter === 'image' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              <ImageIcon size={18} />
              <span>Foto</span>
            </button>
            <button 
              onClick={() => setFilter('video')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center space-x-2",
                filter === 'video' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              <Video size={18} />
              <span>Video</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white" size={32} />
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Video size={16} />
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">{item.title}</h3>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X size={40} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3 bg-slate-100 aspect-video lg:aspect-auto">
                    <img 
                      src={selectedItem.url} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:w-1/3 p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Dokumentasi Desa</span>
                      <h2 className="text-3xl font-bold text-primary mb-6">{selectedItem.title}</h2>
                      <div className="space-y-4 text-slate-500">
                        <div className="flex items-center space-x-3">
                          <Calendar size={20} className="text-slate-300" />
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tanggal Kegiatan</p>
                            <p className="font-semibold text-primary">{selectedItem.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin size={20} className="text-slate-300" />
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lokasi</p>
                            <p className="font-semibold text-primary">{selectedItem.location}</p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-8 text-slate-500 text-sm leading-relaxed">
                        Kegiatan ini merupakan bagian dari program kerja Pemerintah Desa Maju Jaya tahun anggaran 2024 untuk meningkatkan kesejahteraan dan partisipasi aktif seluruh warga desa.
                      </p>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                      <button className="text-primary font-bold hover:text-accent transition-colors">Bagikan</button>
                      <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-all">Download</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { cn } from '../utils/cn';
