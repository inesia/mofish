import React from 'react';
import { X, Home, Gavel, Tag, Settings, HelpCircle, ChevronRight, LogOut, Fish } from 'lucide-react';

export default function Sidebar({ isOpen, onClose, setCurrentTab }) {
  const menus = [
    { label: 'Beranda', icon: Home, action: () => setCurrentTab('home') },
    { label: 'Lelang Live', icon: Gavel, action: () => setCurrentTab('auctionDetail') },
    { label: 'Kategori Sale', icon: Tag, action: () => setCurrentTab('sale') },
    { label: 'Pengaturan', icon: Settings, action: () => {} },
    { label: 'Pusat Bantuan', icon: HelpCircle, action: () => {} },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-[320px] bg-zinc-950 z-[70] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div className="flex items-center font-black text-xl tracking-[0.25em] text-white">
            M
            <span className="relative flex items-center justify-center w-5 h-5 mx-0.5 text-red-600">
               O
               <Fish className="absolute w-3.5 h-3.5 rotate-45 fill-current" />
            </span>
            FISH
          </div>
          <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-zinc-900 transition-colors">
            <X className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* User Mini Profile */}
        <div className="p-5 border-b border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-red-500 to-orange-500">
            <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden border-2 border-zinc-950">
              <img src="https://ui-avatars.com/api/?name=Koikhitha&background=random" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">KOIKHITHA</h3>
            <p className="text-zinc-500 text-xs font-medium">koikhitha@mofish.id</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {menus.map((menu, idx) => (
            <button 
              key={idx}
              onClick={() => {
                menu.action();
                onClose();
              }}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-zinc-900 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <menu.icon className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white">{menu.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-colors" />
            </button>
          ))}
        </div>

        {/* Footer Action */}
        <div className="p-5 border-t border-white/5">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600/10 text-red-500 font-bold hover:bg-red-600 hover:text-white transition-all text-sm">
            <LogOut className="w-4 h-4" />
            Keluar Akun
          </button>
        </div>
      </div>
    </>
  );
}
