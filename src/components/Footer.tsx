import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Village Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-2xl">
                D
              </div>
              <div>
                <h2 className="text-xl font-bold leading-tight">DESA MAJU JAYA</h2>
                <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Pemerintah Kabupaten Contoh</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Portal resmi Pemerintah Desa Maju Jaya sebagai sarana informasi, transparansi, dan pelayanan publik digital bagi seluruh masyarakat desa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Tautan Cepat</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/profil" className="hover:text-white transition-colors flex items-center space-x-2"><span>Profil Desa</span></Link></li>
              <li><Link to="/pemerintah" className="hover:text-white transition-colors flex items-center space-x-2"><span>Pemerintah Desa</span></Link></li>
              <li><Link to="/layanan" className="hover:text-white transition-colors flex items-center space-x-2"><span>Layanan Online</span></Link></li>
              <li><Link to="/transparansi" className="hover:text-white transition-colors flex items-center space-x-2"><span>Transparansi Anggaran</span></Link></li>
              <li><Link to="/data" className="hover:text-white transition-colors flex items-center space-x-2"><span>Statistik Desa</span></Link></li>
              <li><Link to="/umkm" className="hover:text-white transition-colors flex items-center space-x-2"><span>Lapak UMKM</span></Link></li>
            </ul>
          </div>

          {/* Public Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Layanan Publik</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/aduan" className="hover:text-white transition-colors">Pengaduan Masyarakat</Link></li>
              <li><Link to="/darurat" className="hover:text-white transition-colors">Informasi Darurat</Link></li>
              <li><Link to="/layanan#surat" className="hover:text-white transition-colors">Permohonan Surat</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</Link></li>
              <li><a href="https://cekbansos.kemensos.go.id/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center space-x-1">
                <span>Cek Bantuan Sosial</span>
                <ExternalLink size={12} />
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Hubungi Kami</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>Jl. Raya Desa No. 123, Kecamatan Contoh, Kabupaten Contoh, Provinsi Contoh 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>desa-maju@kabupaten.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Pemerintah Desa Maju Jaya. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6">
            <Link to="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link to="/peta-situs" className="hover:text-white transition-colors">Peta Situs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
