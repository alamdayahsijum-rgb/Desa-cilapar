import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, TrendingDown, DollarSign, PieChart as PieIcon, 
  BarChart3, FileText, Download, Eye, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { budgetData } from '../data/mockData';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  Title
);

export default function Transparency() {
  const pieData = {
    labels: budgetData.categories.map(c => c.name),
    datasets: [
      {
        data: budgetData.categories.map(c => c.amount),
        backgroundColor: [
          '#0f172a',
          '#10b981',
          '#3b82f6',
          '#f59e0b',
          '#ef4444',
        ],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ['Dana Desa', 'ADD', 'Bagi Hasil Pajak', 'Pendapatan Asli Desa', 'Bantuan Keuangan'],
    datasets: [{
      label: 'Realisasi Pendapatan (Rp)',
      data: [800000000, 450000000, 120000000, 80000000, 50000000],
      backgroundColor: '#10b981',
      borderRadius: 8,
    }]
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Transparansi Anggaran Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Laporan Anggaran Pendapatan dan Belanja Desa (APBDes) sebagai bentuk pertanggungjawaban publik Pemerintah Desa Maju Jaya.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">REALISASI 98%</span>
            </div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Total Pendapatan</p>
            <p className="text-3xl font-bold text-primary mt-1">Rp 1.500.000.000</p>
            <div className="mt-4 flex items-center text-xs text-slate-400">
              <ArrowUpRight size={14} className="text-emerald-500 mr-1" />
              <span>Naik 5% dari tahun lalu</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                <TrendingDown size={24} />
              </div>
              <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">REALISASI 92%</span>
            </div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Total Belanja</p>
            <p className="text-3xl font-bold text-primary mt-1">Rp 1.450.000.000</p>
            <div className="mt-4 flex items-center text-xs text-slate-400">
              <ArrowDownRight size={14} className="text-red-500 mr-1" />
              <span>Sesuai target perencanaan</span>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                <DollarSign size={24} />
              </div>
              <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">SURPLUS</span>
            </div>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">SiLPA / Sisa Anggaran</p>
            <p className="text-3xl font-bold text-white mt-1">Rp 50.000.000</p>
            <p className="mt-4 text-xs text-slate-400">Dialokasikan untuk dana cadangan</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-primary mb-8 flex items-center space-x-2">
              <PieIcon size={18} className="text-accent" />
              <span>Proporsi Belanja Desa 2024</span>
            </h3>
            <div className="h-80 flex items-center justify-center">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-primary mb-8 flex items-center space-x-2">
              <BarChart3 size={18} className="text-accent" />
              <span>Sumber Pendapatan Desa</span>
            </h3>
            <div className="h-80">
              <Bar 
                data={barData} 
                options={{ 
                  maintainAspectRatio: false,
                  indexAxis: 'y' as const,
                  scales: {
                    x: { beginAtZero: true }
                  }
                }} 
              />
            </div>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="font-bold text-primary text-xl">Rincian Realisasi Anggaran</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold flex items-center space-x-2 hover:bg-slate-200 transition-colors">
                <Download size={16} />
                <span>Download PDF</span>
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center space-x-2 hover:bg-slate-800 transition-colors">
                <Eye size={16} />
                <span>Lihat Laporan Lengkap</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-8 py-4">Bidang / Kegiatan</th>
                  <th className="px-8 py-4">Anggaran (Rp)</th>
                  <th className="px-8 py-4">Realisasi (Rp)</th>
                  <th className="px-8 py-4">Persentase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {budgetData.categories.map((cat, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6 font-semibold text-primary">{cat.name}</td>
                    <td className="px-8 py-6 text-slate-600">{cat.amount.toLocaleString('id-ID')}</td>
                    <td className="px-8 py-6 text-slate-600">{(cat.amount * 0.95).toLocaleString('id-ID')}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-accent h-full w-[95%]"></div>
                        </div>
                        <span className="text-xs font-bold text-primary">95%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Infographic / CTA */}
        <div className="bg-accent text-white p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Punya Pertanyaan Terkait Anggaran?</h2>
            <p className="text-emerald-100 mb-8 leading-relaxed">
              Kami terbuka terhadap masukan dan pertanyaan dari masyarakat terkait pengelolaan dana desa. Silakan ajukan melalui kanal PPID atau layanan aduan kami.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/aduan" className="px-8 py-4 bg-white text-accent rounded-xl font-bold hover:bg-slate-50 transition-all">
                Ajukan Pertanyaan
              </Link>
              <Link to="/kontak" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all">
                Hubungi Admin
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}
