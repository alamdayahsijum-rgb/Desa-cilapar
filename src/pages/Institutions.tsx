import { motion } from 'motion/react';
import { Users, ShieldCheck, Heart, UserCheck, Landmark } from 'lucide-react';
import { cn } from '../utils/cn';

const institutions = [
  {
    name: "BPD (Badan Permusyawaratan Desa)",
    desc: "Lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah.",
    icon: Landmark,
    color: "bg-blue-500"
  },
  {
    name: "LPMD (Lembaga Pemberdayaan Masyarakat Desa)",
    desc: "Wadah yang dibentuk atas prakarsa masyarakat sebagai mitra pemerintah desa dalam menampung dan mewujudkan aspirasi masyarakat.",
    icon: Users,
    color: "bg-emerald-500"
  },
  {
    name: "PKK (Pemberdayaan Kesejahteraan Keluarga)",
    desc: "Gerakan pembangunan masyarakat yang tumbuh dari bawah dengan wanita sebagai penggeraknya.",
    icon: Heart,
    color: "bg-pink-500"
  },
  {
    name: "Karang Taruna",
    desc: "Organisasi sosial wadah pengembangan generasi muda yang tumbuh dan berkembang atas dasar kesadaran dan tanggung jawab sosial.",
    icon: UserCheck,
    color: "bg-orange-500"
  }
];

export default function Institutions() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Lembaga Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Mengenal berbagai lembaga kemasyarakatan yang berperan aktif dalam pembangunan dan pemberdayaan masyarakat Desa Maju Jaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {institutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-all"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg", item.color)}>
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="text-sm font-bold text-accent hover:underline">Lihat Struktur & Pengurus</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
