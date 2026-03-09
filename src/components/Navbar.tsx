import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search, User } from 'lucide-react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { 
    name: 'Profil', 
    path: '/profil',
    submenu: [
      { name: 'Sejarah Desa', path: '/profil#sejarah' },
      { name: 'Visi & Misi', path: '/profil#visi-misi' },
      { name: 'Wilayah Desa', path: '/profil#wilayah' },
      { name: 'Potensi Desa', path: '/potensi' },
    ]
  },
  { 
    name: 'Pemerintahan', 
    path: '/pemerintah',
    submenu: [
      { name: 'Pemerintah Desa', path: '/pemerintah' },
      { name: 'Lembaga Desa', path: '/lembaga' },
      { name: 'Transparansi', path: '/transparansi' },
    ]
  },
  { name: 'Data Desa', path: '/data' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'UMKM & BUMDes', path: '/umkm' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-white py-2 px-4 transition-all duration-300 hidden md:block",
        isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-accent" />
              <span>(021) 1234-5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-accent" />
              <span>desa-maju@kabupaten.go.id</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/aduan" className="hover:text-accent transition-colors">Layanan Aduan</Link>
            <Link to="/darurat" className="text-red-400 hover:text-red-300 transition-colors font-bold uppercase tracking-wider">Darurat!</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        "transition-all duration-300 px-4",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-white py-4 shadow-sm"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-accent transition-colors">
              D
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-primary">DESA MAJU JAYA</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Portal Resmi Pemerintah Desa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center space-x-1",
                    location.pathname === link.path 
                      ? "bg-primary text-white" 
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <span>{link.name}</span>
                  {link.submenu && <ChevronDown size={14} className="opacity-50" />}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <div className={cn(
                    "absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 transform origin-top",
                    activeSubmenu === link.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            <button className="p-2 text-slate-500 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/admin" className="p-2 text-slate-500 hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-24 px-6",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "text-xl font-bold block py-2",
                  location.pathname === link.path ? "text-accent" : "text-primary"
                )}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="text-slate-500 block py-1 font-medium"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
            <Link to="/aduan" className="text-primary font-bold">Layanan Aduan</Link>
            <Link to="/darurat" className="text-red-500 font-bold">DARURAT!</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
