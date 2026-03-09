import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Users, GraduationCap, Briefcase, Heart, 
  Calendar, Baby, UserMinus, Home, 
  TrendingUp, PieChart as PieIcon, BarChart3,
  AlertCircle
} from 'lucide-react';
import { cn } from '../utils/cn';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  PointElement,
  LineElement,
  Title
} from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement,
  PointElement,
  LineElement,
  Title
);

export default function DataDesa() {
  const genderData = {
    labels: ['Laki-laki', 'Perempuan'],
    datasets: [{
      data: [1720, 1732],
      backgroundColor: ['#3b82f6', '#ec4899'],
      borderWidth: 0,
    }]
  };

  const educationData = {
    labels: ['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'Diploma', 'Sarjana'],
    datasets: [{
      label: 'Jumlah Penduduk',
      data: [120, 850, 980, 1100, 250, 152],
      backgroundColor: '#10b981',
      borderRadius: 8,
    }]
  };

  const jobData = {
    labels: ['Petani', 'Buruh', 'PNS', 'Swasta', 'Wiraswasta', 'Lainnya'],
    datasets: [{
      data: [1200, 800, 150, 450, 300, 552],
      backgroundColor: [
        '#0f172a', '#334155', '#10b981', '#3b82f6', '#f59e0b', '#ef4444'
      ],
      borderWidth: 0,
    }]
  };

  const ageData = {
    labels: ['0-5', '6-12', '13-17', '18-35', '36-55', '56+'],
    datasets: [{
      label: 'Kelompok Umur',
      data: [320, 450, 380, 1100, 850, 352],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
    }]
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Statistik & Data Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Visualisasi data kependudukan Desa Maju Jaya yang diperbarui secara berkala untuk mendukung transparansi dan perencanaan pembangunan.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Penduduk', value: '3.452', icon: Users, color: 'text-blue-600 bg-blue-50' },
            { label: 'Kepala Keluarga', value: '845', icon: Home, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'Wajib KTP', value: '2.510', icon: Calendar, iconColor: 'text-amber-600 bg-amber-50' },
            { label: 'Penerima Bansos', value: '124', icon: Heart, iconColor: 'text-red-600 bg-red-50' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.color || stat.iconColor)}>
                <stat.icon size={24} />
              </div>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gender Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary flex items-center space-x-2">
                <PieIcon size={18} className="text-accent" />
                <span>Jenis Kelamin</span>
              </h3>
              <span className="text-xs text-slate-400">Update: Jan 2024</span>
            </div>
            <div className="h-64 flex items-center justify-center">
              <Pie data={genderData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-2xl text-center">
                <p className="text-xl font-bold text-blue-700">1.720</p>
                <p className="text-xs text-blue-600 font-medium">Laki-laki (49.8%)</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-2xl text-center">
                <p className="text-xl font-bold text-pink-700">1.732</p>
                <p className="text-xs text-pink-600 font-medium">Perempuan (50.2%)</p>
              </div>
            </div>
          </div>

          {/* Education Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary flex items-center space-x-2">
                <GraduationCap size={18} className="text-accent" />
                <span>Tingkat Pendidikan</span>
              </h3>
              <span className="text-xs text-slate-400">Update: Jan 2024</span>
            </div>
            <div className="h-80">
              <Bar 
                data={educationData} 
                options={{ 
                  maintainAspectRatio: false,
                  scales: {
                    y: { beginAtZero: true }
                  }
                }} 
              />
            </div>
          </div>

          {/* Job Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary flex items-center space-x-2">
                <Briefcase size={18} className="text-accent" />
                <span>Mata Pencaharian</span>
              </h3>
              <span className="text-xs text-slate-400">Update: Jan 2024</span>
            </div>
            <div className="h-64 flex items-center justify-center">
              <Pie data={jobData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {jobData.labels.map((label, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: jobData.datasets[0].backgroundColor[i] }}></div>
                  <span className="text-[10px] font-medium text-slate-500 truncate">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Age Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-primary flex items-center space-x-2">
                <TrendingUp size={18} className="text-accent" />
                <span>Kelompok Umur</span>
              </h3>
              <span className="text-xs text-slate-400">Update: Jan 2024</span>
            </div>
            <div className="h-80">
              <Line 
                data={ageData} 
                options={{ 
                  maintainAspectRatio: false,
                  scales: {
                    y: { beginAtZero: true }
                  }
                }} 
              />
            </div>
          </div>
        </div>

        {/* Poverty & Aid Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-primary text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Transparansi Data Bantuan</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Kami memastikan penyaluran bantuan sosial tepat sasaran berdasarkan data terpadu kesejahteraan sosial (DTKS).
              </p>
            </div>
            <Link to="/transparansi" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-emerald-600 transition-all whitespace-nowrap">
              Lihat Data Penerima
            </Link>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={24} />
            </div>
            <p className="text-3xl font-bold text-primary">4.2%</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Angka Kemiskinan</p>
            <p className="text-[10px] text-emerald-600 font-bold mt-2">↓ 0.8% dari tahun lalu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
