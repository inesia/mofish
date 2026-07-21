import React, { useState, useEffect } from 'react';
import { dummySaleItems, dummyAuctionItems } from '../mockData';
import { Heart, MapPin, Clock } from 'lucide-react';

const formatTime = (ms) => {
  if (ms <= 0) return "00 : 00 : 00";
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
};

export default function SaleAuction() {
  const [activeTab, setActiveTab] = useState('sale'); // 'sale' | 'auction'
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
      {/* Tab Switcher */}
      <div className="flex p-4">
        <div className="flex bg-gray-200 rounded-lg p-1 w-full relative">
          <button
            className={`flex-1 py-2 text-sm font-semibold rounded-md z-10 transition-colors ${activeTab === 'sale' ? 'text-gray-900' : 'text-gray-500'}`}
            onClick={() => setActiveTab('sale')}
          >
            SALE
          </button>
          <button
            className={`flex-1 py-2 text-sm font-semibold rounded-md z-10 transition-colors ${activeTab === 'auction' ? 'text-gray-900' : 'text-gray-500'}`}
            onClick={() => setActiveTab('auction')}
          >
            AUCTION
          </button>
          {/* Animated Background */}
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm transition-transform duration-300 ease-in-out ${activeTab === 'auction' ? 'translate-x-full left-1' : 'left-1'}`}
          />
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-4">
          {activeTab === 'sale' ? (
            dummySaleItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col relative">
                <div className="relative aspect-[4/5]">
                  <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                  <button className="absolute top-2 right-2 bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
                    <Heart className="w-4 h-4 text-white" />
                  </button>

                  {/* Bottom Badges Over Image */}
                  <div className="absolute bottom-2 left-2 flex space-x-1">
                    <div className={`text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${item.grade === 'A' ? 'bg-green-500' : 'bg-blue-500'}`}>
                      {item.grade}
                    </div>
                    <div className="bg-black/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-sm">
                      {item.size}
                    </div>
                  </div>
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5">{item.type}</h4>
                  <p className="text-gray-500 text-[10px] mb-2">{item.farm}</p>
                  
                  <div className="mt-auto">
                    <p className="text-red-600 font-bold text-sm mb-1">{item.price}</p>
                    <div className="flex items-center text-gray-400 text-[10px]">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            dummyAuctionItems.map(item => {
              const timeLeft = item.endTime - now;
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col relative">
                  <div className="relative aspect-[4/5]">
                    <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                      AUCTION
                    </div>
                    <button className="absolute top-2 right-2 bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
                      <Heart className="w-4 h-4 text-white" />
                    </button>

                    {/* Bottom Badges Over Image */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      <div className={`text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${item.grade === 'A' ? 'bg-green-500' : 'bg-blue-500'}`}>
                        {item.grade}
                      </div>
                      <div className="bg-black/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-sm">
                        {item.size}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 flex flex-col flex-1 border-b border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-0.5">{item.type}</h4>
                    <p className="text-gray-500 text-[10px] mb-2">{item.farm}</p>
                    
                    <div className="mt-auto">
                      <p className="text-orange-500 font-bold text-sm mb-1">{item.currentBid}</p>
                      <div className="flex items-center text-gray-400 text-[10px]">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Auction Footer */}
                  <div className="bg-gray-50 p-2 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-900">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs font-bold font-mono tracking-tighter">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="text-[10px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-200">
                      {item.bidders} Bids
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
