import React from 'react';
import { ChevronLeft, Share2, Heart, MessageCircle, Clock, Users, ShieldCheck, MapPin } from 'lucide-react';
import { dummyAuctionItems } from '../mockData';

export default function AuctionDetail({ setCurrentTab }) {
  // Use first auction item for demo purposes
  const item = dummyAuctionItems[0] || {
    type: 'Showa',
    farm: 'Dainichi Koi Farm',
    currentBid: 'Rp 1.200.000',
    location: 'Blitar',
    grade: 'A',
    size: '40 cm',
    bidders: 15,
    endTime: new Date(Date.now() + 3600000 * 2.5).getTime(),
    imageUrl: 'https://unsplash.com/photos/pw8vGbh4Bu0/download?w=800'
  };

  return (
    <div className="flex-1 flex flex-col bg-zinc-50 relative pb-32">
      {/* 📸 Full Bleed Hero Section */}
      <div className="relative w-full h-[380px] bg-zinc-900">
        <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover opacity-90" />
        
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950/90"></div>
        
        {/* App Bar (Transparent over image) */}
        <div className="absolute top-0 left-0 right-0 z-50 px-4 py-4 flex items-center justify-between">
          <button onClick={() => setCurrentTab('home')} className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:bg-black/40 transition-colors">
            <ChevronLeft className="w-6 h-6 pr-0.5" />
          </button>
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:bg-black/40 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:bg-red-500/80 transition-colors group">
              <Heart className="w-4 h-4 group-hover:fill-current" />
            </button>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute top-20 left-4 flex flex-col gap-2">
          <div className="bg-orange-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.4)] w-max">
            Live Auction
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-5 right-5 z-10">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-[28px] font-black text-white tracking-tight drop-shadow-lg mb-1">{item.type}</h1>
              <p className="text-zinc-300 text-[13px] font-medium flex items-center gap-1.5 drop-shadow-md">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> {item.farm}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md text-white shadow-md ${item.grade === 'A' || item.grade === 'A+' ? 'bg-green-500' : 'bg-blue-500'}`}>
                Grade {item.grade}
              </span>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-md">
                {item.size}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 💵 Bid Status Card (Overlapping image) */}
      <div className="px-5 -mt-6 relative z-20">
        <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex justify-between items-center">
          <div>
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Harga Saat Ini</p>
            <p className="text-3xl font-black text-orange-600 tracking-tight leading-none">{item.currentBid}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Penawar Tertinggi</p>
            <p className="text-sm font-extrabold text-zinc-900">Budi Santoso</p>
          </div>
        </div>
      </div>

      {/* 📊 Details Grid */}
      <div className="px-5 mt-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2.5">
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Sisa Waktu</p>
            <p className="text-[17px] font-black text-zinc-900 font-mono tracking-tighter">02:31:20</p>
          </div>
          
          <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2.5">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Total Penawar</p>
            <p className="text-[17px] font-black text-zinc-900">{item.bidders}</p>
          </div>
        </div>
      </div>

      {/* 📍 Location & Info */}
      <div className="px-5 mt-5 mb-5">
        <div className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100">
          <h3 className="text-sm font-black text-zinc-900 mb-4">Informasi Tambahan</h3>
          <div className="flex items-center justify-between py-2.5 border-b border-zinc-50">
            <div className="flex items-center gap-2.5 text-zinc-500">
              <MapPin className="w-4 h-4" /> <span className="text-xs font-semibold">Lokasi</span>
            </div>
            <span className="text-xs font-extrabold text-zinc-900">{item.location}</span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-2.5 text-zinc-500">
              <ShieldCheck className="w-4 h-4" /> <span className="text-xs font-semibold">Sertifikat</span>
            </div>
            <span className="text-[11px] font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-md uppercase tracking-wide">Ada (Original)</span>
          </div>
        </div>
      </div>

      {/* ⚡ Action Buttons (Glassmorphism Sticky Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/85 backdrop-blur-xl border-t border-zinc-200/60 p-4 pb-safe z-50">
        <div className="flex gap-3 h-[52px]">
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black rounded-[16px] text-[15px] transition-all shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex justify-center items-center tracking-wide h-full">
            Ikut Lelang Sekarang
          </button>
          <button className="w-[60px] h-full bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-orange-500 font-bold rounded-[16px] flex items-center justify-center transition-colors shadow-[0_4px_10px_rgb(0,0,0,0.02)]">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
