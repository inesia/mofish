import React from 'react';
import { Home, Tag, Plus, Gavel, User } from 'lucide-react';

export default function BottomNav({ currentTab, setCurrentTab }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 bg-white border-t border-gray-200 pb-safe">
      <div className="flex items-center justify-around h-16 px-2 relative">
        <button 
          onClick={() => setCurrentTab('home')}
          className={`flex flex-col items-center justify-center w-16 space-y-1 ${currentTab === 'home' ? 'text-red-600' : 'text-gray-400'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => setCurrentTab('sale')}
          className={`flex flex-col items-center justify-center w-16 space-y-1 ${currentTab === 'sale' ? 'text-red-600' : 'text-gray-400'}`}
        >
          <Tag className="w-6 h-6" />
          <span className="text-[10px] font-medium">Sale</span>
        </button>

        {/* Center Protruding Button */}
        <button onClick={() => setCurrentTab('jual')} className="flex flex-col items-center justify-end w-16 pb-1.5 h-full relative group cursor-pointer">
          <div className={`absolute -top-5 rounded-full p-2.5 shadow-lg border-[3.5px] border-white flex items-center justify-center transition-colors ${currentTab === 'jual' ? 'bg-red-700 shadow-red-700/40' : 'bg-red-600 shadow-red-500/30'}`}>
            <Plus className="w-6 h-6 text-white" strokeWidth={3} />
          </div>
          <span className={`text-[10px] font-medium ${currentTab === 'jual' ? 'text-red-600' : 'text-gray-400'}`}>Jual</span>
        </button>

        <button 
          onClick={() => setCurrentTab('auctionDetail')}
          className={`flex flex-col items-center justify-center w-16 space-y-1 ${currentTab === 'auctionDetail' ? 'text-red-600' : 'text-gray-400'}`}
        >
          <Gavel className="w-6 h-6" />
          <span className="text-[10px] font-medium">Auction</span>
        </button>

        <button 
          onClick={() => setCurrentTab('profil')}
          className={`flex flex-col items-center justify-center w-16 space-y-1 ${currentTab === 'profil' ? 'text-red-600' : 'text-gray-400'}`}
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </div>
    </div>
  );
}
