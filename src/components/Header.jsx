import React from 'react';
import { Menu, Bell, Search, Filter, Fish } from 'lucide-react';

export default function Header({ onMenuClick, onNotifClick }) {
  return (
    <div className="sticky top-0 z-50 bg-zinc-950 border-b border-white/5">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <button onClick={onMenuClick} className="p-2 -ml-2 rounded-full hover:bg-zinc-900 transition-colors">
          <Menu className="w-6 h-6 text-zinc-100" />
        </button>
        
        <div className="flex items-center font-black text-xl tracking-[0.25em] text-white">
          M
          <span className="relative flex items-center justify-center w-5 h-5 mx-0.5 text-red-600">
             O
             <Fish className="absolute w-3.5 h-3.5 rotate-45 fill-current" />
          </span>
          FISH
        </div>

        <button onClick={onNotifClick} className="relative p-2 -mr-2 rounded-full hover:bg-zinc-900 transition-colors">
          <Bell className="w-5 h-5 text-zinc-100" />
          <span className="absolute top-1 right-1 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm shadow-red-600/50 ring-2 ring-zinc-950">
            2
          </span>
        </button>
      </div>

      {/* Greeting and Search */}
      <div className="px-5 pb-6 pt-2">
        <h2 className="text-white text-2xl font-extrabold tracking-tight mb-1">Halo, KOIKHITHA 👋</h2>
        <p className="text-zinc-400 text-xs mb-6 font-medium">
          Temukan koleksi Koi terbaik hari ini
        </p>

        {/* Search Bar + Filter Button */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-red-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50 focus:bg-zinc-900 transition-all shadow-inner"
              placeholder="Cari ikan, farm, lelang..."
            />
          </div>
          <button className="flex items-center justify-center p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all shadow-sm">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
