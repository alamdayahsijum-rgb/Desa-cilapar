import { motion } from 'motion/react';
import { Mountain, Sprout, Fish, Factory, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const potentials = [
  {
    title: "Potensi Wisata",
    desc: "Desa Maju Jaya memiliki keindahan alam berupa perbukitan dan sungai yang jernih, sangat potensial untuk dikembangkan menjadi destinasi ekowisata.",
    icon: Mountain,
    color: "bg-blue-500",
    image: "https://picsum.photos/seed/tourism/800/600"
  },
  {
    title: "Potensi Pertanian",
    desc: "Lahan pertanian yang luas dan subur menghasilkan komoditas unggulan seperti padi, jagung, dan berbagai jenis sayuran organik.",
    icon: Sprout,
    color: "bg-emerald-500",
    image: "https://picsum.photos/seed/agri/800/600"
  },
  {
    title: "Potensi Perikanan",
    desc: "Budidaya ikan air tawar seperti nila, lele, dan gurame menjadi salah satu sumber ekonomi andalan warga desa.",
    icon: Fish,
    color: "bg-cyan-500",
    image: "https://picsum.photos/seed/fish/800/600"
  },
  {
    title: "Industri Rumah Tangga",
    desc: "Kreativitas warga dalam mengolah bahan baku lokal menjadi produk bernilai tambah seperti kerajinan bambu dan olahan makanan.",
    icon: Factory,
    color: "bg-amber-500",
    image: "https://picsum.photos/seed/industry/800/600"
  }
];

export default function Potensi() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Potensi Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Menjelajahi kekayaan alam dan kreativitas masyarakat yang menjadi motor penggerak kemajuan Desa Maju Jaya.
          </p>
        </div>

        <div className="space-y-24">
          {potentials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={cn("absolute -bottom-6 -right-6 w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shadow-xl", item.color)}>
                  <item.icon size={40} />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="text-accent font-bold text-xs uppercase tracking-widest">Kekayaan Desa</span>
                <h2 className="text-4xl font-bold text-primary">{item.title}</h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-sm font-bold text-primary">
                    <MapPin size={18} className="text-accent" />
                    <span>Tersedia di 3 Dusun</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-2">
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
