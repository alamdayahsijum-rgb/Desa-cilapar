/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Government from './pages/Government';
import Institutions from './pages/Institutions';
import DataDesa from './pages/DataDesa';
import Services from './pages/Services';
import Transparency from './pages/Transparency';
import UMKM from './pages/UMKM';
import BUMDes from './pages/BUMDes';
import Potensi from './pages/Potensi';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Complaints from './pages/Complaints';
import Emergency from './pages/Emergency';
import NewsDetail from './pages/NewsDetail';
import AdminDashboard from './pages/admin/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/pemerintah" element={<Government />} />
            <Route path="/lembaga" element={<Institutions />} />
            <Route path="/data" element={<DataDesa />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/transparansi" element={<Transparency />} />
            <Route path="/umkm" element={<UMKM />} />
            <Route path="/bumdes" element={<BUMDes />} />
            <Route path="/potensi" element={<Potensi />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/aduan" element={<Complaints />} />
            <Route path="/darurat" element={<Emergency />} />
            <Route path="/berita/:id" element={<NewsDetail />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
