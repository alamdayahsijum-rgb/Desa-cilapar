import { motion } from 'motion/react';
import { 
  History, Target, Map as MapIcon, Users, 
  Mountain, Landmark, ShieldCheck, Award
} from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/village-profile/1920/1080" 
            alt="Desa Maju Jaya" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-white mb-4">Profil Desa Maju Jaya</h1>
              <p className="text-slate-200 text-lg max-w-2xl">
                Mengenal lebih dekat sejarah, visi, misi, dan potensi wilayah Desa Maju Jaya.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Sejarah */}
            <section id="sejarah" className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <History size={24} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Sejarah Desa</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  Desa Maju Jaya didirikan pada tahun 1945, tak lama setelah kemerdekaan Republik Indonesia. Awalnya wilayah ini merupakan kawasan perkebunan yang dihuni oleh sekelompok masyarakat yang memiliki semangat gotong royong yang tinggi.
                </p>
                <p>
                  Nama "Maju Jaya" dipilih oleh para tetua desa dengan harapan agar desa ini selalu melangkah maju dan mencapai kejayaan di segala bidang, baik ekonomi, sosial, maupun budaya. Seiring berjalannya waktu, desa ini berkembang menjadi pusat pertanian yang produktif di wilayah kabupaten.
                </p>
                <p>
                  Kepemimpinan desa telah berganti sebanyak 10 kali, masing-masing membawa perubahan dan kemajuan yang signifikan bagi infrastruktur dan kesejahteraan warga.
                </p>
              </div>
            </section>

            {/* Visi & Misi */}
            <section id="visi-misi" className="bg-primary text-white p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-12">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h2 className="text-3xl font-bold">Visi & Misi</h2>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-accent font-bold text-xl mb-4 uppercase tracking-widest">Visi</h3>
                    <p className="text-2xl font-medium leading-relaxed italic">
                      "Terwujudnya Desa Maju Jaya yang Mandiri, Sejahtera, dan Berbudaya melalui Tata Kelola Pemerintahan yang Transparan dan Inovatif."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-accent font-bold text-xl mb-6 uppercase tracking-widest">Misi</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Meningkatkan kualitas pelayanan publik berbasis digital.",
                        "Mendorong kemandirian ekonomi melalui UMKM dan BUMDes.",
                        "Membangun infrastruktur desa yang merata dan berkualitas.",
                        "Melestarikan nilai-nilai budaya dan kearifan lokal.",
                        "Meningkatkan kualitas SDM melalui pendidikan dan kesehatan.",
                        "Mewujudkan tata kelola keuangan desa yang transparan."
                      ].map((misi, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-slate-300">{misi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            </section>

            {/* Wilayah */}
            <section id="wilayah" className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <MapIcon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Kondisi Geografis</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-primary mb-2">Batas Wilayah</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex justify-between"><span>Utara:</span> <span className="font-semibold">Desa Makmur</span></li>
                    <li className="flex justify-between"><span>Selatan:</span> <span className="font-semibold">Kecamatan Sejahtera</span></li>
                    <li className="flex justify-between"><span>Timur:</span> <span className="font-semibold">Hutan Lindung</span></li>
                    <li className="flex justify-between"><span>Barat:</span> <span className="font-semibold">Sungai Jernih</span></li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-primary mb-2">Topografi</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Wilayah desa didominasi oleh dataran rendah yang subur dengan ketinggian rata-rata 150 mdpl. Curah hujan rata-rata 2.500 mm/tahun.
                  </p>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200">
                <img 
                  src="https://picsum.photos/seed/village-map/1200/800" 
                  alt="Peta Desa" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Sidebar */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="font-bold text-primary mb-6 border-b border-slate-100 pb-2">Data Ringkas</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Penduduk</p>
                    <p className="font-bold text-primary">3.452 Jiwa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Luas Wilayah</p>
                    <p className="font-bold text-primary">12.5 km²</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                    <Mountain size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Ketinggian</p>
                    <p className="font-bold text-primary">150 mdpl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="font-bold text-primary mb-6 border-b border-slate-100 pb-2">Prestasi Desa</h3>
              <div className="space-y-4">
                {[
                  { title: "Desa Mandiri Terbaik 2023", icon: Award, color: "text-amber-500" },
                  { title: "Juara 1 Lomba Kebersihan", icon: ShieldCheck, color: "text-emerald-500" },
                  { title: "Inovasi Digital Desa 2022", icon: Award, color: "text-blue-500" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <item.icon size={20} className={item.color} />
                    <span className="text-sm font-medium text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="bg-accent text-white p-8 rounded-[2.5rem] shadow-lg">
              <h3 className="font-bold mb-4">Butuh Informasi?</h3>
              <p className="text-sm text-emerald-100 mb-6">
                Tim admin kami siap membantu Anda memberikan informasi lebih lanjut terkait Desa Maju Jaya.
              </p>
              <button className="w-full py-3 bg-white text-accent rounded-xl font-bold hover:bg-slate-50 transition-all">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
