import React from 'react';
import { Settings, Wallet, Heart, Clock, HelpCircle, ChevronRight, LogOut, ShieldCheck, MapPin, Star } from 'lucide-react';

export default function Profil({ setCurrentTab }) {
  return (
    <div className="flex-1 overflow-y-auto bg-zinc-50 pb-24">
      {/* 🌑 Top Immersive Black Section */}
      <div className="bg-zinc-950 rounded-b-[40px] pb-12 pt-8 shadow-sm relative px-5">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Profil Saya</h1>
          <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 text-white hover:bg-zinc-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 to-red-500 relative shadow-lg">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full rounded-full object-cover border-[3px] border-zinc-950" />
            <div className="absolute bottom-0 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full border-2 border-zinc-950 shadow-md tracking-wider">PRO</div>
          </div>
          <div>
            <h2 className="text-xl font-black text-white mb-1.5 drop-shadow-md">KOIKHITHA Farm</h2>
            <p className="text-xs text-zinc-400 font-medium flex items-center gap-1.5 mb-2">
              <MapPin className="w-3 h-3 text-red-500" /> Blitar, Jawa Timur
            </p>
            <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 w-max">
              <Star className="w-3 h-3 text-amber-400 fill-current" />
              <span className="text-[10px] font-extrabold text-white">4.9 / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet / Stats Card overlapping */}
      <div className="px-5 -mt-8 relative z-20 mb-6">
        <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Saldo M-Pay</p>
                <p className="text-[22px] font-black text-zinc-900 leading-none">Rp 12.550.000</p>
              </div>
            </div>
            <button className="bg-zinc-950 hover:bg-zinc-800 text-white text-[10px] font-extrabold px-4 py-2.5 rounded-xl transition-colors shadow-md">Top Up</button>
          </div>
          
          <div className="h-px w-full bg-zinc-100"></div>
          
          <div className="flex justify-between">
            <div className="text-center flex-1 hover:bg-zinc-50 rounded-xl p-2 transition-colors cursor-pointer">
              <p className="text-[22px] font-black text-zinc-900 mb-0.5">14</p>
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Lelang Aktif</p>
            </div>
            <div className="w-px h-10 bg-zinc-100 my-auto"></div>
            <div className="text-center flex-1 hover:bg-zinc-50 rounded-xl p-2 transition-colors cursor-pointer">
              <p className="text-[22px] font-black text-zinc-900 mb-0.5">128</p>
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Terjual</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-5 space-y-2.5 mb-8">
        {[
          { icon: Heart, label: 'Ikan Favorit Saya', color: 'text-red-500', bg: 'bg-red-50' },
          { icon: Clock, label: 'Riwayat Transaksi', color: 'text-blue-500', bg: 'bg-blue-50' },
          { icon: ShieldCheck, label: 'Verifikasi Akun', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { icon: HelpCircle, label: 'Pusat Bantuan', color: 'text-orange-500', bg: 'bg-orange-50' },
        ].map((item, idx) => (
          <button key={idx} className="w-full bg-white rounded-[20px] p-4 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-zinc-100 group hover:border-zinc-300 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 ${item.bg} ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className="w-[22px] h-[22px]" />
              </div>
              <span className="text-[15px] font-bold text-zinc-800">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
          </button>
        ))}

        <button className="w-full bg-white rounded-[20px] p-4 flex items-center gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-zinc-100 mt-6 group hover:border-red-200 transition-all hover:shadow-md">
          <div className="w-11 h-11 bg-red-50 text-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <LogOut className="w-[22px] h-[22px]" />
          </div>
          <span className="text-[15px] font-bold text-red-600">Keluar Akun</span>
        </button>
      </div>
    </div>
  );
}
