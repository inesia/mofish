import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, 
  Handshake, 
  ClipboardCheck, 
  Tag, 
  Wallet, 
  Truck, 
  Play, 
  Star, 
  Heart, 
  MapPin, 
  CheckCircle2, 
  User,
  Gavel,
  Flame,
  Clock
} from 'lucide-react';
import { dummySaleItems, dummyAuctionItems, dummyPremiumSellers, dummyVideos } from '../mockData';

const heroSlides = [
  {
    id: 1,
    title: 'PASANG IKLAN',
    subtitle: 'Promosikan Koi Anda ke Seluruh Indonesia',
    points: ['Jangkauan luas', 'Mudah & Cepat'],
    bgFrom: 'from-zinc-900',
    bgTo: 'to-zinc-800',
    imgUrl: 'https://unsplash.com/photos/fwSNS_0Awq4/download?w=600',
    btnLabel: 'Pasang Sekarang',
    btnColor: 'bg-red-600',
    accentColor: 'text-red-500',
  },
  {
    id: 2,
    title: 'IKUT LELANG',
    subtitle: 'Dapatkan Koi Impian Berkualitas',
    points: ['Harga Terjangkau', 'Terpercaya & Aman'],
    bgFrom: 'from-amber-900/80',
    bgTo: 'to-orange-950/80',
    imgUrl: 'https://unsplash.com/photos/pw8vGbh4Bu0/download?w=600',
    btnLabel: 'Lihat Lelang',
    btnColor: 'bg-orange-600',
    accentColor: 'text-orange-400',
  },
  {
    id: 3,
    title: 'JUAL KOI MU',
    subtitle: 'Pusat Transaksi Koi Nomor 1',
    points: ['Gratis 1 Iklan', 'Dashboard Praktis'],
    bgFrom: 'from-blue-950/80',
    bgTo: 'to-slate-900/80',
    imgUrl: 'https://unsplash.com/photos/SjcrpttvjiE/download?w=600',
    btnLabel: 'Mulai Jual',
    btnColor: 'bg-blue-600',
    accentColor: 'text-blue-400',
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const autoRef = useRef(null);

  const goTo = (idx) => setCurrent((idx + heroSlides.length) % heroSlides.length);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 5000);
  };

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, []);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetAuto();
    }
    touchStartX.current = null;
  };

  const slide = heroSlides[current];

  return (
    <div className="px-5 mt-2 mb-8" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className={`relative h-[210px] w-full rounded-[32px] overflow-hidden bg-gradient-to-br ${slide.bgFrom} ${slide.bgTo} shadow-2xl shadow-black border border-white/5 group transition-colors duration-700`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={slide.imgUrl} alt={slide.title} className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-105 transition-transform duration-[20s] ease-linear group-hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10 w-[80%]">
          <div>
            <h3 className="text-[22px] font-black text-white tracking-tight mb-1.5 drop-shadow-md">{slide.title}</h3>
            <p className="text-xs text-zinc-300 font-medium leading-snug max-w-[95%]">{slide.subtitle}</p>
          </div>

          <div className="space-y-1.5 mb-3">
            {slide.points.map((p, i) => (
              <div key={i} className="flex items-center text-[10px] text-zinc-200 font-medium tracking-wide">
                <CheckCircle2 className={`w-3.5 h-3.5 ${slide.accentColor} mr-2 flex-shrink-0`} strokeWidth={2.5} />
                <span>{p}</span>
              </div>
            ))}
          </div>

          <button className={`${slide.btnColor} text-white text-xs font-extrabold py-2.5 px-6 rounded-full flex items-center justify-center w-max shadow-lg hover:brightness-110 transition-all tracking-wide`}>
            {slide.btnLabel}
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-2 mt-5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetAuto(); }}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-1.5 h-1.5 bg-zinc-800'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home({ setCurrentTab }) {
  return (
    <div className="flex-1 overflow-y-auto bg-zinc-50 pb-10">

      {/* 🌑 Top Immersive Black Section */}
      <div className="bg-zinc-950 rounded-b-[40px] pb-6 mb-8 shadow-sm">
        
        {/* Categories Row */}
        <div className="px-5 pt-3 pb-6">
          <div className="flex justify-between items-start">
            {[
              { id: 'kohaku', name: 'Kohaku', img: 'https://unsplash.com/photos/fwSNS_0Awq4/download?w=300' },
              { id: 'sanke',  name: 'Sanke',  img: 'https://unsplash.com/photos/S5RwcwBS2lQ/download?w=300' },
              { id: 'showa',  name: 'Showa',  img: 'https://unsplash.com/photos/h_4fe8fmb1E/download?w=300' },
              { id: 'asagi',  name: 'Asagi',  img: 'https://unsplash.com/photos/7rR_WSk4HM0/download?w=300' },
            ].map(cat => (
              <button key={cat.id} onClick={() => setCurrentTab('sale')} className="group flex flex-col items-center gap-2 w-[60px]">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-b from-zinc-700 to-zinc-900 group-hover:from-blue-500 group-hover:to-blue-600 transition-colors shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-950 relative">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-zinc-100 transition-colors">{cat.name}</span>
              </button>
            ))}

            <button onClick={() => setCurrentTab('auctionDetail')} className="group flex flex-col items-center gap-2 w-[60px]">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-b from-orange-500 to-red-600 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center border-2 border-zinc-950 relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500/10"></div>
                  <Gavel className="w-6 h-6 text-orange-500 relative z-10 drop-shadow-md" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-orange-500">Lelang</span>
            </button>
          </div>
        </div>

        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Quick Menus */}
        <div className="px-5 pb-2">
          <div className="grid grid-cols-5 gap-2">
            {[
              { icon: Handshake, color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20', label: 'Sale', tab: 'sale' },
              { icon: ClipboardCheck, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20', label: 'KC/Az', tab: null },
              { icon: Tag,        color: 'text-emerald-500', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Tarif', tab: null },
              { icon: Wallet,     color: 'text-amber-500', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Bayar', tab: null },
              { icon: Truck,      color: 'text-purple-500', bg: 'bg-purple-500/10 border-purple-500/20', label: 'Kirim', tab: null },
            ].map(({ icon: Icon, color, bg, label, tab }) => (
              <button key={label} onClick={() => tab && setCurrentTab(tab)} className="flex flex-col items-center gap-2 group">
                <div className={`w-[52px] h-[52px] rounded-2xl ${bg} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-[22px] h-[22px] ${color}`} strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-semibold text-zinc-400 tracking-wide">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 📹 Video Iklan Section */}
      <div className="mb-10 pl-6">
        <div className="flex justify-between items-end pr-5 mb-5">
          <div>
            <h3 className="text-zinc-900 font-black text-[17px] flex items-center gap-2 tracking-tight">
              Iklan Video <Play className="w-4 h-4 text-zinc-900 fill-current" />
            </h3>
            <p className="text-zinc-500 text-[10px] font-semibold mt-1 uppercase tracking-wider">Promosi Unggulan</p>
          </div>
          <button className="text-red-600 text-xs font-bold hover:underline mb-1">Lihat Semua</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 snap-x pr-5">
          {dummyVideos.map(video => (
            <div key={video.id} className="min-w-[300px] h-[160px] snap-start relative rounded-[20px] overflow-hidden bg-zinc-900 flex-shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group">
              <img src={video.imageUrl} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent flex flex-col justify-between p-4">
                <div className="text-[10px] text-yellow-400 font-extrabold bg-zinc-950/60 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
                  Mulai <span className="text-yellow-200">Rp 1jt</span>/slot
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                  </div>
                </div>
                <div>
                  <span className="text-yellow-400 font-extrabold text-[9px] bg-zinc-950/80 px-2.5 py-1 rounded-md uppercase tracking-wider">{video.prize}</span>
                  <p className="text-white text-[15px] font-bold mt-1.5 truncate drop-shadow-md">{video.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ Seller Premium Section */}
      <div className="mb-10 pl-6">
        <div className="flex justify-between items-end pr-5 mb-5">
          <div>
            <h3 className="text-zinc-900 font-black text-[17px] flex items-center gap-2 tracking-tight">
              Top Seller <Star className="w-5 h-5 text-amber-400 fill-current" />
            </h3>
            <p className="text-zinc-500 text-[10px] font-semibold mt-1 uppercase tracking-wider">Penjual Terpercaya</p>
          </div>
          <button className="text-red-600 text-xs font-bold hover:underline mb-1">Lihat Semua</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 snap-x pr-5">
          {dummyPremiumSellers.map(seller => (
            <div key={seller.id} className="min-w-[130px] snap-start bg-white rounded-[24px] p-4 border border-zinc-100 flex flex-col items-center relative flex-shrink-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <span className="absolute top-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[8px] font-black px-2.5 py-1 rounded-bl-xl rounded-tr-[24px] shadow-sm">
                PRO
              </span>
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-200 to-orange-400 mb-3 shadow-sm">
                <img src={seller.avatar} alt={seller.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
              </div>
              <span className="font-extrabold text-zinc-900 text-[13px] truncate w-full text-center tracking-tight">{seller.name}</span>
              <span className="text-zinc-400 text-[10px] font-medium truncate mb-2">{seller.location}</span>
              <div className="flex items-center space-x-1.5 bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-100">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span className="text-[11px] font-extrabold text-zinc-800">{seller.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Sale Terbaru */}
      <div className="mb-10 pl-6">
        <div className="flex justify-between items-end pr-5 mb-5">
          <div>
            <h3 className="text-zinc-900 font-black text-[17px] flex items-center gap-2 tracking-tight">
              Sale Terbaru <Flame className="w-5 h-5 text-red-500 fill-current" />
            </h3>
            <p className="text-zinc-500 text-[10px] font-semibold mt-1 uppercase tracking-wider">Koi Berkualitas Tinggi</p>
          </div>
          <button onClick={() => setCurrentTab('sale')} className="text-green-600 text-xs font-bold hover:underline mb-1">Lihat Semua</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 snap-x pr-5">
          {dummySaleItems.map(item => (
            <div key={item.id} className="min-w-[170px] snap-start bg-white rounded-[24px] border border-zinc-100 overflow-hidden flex flex-col flex-shrink-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="relative h-[170px]">
                <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wide">SALE</div>
                <button className="absolute top-3 right-3 bg-zinc-950/40 backdrop-blur-md p-2 rounded-full hover:bg-red-500/80 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  <div className={`text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-sm ${item.grade === 'A' ? 'bg-green-500' : 'bg-blue-500'}`}>
                    Grade {item.grade}
                  </div>
                  <div className="bg-zinc-950/70 backdrop-blur-md text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                    {item.size}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-extrabold text-zinc-900 text-[15px] mb-1 tracking-tight">{item.type}</h4>
                <p className="text-zinc-500 text-[11px] font-medium mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.farm}
                </p>
                <div className="pt-2 border-t border-zinc-100">
                  <p className="text-red-600 font-black text-base">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⏰ Auction Live */}
      <div className="mb-6 pl-6">
        <div className="flex justify-between items-end pr-5 mb-5">
          <div>
            <h3 className="text-zinc-900 font-black text-[17px] flex items-center gap-2 tracking-tight">
              Auction Live <Clock className="w-5 h-5 text-orange-500" />
            </h3>
            <p className="text-zinc-500 text-[10px] font-semibold mt-1 uppercase tracking-wider">Jangan Lewatkan</p>
          </div>
          <button onClick={() => setCurrentTab('auctionDetail')} className="text-orange-600 text-xs font-bold hover:underline mb-1">Lihat Semua</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 snap-x pr-5">
          {dummyAuctionItems.map(item => (
            <div
              key={item.id}
              onClick={() => setCurrentTab('auctionDetail')}
              className="min-w-[300px] snap-start bg-white rounded-[28px] border border-zinc-100 overflow-hidden flex cursor-pointer flex-shrink-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
            >
              <div className="relative w-[120px] h-full min-h-[150px] flex-shrink-0">
                <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full shadow-md tracking-wide">AUCTION</div>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="font-extrabold text-zinc-900 text-[15px] tracking-tight">{item.type}</h4>
                  <p className="text-zinc-500 text-[11px] font-medium mt-0.5">{item.farm}</p>
                </div>
                <div className="mt-2">
                  <p className="text-[9px] text-zinc-400 font-black tracking-widest mb-0.5">HARGA SAAT INI</p>
                  <p className="text-orange-600 font-black text-lg leading-none">{item.currentBid}</p>
                </div>
                <div className="flex justify-between items-end mt-3 pt-3 border-t border-zinc-100">
                  <div>
                    <p className="text-[9px] text-zinc-400 font-black tracking-widest mb-1.5">SISA WAKTU</p>
                    <span className="text-xs font-bold font-mono text-zinc-800 bg-red-50 text-red-600 px-2.5 py-1 rounded-md">02:31:20</span>
                  </div>
                  <div className="flex items-center text-zinc-500 text-[10px] font-bold">
                    <User className="w-3.5 h-3.5 mr-1" />
                    {item.bidders}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
