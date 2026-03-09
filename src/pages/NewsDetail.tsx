import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { newsData } from '../data/mockData';

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find(n => n.id === Number(id));

  if (!news) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-primary">Berita tidak ditemukan</h2>
        <Link to="/" className="text-accent mt-4 inline-block">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link to="/" className="text-slate-400 hover:text-primary transition-colors flex items-center space-x-2 text-sm font-medium">
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="px-4 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
            {news.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            {news.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-b border-slate-200 pb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>Admin Desa</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={16} />
              <span>Pemerintahan, Desa Maju</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100 mb-12">
          <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-primary leading-relaxed">
              {news.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Langkah Strategis Pemerintah Desa</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Peningkatan kualitas pelayanan publik digital.</li>
              <li>Transparansi pengelolaan dana desa secara real-time.</li>
              <li>Pemberdayaan ekonomi masyarakat melalui BUMDes.</li>
            </ul>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <Share2 size={18} />
              <span>Bagikan Artikel</span>
            </div>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all">
                <Facebook size={20} />
              </button>
              <button className="w-12 h-12 bg-sky-500 text-white rounded-xl flex items-center justify-center hover:bg-sky-600 transition-all">
                <Twitter size={20} />
              </button>
              <button className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-all">
                <LinkIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-primary mb-8">Berita Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.filter(n => n.id !== news.id).slice(0, 2).map((item) => (
              <Link key={item.id} to={`/berita/${item.id}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex h-full">
                  <div className="w-1/3 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{item.category}</span>
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
