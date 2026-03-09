import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Image as ImageIcon, 
  Users, MessageSquare, Settings, Bell, 
  LogOut, Search, Plus, MoreVertical,
  TrendingUp, Eye, UserPlus, Mail
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminDashboard() {
  const location = useLocation();

  const sidebarLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Berita', path: '/admin/berita', icon: FileText },
    { name: 'Galeri', path: '/admin/galeri', icon: ImageIcon },
    { name: 'Penduduk', path: '/admin/penduduk', icon: Users },
    { name: 'Aduan', path: '/admin/aduan', icon: MessageSquare },
    { name: 'Pengaturan', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-20 h-[calc(100vh-80px)]">
        <div className="p-6 flex-grow">
          <div className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  location.pathname === link.path 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                )}
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6 border-t border-slate-100">
          <button className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/berita" element={<AdminPlaceholder title="Manajemen Berita" />} />
          <Route path="/galeri" element={<AdminPlaceholder title="Manajemen Galeri" />} />
          <Route path="/penduduk" element={<AdminPlaceholder title="Data Penduduk" />} />
          <Route path="/aduan" element={<AdminPlaceholder title="Aduan Masyarakat" />} />
          <Route path="/settings" element={<AdminPlaceholder title="Pengaturan Situs" />} />
        </Routes>
      </main>
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Selamat Datang, Admin</h1>
          <p className="text-slate-500 text-sm">Berikut adalah ringkasan aktivitas desa hari ini.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center space-x-2">
            <Bell size={18} />
            <span>Notifikasi</span>
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-all flex items-center space-x-2">
            <Plus size={18} />
            <span>Tambah Berita</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Pengunjung', value: '1.240', icon: Eye, color: 'text-blue-600 bg-blue-50' },
          { label: 'Aduan Baru', value: '12', icon: MessageSquare, color: 'text-red-600 bg-red-50' },
          { label: 'Permohonan Surat', value: '45', icon: FileText, color: 'text-amber-600 bg-amber-50' },
          { label: 'Penduduk Baru', value: '8', icon: UserPlus, color: 'text-emerald-600 bg-emerald-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.color)}>
                <stat.icon size={20} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600">+12%</span>
            </div>
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-primary">Aduan Terbaru</h3>
            <button className="text-xs font-bold text-accent hover:underline">Lihat Semua</button>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { user: 'Budi Santoso', subject: 'Lampu Jalan Mati', time: '2 jam yang lalu', status: 'Baru' },
              { user: 'Siti Aminah', subject: 'Sampah Menumpuk', time: '5 jam yang lalu', status: 'Proses' },
              { user: 'Dedi Kurniawan', subject: 'Jalan Berlubang', time: '1 hari yang lalu', status: 'Selesai' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <UserPlus size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{item.subject}</h4>
                    <p className="text-xs text-slate-400">Oleh {item.user} • {item.time}</p>
                  </div>
                </div>
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  item.status === 'Baru' ? "bg-red-50 text-red-600" : 
                  item.status === 'Proses' ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                )}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-primary mb-6">Pesan Masuk</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">Pertanyaan Layanan</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">Halo admin, saya ingin bertanya terkait persyaratan mengurus SKU...</p>
                  <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase">10:45 AM</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-slate-50 text-slate-500 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">
            Lihat Semua Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-200 text-center">
      <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <Settings size={40} />
      </div>
      <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-slate-500 max-w-md mx-auto">
        Fitur ini sedang dalam pengembangan. Halaman ini akan digunakan untuk mengelola data {title.toLowerCase()} secara lengkap.
      </p>
    </div>
  );
}
