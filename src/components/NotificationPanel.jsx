import React from 'react';
import { X, Bell, Gavel, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function NotificationPanel({ isOpen, onClose }) {
  const notifs = [
    {
      id: 1,
      title: 'Lelang Berhasil Dimenangkan!',
      desc: 'Selamat! Anda memenangkan lelang Showa Sanshoku Grade A.',
      time: 'Baru saja',
      icon: Gavel,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      unread: true,
    },
    {
      id: 2,
      title: 'Pembayaran Dikonfirmasi',
      desc: 'Pembayaran untuk order #INV-8899 telah kami terima.',
      time: '2 jam yang lalu',
      icon: CheckCircle2,
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      unread: true,
    },
    {
      id: 3,
      title: 'Koi Anda Terjual',
      desc: 'Kohaku 35cm dari Blitar telah dibeli oleh Budi.',
      time: 'Kemarin',
      icon: ShoppingBag,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      unread: false,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-zinc-50 z-[70] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-zinc-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              <Bell className="w-4 h-4 text-red-600 fill-current" />
            </div>
            <h2 className="font-black text-lg text-zinc-900">Notifikasi</h2>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-zinc-100 transition-colors">
            <X className="w-5 h-5 text-zinc-500" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {notifs.map(n => (
            <div key={n.id} className={`p-4 border-b border-zinc-100 flex gap-4 relative hover:bg-zinc-100/50 transition-colors cursor-pointer ${n.unread ? 'bg-white' : 'bg-transparent'}`}>
              {n.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>}
              
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${n.bg}`}>
                <n.icon className={`w-5 h-5 ${n.color}`} />
              </div>
              
              <div className="flex-1">
                <h4 className={`text-sm mb-1 ${n.unread ? 'font-black text-zinc-900' : 'font-bold text-zinc-700'}`}>
                  {n.title}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-snug mb-2 font-medium">{n.desc}</p>
                <span className="text-[10px] font-bold text-zinc-400">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Action */}
        <div className="p-4 bg-white border-t border-zinc-100">
          <button className="w-full py-3 rounded-xl border-2 border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-colors text-sm">
            Tandai Semua Dibaca
          </button>
        </div>
      </div>
    </>
  );
}
