import React from 'react';
import { ChevronLeft, Heart, ShoppingCart, Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { dummySaleItems } from '../mockData';
import { MapPin } from 'lucide-react';

export default function SaleList({ setCurrentTab }) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <button onClick={() => setCurrentTab('home')} className="p-1">
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Sale</h1>
        <div className="flex items-center space-x-4">
          <Heart className="w-6 h-6 text-gray-900" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-900" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Filter/Sort Toolbar */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700">
            <span>Terbaru</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <button className="text-gray-900 bg-gray-100 p-1.5 rounded-md">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-1.5">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 pb-6">
          {dummySaleItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col relative">
              <div className="relative aspect-[4/5]">
                <img src={item.imageUrl} alt={item.type} className="w-full h-full object-cover" />
                
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  SALE
                </div>
                <button className="absolute top-2 right-2 bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-white" />
                </button>

                <div className="absolute bottom-2 left-2 flex space-x-1">
                  <div className={`text-white text-[10px] font-bold px-1.5 py-0.5 rounded ${item.grade === 'A' ? 'bg-green-500' : 'bg-blue-500'}`}>
                    Grade {item.grade}
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
          ))}
        </div>
      </div>
    </div>
  );
}
