import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, Send, Upload, ShieldCheck, 
  AlertCircle, CheckCircle2, Info, User, 
  Phone, Mail, FileText
} from 'lucide-react';
import { cn } from '../utils/cn';

export default function Complaints() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Layanan Aduan Masyarakat</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Sampaikan aspirasi, keluhan, atau saran Anda demi kemajuan Desa Maju Jaya. Kami menjamin kerahasiaan identitas pelapor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Info size={24} className="text-accent" />
                <span>Alur Pengaduan</span>
              </h3>
              <div className="space-y-8 relative">
                {[
                  { title: "Kirim Laporan", desc: "Isi formulir pengaduan dengan data yang valid dan lampirkan bukti pendukung." },
                  { title: "Verifikasi", desc: "Tim admin desa akan memverifikasi laporan Anda dalam waktu maksimal 2x24 jam." },
                  { title: "Tindak Lanjut", desc: "Laporan akan diteruskan ke bidang terkait untuk segera ditindaklanjuti." },
                  { title: "Selesai", desc: "Anda akan menerima notifikasi hasil tindak lanjut melalui WhatsApp/Email." }
                ].map((step, idx) => (
                  <div key={idx} className="flex space-x-4 relative z-10">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0 font-bold text-accent border border-white/20">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
                {/* Connector Line */}
                <div className="absolute top-4 left-4 w-px h-[calc(100%-32px)] bg-white/10 -z-0"></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center space-x-3 mb-6">
                <ShieldCheck className="text-emerald-500" size={24} />
                <h3 className="font-bold text-primary">Kerahasiaan Terjamin</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Sesuai dengan kebijakan privasi kami, identitas pelapor akan dijaga kerahasiaannya dan tidak akan dipublikasikan tanpa persetujuan pelapor.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-16 rounded-[3rem] shadow-xl border border-slate-100 text-center"
              >
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Laporan Berhasil Dikirim!</h2>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                  Terima kasih atas partisipasi Anda. Nomor tiket aduan Anda adalah <span className="font-mono font-bold text-primary">ADU-2024-0089</span>. Simpan nomor ini untuk melacak status laporan Anda.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Kirim Aduan Lain
                </button>
              </motion.div>
            ) : (
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-primary mb-8">Formulir Pengaduan</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Identity Section */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Identitas Pelapor</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                          <User size={14} className="text-slate-400" />
                          <span>Nama Lengkap</span>
                        </label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Nama sesuai KTP" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                          <Phone size={14} className="text-slate-400" />
                          <span>Nomor WhatsApp</span>
                        </label>
                        <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="0812..." required />
                      </div>
                    </div>
                  </div>

                  {/* Report Section */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Detail Laporan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Kategori Aduan</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all">
                          <option>Infrastruktur & Jalan</option>
                          <option>Layanan Administrasi</option>
                          <option>Keamanan & Ketertiban</option>
                          <option>Kesehatan & Kebersihan</option>
                          <option>Sosial & Bantuan</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Lokasi Kejadian</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Nama dusun/jalan/RT/RW" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Isi Laporan / Keluhan</label>
                      <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all h-40" placeholder="Jelaskan secara detail laporan Anda..." required></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Lampiran Bukti (Foto)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-accent transition-colors cursor-pointer bg-slate-50">
                        <Upload className="mx-auto text-slate-400 mb-2" size={32} />
                        <p className="text-sm text-slate-500 font-medium">Klik untuk upload foto bukti</p>
                        <p className="text-[10px] text-slate-400 mt-1">Maksimal 3 file, format JPG/PNG (Max 5MB)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-2xl text-amber-700 text-sm border border-amber-100">
                    <AlertCircle size={20} className="shrink-0" />
                    <p>Laporan yang bersifat fitnah atau mengandung unsur SARA tidak akan diproses.</p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-800"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim Laporan...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Kirim Laporan Sekarang</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
