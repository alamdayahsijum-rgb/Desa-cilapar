import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, CheckCircle2, Clock, History, 
  Upload, Send, AlertCircle, Search,
  Briefcase, Home, Heart, UserPlus, UserMinus, 
  MapPin, CreditCard, Users
} from 'lucide-react';
import { cn } from '../utils/cn';

const letterTypes = [
  { id: 'sku', name: 'Surat Keterangan Usaha', icon: Briefcase, color: 'bg-blue-500' },
  { id: 'skd', name: 'Surat Keterangan Domisili', icon: MapPin, color: 'bg-emerald-500' },
  { id: 'spn', name: 'Surat Pengantar Nikah', icon: Heart, color: 'bg-pink-500' },
  { id: 'sktm', name: 'Surat Keterangan Tidak Mampu', icon: AlertCircle, color: 'bg-amber-500' },
  { id: 'skk', name: 'Surat Keterangan Kelahiran', icon: UserPlus, color: 'bg-indigo-500' },
  { id: 'skm', name: 'Surat Keterangan Kematian', icon: UserMinus, color: 'bg-slate-500' },
  { id: 'skp', name: 'Surat Keterangan Pindah', icon: Send, color: 'bg-cyan-500' },
  { id: 'skck', name: 'Surat Pengantar SKCK', icon: ShieldAlert, color: 'bg-purple-500' },
  { id: 'ktp', name: 'Surat Pengantar KTP', icon: CreditCard, color: 'bg-orange-500' },
  { id: 'kk', name: 'Surat Pengantar KK', icon: Users, color: 'bg-teal-500' },
];

function ShieldAlert({ size, className }: { size?: number, className?: string }) {
  return <AlertCircle size={size} className={className} />;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<'apply' | 'status' | 'history'>('apply');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedLetter(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Layanan Mandiri Masyarakat</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ajukan permohonan surat keterangan dan pantau statusnya secara online tanpa harus datang ke kantor desa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-2xl shadow-sm border border-slate-100 flex">
            <button 
              onClick={() => setActiveTab('apply')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center space-x-2",
                activeTab === 'apply' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              <FileText size={18} />
              <span>Buat Permohonan</span>
            </button>
            <button 
              onClick={() => setActiveTab('status')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center space-x-2",
                activeTab === 'status' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              <Clock size={18} />
              <span>Cek Status</span>
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center space-x-2",
                activeTab === 'history' ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-primary"
              )}
            >
              <History size={18} />
              <span>Riwayat</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'apply' && (
            <div className="space-y-8">
              {!selectedLetter ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {letterTypes.map((letter) => (
                    <motion.button
                      key={letter.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedLetter(letter.id)}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex items-center space-x-4 group"
                    >
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0", letter.color)}>
                        <letter.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{letter.name}</h3>
                        <p className="text-xs text-slate-400 mt-1">Estimasi: 1-2 Hari Kerja</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  <div className="bg-primary p-8 text-white flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold">Formulir Permohonan</h2>
                      <p className="text-slate-400 text-sm mt-1">
                        {letterTypes.find(l => l.id === selectedLetter)?.name}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSelectedLetter(null)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Batal
                    </button>
                  </div>

                  {isSuccess ? (
                    <div className="p-16 text-center">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Permohonan Terkirim!</h3>
                      <p className="text-slate-500">
                        Nomor resi Anda: <span className="font-mono font-bold text-primary">REG-2024-0042</span>
                      </p>
                      <p className="text-slate-500 mt-4">
                        Kami akan segera memproses permohonan Anda. Silakan cek status secara berkala.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary border-b border-slate-100 pb-2">Data Pemohon</h4>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">NIK (Sesuai KTP)</label>
                            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="16 digit NIK" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Nama sesuai KTP" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Nomor WhatsApp</label>
                            <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="0812..." required />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-bold text-primary border-b border-slate-100 pb-2">Dokumen Pendukung</h4>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Upload KTP (Foto/PDF)</label>
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-accent transition-colors cursor-pointer bg-slate-50">
                              <Upload className="mx-auto text-slate-400 mb-2" />
                              <p className="text-xs text-slate-500">Klik atau seret file ke sini</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Upload Kartu Keluarga</label>
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-accent transition-colors cursor-pointer bg-slate-50">
                              <Upload className="mx-auto text-slate-400 mb-2" />
                              <p className="text-xs text-slate-500">Maksimal 2MB (JPG, PNG, PDF)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Keperluan / Keterangan Tambahan</label>
                        <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all h-32" placeholder="Jelaskan tujuan pembuatan surat ini..."></textarea>
                      </div>

                      <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl text-blue-700 text-sm">
                        <AlertCircle size={20} className="shrink-0" />
                        <p>Pastikan data yang Anda masukkan sudah benar. Pemalsuan data dapat dikenakan sanksi hukum.</p>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={cn(
                          "w-full py-4 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/20 transition-all flex items-center justify-center space-x-2",
                          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-emerald-600"
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Mengirim...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Kirim Permohonan</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'status' && (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <div className="max-w-md mx-auto text-center space-y-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Search size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Lacak Permohonan</h2>
                  <p className="text-slate-500 mt-2">Masukkan nomor registrasi untuk melihat status surat Anda.</p>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all text-center font-mono text-lg font-bold tracking-widest" 
                    placeholder="REG-XXXX-XXXX" 
                  />
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">
                  Cek Sekarang
                </button>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary">Riwayat Permohonan</h2>
                <span className="text-sm text-slate-500">Menampilkan 3 data terakhir</span>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { id: 'REG-2024-0038', type: 'SKU', date: '2024-02-28', status: 'Selesai', color: 'text-emerald-600 bg-emerald-50' },
                  { id: 'REG-2024-0035', type: 'SKTM', date: '2024-02-25', status: 'Ditolak', color: 'text-red-600 bg-red-50' },
                  { id: 'REG-2024-0031', type: 'Domisili', date: '2024-02-20', status: 'Selesai', color: 'text-emerald-600 bg-emerald-50' },
                ].map((item) => (
                  <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.type}</h4>
                        <p className="text-xs text-slate-400">{item.id} • {item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", item.color)}>
                        {item.status}
                      </span>
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-slate-50 text-center">
                <button className="text-sm font-bold text-primary hover:underline">Lihat Semua Riwayat</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ size, className }: { size?: number, className?: string }) {
  return <Send size={size} className={className} style={{ transform: 'rotate(45deg)' }} />;
}
