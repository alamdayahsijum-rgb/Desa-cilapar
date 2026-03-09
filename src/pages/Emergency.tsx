import { motion } from 'motion/react';
import { 
  Phone, ShieldAlert, Heart, Truck, 
  ShieldCheck, AlertTriangle, ExternalLink, 
  MapPin, Clock, Info
} from 'lucide-react';
import { cn } from '../utils/cn';

const emergencyContacts = [
  {
    category: "Kesehatan",
    icon: Heart,
    color: "bg-red-500",
    contacts: [
      { name: "Ambulans Desa", number: "0812-3456-7890", note: "Siaga 24 Jam" },
      { name: "Bidan Desa (Ibu Siti)", number: "0812-9876-5432", note: "Persalinan & Darurat Ibu/Anak" },
      { name: "Puskesmas Kecamatan", number: "021-1234-5678", note: "Layanan Gawat Darurat" },
    ]
  },
  {
    category: "Keamanan",
    icon: ShieldCheck,
    color: "bg-blue-600",
    contacts: [
      { name: "Bhabinkamtibmas", number: "0813-1122-3344", note: "Aiptu Bambang" },
      { name: "Babinsa", number: "0813-5566-7788", note: "Serda Agus" },
      { name: "Polsek Contoh", number: "021-8765-4321", note: "Layanan Polisi" },
    ]
  },
  {
    category: "Kebencanaan",
    icon: Truck,
    color: "bg-orange-500",
    contacts: [
      { name: "Pemadam Kebakaran", number: "113 / 021-9988-7766", note: "Darurat Kebakaran" },
      { name: "BPBD Kabupaten", number: "021-5544-3322", note: "Bencana Alam" },
      { name: "SAR / Basarnas", number: "115", note: "Pencarian & Pertolongan" },
    ]
  },
  {
    category: "Layanan Umum",
    icon: Info,
    color: "bg-slate-700",
    contacts: [
      { name: "PLN (Gangguan Listrik)", number: "123", note: "Layanan Pelanggan" },
      { name: "PDAM (Gangguan Air)", number: "021-2233-4455", note: "Layanan Pelanggan" },
      { name: "Call Center Kabupaten", number: "112", note: "Layanan Darurat Terpadu" },
    ]
  }
];

export default function Emergency() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-red-600 text-white p-12 rounded-[3rem] shadow-2xl mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldAlert size={40} className="text-red-200" />
              <h1 className="text-4xl font-bold">Pusat Informasi Darurat</h1>
            </div>
            <p className="text-red-100 text-lg mb-8 leading-relaxed">
              Simpan nomor-nomor penting ini di ponsel Anda. Dalam keadaan darurat, segera hubungi nomor yang relevan untuk mendapatkan pertolongan pertama.
            </p>
            <div className="flex items-center space-x-2 text-sm font-bold bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20">
              <Clock size={16} />
              <span>LAYANAN SIAGA 24 JAM</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <ShieldAlert size={300} className="absolute -bottom-20 -right-20 text-white/5 opacity-10 rotate-12" />
        </div>

        {/* Emergency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {emergencyContacts.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className={cn("p-6 flex items-center space-x-4 text-white", group.color)}>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <group.icon size={24} />
                </div>
                <h2 className="text-xl font-bold">{group.category}</h2>
              </div>
              <div className="p-8 space-y-6">
                {group.contacts.map((contact, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between group">
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary">{contact.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{contact.note}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-lg font-bold text-primary tracking-wider group-hover:text-red-600 transition-colors">{contact.number}</p>
                      <a 
                        href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                        className="w-10 h-10 bg-slate-50 text-slate-400 hover:text-white hover:bg-red-500 rounded-xl flex items-center justify-center transition-all"
                      >
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Procedures Section */}
        <section className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center space-x-3 mb-10">
            <AlertTriangle className="text-amber-500" size={32} />
            <h2 className="text-3xl font-bold text-primary">Prosedur Keadaan Darurat</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl">1</div>
              <h4 className="font-bold text-primary text-lg">Tetap Tenang</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Jangan panik. Ambil napas dalam dan pastikan keselamatan diri Anda terlebih dahulu sebelum menolong orang lain.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl">2</div>
              <h4 className="font-bold text-primary text-lg">Hubungi Bantuan</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Segera hubungi nomor darurat yang sesuai. Berikan informasi lokasi yang jelas dan jenis keadaan darurat yang terjadi.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl">3</div>
              <h4 className="font-bold text-primary text-lg">Ikuti Instruksi</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Ikuti instruksi yang diberikan oleh petugas melalui telepon atau petugas di lapangan hingga bantuan tiba di lokasi.
              </p>
            </div>
          </div>
        </section>

        {/* Map to Hospital CTA */}
        <div className="mt-12 p-8 bg-slate-900 text-white rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Lokasi Fasilitas Kesehatan Terdekat</h3>
              <p className="text-slate-400 text-sm">Lihat rute tercepat ke Puskesmas atau Rumah Sakit.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center space-x-2">
            <span>Buka Peta</span>
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
