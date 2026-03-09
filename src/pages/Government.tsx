import { motion } from 'motion/react';
import { 
  Users, UserCheck, Briefcase, Award, 
  ChevronRight, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter
} from 'lucide-react';
import { villageOfficials } from '../data/mockData';

const structureData = [
  {
    role: "Kepala Desa",
    name: "H. Ahmad Subarjo",
    desc: "Memimpin penyelenggaraan pemerintahan desa berdasarkan kebijakan yang ditetapkan bersama BPD.",
    image: "https://i.pravatar.cc/150?u=subarjo"
  },
  {
    role: "Sekretaris Desa",
    name: "Siti Aminah",
    desc: "Memimpin sekretariat desa dan mengoordinasikan tugas-tugas perangkat desa.",
    image: "https://i.pravatar.cc/150?u=aminah"
  },
  {
    role: "Kaur Keuangan",
    name: "Budi Santoso",
    desc: "Melaksanakan urusan keuangan seperti pengurusan administrasi keuangan, sumber pendapatan, dan pengeluaran.",
    image: "https://i.pravatar.cc/150?u=budi"
  },
  {
    role: "Kaur Perencanaan",
    name: "Lani Wijaya",
    desc: "Melaksanakan urusan perencanaan seperti menyusun rencana anggaran pendapatan dan belanja desa.",
    image: "https://i.pravatar.cc/150?u=lani"
  },
  {
    role: "Kasi Pemerintahan",
    name: "Dedi Kurniawan",
    desc: "Melaksanakan manajemen tata praja pemerintahan, menyusun rancangan regulasi desa.",
    image: "https://i.pravatar.cc/150?u=dedi"
  },
  {
    role: "Kasi Kesejahteraan",
    name: "Maya Sari",
    desc: "Melaksanakan pembangunan sarana prasarana perdesaan, pembangunan bidang pendidikan, kesehatan.",
    image: "https://i.pravatar.cc/150?u=maya"
  }
];

export default function Government() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Pemerintah Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Struktur organisasi dan profil perangkat Desa Maju Jaya yang bertugas melayani masyarakat.
          </p>
        </div>

        {/* Organizational Chart Section */}
        <section className="mb-24">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
            <h2 className="text-2xl font-bold text-primary mb-12 text-center">Struktur Organisasi</h2>
            
            {/* Visual Tree (Simplified) */}
            <div className="flex flex-col items-center space-y-12">
              {/* Kepala Desa */}
              <div className="relative">
                <div className="bg-primary text-white p-6 rounded-2xl shadow-xl text-center w-64 relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Kepala Desa</p>
                  <p className="font-bold text-lg">H. Ahmad Subarjo</p>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-slate-200"></div>
              </div>

              {/* Sekretaris */}
              <div className="relative">
                <div className="bg-white border-2 border-primary p-5 rounded-2xl shadow-lg text-center w-56 relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Sekretaris Desa</p>
                  <p className="font-bold text-primary">Siti Aminah</p>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-12 bg-slate-200"></div>
                <div className="absolute top-1/2 left-full w-12 h-px bg-slate-200"></div>
                <div className="absolute top-1/2 right-full w-12 h-px bg-slate-200"></div>
              </div>

              {/* Lower Level */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {[
                  { role: "Kaur Keuangan", name: "Budi Santoso" },
                  { role: "Kaur Perencanaan", name: "Lani Wijaya" },
                  { role: "Kaur Umum", name: "Rina Marlina" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.role}</p>
                    <p className="font-bold text-primary text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Profiles */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-primary mb-12">Profil Perangkat Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {structureData.map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center lg:items-start gap-8 hover:shadow-md transition-all group"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow text-center lg:text-left">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1 block">{person.role}</span>
                  <h3 className="text-xl font-bold text-primary mb-3">{person.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {person.desc}
                  </p>
                  <div className="flex justify-center lg:justify-start space-x-3">
                    <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <Facebook size={16} />
                    </button>
                    <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <Instagram size={16} />
                    </button>
                    <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                      <Mail size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision CTA */}
        <div className="bg-primary text-white p-12 rounded-[3rem] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Membangun Bersama Masyarakat</h2>
            <p className="text-slate-400">
              Pemerintah Desa Maju Jaya berkomitmen untuk selalu hadir di tengah masyarakat, mendengarkan aspirasi, dan bekerja nyata demi kemajuan desa.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/layanan" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-emerald-600 transition-all">
              Layanan Online
            </Link>
            <Link to="/aduan" className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all">
              Aduan Warga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
