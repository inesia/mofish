import React from 'react';
import { Camera, UploadCloud, ChevronRight, Tag, ShieldCheck, MapPin } from 'lucide-react';

export default function Jual({ setCurrentTab }) {
  return (
    <div className="flex-1 overflow-y-auto bg-zinc-50 pb-24">
      {/* Header */}
      <div className="bg-zinc-950 px-5 pt-8 pb-6 rounded-b-[40px] shadow-sm relative z-10">
        <h1 className="text-3xl font-black text-white tracking-tight mb-2">Jual Koi</h1>
        <p className="text-zinc-400 text-xs font-medium">Lengkapi detail iklan untuk koi terbaik Anda.</p>
      </div>

      <div className="px-5 -mt-4 relative z-20 space-y-5">
        {/* Upload Photo */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col items-center justify-center h-48 border-dashed border-[3px] border-zinc-200/60 cursor-pointer hover:border-red-300 hover:bg-red-50/20 transition-colors">
          <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-3">
            <Camera className="w-7 h-7" />
          </div>
          <p className="text-sm font-black text-zinc-900 mb-1">Unggah Foto/Video</p>
          <p className="text-[10px] text-zinc-400 font-medium text-center">Format JPEG, PNG, atau MP4 (Maks. 50MB)</p>
        </div>

        {/* Form Details */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100 space-y-5">
          <div>
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block">Nama / Jenis Koi</label>
            <input type="text" placeholder="Contoh: Kohaku Sakai 40cm" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors shadow-inner" />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block">Ukuran (cm)</label>
              <input type="number" placeholder="0" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors shadow-inner" />
            </div>
            <div>
              <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block">Grade</label>
              <select className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors shadow-inner appearance-none">
                <option>Grade A</option>
                <option>Grade B</option>
                <option>Grade C</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block">Harga (Rp)</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-sm font-bold text-zinc-500">Rp</span>
              <input type="number" placeholder="0" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-10 pr-4 py-3.5 text-sm font-black text-zinc-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors shadow-inner" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 mb-8">
        <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-black py-4 rounded-[18px] text-[15px] transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)]">
          Pasang Iklan Sekarang
        </button>
      </div>
    </div>
  );
}
