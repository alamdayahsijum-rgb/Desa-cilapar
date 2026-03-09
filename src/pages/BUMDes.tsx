import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Store, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

export default function BUMDes() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="bg-primary text-white p-16 rounded-[3rem] shadow-2xl mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">BUMDes Maju Sejahtera</h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Mengelola potensi desa secara profesional untuk kemandirian ekonomi dan kesejahteraan seluruh warga Desa Maju Jaya.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 size={16} className="text-accent" />
                <span className="text-sm font-bold">Berbadan Hukum</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <TrendingUp size={16} className="text-accent" />
                <span className="text-sm font-bold">Profitabel</span>
              </div>
            </div>
          </div>
          <Briefcase size={300} className="absolute -bottom-20 -right-20 text-white/5 opacity-10 rotate-12" />
        </div>

        {/* Units Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold text-primary">Unit Usaha Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Unit Perdagangan", desc: "Menyediakan sarana produksi pertanian (Saprodi) dan kebutuhan pokok warga dengan harga bersaing.", icon: Store, color: "bg-blue-50 text-blue-600" },
                { title: "Unit Jasa Keuangan", desc: "Layanan simpan pinjam mikro untuk membantu permodalan usaha kecil warga desa.", icon: TrendingUp, color: "bg-emerald-50 text-emerald-600" },
                { title: "Unit Pengelolaan Wisata", desc: "Mengelola destinasi wisata lokal desa untuk meningkatkan kunjungan dan ekonomi warga.", icon: Users, color: "bg-amber-50 text-amber-600" },
                { title: "Unit Pengolahan Sampah", desc: "Layanan kebersihan dan pengolahan sampah rumah tangga menjadi pupuk organik.", icon: Briefcase, color: "bg-purple-50 text-purple-600" }
              ].map((unit, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", unit.color)}>
                    <unit.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{unit.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {unit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="font-bold text-primary mb-6 border-b border-slate-100 pb-2">Struktur Pengurus</h3>
              <div className="space-y-6">
                {[
                  { role: "Direktur", name: "H. Mulyadi" },
                  { role: "Sekretaris", name: "Dewi Sartika" },
                  { role: "Bendahara", name: "Indra Wijaya" }
                ].map((p, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.role}</p>
                      <p className="font-bold text-primary text-sm">{p.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent text-white p-8 rounded-[2.5rem] shadow-xl">
              <h3 className="font-bold mb-4">Laporan Tahunan</h3>
              <p className="text-sm text-emerald-100 mb-6">
                Lihat laporan kinerja dan keuangan BUMDes Maju Sejahtera tahun buku 2023.
              </p>
              <button className="w-full py-3 bg-white text-accent rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
                <span>Download Laporan</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
