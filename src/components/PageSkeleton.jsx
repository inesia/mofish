import React from 'react';

export default function PageSkeleton() {
  return (
    <div className="flex-1 w-full bg-zinc-50 flex flex-col animate-pulse">
      {/* Top Banner Skeleton (Darkish to mimic Home/Profil/Jual headers) */}
      <div className="w-full h-[180px] bg-zinc-200/80 rounded-b-[40px] px-5 pt-8">
        <div className="w-48 h-8 bg-zinc-300/80 rounded-lg mb-4"></div>
        <div className="w-32 h-4 bg-zinc-300/80 rounded-md"></div>
      </div>
      
      <div className="px-5 mt-6 space-y-8">
        {/* Category Circles Skeleton */}
        <div className="flex gap-5 overflow-hidden">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0"></div>
              <div className="w-10 h-2 bg-zinc-200 rounded-sm"></div>
            </div>
          ))}
        </div>

        {/* Large Cards Skeleton */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="w-32 h-5 bg-zinc-200 rounded-md"></div>
            <div className="w-16 h-3 bg-zinc-200 rounded-md"></div>
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2].map(i => (
              <div key={i} className="w-[260px] h-[140px] bg-zinc-200 rounded-[20px] flex-shrink-0"></div>
            ))}
          </div>
        </div>
        
        {/* Portrait Cards Skeleton */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="w-40 h-5 bg-zinc-200 rounded-md"></div>
            <div className="w-16 h-3 bg-zinc-200 rounded-md"></div>
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-[150px] h-[220px] bg-zinc-200 rounded-[24px] flex-shrink-0"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
