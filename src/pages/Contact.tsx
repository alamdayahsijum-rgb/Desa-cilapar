import { motion } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, 
  Send, MessageSquare, ShieldAlert, 
  Facebook, Instagram, Youtube, Twitter
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Hubungi Kami</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Kami siap melayani Anda. Silakan hubungi kami melalui kanal komunikasi resmi di bawah ini atau kunjungi kantor desa kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Alamat Kantor</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Jl. Raya Desa No. 123, Kecamatan Contoh, Kabupaten Contoh, Provinsi Contoh 12345
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Telepon & Email</h3>
              <div className="space-y-2 text-sm text-slate-500">
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-primary">Telp:</span>
                  <span>(021) 1234-5678</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-primary">Email:</span>
                  <span>desa-maju@kabupaten.go.id</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-primary mb-2">Jam Pelayanan</h3>
              <div className="space-y-2 text-sm text-slate-500">
                <p className="flex justify-between">
                  <span>Senin - Kamis:</span>
                  <span className="font-semibold text-primary">08:00 - 15:30</span>
                </p>
                <p className="flex justify-between">
                  <span>Jumat:</span>
                  <span className="font-semibold text-primary">08:00 - 11:30</span>
                </p>
                <p className="flex justify-between text-red-500">
                  <span>Sabtu - Minggu:</span>
                  <span className="font-bold">Tutup</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-8">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Masukkan nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Alamat Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="email@contoh.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subjek</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all">
                    <option>Informasi Umum</option>
                    <option>Layanan Administrasi</option>
                    <option>Kritik & Saran</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Pesan Anda</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all h-40" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="mt-24">
          <div className="flex items-center space-x-3 mb-8">
            <ShieldAlert className="text-red-500" size={32} />
            <h2 className="text-3xl font-bold text-primary">Kontak Darurat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ambulans Desa', number: '0812-3456-7890', color: 'bg-red-500' },
              { name: 'Bidan Desa', number: '0812-9876-5432', color: 'bg-emerald-500' },
              { name: 'Polsek Terdekat', number: '021-1234-5678', color: 'bg-blue-500' },
              { name: 'Pemadam Kebakaran', number: '021-8765-4321', color: 'bg-orange-500' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-red-200 transition-colors">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4", item.color)}>
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-primary mb-1">{item.name}</h4>
                <p className="text-lg font-bold text-red-600 tracking-wider">{item.number}</p>
                <button className="mt-4 text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Hubungi Sekarang</button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">Ikuti Media Sosial Kami</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
              <Instagram size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all">
              <Youtube size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from '../utils/cn';
